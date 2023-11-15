import './HeaderStyle.css'

const Header = () => {
    return (
        <>
        <header>
            <div className="contenedor-navbar">
                <nav className="navbar">
                    <div className="contenedor-logo-search">
                        <div className="contenedor-logo">
                            <img src="https://raw.githubusercontent.com/guinia/LasFuerzasDelCielo/688ec6c2a2b9f1bcd9e2a7cacf887efd1a53ef58/logo.svg" alt="El Buen Sabor logo" className="logo-img"/>
                        </div>
                        <form className="search-form">
                            <input type="search" placeholder="Buscar..." className="barra-buscar"/>
                            <button className="btn-search">
                                <span className="material-symbols-outlined">search</span>
                            </button>
                        </form>
                    </div>

                    <div className="contenedor-items">
                        <ul className="items links-navbar">
                            <li className=" item-link"><a href="#" >Inicio</a></li>
                            <li className=" item-link nav-item-dropdown">
                                <a href="#" className="contenedor-prod">
                                    Productos
                                    <span className="material-symbols-outlined">expand_more</span>
                                </a>
                                <ul className="vertical-menu">
                                    <li className="dp-item">
                                        <a href="#Promos">Promos</a>
                                    </li>
                                    <li className="dp-item">
                                        <a href="#Pizzas">Pizzas</a>
                                    </li>
                                    <li className="dp-item">
                                        <a href="#Hamburguesas">Hamburguesas</a>
                                    </li>
                                    <li className="dp-item">
                                        <a href="#Lomos">Lomos</a>
                                    </li>
                                    <li className="dp-item">
                                        <a href="#Papas">Papas</a>
                                    </li>
                                    <li className="dp-item">
                                        <a href="#Bebidas">Bebidas</a>
                                    </li>
                                    <li className="dp-item">
                                        <a href="#VerTodo">Ver todo</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="items">
                            <li className=" item-link nav-item-dropdown">
                                <a href="#" className="btn-navbar contenedor-usuario">
                                    ¡Hola, Admin!
                                    <span className="material-symbols-outlined">expand_more</span>
                                </a>
                                <ul className="vertical-menu">
                                    <li className="dp-item">
                                        <span className="material-symbols-outlined">person</span>
                                        <a href="#Promos">Mi perfil</a>
                                    </li>
                                    <li className="dp-item">
                                        <span className="material-symbols-outlined">shopping_bag</span>
                                        <a href="#Pizzas">Historial de compras</a>
                                    </li>
                                    <li className="dp-item">
                                        <span className="material-symbols-outlined">logout</span>
                                        <a href="#Hamburguesas">Cerrar sesión</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                    <button  className="contenedor-menu-cel" >
                        <span className="material-symbols-outlined" id="icono-menu">menu</span>
                    </button>
                </nav>
            </div>
        </header>
        </>
    )        
}
export default Header;