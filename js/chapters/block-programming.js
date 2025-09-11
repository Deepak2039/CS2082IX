// Block Programming Chapter Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Block Programming chapter loaded');
    
    // Initialize the MCQs for this chapter
    if (typeof initMCQSections === 'function') {
        initMCQSections();
    }
});
