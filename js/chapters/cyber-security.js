// Cyber Security & Digital Citizenship Chapter Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Cyber Security & Digital Citizenship chapter loaded');
    
    // Initialize the MCQs for this chapter
    if (typeof initMCQSections === 'function') {
        initMCQSections();
    }
});
