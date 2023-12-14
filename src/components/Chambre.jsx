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

                <div>

                  
                </div>

                <div className="bg-bgc h-4/6 bottom-0 left-0 pt-28  absolute  w-screen ">

                <h1 className="font-semibold text-3xl ml-[18%] mr-[18%] text-justify drop-shadow-lg ">
                        Bienvenue dans la salle décorée par Yayoi Kusama pour COCO et recherchez les produits co-marqués par Chanel et Yayoi Kusama.

                        Il y a de nombreux produits de collaboration entre Chanel et Yayoi Kusama dans cette salle. Veuillez les collectionner tous.

                    </h1>
           
                </div>


                <div className="pin-wrap">
                    <img src="/29.png" className="bg-cover bg-center h-screen w-auto border-9 border-[#F4B759] drop-shadow-lg" />
                    <img src="/29.png" className="bg-cover bg-center h-screen w-auto border-9 border-[#F4B759] drop-shadow-lg" />

                </div>

                <div className="bg-bgchambre2 h-1/5 bottom-0 left-0 absolute  w-screen">

                    <button className="bg-white rounded-full absolute bottom-0 right-1/4 text-black h-56 w-56 mt-20 mb-20 p-5 text-xl drop-shadow-xl  hover:bg-red-600 hover:text-white font-semibold  md:animate-bounce">Entrez dans la chambre</button>
                </div>
            </div>

        </section>

        // </div>
    );
}