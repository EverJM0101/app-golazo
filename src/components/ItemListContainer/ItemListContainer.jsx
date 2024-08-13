import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";
import './ItemListContainer.css';

function ItemListContainer({greetings}) {
    const {categoryId} = useParams()
    const asyncFunction = () => getProducts(categoryId)
    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId]);

    if(loading) {
      return (
        <div className="load-icon" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#3786D6" stroke="#3786D6" strokeWidth="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#3786D6" stroke="#3786D6" strokeWidth="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#3786D6" stroke="#3786D6" strokeWidth="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
        </div>
      );
    }

    if(error) {
      return (
      

        <div className="load-icon" >
          <h3>
            Error al cargar los productos
          </h3>
        </div>
      );
    }

    return (
        <>
            <h2 className="greeting">{greetings}</h2>
            <ItemList products={products} /> 
        </>
    );
}

export default ItemListContainer
