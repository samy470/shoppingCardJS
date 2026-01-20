import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { ViewDetails, fetchGames } from "../redux/cartSlice";
import { useSelector } from "react-redux";

const List = () => {
  const data = useSelector((state) => state.cart.List);
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(fetchGames());
}, []);

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="products-grid">
      {data.map((data, index) =>
        <div key={index}>
          <div class="card" style={{ width: "18rem" }}>
            <img src={data.image} class="card-img-top" alt="Batman™: Arkham Knight" />
            <div class="card-body">
              <h5 class="card-title">{data.name}</h5>
              <a href="#" class="btn btn-primary" onClick={() => dispatch(ViewDetails({ name: data.name, image: data.image, price: data.price, details: data.details }))}>Details</a>
              <span class="fw-bold">${data.price} USD</span>
              <button class="btn btn-success" onClick={() => dispatch(addItem({ name: data.name, img: data.image, price: data.price }))}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}
export default List;