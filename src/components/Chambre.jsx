export default function Chambre() {
    return (

        // <div className="p-52 bg-bgorange mt-2 ">
        // border-9 border-[#F4B759]
        //https://scroll-driven-animations.style/ site css

        <section className="sectionPin">

            <div className=" bg-bgchambre bg-cover bg-center h-screen  sticky top-0 overflow-hidden w-auto flex flex-col justify-center text-center  items-center text-white">

                <div className="absolute top-0 mt-[1vw] mb-[1vw]">
                    <h1 className="font-semibold text-[10vw] leading-tight drop-shadow-lg "> BIENVENUE  </h1>
                    <h1 className="font-semibold text-[3vw] drop-shadow-lg ">
                        DANS LA CHAMBRE DE YAYOI KUSAMA
                    </h1>
                </div>

                <div>

                  
                </div>

                <div className="bg-bgc h-[28vw] bottom-0 left-0 pt-[3vw]  absolute  w-screen ">

                <h1 className="font-semibold text-[1.2vw] ml-[20vw] mr-[20vw] text-justify drop-shadow-lg ">
                        Bienvenue dans la salle décorée par Yayoi Kusama pour COCO et recherchez les produits co-marqués par Chanel et Yayoi Kusama.

                        Il y a de nombreux produits de collaboration entre Chanel et Yayoi Kusama dans cette salle. Veuillez les collectionner tous.

                    </h1>
           
                </div>


                <div className="pin-wrap">
                    <img src="/49.png" className="bg-cover bg-center h-screen w-auto border-9 border-[#F4B759] drop-shadow-lg" />
                    <img src="/29.png" className="bg-cover bg-center h-screen w-auto border-9 border-[#F4B759] drop-shadow-lg" />

                </div>

                <div className="bg-bgchambre2 h-[10vw] bottom-0 left-0 absolute  w-screen">

                <a href="#example1">

                    <button className=" rounded-full bg-slate-100 absolute bottom-0 right-1/4 text-black h-[11vw] w-[11vw] mt-20 mb-[3vw] p-[0.5vw] text-[1vw] drop-shadow-2xl  hover:bg-red-600 hover:text-white font-semibold  md:animate-bounce">Entrez dans la chambre</button>
                    </a>
                </div>
            </div>


            <article class="popBox" id="example1">
                    <div class="con">
                        <a href="#" class="close"></a>
                        <video width="1920" height="1080" loop controls>
                            <source src="/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </article>


        </section>

        // </div>
    );
}