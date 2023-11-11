

export const NavMenu = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__container">

                <div>
                    <h2 className='font-bold uppercase text-gradient'>
                        BitLab
                    </h2>
                </div>

                <ul className='navbar__menu'>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#dev">Desarrollo</a>
                    </li>
                    <li>
                        <a href="#games">Juegos</a>
                    </li>
                </ul>

                <a className='btn-primary' href="#contact">Contacto</a>

            </div>
        </nav>
    )
}
