const bitfinexConfig = require('./config/bitfinex-config');
const Candles  = require('./src/candles');
const CsvConverter = require('./src/data-converter/csv-converter');


let date = bitfinexConfig.startDate;
const can = new Candles();

can.getCandles(date, true, candles => {
    const converter = new CsvConverter();
    converter.convertToCsv(candles);
});