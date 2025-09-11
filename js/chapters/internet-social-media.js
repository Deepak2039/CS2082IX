// Internet & Social Media Chapter Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Internet & Social Media chapter loaded');
    
    // Initialize the MCQs for this chapter
    if (typeof initMCQSections === 'function') {
        initMCQSections();
    }
});
