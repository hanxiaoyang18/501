export default function Produit() {

    return (
        //     <div className=" bg-cover bg-p1 bg-center w-80 h-96">
        <>
            <section className=" h-screen bg-bgred2 d w-auto flex flex-col justify-center text-center items-center text-white">

                <h1 className="font-semibold text-7xl mb-9 drop-shadow-lg selection:bg-bgred4  "> POUR LA COLLECTION CHANEL x YAYOI KUSAMA </h1>
                <h1 className="font-semibold text-2xl mb-24 drop-shadow-lg selection:bg-bgred4   "> le flacon des parfums iconiques de la Maison et les sacs iconiques, se parent des motifs aux points vibrants de l'artiste japonaise. </h1>
                <div className="flex flex-row">

                    <div className="flex flex-col border-5 mr-20   border-white w-128 h-128 rounded-full justify-center text-center items-center hover:bg-bgred4">
                        <div className=" w-80 h-96">
                        <img src="/27.png"   className="revealing-image2"/>
                        </div>
                        <button className="bg-white rounded-full text-black h-36 w-36 p-5 m-10 text-xl drop-shadow-xl hover:bg-bgred2 font-semibold hover:text-white hover:border-white hover:border-5 ">Voir plus</button>
                    </div>


                    <div className="flex flex-col border-5  mr-20  border-white w-128 h-128 p-10 rounded-full justify-center text-center  items-center hover:bg-bgred4">
                        <div className="  w-80 h-96">
                        <img src="/34.png"   className="revealing-image2"/>
                        </div>
                        <button className="bg-white rounded-full text-black h-36 w-36 p-5 m-10 text-xl drop-shadow-xl hover:bg-bgred2 font-semibold hover:text-white hover:border-white hover:border-5  ">Voir plus</button>
                    </div>

                    <div className="flex flex-col border-5 pt-14 border-white w-128 h-128 p-10 rounded-full justify-center text-center  items-center hover:bg-bgred4">
                        <div className="  w-80 h-96">
                             <img src="/44.png"   className="revealing-image2"/>
                        </div>
                        <button className="bg-white rounded-full text-black h-36 w-36 p-5 m-10 text-xl drop-shadow-xl hover:bg-bgred2 font-semibold hover:text-white hover:border-white hover:border-5 ">Voir plus</button>
                    </div>


                </div>
            </section>
        </>
    );
}