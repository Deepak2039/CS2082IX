const fs = require('fs');
const path = require('path');

// List of all lesson pages
const lessonPages = [
    'computer-system.html',
    'input-devices.html',
    'cpu.html',
    'motherboard.html',
    'memory.html',
    'output-devices.html',
    'software.html'
];

// Navigation template
const navigationTemplate = (currentPage) => `
    <header></header>
    <main class="lesson-container">
        <div class="lesson-content">
`;

// Footer template
const footerTemplate = `
        </div>
    </main>
    <footer>
        <div class="footer-content">
            <p>&copy; 2024 CS Explorer. All rights reserved.</p>
        </div>
    </footer>
    <script src="js/navigation.js"></script>
`;

// Update each lesson page
lessonPages.forEach(page => {
    const filePath = path.join(__dirname, page);
    
    try {
        // Read the file
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove old header and navigation
        content = content.replace(/<header[\s\S]*?<\/header>/, '<header></header>');
        
        // Remove old sidebar if it exists
        content = content.replace(/<aside class="lesson-sidebar"[\s\S]*?<\/aside>\s*/, '');
        
        // Remove old navigation buttons
        content = content.replace(/<div class="nav-buttons"[\s\S]*?<\/div>/g, '');
        content = content.replace(/<div class="navigation-buttons"[\s\S]*?<\/div>/g, '');
        
        // Remove old footer
        content = content.replace(/<footer[\s\S]*?<\/footer>/, '');
        
        // Add new navigation and footer
        content = content.replace('<main class="lesson-container">', navigationTemplate(page));
        content = content.replace('</main>', footerTemplate);
        
        // Ensure navigation.js is included
        if (!content.includes('navigation.js')) {
            content = content.replace('</body>', '    <script src="js/navigation.js"></script>\n</body>');
        }
        
        // Write the updated content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated navigation for ${page}`);
    } catch (error) {
        console.error(`Error updating ${page}:`, error.message);
    }
});

console.log('Navigation update complete!');
