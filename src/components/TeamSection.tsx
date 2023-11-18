import { TEAM } from "../constants/team"

export const TeamSection = () => {
    return (
        <section id="team">
            <h2 className="mb-8 text-4xl text-gradient text-center font-bold">Integrantes del equipo</h2>
            <div className="container mx-auto grid gap-8 items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    TEAM.map(item => (
                        <div key={item.name} className="card">
                            <div className="bg-black pb-4">
                                <img src={item.image} className="mb-4" alt={item.name} />
                                <h3 className="text-center text-gradient font-bold text-2xl">{item.name}</h3>
                                <p className="text-center uppercase text-sm">{ item.role }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
