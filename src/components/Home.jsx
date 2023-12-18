export default function Home() {


    return (

        //https://juejin.cn/post/7171661294813052958

        //    https://cruip.com/how-to-build-a-modal-video-with-html-tailwind-css-and-alpine-js/
        //   <button className="bg-white text-black m-[2vw]  p-[1vw] text-[1vw] drop-shadow-lg motion-safe:animate-bounce hover:bg-red-600 hover:text-white font-semibold">Entrez dans la chambre</button>
        /*  
        <button
            class="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
            @click="modalOpen = true"
            aria-controls="modal"
            aria-label="Watch the video"
    >
        
        <div id="modal" class="fixed inset-0 z-[99999] flex p-6" role="dialog" aria-modal="true">
            <div class="max-w-5xl mx-auto h-full flex items-center">
                <div class="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                        <video width="1920" height="1080" loop controls>
                            <source src="/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                </div>
            </div>
       </div> 
       
           let modal = document.getElementById("my-modal");

    let btn = document.getElementById("open-btn");

    let button = document.getElementById("ok-btn");

    btn.onclick = function() {
     modal.style.display = "block";
     }

     button.onclick = function() {
     modal.style.display = "none";
     }
     
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
         }
       
       
       */
   

        <>
            <section className="mt-4 bg-bghome bg-cover  h-[50vw] w-auto flex flex-col justify-center text-center items-center text-white">


                <h1 className="font-semibold text-[3.5vw] mb-[0.5vw] drop-shadow-lg motion-safe:animate-bounce"> YAYOI  KUSAMA </h1>
                <div className="border-t-[0.5vw] border-b-[0.5vw] border-white motion-safe:animate-bounce" >
                    <h1 className="font-semibold text-[7vw] mb-[0.5vw] drop-shadow-lg "> CHANEL </h1>
                    <h1 className="text-[2vw] font-semibold mb-[1.5vw] drop-shadow-lg"> CROISIÈRE COLLABORATION  </h1>
                </div>

                <button className=" rounded-full bg-slate-100 text-black h-[8.5vw] w-[8.5vw] p-[0.5vw] mt-[1.5vw] text-[1vw] drop-shadow-2xl  hover:bg-red-600 hover:text-white font-semibold  md:animate-bounce "
                    id="open-btn"

                >Entrez dans la chambre</button>

                <div
                    class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
                    id="my-modal"
                ></div>


                <div
                    class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
                >


                    <div class="mt-3 text-center">
                      
                             <video width="1920" height="1080" loop controls>
                            <source src="/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                            <button
                                id="ok-btn"
                                class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                

            </section>

     



        </>
    );
}