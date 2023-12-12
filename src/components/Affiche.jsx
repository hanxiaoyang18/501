export default function Affiche() {
    
    return (
        <>
            <section className="bg-bgorange relative  bg-cover bg-center h-screen w-auto flex flex-col justify-center text-center items-center text-white">
           
            <h1 className="text-112xl  absolute left-12 top-0 m-10 md:animate-affiche1 ">Beauty</h1>
            <h1 className="text-112xl  absolute right-20 top-0 m-10">begins</h1>
            <h1 className="text-10xl absolute left-12 top-80 ml-10 ">the</h1> 
            <h1 className="text-95xl absolute left-12 m-10">moment</h1>
            <h1 className="text-13xl absolute right-20 top-96 m-10">You</h1>
            <h1 className="text-10xl absolute left-12 mt-96 ml-10">decide </h1>
            <h1 className="text-115xl absolute right-20 bottom-64 m-10">to be </h1>
            <h1 className="text-115xl absolute left-0 bottom-12 m-20">yourself.</h1>

            <div className="bg-affiche bg-cover absolute bg-center h-3/5 w-1/4 mb-24">
                <image ></image>
            </div>
     
            </section>
        </>
    );
}