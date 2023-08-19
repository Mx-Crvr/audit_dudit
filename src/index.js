const express = require('express');
const path = require('path');
require('dotenv').config()
const app = express();
// const urlParams = new URLSearchParams(window.location.search);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, './src/imgs')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.post('/form', (req, res) => {
  // const d_score = localStorage.getItem('d_score')
  // const a_score = localStorage.getItem('a_score')
  const fullName = req.body.full_name;
  const emailAddress = req.body.email_address;
  const message = req.body.message;
  const duditScore = req.body.dudit_score;
  const auditScore = req.body.audit_score;

  console.log(`Fullname: ${fullName}`);
  console.log(`Email: ${emailAddress}`);
  console.log(`Message: ${message}`);
  console.log(`DUDIT Score: ${duditScore}`);
  console.log(`AUDIT Score: ${auditScore}`);

  res.sendFile(path.join(__dirname, '../dist/thankyou.html'))
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}: http://localhost:${process.env.PORT}`)
})

