const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

console.log('our port is - ',process.env.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/', require('./routes')(express));

exports.server = app.listen(port, () => {
  console.log('Server Active On Port', port);
});
