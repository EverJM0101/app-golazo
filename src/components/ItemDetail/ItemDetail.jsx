import { useCart } from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

        
import './ItemDetail.css';
 
const ItemDetail = ({name, img1, img2, description, stock, category, id, price}) => {
  const {addItem, isInCart} = useCart();

  const handleAdd = (count) => {
    const produtObj = {
      id, name, price, quantity: count
    } 
    addItem(produtObj)
  }
  
  return (
    <article className="CardProductInfo">   
      <h2>{name}</h2>
      
      <div className="img-list">
        <div className="img-container">
          <img
          src={img1}
          alt={name}
          />
        </div>
        <div className="img-container">
          <img
          src={img2}
          alt={name}
          />
        </div>
      </div>
      <h2 className="card-text">$ {price}</h2>
      <p className="card-text">{description}</p>
      <span className="card-text"><b>Categoria: </b>{category}</span>
      <span className="card-text"><b>Disponible: </b>{stock}</span>
      <div>
      {
        isInCart(id) ? (
          <Link to='/cart' className="finalizarbtn">Finalizar Compra</Link>
        ): (
          <ItemCount stock={stock} onAdd={handleAdd} />
        )
      }
      </div>
    </article>
  );
}

export default ItemDetail;
