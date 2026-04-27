import { useDispatch } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();

  const product = { id: 1, name: "Laptop" };

  return (
    <div>
      <h2>Products</h2>
      <button onClick={() => dispatch({ type: "ADD", payload: product })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductList;