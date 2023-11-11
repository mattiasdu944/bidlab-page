import bgVideo from "../assets/bg-video.mp4";

export const HeroSection = () => {




    return (
        <>
            <video className="fixed -z-[1] w-full min-h-screen object-cover" loop autoPlay muted>
                <source src={bgVideo} type="video/mp4" />
            </video>

            <section className='bg-black/70 w-full min-h-screen flex flex-col items-center justify-center'>

                <div className="top-reveal flex flex-col justify-between items-center container mx-auto">
                    <h1 className=" text-[5rem] font-bold text-gradient uppercase">BitLab</h1>
                </div>
                

            </section>
        </>
    )
}
