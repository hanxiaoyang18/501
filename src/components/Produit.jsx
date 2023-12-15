export default function Produit() {

    return (
        //     <div className=" bg-cover bg-p1 bg-center w-80 h-96">
        <>
            <section className=" h-[55vw] flex flex-wrap bg-bgred2 d w-auto justify-center text-center items-center text-white">

                <h1 className="font-semibold text-[3.5vw] mb-[0.5vw] mt-[2.5vw] drop-shadow-lg selection:bg-bgred4 leading-4  "> POUR LA COLLECTION CHANEL x YAYOI KUSAMA </h1>
                <h1 className="font-semibold text-[1.1vw] mb-[1.1vw] drop-shadow-lg selection:bg-bgred4 leading-4    "> le flacon des parfums iconiques de la Maison et les sacs iconiques, se parent des motifs aux points vibrants de l'artiste japonaise. </h1>
                <div className="flex flex-row">

                    <div className="flex flex-col border-5 ml-[2vw] mb-[4vw]   mr-[2vw]   border-white w-[30vw] h-[30vw] rounded-full justify-center text-center items-center hover:bg-bgred4">
                    
                        <img src="/27.png"   className="revealing-image2"/>
                        
                        <button className="bg-white rounded-full text-black h-[6vw] w-[6vw]  p-[0.5vw] text-[1vw]  drop-shadow-xl hover:bg-bgred2 font-semibold hover:text-white hover:border-white hover:border-5 ">Voir plus</button>
                    </div>


                    <div className="flex flex-col border-5   mr-[2vw]   border-white  w-[30vw] h-[30vw]  rounded-full justify-center text-center  items-center hover:bg-bgred4">
            
                        <img src="/34.png"   className="revealing-image2"/>
              
                        <button className="bg-white rounded-full text-black h-[6vw] w-[6vw]  p-[0.5vw] text-[1vw]  drop-shadow-xl hover:bg-bgred2 font-semibold hover:text-white hover:border-white hover:border-5 ">Voir plus</button>
                    </div>

                    <div className="flex flex-col border-5   mr-[2vw]  border-white w-[30vw] h-[30vw]  rounded-full justify-center text-center  items-center hover:bg-bgred4">
                     
                             <img src="/44.png"   className="revealing-image2"/>
                  
                        <button className="bg-white rounded-full text-black h-[6vw] w-[6vw]  p-[0.5vw] text-[1vw]  drop-shadow-xl hover:bg-bgred2 font-semibold hover:text-white hover:border-white hover:border-5 ">Voir plus</button>
                    </div>


                </div>
            </section>
        </>
    );
}