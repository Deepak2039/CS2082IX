const fs = require('fs');
const path = require('path');

// List of all HTML files to update
const htmlFiles = [
    'computer-system.html',
    'cpu.html',
    'input-devices.html',
    'memory.html',
    'motherboard.html',
    'output-devices.html',
    'software.html'
];

// The new navigation HTML with only Home button
const newNav = `
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
            </ul>`;

// Update each HTML file
htmlFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    
    try {
        // Read the file
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Replace the navigation section
        const updatedContent = content.replace(
            /<ul class="nav-links">[\s\S]*?<\/ul>/,
            newNav
        );
        
        // Write the updated content back to the file
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated navigation in ${file}`);
    } catch (err) {
        console.error(`Error updating ${file}:`, err);
    }
});

console.log('Navigation update complete!');
