const fs = require('fs');
const path = require('path');

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
    'certification.html',
    'quiz.html'
];

// Track all links and their status
const linkStatus = {
    valid: [],
    broken: []
};

// Function to check if a file exists
function fileExists(filePath) {
    try {
        return fs.existsSync(filePath);
    } catch (err) {
        return false;
    }
}

// Process a single HTML file
function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const linkRegex = /<a\s+(?:[^>]*?\s+)?href=["']([^"']*)["']/g;
        let match;
        
        while ((match = linkRegex.exec(content)) !== null) {
            const href = match[1];
            
            // Skip anchor links, javascript: and mailto: links
            if (href.startsWith('#') || 
                href.startsWith('javascript:') || 
                href.startsWith('mailto:') ||
                href.startsWith('http')) {
                continue;
            }
            
            // Resolve relative paths
            const resolvedPath = path.join(path.dirname(filePath), href);
            const normalizedPath = path.normalize(resolvedPath);
            
            if (fileExists(normalizedPath)) {
                linkStatus.valid.push({
                    from: path.basename(filePath),
                    to: href,
                    path: normalizedPath
                });
            } else {
                linkStatus.broken.push({
                    from: path.basename(filePath),
                    to: href,
                    path: normalizedPath
                });
            }
        }
        
        return true;
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
        return false;
    }
}

// Main function
function main() {
    console.log('Starting link verification...\n');
    
    // Process each HTML file
    htmlFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            console.log(`Checking links in: ${file}`);
            processFile(filePath);
        } else {
            console.log(`⚠️  File not found: ${file}`);
        }
    });
    
    // Print results
    console.log('\n=== Link Verification Results ===');
    
    if (linkStatus.broken.length > 0) {
        console.log('\n❌ Broken Links:');
        linkStatus.broken.forEach(link => {
            console.log(`  - From: ${link.from}`);
            console.log(`    To: ${link.to}`);
            console.log(`    Path: ${link.path}`);
            console.log('    ---');
        });
    } else {
        console.log('\n✅ No broken links found!');
    }
    
    console.log(`\n=== Summary ===`);
    console.log(`Total valid links: ${linkStatus.valid.length}`);
    console.log(`Total broken links: ${linkStatus.broken.length}`);
    
    if (linkStatus.broken.length > 0) {
        console.log('\n❌ Some broken links were found. Please fix them.');
        process.exit(1);
    } else {
        console.log('\n✅ All links are valid!');
        process.exit(0);
    }
}

// Run the script
main();
