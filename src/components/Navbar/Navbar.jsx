import { Menubar } from 'primereact/menubar';

import { Link, NavLink } from 'react-router-dom'; 
import CardWidget from '../CardWidget/CardWidget';
import './Navbar.css';

export default function Navbar() {
   
    const items = [
        {
            label: 'Telefonos',
            template: (item, options) => {
                return (
                <NavLink
                className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
                }
                aria-current="page"
                to="/category/phone">
                    <i className='pi pi-mobile'></i> {item.label}
                </NavLink>);
            },
        },
        {
            label:'Laptops',
            template: (item, options) => {
                return (
                <NavLink
                className={({ isActive }) =>
                    isActive ? "ActiveOption" : "Option"
                }
                aria-current="page"
                to="/category/laptop">
                    <i className='pi pi-star'></i> {item.label}
                  </NavLink>
                );
            }
        },
        {
          label: 'Computadoras',
          template: (item, options) => {
            return (
                <NavLink
                className={({ isActive }) =>
                    isActive ? "ActiveOption" : "Option"
                } aria-current="page"
                to="/category/pc">
                    <i className='pi pi-desktop'></i> {item.label} 
                </NavLink>
                );
            },
        },
        {
          label: 'Relojes',
          template: (item, options) => {
            return (
                <NavLink
                className={({ isActive }) =>
                isActive ? "ActiveOption":"Option"}
                aria-current="page"
                to="/category/watch">
                     <i className='pi pi-clock'></i> {item.label}
                </NavLink>
                );
            },
        }
    ];

    const start = (
        <Link className='navbar-titulo' to="/">
            <img alt="logo-golazo" src="https://i.ibb.co/CQFyKVt/letter-c.png" height="40"></img>
            <h1>Control Store</h1>
        </Link>
    );
    
    const end = (
        <CardWidget></CardWidget>
    );

    return (
        <div className="card mi-navbar">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}
        