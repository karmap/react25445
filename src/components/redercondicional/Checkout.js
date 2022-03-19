import { addOrder } from "./firebase/firebaseClient";

const Checkout = () => {
  
  const orderHandler = () => {
      const order = {
        user: {
            name: 'ana',
            email: 'ana@gmail.com'
        },
        products: [
            { name: 'iPhone',price: 1000, quantity: 2},
            { name: 'Xiaomi',price: 800, quantity: 1},
            { name: 'Motorola',price: 500, quantity: 1},
        ],
        total: 5000
      }
      addOrder(order).then( data => {
        console.log(data);
      })
      console.log('Se realizó un pedido');
  }

  return (
    <>
        <div>Checkout</div>
        <button onClick={orderHandler}>Realizar pedido</button>
    </>
  )
}
export default Checkout