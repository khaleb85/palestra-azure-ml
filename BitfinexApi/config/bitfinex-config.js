module.exports = Object.freeze({
    baseUrl: 'https://api.bitfinex.com/v2',
    timeFrame: '1h',
    symbol: 'tBTCUSD',
    ratelimitError: 'ratelimit: error',
    limit: 1000,
    startDate: 1358182043000,
    dataFields: [
        {
            label: 'DATE',
            value: (row, field) => new Date(row[0]),
            default: 'NULL',
        },
        {
          label: 'OPEN',
          value: (row, field) => row[1],
          default: 'NULL',
        },
        {
            label: 'CLOSE',
            value: (row, field) => row[2],
            default: 'NULL',
        },
        {
            label: 'HIGH',
            value: (row, field) => row[3],
            default: 'NULL',
        },
        {
            label: 'LOW',
            value: (row, field) => row[4],
            default: 'NULL',
        },
        {
            label: 'VOLUME',
            value: (row, field) => row[5],
            default: 'NULL',
        },
      ]
});