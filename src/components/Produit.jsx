export default function Produit() {

    return (
        <>
            <section className=" h-screen bg-bgred2 w-auto flex flex-col justify-center text-center items-center text-white">

                <h1 className="font-semibold text-7xl mb-9 drop-shadow-lg "> POUR LA COLLECTION CHANEL x YAYOI KUSAMA </h1>
                <h1 className="font-semibold text-2xl mb-9 drop-shadow-lg "> le flacon des parfums iconiques de la Maison et les sacs iconiques, se parent des motifs aux points vibrants de l'artiste japonaise. </h1>
                <div className="flex flex-row">

                    <div className="flex flex-col justify-center text-center  items-center">
                        <div className=" bg-cover bg-p1 bg-center w-80 h-96">
                        </div>
                        <button className="bg-white rounded-full text-black h-44 w-44 p-5 m-10 text-xl drop-shadow-xl ">Voir plus</button>
                    </div>


                    <div className="flex flex-col justify-center text-center  items-center">
                        <div className=" bg-cover bg-p2 bg-center w-80 h-96">
                        </div>
                        <button className="bg-white rounded-full text-black h-44 w-44 m-10 p-5 text-xl drop-shadow-xl ">Voir plus</button>
                    </div>



                </div>
            </section>
        </>
    );
}