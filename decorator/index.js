const decorator = require('./decorator')


let items = [
    ['USD', 9.99, 'Spotify'],
    ['GBP', 9.99, 'Spotify'],
    ['CHF', 12.95, 'Spotify'],
    ['JPY', 980, 'Spotify'],
    ['CAD', 9.99, 'Spotify'],
    ['USD', 9.99, 'Spotify'],
] 



function calculatePrice(decorator, currency, price, item){
    this.convert = decorator()
    let toEur = this.convert(currency, price)
    console.log(`El preu de ${item} convertit a EUR des de ${currency} es de ${Math.round(toEur * 100) / 100} el cost anual seria de ${Math.round(toEur * 12 * 100) / 100}`)
    
    
}

for(let x of items){
    calculatePrice(decorator, x[0], x[1], x[2])
}
