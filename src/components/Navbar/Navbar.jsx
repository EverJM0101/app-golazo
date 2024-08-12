import { Menubar } from 'primereact/menubar';

import { Link, NavLink } from 'react-router-dom'; 
import CardWidget from '../CardWidget/CardWidget';
import './Navbar.css';

export default function Navbar() {
   
    const items = [
        {
            label: (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                aria-current="page"
                to="/category/phone"
              >
                Telefonos
              </NavLink>
            ),
            icon: 'pi pi-mobile'
        },
        {
            label: (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "ActiveOption" : "Option"
                }
                aria-current="page"
                to="/category/laptop"
              >
                Laptops
              </NavLink>
            ),
            icon: 'pi pi-star'
        },
        {
          label: (
            <NavLink
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
              aria-current="page"
              to="/category/pc"
            >
              Computadoras
            </NavLink>
          ),
          icon: 'pi pi-desktop',
        },
        {
          label: (
            <NavLink
              className={({ isActive }) =>
                isActive ? "ActiveOption" : "Option"
              }
              aria-current="page"
              to="/category/watch"
            >
              Relojes
            </NavLink>
          ),
          icon: 'pi pi-clock',
        }
    ];

    const start = (

      <Link className='navbar-titulo' to="/">
        <img alt="logo-golazo" src="https://i.ibb.co/pWFsPHT/goal.png" height="40"></img>
        <h1>Gol Store</h1>
      </Link>
    );
    
    const end = (
        // <div className="flex align-items-center gap-2">
        //     <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
        //     <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        // </div>
        <CardWidget></CardWidget>
    );

    return (
        <div className="card mi-navbar">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}
        