
export const ContactSection = () => {
    return (
        <section className="pt-[2rem]">
            <div className='flex flex-col space-y-8 items-center justify-center min-h-screen container mx-auto '>
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gradient">Contactanos</h2>
                    <p className="text-gray-300">Empecemos a desarrollar la siguiente mejor experience</p>
                </div>
                <form className="bg-black max-w-md w-full shadow-xl py-4 px-8 shadow-zinc-900 rounded-xl ">
                    <h4 className="font-bold text-gradient text-lg mb-6">Formulario de contacto</h4>
                    <div className="space-y-6">
                        <input type="text" placeholder="Tu nombre:"  />
                        <input type="text" placeholder="Tu correo electronico:"  />
                        <input type="text" placeholder="Tu numero de telefono:"  />
                        <textarea placeholder="Tu mensaje:" ></textarea>
                        <button className="btn-primary">Enviar</button>
                    </div>

                </form>
            </div>
        </section>
    )
}
