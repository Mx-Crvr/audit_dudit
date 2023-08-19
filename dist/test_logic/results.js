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

  