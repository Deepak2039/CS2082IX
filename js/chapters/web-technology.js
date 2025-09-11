// Web Technology Chapter Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Web Technology chapter loaded');
    
    // Initialize the MCQs for this chapter
    if (typeof initMCQSections === 'function') {
        initMCQSections();
    }
});
