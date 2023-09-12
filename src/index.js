const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const app = express();
const Airtable = require('airtable');
var base = new Airtable({apiKey: `${process.env.TOKEN}`}).base(`${process.env.BASE}`);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../dist/imgs')));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.post('/form', (req, res) => {
  base(`Log`).create([
    {
      "fields": {
        "Full name": `${req.body.full_name}`,
        "Email address": `${req.body.email_address}`,
        "Message": `${req.body.message}`,
        "DUDIT Score": `${req.body.dudit_score}`,
        "DUDIT Result": `${req.body.d_result_text}`,
        "AUDIT Score": `${req.body.audit_score}`,
        "AUDIT Result": `${req.body.a_result_text}`,
        "Male/Female": `${req.body.gender}`,
      }
    },
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });

  console.log(`Full name: ${req.body.full_name}`);
  console.log(`Email: ${req.body.email_address}`);
  console.log(`Message: ${req.body.message}`);
  console.log(`DUDIT Score: ${req.body.dudit_score}`);
  console.log(`DUDIT Result:: ${req.body.d_result_text}`);
  console.log(`AUDIT Score: ${req.body.audit_score}`);
  console.log(`AUDIT Result: ${req.body.a_result_text}`);
  const gender = req.body.gender;
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked)
        console.log("Gender: " + gender[i].value);
}

  res.sendFile(path.join(__dirname, '../dist/thankyou.html'))
});

app.listen(3000, () => {
  console.log(`Server listening on ${process.env.PORT} : http://localhost:3000`)
})

