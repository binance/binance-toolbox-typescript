import { OrderType, Side, Spot, TimeInForce } from "@binance/connector-typescript";

const apiKey = process.env.API_KEY || '';
const apiSecret = process.env.API_SECRET || '';

const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision' });

async function app() {
    // start to place a new order
    console.log("start placing an order")

    const { orderId } = await client.newOrder('BNBUSDT', Side.BUY, OrderType.LIMIT, {
        price: 200,
        quantity: 0.2,
        timeInForce: TimeInForce.GTC
    })

    console.log(`The new order id: ${orderId}`)
    console.log("finished placing order")

    // get order details
    console.log("start to query order details")
    if (!orderId) {
        console.log("no order id found")
        return
    }
    await client.getOrder('BNBUSDT', {
        orderId
    }).then(response => console.log(response))
        .catch(err => console.error(err.response))

    // cancel the order
    console.log("start to cancel the order if it's still in open status")
    await client.cancelOrder('BNBUSDT', { orderId })
        .then(response => console.log(response))
        .catch(err => console.error(err.response))
}

app()