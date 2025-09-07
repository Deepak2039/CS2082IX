// DOM Elements
let startBtn, nextBtn, questionContainer, questionEl, optionsEl, resultEl, scoreEl, totalQuestionsEl, progressEl;
let startScreen, quizScreen, resultScreen, finalScoreEl, tryAgainScoreEl, tryAgainBtn, backToHomeBtn;
let downloadCertBtn, certificateSection, progressBar;
    
    function initializeDOM() {
        try {
            // Get all required DOM elements
            startBtn = document.getElementById('start-btn');
            nextBtn = document.getElementById('next-btn');
            questionContainer = document.querySelector('.question-container');
            questionEl = document.getElementById('question-text');
            optionsEl = document.getElementById('options-container');
            resultEl = document.getElementById('result-screen');
            scoreEl = document.getElementById('score');
            totalQuestionsEl = document.getElementById('total-questions');
            progressEl = document.querySelector('.progress-bar');
            startScreen = document.getElementById('start-screen');
            quizScreen = document.getElementById('quiz-screen');
            resultScreen = document.getElementById('result-screen');
            finalScoreEl = document.getElementById('final-score');
            tryAgainSection = document.getElementById('try-again-section');
            tryAgainScoreEl = document.getElementById('try-again-score');
            tryAgainBtn = document.getElementById('try-again-btn');
            backToHomeBtn = document.getElementById('back-to-home');
            downloadCertBtn = document.getElementById('generate-certificate-btn');
            certificateSection = document.getElementById('certificate-section');
            progressBar = document.getElementById('progress-bar');
            
            // Validate all required elements exist
            const requiredElements = [
                startBtn, nextBtn, questionContainer, questionEl, optionsEl,
                resultEl, scoreEl, totalQuestionsEl, progressEl, startScreen,
                quizScreen, resultScreen, finalScoreEl, tryAgainSection,
                tryAgainBtn, backToHomeBtn, downloadCertBtn, certificateSection, progressBar
            ];
            
            const missingElements = [];
            requiredElements.forEach((el, index) => {
                if (!el) {
                    const elementNames = [
                        'start-btn', 'next-btn', 'question-container', 'question-text',
                        'options-container', 'result', 'score', 'total-questions', 'progress',
                        'start-screen', 'quiz-screen', 'result-screen', 'final-score',
                        'try-again-section', 'try-again-btn', 'back-to-home', 'download-certificate', 'certificate-section', 'progress-bar'
                    ];
                    missingElements.push(elementNames[index]);
                }
            });
            
            if (missingElements.length > 0) {
                throw new Error(`Missing required elements: ${missingElements.join(', ')}`);
            }
            
            // Set initial UI state
            startBtn.disabled = true;
            startBtn.textContent = 'Loading Questions...';
            
            return true;
        } catch (error) {
            console.error('Failed to initialize quiz:', error);
            document.body.innerHTML = `
                <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
                    <h2>Error Initializing Quiz</h2>
                    <p>${error.message}</p>
                    <p>Please check the console for more details.</p>
                    <button onclick="window.location.reload()">Reload Page</button>
                </div>
            `;
            return false;
        }
    }

    // Quiz state
    let currentQuestionIndex = 0;
    let score = 0;
    let questions = [];
    let userAnswers = [];
    let quizCompleted = false;

    // Fetch questions from JSON file and select 100 random questions
    async function loadQuestions() {
        try {
            console.log('Loading questions...');
            const response = await fetch('js/questions.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Questions loaded successfully:', data.questions.length);
            
            if (!data.questions || !Array.isArray(data.questions)) {
                throw new Error('Invalid questions format');
            }
            
            // Shuffle the questions array
            const shuffledQuestions = [...data.questions].sort(() => 0.5 - Math.random());
            
            // Select first 100 questions (or all if there are less than 100)
            questions = shuffledQuestions.slice(0, 100);
            console.log('Selected questions:', questions.length);
            
            totalQuestionsEl.textContent = questions.length;
            
            // Enable start button once questions are loaded
            startBtn.disabled = false;
            startBtn.textContent = 'Start Quiz';
            
        } catch (error) {
            console.error('Error loading questions:', error);
            const errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.textContent = 'Error loading quiz questions. Please try again later.';
            document.querySelector('#start-screen').appendChild(errorMsg);
            
            // Disable start button on error
            startBtn.disabled = true;
            startBtn.textContent = 'Loading Failed';
        }
    }

    // Start the quiz
    function startQuiz() {
        startScreen.style.display = 'none';
        quizScreen.style.display = 'block';
        showQuestion();
    }

    // Display current question
    function showQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showResults();
            return;
        }

        const question = questions[currentQuestionIndex];
        questionEl.textContent = `${currentQuestionIndex + 1}. ${question.question}`;
        
        // Clear previous options
        optionsEl.innerHTML = '';
        
        // Add new options
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.innerHTML = `<span class="option-label">${option.label}.</span> ${option.text}`;
            button.onclick = () => selectAnswer(index);
            optionsEl.appendChild(button);
        });

        // Reset UI state
        nextBtn.style.display = 'none';
        document.getElementById('explanation').style.display = 'none';
        
        // Update progress bar
        const progress = ((currentQuestionIndex) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Handle answer selection
    function selectAnswer(selectedIndex) {
        if (quizCompleted) return;
        
        const question = questions[currentQuestionIndex];
        const selectedOption = question.options[selectedIndex];
        const isCorrect = selectedOption.is_correct;
        
        // Update score if answer is correct
        if (isCorrect) {
            score++;
            scoreEl.textContent = score;
        }
        
        // Disable all options
        const optionButtons = optionsEl.querySelectorAll('.option-btn');
        optionButtons.forEach((button, index) => {
            button.disabled = true;
            
            // Find the correct answer
            const option = question.options[index];
            
            // Highlight correct answer
            if (option.is_correct) {
                button.classList.add('correct');
            }
            
            // Highlight incorrect selection
            if (index === selectedIndex && !isCorrect) {
                button.classList.add('incorrect');
            }
        });
        
        // Store user answer
        userAnswers[currentQuestionIndex] = {
            question: question.question,
            userAnswer: selectedIndex,
            correctAnswer: question.options.findIndex(opt => opt.is_correct),
            isCorrect: isCorrect,
            explanation: question.explanation || ''
        };
        
        // Show explanation and next button
        const explanationText = question.explanation || '';
        document.getElementById('explanation-text').textContent = explanationText;
        document.getElementById('explanation').style.display = explanationText ? 'block' : 'none';
        nextBtn.style.display = 'block';
    }

    // Move to next question
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    // Show quiz results
    function showResults() {
        quizScreen.style.display = 'none';
        resultScreen.style.display = 'block';
        
        const percentageScore = Math.round((score / questions.length) * 100);
        finalScoreEl.textContent = percentageScore;
        
        if (percentageScore >= 90) {
            // Show name input section first
            document.getElementById('name-input-section').style.display = 'block';
            certificateSection.style.display = 'none';
            tryAgainSection.style.display = 'none';
            
            // Focus on the name input field
            document.getElementById('student-name-input').focus();
        } else {
            document.getElementById('name-input-section').style.display = 'none';
            certificateSection.style.display = 'none';
            tryAgainSection.style.display = 'block';
            document.getElementById('try-again-score').textContent = percentageScore;
        }
        
        quizCompleted = true;
    }
    
    // Generate certificate with student name
    function generateCertificate() {
        const nameInput = document.getElementById('student-name-input');
        const studentName = nameInput.value.trim();
        
        if (!studentName) {
            alert('Please enter your name to generate the certificate.');
            nameInput.focus();
            return;
        }
        
        // Update certificate with student name and score
        const percentageScore = Math.round((score / questions.length) * 100);
        document.getElementById('student-name').textContent = studentName;
        document.getElementById('certificate-score').textContent = percentageScore;
        document.getElementById('certificate-date').textContent = new Date().toLocaleDateString();
        
        // Show the certificate section and hide the name input
        document.getElementById('name-input-section').style.display = 'none';
        certificateSection.style.display = 'block';
        
        // Scroll to the certificate
        certificateSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Reset quiz
    function resetQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizCompleted = false;
        scoreEl.textContent = '0';
        
        startScreen.style.display = 'block';
        resultScreen.style.display = 'none';
        quizScreen.style.display = 'none';
    }

    // Generate and download certificate
    async function downloadCertificate() {
        const certificate = document.querySelector('.certificate');
        if (!certificate) {
            console.error('Certificate element not found');
            alert('Error: Could not find certificate. Please try again.');
            return;
        }
        
        // Show loading state
        const downloadBtn = document.getElementById('download-certificate');
        const originalText = downloadBtn.innerHTML;
        downloadBtn.disabled = true;
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...';
        
        try {
            // Generate the canvas with a small delay to ensure all assets are loaded
            setTimeout(async () => {
                try {
                    const canvas = await html2canvas(certificate, {
                        scale: 2, // Higher quality
                        useCORS: true,
                        logging: true, // Enable logging for debugging
                        backgroundColor: '#ffffff', // White background
                        allowTaint: true,
                        foreignObjectRendering: true
                    });
                    
                    // Convert canvas to image and download
                    const link = document.createElement('a');
                    const studentName = document.getElementById('student-name').textContent.trim() || 'Student';
                    const fileName = `CS2082-Certificate-${studentName.replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.png`;
                    
                    link.download = fileName;
                    link.href = canvas.toDataURL('image/png');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                } catch (error) {
                    console.error('Error in html2canvas:', error);
                    alert('Error generating certificate. Please try again.');
                } finally {
                    // Reset button state
                    downloadBtn.disabled = false;
                    downloadBtn.innerHTML = originalText;
                }
            }, 500); // Small delay to ensure everything is rendered
            
        } catch (error) {
            console.error('Error in download process:', error);
            alert('Error generating certificate. Please try again.');
            downloadBtn.disabled = false;
            downloadBtn.innerHTML = originalText;
        }
    }

// Initialize the quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (!initializeDOM()) {
        return; // Stop if initialization failed
    }
    
    // Add event listener for download certificate button
    const downloadCertBtn = document.getElementById('download-certificate');
    if (downloadCertBtn) {
        downloadCertBtn.addEventListener('click', downloadCertificate);
    } else {
        console.warn('Download certificate button not found');
    }
    
    // Load questions
    loadQuestions().catch(error => {
        console.error('Failed to load questions:', error);
        startBtn.disabled = true;
        startBtn.textContent = 'Failed to Load Questions';
    });
    
    // Event Listeners
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    
    tryAgainBtn.addEventListener('click', resetQuiz);
    backToHomeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    
    if (downloadCertBtn) {
        downloadCertBtn.addEventListener('click', downloadCertificate);
    }
    
    // Add event listener for the generate certificate button
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'generate-certificate-btn') {
            generateCertificate();
        }
    });
    
    // Allow pressing Enter in the name input to generate certificate
    const nameInput = document.getElementById('student-name-input');
    if (nameInput) {
        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                generateCertificate();
            }
        });
    }
});
