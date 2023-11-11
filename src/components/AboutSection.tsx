import apoloDev from "../assets/apolo-dev.png";
import { about_list } from "../constants/about";

import { BsDot } from "react-icons/bs";

export const AboutSection = () => {
    return (
        <section id="dev">
            <div className="container min-h-screen mx-auto flex flex-col items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gradient">Desarrollo de videojuegos</h2>
                    <p>Se parte de la magia</p>
                </div>
                <div className="lg:flex justify-between items-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-4">Cómo Creamos Magia</h3>
                        <div className="space-y-4">
                            {
                                about_list.map(info => (
                                    <div>
                                        <div className="flex items-center">
                                            <BsDot/>
                                            <h4 className="text-lg font-bold">{info.title}</h4>
                                        </div>
                                        <p className="text-sm text-gray-400 text-justify">{info.text}</p>
                                    </div>
                                ))
                            }
                            <a href="#contact" className="btn-primary max-w-max">Contactar</a>
                        </div>
                    </div>

                    <img src={apoloDev} alt="apolo-dev" />
                </div>
            </div>
        </section>
    )
}
