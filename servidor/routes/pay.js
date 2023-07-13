import Stripe from "stripe";//portal de pagos para conectarse a su api
const striper = Stripe('sk_test_51MXhMwE3qnA4gieV1zddEIRQEaSU2Ro4yVhovCZZGzuLKMvnkc1pmksgMB0B2hcPnogMWw4zzYAoiUK0trTZ7rCY00jHqdr6ZV');//clave de acceso stripe para recibir el pago

//funcion que permite conectarse a la api y realizar los pagos
export const pay = async (req,res) => {
    let {id, amount, description} = req.body;
    striper.paymentIntents.create({
        amount: amount * 100,
        description: description,
        currency: 'cop',
        payment_method: id,
        confirm: true
    }).then((pay) => {
        res.json({
            message: 'payment succesful',
            success: true
        })
    }).catch((error) => {
        console.log('error', error);
        res.json({
            message:'payment failed',
            success: false
        })
    })
}