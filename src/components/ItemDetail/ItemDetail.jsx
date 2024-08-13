
import { useCart } from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import 'Item.css';

const ItemDetail = ({name, img1, description, stock, category, id, price}) => {
  //const {addItem, isInCart} = useContext(CartContext)
  const {addItem, isInCart} = useCart();

  const handleAdd = (count) => {
    const produtObj = {
      id, name, price, quantity: count
    } 
    addItem(produtObj)
    //setQuantity(cantidad)
  }
  
  return (
    <article className="CardProduct">   
      <h2>{name}</h2>
      <div className="card">
        <img
        src={img1}
        alt={name}
        />
        <div className="card-body">
          <p className="card-text">{description}</p>
          <p className="card-text">Categoria: {category}</p>
          <h2 className="card-text">Precio: $ {price}</h2>
          <h2 className="card-text">Disponible - {stock}</h2>
        </div>
      </div>
      <div>
      {
        isInCart(id) ? (
          <Link to='/cart'>Finalizar Compra</Link>
        ): (
          <ItemCount stock={stock} onAdd={handleAdd} />
        )
      }
      </div>
    </article>
  );
}

export default ItemDetail;
