export default function Home() {



    return (

        //https://juejin.cn/post/7171661294813052958

        //    https://cruip.com/how-to-build-a-modal-video-with-html-tailwind-css-and-alpine-js/
        //   <button className="bg-white text-black m-[2vw]  p-[1vw] text-[1vw] drop-shadow-lg motion-safe:animate-bounce hover:bg-red-600 hover:text-white font-semibold">Entrez dans la chambre</button>
        /*  
      
       
       
       */




        <>
            <section className="mt-4 bg-bghome bg-cover  h-[50vw] w-auto flex flex-col justify-center text-center items-center text-white">


                <h1 className="font-semibold text-[3.5vw] mb-[0.5vw] drop-shadow-lg motion-safe:animate-bounce"> YAYOI  KUSAMA </h1>
                <div className="border-t-[0.5vw] border-b-[0.5vw] border-white motion-safe:animate-bounce" >
                    <h1 className="font-semibold text-[7vw] mb-[0.5vw] drop-shadow-lg "> CHANEL </h1>
                    <h1 className="text-[2vw] font-semibold mb-[1.5vw] drop-shadow-lg"> CROISIÈRE COLLABORATION  </h1>
                </div>

                <a href="#example1">
                    <button className=" rounded-full bg-slate-100 text-black h-[8.5vw] w-[8.5vw] p-[0.5vw] mt-[1.5vw] text-[1vw] drop-shadow-2xl  hover:bg-red-600 hover:text-white font-semibold  md:animate-bounce "
                    >

                        Entrez dans la chambre</button></a>

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





        </>
    );
}