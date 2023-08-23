"use strict"

const d_score = localStorage.getItem('d_score')
const a_score = localStorage.getItem('a_score')

const d_scoreElem = document.getElementById('d_score');
const a_scoreElem = document.getElementById('a_score');

const secretDudit = document.getElementById('dudit');
const secretAudit = document.getElementById('audit');

secretDudit.value = d_score;
secretAudit.value = a_score;

d_scoreElem.textContent = `${d_score}`; 
a_scoreElem.textContent = `${a_score}`; 

const d_result = document.getElementById('d_result');
const a_result = document.getElementById('a_result');

if (a_score >=4 && a_score <= 9) {
  a_result.innerText = 'Based on your AUDIT score, there seems to be at risk of alcohol dependence';
  a_result.style.color = "orange";
} else if (a_score >= 10 && a_score <= 13) {
  a_result.innerText = 'Based on this AUDIT score, there is a high possibility of harmful alcohol dependence';
  a_result.style.color = "orange";
} else if (a_score >= 14) {
  a_result.innerText = 'This AUDIT score indicates severe dependency on alcohol';
  a_result.style.color = "red";
} else {
  a_result.innerText = 'Based on this AUDIT score, there does not seem to be a risk of alcohol dependence';
  a_result.style.color = "green";
}

if (d_score >= 2 && d_score <= 6) {
  d_result.innerText = 'Based on this DUDIT score, there seems to be a risk of substance dependence';
  d_result.style.color = 'orange';
} else if (d_score >= 25) {
  d_result.innerText = 'This DUDIT score indicates severe dependency on substances';
  d_result.style.color = 'red';
} else {
  d_result.innerText = 'Based on this DUDIT score, there does not seem to be a risk of substance dependence';
  d_result.style.color = 'green';
}


  