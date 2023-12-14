export default function Affiche() {
  return (
    <>
      <section className="relative  h-[50vw] w-auto  items-center justify-center bg-bgorange bg-cover bg-center text-center text-white">
        {/* <h1 className="text-112xl absolute left-12 top-0 m-10 focus:animate-affiche1 ">Beauty</h1>
            <h1 className="text-112xl   absolute right-20 top-0 m-10">begins</h1>
            <h1 className="text-10xl  absolute left-12 top-80 ml-10 ">the</h1> 
            <h1 className="text-95xl  absolute left-12 m-10">moment</h1>
            <h1 className="text-13xl absolute right-20 top-96 m-10">You</h1>
            <h1 className="text-10xl  absolute left-12 mt-96 ml-10">decide </h1>
            <h1 className="text-115xl  absolute right-20 bottom-64 m-10">to be </h1>
            <h1 className="text-115xl  absolute left-0 bottom-12 m-20">yourself.</h1>
               <div className="absolute mb-24 h-3/5 w-1/4 bg-affiche bg-cover bg-center">scale-25 
         
        </div> */}

        <h1 className="relative flex flex-wrap justify-around leading-tight  ">
          <span className=" basis-1/2  text-left  text-[9vw] font-bold ">
            Beauty
          </span>
          <span className="ml-auto basis-1/2 font-bold  text-right text-[9vw]">
            begins
          </span>
          <span className=" text-[5vw] w-min text-left font-bold  basis-1/2 leading-tight">the <br></br> moment</span>
          <span className=" ml-auto basis-1/2  text-right text-[10vw] ">You</span>
          <span className=" basis-1/2 text-left  text-[9vw] font-bold leading-tight ">decide</span>
          <span className=" basis-1/2 text-right text-[9vw] font-bold ">to be</span>
          <span className=" basis-1/2 mr-auto text-left text-[9vw] font-bold self-start ">yourself.</span>
        </h1>

        <img
          src="/42.png"
          className=" absolute left-1/2  top-1/2 w-2/5 shrink-0 -translate-x-1/2 -translate-y-1/2"
        />
      </section>
    </>
  );
}
