import Navbar from './components/Navbar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
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
                        <Route exact path="/" element={ <ItemListContainer /> } />
                        <Route exact path="/category/:categoryId" element={<p>categoria</p>} />
                        <Route exact path="/detail/:productId" element={<p>detalle</p>}/>
                        <Route exact path="/cart" element={<p>cart</p>} />
                        <Route exact path="/checkout" element={<p>Checkout</p>} />
                        <Route path="*" element={<h1>404 Not found</h1>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>  
        </PrimeReactProvider>
    </>
  )
}

export default App
