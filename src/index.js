const express = require('express');
const path = require('path');
require('dotenv').config()
const app = express();
const Airtable = require('airtable');
var base = new Airtable({apiKey: `${process.env.TOKEN}`}).base(`${process.env.BASE}`);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, './src/imgs')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.post('/form', (req, res) => {
  base(`${process.env.TABLE}`).create([
    {
      "fields": {
        "Full name": `${req.body.full_name}`,
        "Email address": `${req.body.email_address}`,
        "Message": `${req.body.message}`,
        "DUDIT Score": `${req.body.dudit_score}`,
        "AUDIT Score": `${req.body.audit_score}`
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

  console.log(`Fullname: ${req.body.full_name}`);
  console.log(`Email: ${req.body.email_address}`);
  console.log(`Message: ${req.body.message}`);
  console.log(`DUDIT Score: ${req.body.dudit_score}`);
  console.log(`AUDIT Score: ${req.body.audit_score}`);

  res.sendFile(path.join(__dirname, '../dist/thankyou.html'))
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}: http://localhost:${process.env.PORT}`)
})

