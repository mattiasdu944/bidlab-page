import apoloGame from "../assets/apolo-game.mp4";


export const NavMenu = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__container">

                <div className="flex items-center">
                    <video className="max-w-[40px]" loop autoPlay muted>
                        <source src={apoloGame} type="video/mp4" />
                    </video>
                    <h2 className='font-bold uppercase text-gradient text-2xl'>
                        itLab
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
                    <li>
                        <a href="#team">Equipo</a>
                    </li>
                </ul>

                <a className='btn-primary' href="#contact">Contacto</a>

            </div>
        </nav>
    )
}
