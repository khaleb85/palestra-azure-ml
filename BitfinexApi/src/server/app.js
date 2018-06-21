const express = require('express');
const BitFinexApi = require('../apis/bitfinex-api.js');
const fs = require('fs');
const app = express();

const port = 3400;

app.get('/', function (req, res) {
    res.setHeader("content-type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=data.csv");
    fs.createReadStream('./statics/data.csv')
        .pipe(res);
});

app.get('/last', function(req, res) {
	const bit = new BitFinexApi();
	const candle = bit.getLastCandle(x => {
		return res.send(x);
	});
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});