import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const Details = () => {
  const items = useSelector((state) => state.cart.details);
  const dispatch = useDispatch()

  return (
    <div className="container">
      <h1>Details</h1>
      <div className="products-grid">
      {items.map((item, index) =>
        <div key={index}>
          <div class="card">
            <img src={item.image} class="card-img-top" alt="header2.jpg" />
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">{item.details}</p>
              <span class="fw-bold">${item.price} USD</span>
              <button class="btn btn-success" onClick={() => dispatch(addItem({ name: item.name, img: item.img, price: item.price }))}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
      </div>

      <h3></h3>
    </div>
  )
}
export default Details;