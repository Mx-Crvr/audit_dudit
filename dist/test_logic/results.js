"use strict"

// Get scores from client-side files
const d_score = localStorage.getItem('d_score')
const a_score = localStorage.getItem('a_score')
// Store the scores in result file DOM
const d_scoreElem = document.getElementById('d_score');
const a_scoreElem = document.getElementById('a_score');
const d_result = document.getElementById('d_result');
const a_result = document.getElementById('a_result');

const d_result_text = document.getElementById('d_result_text');
const a_result_text = document.getElementById('a_result_text');

const secretDudit = document.getElementById('dudit');
const secretAudit = document.getElementById('audit');
secretDudit.value = d_score;
secretAudit.value = a_score;

d_scoreElem.textContent = `${d_score}`; 
a_scoreElem.textContent = `${a_score}`; 

const male = document.getElementById('male');
const female = document.getElementById('female');

// if (a_score >=4 && a_score <= 9) {
//   a_result.innerText = 'Based on your AUDIT score, there seems to be at risk of alcohol dependence';
//   a_result.style.color = "valuee";
//   a_result_text.value = a_result.innerText
// } else if (a_score >= 10 && a_score <= 13) {
//   a_result.innerText = 'Based on this AUDIT score, there is a high possibility of harmful alcohol dependence';
//   a_result.style.color = "orange";
//   a_result_text.value = a_result.innerText
// } else if (a_score >= 14) {
//   a_result.innerText = 'This AUDIT score indicates severe dependency on alcohol';
//   a_result.style.color = "red";
//   a_result_text.value = a_result.innerText
// } else {
//   a_result.innerText = 'Based on this AUDIT score, there does not seem to be a risk of alcohol dependence';
//   a_result.style.color = "green";
//   a_result_text.value = a_result.innerText
// }

if (a_score == 0) {
  a_result.innerText = 'Based on this AUDIT score, there is complete abstinence from alcohol';
  a_result.style.color = "green";
  a_result_text.value = a_result.innerText;
} else if (a_score >= 1 && a_score <= 7) {
  a_result.innerText = 'Based on this AUDIT score, there is a low-risk of alcohol dependence';
  a_result.style.color = "green";
  a_result_text.value = a_result.innerText;
} else if (a_score >= 8 && a_score <= 14) {
  a_result.innerText = 'Based on this AUDIT score, there is an indication of harmful alcohol dependence';
  a_result.style.color = "orange";
  a_result_text.value = a_result.innerText;
} else if (a_score >= 15 && a_score <= 30) {
  a_result.innerText = 'Based on this AUDIT score, there is a strong likelihood of alcohol dependence';
  a_result.style.color = "orange";
  a_result_text.value = a_result.innerText;
} else if (a_score > 31) {
  a_result.innerText = 'Based on this AUDIT score, there is an indication of severe alcohol dependence';
  a_result.style.color = "red";
  a_result_text.value = a_result.innerText;
}

if (d_score <= 1) {
  d_result.innerText = `Based on this DUDIT score, there does not seem to be a risk of any substance dependence`;
  d_result.style.color = 'green';
  d_result_text.value = d_result.innerText;
} else if (d_score >= 6 && d_score < 25) {
  d_result.innerText = `Based on this DUDIT score, there seems to be a potential that you could be struggling with substance abuse`;
  d_result.style.color = 'orange';
  d_result_text.value = d_result.innerText;
} else if (d_score >= 25) {
  d_result.innerText = `Based on this DUDIT score, a dependence on one or more substances is present`;
  d_result.style.color = 'red';
  d_result_text.value = d_result.innerText;
}

tippy('#tooltip', {
  content: 'We use this information to determine which of our coaches to book an assessment with.',
  followCursor: true,
  theme: 'custom',
  placement: 'top',
  distance: 50,
  maxWidth: 300,
});

const submitBtn = document.getElementById('submitBtn');



  