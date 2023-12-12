export default function Chambre() {
    return (

        // <div className="p-52 bg-bgorange mt-2 ">
        // border-9 border-[#F4B759]
        //https://scroll-driven-animations.style/ site css

        <section className="sectionPin">
        
        <div className=" bg-bgchambre bg-cover bg-center h-screen sticky top-0 overflow-hidden w-auto flex flex-col justify-center text-center  items-center text-white">

            <div className="hover:animate-ani absolute top-0 mt-16 mb-36">
                <h1 className="font-semibold text-11xl mb-9 drop-shadow-lg "> BIENVENUE  </h1>
                <h1 className="font-semibold text-7xl drop-shadow-lg ">
                    DANS LA CHAMBRE DE YAYOI KUSAMA
                </h1>
            </div>

            <div className="bg-bgc h-4/6 bottom-0 left-0  absolute  w-screen">

            </div>


            <div className="pin-wrap">
            <img src="/29.png"   className="bg-cover bg-center h-screen w-auto border-9 border-[#F4B759] drop-shadow-lg"/>
            <img src="/29.png"   className="bg-cover bg-center h-screen w-auto border-9 border-[#F4B759] drop-shadow-lg"/>

            </div>

            <div className="bg-bgchambre2 h-1/5 bottom-0 left-0 absolute  w-screen">

                <button className="bg-white rounded-full absolute bottom-0 right-1/4 text-black h-56 w-56 mt-20 mb-20 p-5 text-xl drop-shadow-xl  md:animate-bounce">Entrez dans la chambre</button>
            </div>
        </div>

        </section>

        // </div>
    );
}