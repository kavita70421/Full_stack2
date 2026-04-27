import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;