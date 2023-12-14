export default function Home() {
    return (
        <>
            <section className="mt-4 bg-bghome bg-cover h-screen w-auto flex flex-col justify-center text-center items-center text-white">


                <h1 className="font-semibold text-9xl mb-10 drop-shadow-lg motion-safe:animate-bounce"> YAYOI  KUSAMA </h1>
                <div className="border-t-8 border-b-8 border-white motion-safe:animate-bounce" >
                    <h1 className="font-semibold text-10xl mb-7 drop-shadow-lg "> CHANEL </h1>
                    <h1 className="text-7xl font-semibold mb-12 drop-shadow-lg"> CROISIÈRE COLLABORATION  </h1>
                </div>

                <button className="bg-white text-black m-20 mt p-5 text-lg drop-shadow-lg motion-safe:animate-bounce hover:bg-red-600 hover:text-white font-semibold">Entrez dans la chambre</button>

            </section>


        </>
    );
}