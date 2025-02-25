// Quiz Logic
const quizOptions = document.querySelectorAll('.quiz-option');
const quizResult = document.getElementById('quiz-result');

quizOptions.forEach(option => {
  option.addEventListener('click', () => {
    if (option.textContent === 'I') {
      quizResult.textContent = 'Correct! "أنا" means "I".';
      quizResult.style.color = 'green';
    } else {
      quizResult.textContent = 'Incorrect. Try again!';
      quizResult.style.color = 'red';
    }
  });
});