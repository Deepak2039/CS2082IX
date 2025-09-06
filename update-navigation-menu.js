const fs = require('fs');
const path = require('path');

// Navigation menu template
const navigationMenu = `
<aside class="lesson-sidebar">
    <h3>Course Content</h3>
    <ul class="lesson-menu">
        <li><a href="computer-system.html">1.1 Introduction to Computer Systems</a></li>
        <li><a href="input-devices.html">1.2 Input Devices</a></li>
        <li><a href="cpu.html">1.3 CPU</a></li>
        <li><a href="motherboard.html">1.4 Motherboard and Data Bus</a></li>
        <li><a href="memory.html">1.5 Memory</a></li>
        <li><a href="output-devices.html">1.6 Output Devices and Ports</a></li>
        <li><a href="software.html">1.7 Computer Software</a></li>
    </ul>
</aside>`;

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

// Function to update navigation in a file
function updateNavigationInFile(filePath, currentPage) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Create regex to find existing sidebar
        const sidebarRegex = /<aside class="lesson-sidebar"[\s\S]*?<\/aside>/;
        
        // Create the new navigation with the current page marked as active
        let updatedNavigation = navigationMenu;
        updatedNavigation = updatedNavigation.replace(
            `href="${currentPage}"`,
            `class="active" href="${currentPage}"`
        );
        
        // Replace or add the navigation
        if (sidebarRegex.test(content)) {
            content = content.replace(sidebarRegex, updatedNavigation);
        } else {
            // If no sidebar exists, add it after the opening main tag
            const mainTag = content.match(/<main[^>]*>/);
            if (mainTag) {
                content = content.replace(
                    mainTag[0],
                    `${mainTag[0]}\n${updatedNavigation}`
                );
            }
        }
        
        // Write the updated content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated navigation in ${path.basename(filePath)}`);
        return true;
    } catch (error) {
        console.error(`❌ Error updating ${path.basename(filePath)}:`, error.message);
        return false;
    }
}

// Update navigation in all lesson pages
console.log('🚀 Starting to update navigation menu...\n');

let successCount = 0;

lessonPages.forEach(page => {
    const filePath = path.join(__dirname, page);
    if (fs.existsSync(filePath)) {
        const updated = updateNavigationInFile(filePath, page);
        if (updated) successCount++;
    } else {
        console.log(`⚠️  ${page} not found, skipping...`);
    }
});

console.log(`\n✨ Successfully updated ${successCount} out of ${lessonPages.length} pages`);
