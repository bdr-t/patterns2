const data = require('./currency_conversions.json')

module.exports = ConvertToEur = function () {
    return this.convert = function (currency, num) {
        switch (currency) {
            case 'USD':
                return num * data.USD_EUR
            case 'GBP':
                return num * data.GBP_EUR
            case 'CHF':
                return num * data.CHF_EUR
            case 'JPY':
                return num * data.JPY_EUR
            case 'CAD':
                return num * data.CAD_EUR
            case 'CNY':
                return num * data.CNY_EUR

            default:
                return `${currency} not found`
        }

    }
}
