"use strict"

const inputs = document.querySelectorAll('input[type="radio"]:checked');
const questions = document.querySelectorAll('.question');
console.log(inputs)
fetch('/get_answers', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ inputs })
})

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
  let d_score = 0;

  const inputs = document.querySelectorAll('input[type="radio"]')
  inputs.forEach((input) => {
    if (input.checked) {
      d_score += parseInt(input.value)
    }
  })



  console.log(d_score)

  localStorage.setItem('d_score', d_score);

  window.location.href = `a_test.html?d=${d_score}`;
}


