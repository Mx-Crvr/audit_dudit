"use strict"

const d_score = localStorage.getItem('d_score')
const a_score = localStorage.getItem('a_score')

const d_scoreElem = document.getElementById('d_score');
const a_scoreElem = document.getElementById('a_score');

d_scoreElem.textContent = `${d_score}`; 
a_scoreElem.textContent = `${a_score}`; 
  