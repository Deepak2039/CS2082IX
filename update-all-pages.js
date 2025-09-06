const fs = require('fs');
const path = require('path');

// List of all HTML files to update
const htmlFiles = [
    'index.html',
    'computer-system.html',
    'input-devices.html',
    'cpu.html',
    'motherboard.html',
    'memory.html',
    'output-devices.html',
    'software.html'
];

// Function to update a single HTML file
function updateHtmlFile(fileName) {
    const filePath = path.join(__dirname, fileName);
    
    try {
        // Read the file
        let content = fs.readFileSync(filePath, 'utf8');
        
        // 1. Ensure navigation.js is included before the closing body tag
        if (!content.includes('navigation.js')) {
            content = content.replace(
                '</body>',
                '    <script src="js/navigation.js"></script>\n</body>'
            );
        }
        
        // 2. For lesson pages (not index.html), ensure the main content is wrapped in article.lesson-content
        if (fileName !== 'index.html' && !content.includes('article class="lesson-content"')) {
            // Find the opening main tag
            const mainStart = content.indexOf('<main');
            if (mainStart !== -1) {
                const mainEnd = content.indexOf('>', mainStart) + 1;
                const mainTag = content.substring(mainStart, mainEnd);
                
                // Check if we need to add the lesson-container class
                let newMainTag = mainTag;
                if (!mainTag.includes('lesson-container')) {
                    newMainTag = mainTag.replace('class="', 'class="lesson-container ');
                    if (!newMainTag.includes('class="')) {
                        newMainTag = mainTag.replace('>', ' class="lesson-container">');
                    }
                    content = content.replace(mainTag, newMainTag);
                }
                
                // Add the article wrapper
                const contentStart = content.indexOf('>', mainStart) + 1;
                const headerEnd = content.indexOf('</header>') + 9; // 9 is length of </header>
                const mainContentStart = Math.max(contentStart, headerEnd);
                
                content = content.substring(0, mainContentStart) + 
                          '\n        <article class="lesson-content">\n            ' + 
                          content.substring(mainContentStart).trim() + 
                          '\n        </article>';
            }
        }
        
        // 3. Ensure the header is empty (will be populated by navigation.js)
        content = content.replace(/<header[\s\S]*?<\/header>/, '    <header></header>');
        
        // 4. Remove any existing sidebar (it will be added by navigation.js)
        content = content.replace(/<aside class="lesson-sidebar"[\s\S]*?<\/aside>\s*/, '');
        
        // Write the updated content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated ${fileName}`);
        
    } catch (error) {
        console.error(`❌ Error updating ${fileName}:`, error.message);
    }
}

// Update all HTML files
console.log('🚀 Starting to update all pages...\n');
htmlFiles.forEach(fileName => {
    if (fs.existsSync(path.join(__dirname, fileName))) {
        updateHtmlFile(fileName);
    } else {
        console.log(`⚠️  ${fileName} not found, skipping...`);
    }
});

console.log('\n✨ All pages have been updated!');
console.log('The sidebar navigation will now appear on all pages.');
