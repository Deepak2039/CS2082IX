// MCQ functionality for chapter pages
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all MCQ sections on the page
    initMCQSections();
    
    // Add event listener for the toggle button if it exists
    const toggleBtn = document.querySelector('.mcq-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const content = document.querySelector('.mcq-content');
            content.classList.toggle('collapsed');
            this.classList.toggle('collapsed');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-chevron-up');
            icon.classList.toggle('fa-chevron-down');
        });
    }
});

// Initialize all MCQ sections on the page
function initMCQSections() {
    const mcqSections = document.querySelectorAll('.mcq-section');
    
    mcqSections.forEach((section, index) => {
        const mcqId = `mcq-${index}`;
        section.setAttribute('id', mcqId);
        
        // Add event listeners to options
        const options = section.querySelectorAll('.mcq-option');
        options.forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from all options in this question
                const questionItem = this.closest('.mcq-item');
                questionItem.querySelectorAll('.mcq-option').forEach(opt => {
                    opt.classList.remove('selected');
                    const radio = opt.querySelector('input[type="radio"]');
                    if (radio) radio.checked = false;
                });
                
                // Add selected class to clicked option
                this.classList.add('selected');
                const radio = this.querySelector('input[type="radio"]');
                if (radio) radio.checked = true;
                
                // Hide any previous feedback
                const feedback = questionItem.querySelector('.mcq-feedback');
                if (feedback) {
                    feedback.style.display = 'none';
                }
            });
        });
        
        // Add submit button functionality
        const submitBtn = section.querySelector('.mcq-submit');
        if (submitBtn) {
            submitBtn.addEventListener('click', function() {
                checkMCQAnswers(section);
            });
        }
    });
}

// Check answers for a specific MCQ section
function checkMCQAnswers(section) {
    let correctCount = 0;
    const questions = section.querySelectorAll('.mcq-item');
    let allAnswered = true;
    
    questions.forEach((question, index) => {
        const selectedOption = question.querySelector('.mcq-option.selected');
        const feedback = question.querySelector('.mcq-feedback');
        
        if (!selectedOption) {
            allAnswered = false;
            if (feedback) {
                feedback.textContent = 'Please select an answer.';
                feedback.className = 'mcq-feedback';
                feedback.style.display = 'block';
            }
            return;
        }
        
        const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
        
        if (isCorrect) {
            correctCount++;
            if (feedback) {
                feedback.textContent = 'Correct! ' + (feedback.getAttribute('data-correct-feedback') || '');
                feedback.className = 'mcq-feedback correct';
                feedback.style.display = 'block';
            }
        } else {
            if (feedback) {
                feedback.textContent = feedback.getAttribute('data-incorrect-feedback') || 'Incorrect. Please try again.';
                feedback.className = 'mcq-feedback incorrect';
                feedback.style.display = 'block';
            }
        }
    });
    
    if (!allAnswered) {
        return; // Don't show score until all questions are answered
    }
    
    // Show score
    const scoreElement = section.querySelector('.mcq-score');
    if (scoreElement) {
        const percentage = Math.round((correctCount / questions.length) * 100);
        scoreElement.textContent = `You scored ${correctCount} out of ${questions.length} (${percentage}%)`;
        scoreElement.style.display = 'block';
        
        // Scroll to show the score
        setTimeout(() => {
            scoreElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
}

// Function to reset an MCQ section
function resetMCQ(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    // Reset all options
    section.querySelectorAll('.mcq-option').forEach(option => {
        option.classList.remove('selected');
        const radio = option.querySelector('input[type="radio"]');
        if (radio) radio.checked = false;
    });
    
    // Hide all feedback
    section.querySelectorAll('.mcq-feedback').forEach(feedback => {
        feedback.style.display = 'none';
    });
    
    // Hide score
    const scoreElement = section.querySelector('.mcq-score');
    if (scoreElement) {
        scoreElement.style.display = 'none';
    }
}

// Make functions available globally
window.MCQUtils = {
    initMCQSections,
    checkMCQAnswers,
    resetMCQ
};
