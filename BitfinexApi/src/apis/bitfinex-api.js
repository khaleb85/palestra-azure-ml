const request = require('request');
const config = require('../../config/bitfinex-config');

class BitFinexApi {
    constructor() {}

    getBitfinexCandles(date, callback) {
        const url = `${config.baseUrl}/candles/trade:${config.timeFrame}:${config.symbol}/hist?limit=${config.limit}&start=${date}&sort=1`;

        request.get(url, (err, res, body) => {
            const data = JSON.parse(body);

            if (data[2] === config.ratelimitError)
                throw data[2];

            //Wait 3 seconds to avoid rate limits
            setTimeout(function () {
                callback(data);
            }, 3000);
        });
    }

    getLastCandle(callback) {
        request.get(`${config.baseUrl}/candles/trade:${config.timeFrame}:${config.symbol}/last`, (error, response, body) => {
			console.log(error);
            if (error)
                throw new error();
    
            const data = JSON.parse(body);
			const back = {
                MTS: new Date(parseInt(data[0])), 
                OPEN: data[1],
                CLOSE: data[2],
                HIGH: data[3],
                LOW: data[4],
                VOLUME: data[5]
            };
			callback(back);
        });
    }
}

module.exports = BitFinexApi;