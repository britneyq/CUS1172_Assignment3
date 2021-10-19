
const username = document.getElementById('username');
const saveScore = document.getElementById('saveScore');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;
