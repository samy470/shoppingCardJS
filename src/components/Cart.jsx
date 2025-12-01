import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <div className="products-grid">
      {items.length === 0 && <p>Cart is empty</p>}

      {items.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <h2>${item.price}</h2>
          <button onClick={() => dispatch(removeItem(item.name))}>Remove</button>
        </div>
      ))}
      </div>
      <h4>Total:${items.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}</h4>
    </div>
  )
}
export default Cart;