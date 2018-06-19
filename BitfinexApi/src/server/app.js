const express = require('express');
const fs = require('fs');
const app = express();

const port = 3400;

app.get('/', function (req, res) {
    res.setHeader("content-type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=data.csv");
    fs.createReadStream('./statics/data.csv')
        .pipe(res);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});