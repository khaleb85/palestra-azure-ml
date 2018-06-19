const BitFinexApi = require('./apis/bitfinex-api');

const api = new BitFinexApi();
let self = null;
let candles = [];

class Candles {
    constructor() {
        self = this;
    }

    getCandles(date, isRecursive, callback) {
        api.getBitfinexCandles(date, data => {
            const lastIndex = data.length - 1;
            const time = new Date(parseInt(data[lastIndex])).getTime();
        
            console.log(time);
            candles = candles.concat(data);
        
            if (isRecursive === true && time < new Date().setHours(new Date().getHours() - 2))
                self.getCandles(time, isRecursive, callback);
            else
                callback(candles);
        });
    }
}

module.exports = Candles;