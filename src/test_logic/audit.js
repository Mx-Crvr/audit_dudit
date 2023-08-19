"use strict"

document.getElementById('back-btn').addEventListener('click', () => {
  window.history.back()
});

document.addEventListener('DOMContentLoaded', () => {
  const validationMessage = document.getElementById('validationMessage');
  const proceedBtn = document.getElementById('proceedBtn');
  const questions = document.querySelectorAll('.question');

  proceedBtn.addEventListener('click', () => {
    let allQuestionsAnswered = true;

    questions.forEach((question) => {
      const questionDiv = question.parentElement;
      const inputs = questionDiv.querySelectorAll('input[type="radio"]');
      
      let anyAnswered = false;
      
      inputs.forEach((input) => {
        if (input.checked) {
          anyAnswered = true
        }
      });
      
      if (!anyAnswered) {
        allQuestionsAnswered = false;
        questionDiv.classList.add('unanswered');
      } else {
        questionDiv.classList.remove('unanswered');
      }
    });
      
    if (!allQuestionsAnswered) {
      validationMessage.classList.remove('hidden');
    } else {
      validationMessage.classList.add('hidden');
      caluclateScore()
    }
  });
});

function caluclateScore() {
  let a_score = 0;

  const inputs = document.querySelectorAll('input[type="radio"]')
  inputs.forEach((input) => {
    if (input.checked) {
      a_score += parseInt(input.value)
    }
  })

  localStorage.setItem('a_score', a_score);

  window.location.href = 'results.html'
}