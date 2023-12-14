export default function Home() {
    return (
        <>
            <section className="mt-4 bg-bghome bg-cover  h-[50vw] w-auto flex flex-col justify-center text-center items-center text-white">


                <h1 className="font-semibold text-[4vw] mb-[0.5vw] drop-shadow-lg motion-safe:animate-bounce"> YAYOI  KUSAMA </h1>
                <div className="border-t-[0.5vw] border-b-[0.5vw] border-white motion-safe:animate-bounce" >
                    <h1 className="font-semibold text-[9vw] mb-[1.5vw] drop-shadow-lg "> CHANEL </h1>
                    <h1 className="text-[3vw] font-semibold mb-[1.5vw] drop-shadow-lg"> CROISIÈRE COLLABORATION  </h1>
                </div>

                <button className="bg-white text-black m-[2vw]  p-[1vw] text-[1vw] drop-shadow-lg motion-safe:animate-bounce hover:bg-red-600 hover:text-white font-semibold">Entrez dans la chambre</button>

            </section>


        </>
    );
}