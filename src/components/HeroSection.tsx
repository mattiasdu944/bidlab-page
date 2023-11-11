import { Fade } from "react-awesome-reveal";
import bgVideo from "../assets/bg-video.mp4";
export const HeroSection = () => {

    return (
        <>
            <video className="fixed -z-[1] w-full min-h-screen object-cover" loop autoPlay muted>
                <source src={bgVideo} type="video/mp4" />
            </video>

            <section className='bg-black/70 w-full min-h-screen flex flex-col items-center justify-center'>
                <Fade direction="down" delay={400}>
                    <div className="top-reveal flex flex-col justify-between items-center container mx-auto">
                        <h1 className=" text-[5rem] font-bold text-gradient uppercase">BitLab</h1>
                    </div>
                </Fade>
                <Fade direction="up" delay={500}>
                    <div className="font-bold text-xl flex items-center gap-1 uppercase">
                        <p>Creamos Las mejores experiencias</p>
                    </div>
                </Fade>


            </section>
        </>
    )
}
