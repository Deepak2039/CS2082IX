// This script will add navigation buttons to all content pages
const fs = require('fs');
const path = require('path');

// Define the order of pages for navigation
const pages = [
    'computer-system.html',
    'input-devices.html',
    'cpu.html',
    'motherboard.html',
    'memory.html',
    'output-devices.html',
    'software.html'
];

// Function to add navigation buttons to a file
function addNavigationButtons(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Find the lesson-content div
        const contentDiv = '<div class="lesson-content">';
        const contentIndex = content.indexOf(contentDiv);
        
        if (contentIndex !== -1) {
            // Get the current page index
            const fileName = path.basename(filePath);
            const currentIndex = pages.indexOf(fileName);
            
            // Create navigation buttons HTML
            let navButtons = '\n    <div class="nav-buttons">\n';
            
            // Add previous button if not first page
            if (currentIndex > 0) {
                navButtons += `        <a href="${pages[currentIndex - 1]}" class="nav-btn nav-prev"><i class="fas fa-arrow-left"></i> Previous: ${getPageTitle(pages[currentIndex - 1])}</a>\n`;
            } else {
                navButtons += '        <div></div>\n'; // Empty div for flex spacing
            }
            
            // Add next button if not last page
            if (currentIndex < pages.length - 1) {
                navButtons += `        <a href="${pages[currentIndex + 1]}" class="nav-btn nav-next">Next: ${getPageTitle(pages[currentIndex + 1])} <i class="fas fa-arrow-right"></i></a>\n`;
            } else {
                navButtons += '        <div></div>\n'; // Empty div for flex spacing
            }
            
            navButtons += '    </div>\n';
            
            // Insert the navigation buttons after the content div
            const newContent = content.slice(0, contentIndex + contentDiv.length) + navButtons + content.slice(contentIndex + contentDiv.length);
            
            // Write the updated content back to the file
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated navigation for ${fileName}`);
        } else {
            console.log(`Could not find lesson-content div in ${fileName}`);
        }
    } catch (err) {
        console.error(`Error processing ${filePath}:`, err);
    }
}

// Helper function to get a readable title from filename
function getPageTitle(filename) {
    return filename
        .replace(/\.html$/, '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Process all content pages
pages.forEach(page => {
    const filePath = path.join(__dirname, page);
    if (fs.existsSync(filePath)) {
        addNavigationButtons(filePath);
    } else {
        console.log(`File not found: ${filePath}`);
    }
});

console.log('Navigation update complete!');
