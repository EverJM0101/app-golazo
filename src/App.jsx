import Navbar from './components/Navbar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import "primereact/resources/themes/viva-light/theme.css";
import 'primeicons/primeicons.css';  
import './App.css'

function App() {
  return (
    <>
        <PrimeReactProvider>
            <BrowserRouter>
                <CartProvider>
                    <Navbar></Navbar>
                    <Routes >
                        <Route exact path="/" element={ <ItemListContainer greetings={'Bienvenido'} /> } />
                        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route exact path="/detail/:productId" element={<ItemDetailContainer />}/>
                        <Route exact path="/cart" element={<Cart />} />
                        <Route exact path="/checkout" element={<Checkout></Checkout>} />
                        <Route path="*" element={<h1>404 Not found</h1>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>  
        </PrimeReactProvider>
    </>
  )
}

export default App
