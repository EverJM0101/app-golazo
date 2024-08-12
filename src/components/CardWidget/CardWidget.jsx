//import logo from "../../assets/react.svg";

import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";
import './CardWidget.css'
function CardWidget() {
  const { totalQuantity } = useCart();
  return (
    <Link className="CartWidget" to="/cart">
      <img src="https://i.ibb.co/wBFtcdJ/grocery-store.png"
        className="CartImg"
        style={{width: 25}}
        alt='cart-widget'
      />
      <span>{totalQuantity}</span>
      
    </Link>
  );
}

export default CardWidget;
