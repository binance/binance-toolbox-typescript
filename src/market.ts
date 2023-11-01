import { RestMarketTypes, Spot } from "@binance/connector-typescript";

const client = new Spot();

client.exchangeInformation()
    .then(response => console.log(response))
    .catch(error => console.log(error))


const ticker24hrOptions: RestMarketTypes.ticker24hrOptions = {
    symbol: 'BNBUSDT',
}
client.ticker24hr(ticker24hrOptions)
    .then(response => console.log(response))
    .catch(error => console.log(error))


const orderBookOptions: RestMarketTypes.orderBookOptions = {
    limit: 5,
}
client.orderBook('BNBUSDT', orderBookOptions)
    .then(response => console.log(response))
    .catch(error => console.log(error))