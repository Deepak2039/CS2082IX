const fs = require('fs');
const path = require('path');

// Define the lesson pages and their navigation details
const lessonPages = [
    {
        file: 'computer-system.html',
        prev: null,
        next: 'input-devices.html',
        nextTitle: '1.2 Input Devices'
    },
    {
        file: 'input-devices.html',
        prev: 'computer-system.html',
        prevTitle: '1.1 Introduction to Computer Systems',
        next: 'cpu.html',
        nextTitle: '1.3 CPU'
    },
    {
        file: 'cpu.html',
        prev: 'input-devices.html',
        prevTitle: '1.2 Input Devices',
        next: 'motherboard.html',
        nextTitle: '1.4 Motherboard and Data Bus'
    },
    {
        file: 'motherboard.html',
        prev: 'cpu.html',
        prevTitle: '1.3 CPU',
        next: 'memory.html',
        nextTitle: '1.5 Memory'
    },
    {
        file: 'memory.html',
        prev: 'motherboard.html',
        prevTitle: '1.4 Motherboard and Data Bus',
        next: 'output-devices.html',
        nextTitle: '1.6 Output Devices and Ports'
    },
    {
        file: 'output-devices.html',
        prev: 'memory.html',
        prevTitle: '1.5 Memory',
        next: 'software.html',
        nextTitle: '1.7 Computer Software'
    },
    {
        file: 'software.html',
        prev: 'output-devices.html',
        prevTitle: '1.6 Output Devices and Ports',
        next: null,
        nextTitle: null
    }
];

// Function to generate navigation buttons HTML
function generateNavigationButtons(prev, prevTitle, next, nextTitle, isTop = false) {
    let buttons = '\n            <div class="navigation-buttons' + (isTop ? ' top-navigation' : '') + '">\n';
    
    if (prev && prevTitle) {
        buttons += `                <a href="${prev}" class="nav-button prev"><i class="fas fa-arrow-left"></i> Previous: ${prevTitle}</a>\n`;
    } else {
        buttons += '                <div></div>\n';
    }
    
    if (next && nextTitle) {
        buttons += `                <a href="${next}" class="nav-button next">Next: ${nextTitle} <i class="fas fa-arrow-right"></i></a>\n`;
    } else {
        buttons += '                <div></div>\n';
    }
    
    buttons += '            </div>';
    return buttons;
}

// Function to update a single lesson page
function updateLessonPage(lesson) {
    const filePath = path.join(__dirname, lesson.file);
    
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Generate top navigation buttons
        const topNavButtons = generateNavigationButtons(
            lesson.prev,
            lesson.prevTitle,
            lesson.next,
            lesson.nextTitle,
            true
        );
        
        // Generate bottom navigation buttons
        const bottomNavButtons = generateNavigationButtons(
            lesson.prev,
            lesson.prevTitle,
            lesson.next,
            lesson.nextTitle
        );
        
        // Add top navigation after the opening article tag
        content = content.replace(
            /(<article[^>]*>\s*<h1[^>]*>)/,
            `$1${topNavButtons}\n`
        );
        
        // Replace existing bottom navigation or add new one before the closing article tag
        if (content.includes('class="navigation-buttons"')) {
            content = content.replace(
                /<div class="navigation-buttons">[\s\S]*?<\/div>/,
                bottomNavButtons
            );
        } else {
            content = content.replace(
                /<\/section>\s*<\/article>/,
                `            </section>\n            ${bottomNavButtons}\n        </article>`
            );
        }
        
        // Write the updated content back to the file
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated ${lesson.file}`);
        return true;
    } catch (error) {
        console.error(`❌ Error updating ${lesson.file}:`, error.message);
        return false;
    }
}

// Update all lesson pages
console.log('🚀 Starting to update lesson pages...\n');

let successCount = 0;
lessonPages.forEach(lesson => {
    if (fs.existsSync(path.join(__dirname, lesson.file))) {
        const updated = updateLessonPage(lesson);
        if (updated) successCount++;
    } else {
        console.log(`⚠️  ${lesson.file} not found, skipping...`);
    }
});

console.log(`\n✨ Successfully updated ${successCount} out of ${lessonPages.length} lesson pages`);
