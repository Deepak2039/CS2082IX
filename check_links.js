const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// List of all HTML files to check
const htmlFiles = [
    'index.html',
    'computer-system.html',
    'number-system.html',
    'block-programming.html',
    'web-technology.html',
    'internet-social-media.html',
    'cyber-security.html',
    'python-programming.html',
    'input-devices.html',
    'output-devices.html',
    'memory.html',
    'motherboard.html',
    'software.html',
    'cpu.html',
    'certification.html'
];

// Track all links and their status
const linkStatus = {
    valid: [],
    broken: [],
    external: []
};

// Function to check if a URL is valid
async function checkLink(url, sourceFile) {
    // Skip anchor links and javascript: links
    if (url.startsWith('#') || url.startsWith('javascript:')) {
        return { status: 'valid', url, sourceFile };
    }

    // Handle external URLs
    if (url.startsWith('http')) {
        linkStatus.external.push({ url, sourceFile });
        return { status: 'external', url, sourceFile };
    }

    // Handle local file paths
    const filePath = path.join(path.dirname(sourceFile), url);
    try {
        await fs.promises.access(filePath, fs.constants.F_OK);
        return { status: 'valid', url, sourceFile };
    } catch (error) {
        return { status: 'broken', url, sourceFile };
    }
}

// Process a single HTML file
async function processFile(filePath) {
    try {
        const content = await fs.promises.readFile(filePath, 'utf8');
        const dom = new JSDOM(content);
        const document = dom.window.document;
        
        // Get all links
        const links = Array.from(document.querySelectorAll('a[href]'));
        
        // Check each link
        for (const link of links) {
            const href = link.getAttribute('href');
            if (href) {
                const result = await checkLink(href, filePath);
                if (result.status === 'valid') {
                    linkStatus.valid.push(result);
                } else if (result.status === 'broken') {
                    linkStatus.broken.push(result);
                }
            }
        }
        
        return true;
    } catch (error) {
        console.error(`Error processing file ${filePath}:`, error);
        return false;
    }
}

// Main function to check all files
async function checkAllLinks() {
    console.log('Starting link validation...\n');
    
    for (const file of htmlFiles) {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            console.log(`Checking links in: ${file}`);
            await processFile(filePath);
        } else {
            console.log(`File not found: ${file}`);
        }
    }
    
    // Print results
    console.log('\n=== Link Validation Results ===');
    console.log(`\n✅ Valid links (${linkStatus.valid.length}):`);
    linkStatus.valid.slice(0, 10).forEach(link => {
        console.log(`  - ${link.url} (from ${path.basename(link.sourceFile)})`);
    });
    if (linkStatus.valid.length > 10) {
        console.log(`  ... and ${linkStatus.valid.length - 10} more`);
    }
    
    console.log(`\n❌ Broken links (${linkStatus.broken.length}):`);
    linkStatus.broken.forEach(link => {
        console.log(`  - ${link.url} (from ${path.basename(link.sourceFile)})`);
    });
    
    console.log(`\n🌐 External links (${linkStatus.external.length}):`);
    linkStatus.external.slice(0, 10).forEach(link => {
        console.log(`  - ${link.url} (from ${path.basename(link.sourceFile)})`);
    });
    if (linkStatus.external.length > 10) {
        console.log(`  ... and ${linkStatus.external.length - 10} more`);
    }
    
    console.log('\n=== Summary ===');
    console.log(`Total valid links: ${linkStatus.valid.length}`);
    console.log(`Total broken links: ${linkStatus.broken.length}`);
    console.log(`Total external links: ${linkStatus.external.length}`);
    
    if (linkStatus.broken.length > 0) {
        console.log('\n❌ Some broken links were found. Please fix them.');
        process.exit(1);
    } else {
        console.log('\n✅ All links are valid!');
        process.exit(0);
    }
}

// Run the link checker
checkAllLinks().catch(error => {
    console.error('Error during link checking:', error);
    process.exit(1);
});
