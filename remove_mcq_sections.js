const fs = require('fs');
const path = require('path');

// Function to process each HTML file
function processFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Pattern to match the MCQ section
        const mcqPattern = /\s*<!--\s*MCQ\s*Section\s*-->[\s\S]*?<\/section>/i;
        
        // Replace the MCQ section with an empty string
        const newContent = content.replace(mcqPattern, '');
        
        // Only write if changes were made
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Removed MCQ section from: ${filePath}`);
            return true;
        }
        return false;
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
        return false;
    }
}

// Main function to process all HTML files
function processAllFiles() {
    const htmlFiles = [
        'computer-system.html',
        'web-technology.html',
        'python-programming.html',
        'cyber-security.html',
        'internet-social-media.html',
        'number-system.html',
        'block-programming.html',
        'input-devices.html',
        'output-devices.html',
        'memory.html',
        'motherboard.html',
        'software.html',
        'cpu.html'
    ];

    let filesProcessed = 0;
    let sectionsRemoved = 0;

    htmlFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            filesProcessed++;
            if (processFile(filePath)) {
                sectionsRemoved++;
            }
        }
    });

    console.log(`\nProcessed ${filesProcessed} files, removed ${sectionsRemoved} MCQ sections.`);
}

// Run the script
processAllFiles();
