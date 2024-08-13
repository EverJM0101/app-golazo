import { Link } from "react-router-dom";
import './Item.css';
const Item = ({product}) => {  
  return (
    <div className="CardProduct" style={{ width: "18rem" }}>
        <div className="img-item">
            <img
            src={product.img1}
            alt={product.name}
            />
        </div>
       
        <div className="card-body">
            <div className="item-category">
                <span >{product.category}</span>
            </div>
            
            <h5 className="card-title">{product.name}</h5>
            <h4><span>$</span><span className="item-price">{product.price}</span></h4>
            <p>
                {product.description}
            </p>
            <Link to={`/detail/${product.id}`} className="item-button">
            Ver Detalle
            </Link>
        </div>
    </div>
  );
}


export default Item;
