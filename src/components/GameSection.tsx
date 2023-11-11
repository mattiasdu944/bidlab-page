import apoloGame from "../assets/apolo-game.mp4";

export const GameSection = () => {
    return (
        <section id="games">
            <div className='lg:flex flex-col justify-center items-center min-h-screen container mx-auto'>
                <h2 className="text-4xl mb-2 font-bold text-gradient">Nuestro ultimo lanzamiento</h2>
                <p className="mb-8">Conoce nuestro ultimo juego aun en desarrollo que hara volar tu imaginacion</p>

                <div className="max-w-md bg-gradient-to-t from-blue-500 to-indigo-500 p-1 rounded-md hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all">
                    <div className="bg-black rounded-lg overflow-hidden">
                        <video  loop autoPlay muted>
                            <source src={apoloGame} type="video/mp4" />
                        </video>
                        <div className="p-4 space-y-4">
                            <h3 className="text-2xl text-gradient font-bold">Apolo XD</h3>
                            <p className="line-clamp-3 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo fugit, quisquam placeat iste voluptatem aliquam repellendus harum libero, qui nemo suscipit quaerat itaque maxime corrupti praesentium excepturi, eligendi asperiores?</p>
                            <button className="btn-primary">Pre-venta: $1 🤠</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
