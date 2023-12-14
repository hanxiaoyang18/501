
export default function Head() {

  return (
    <>

      <h1 className=" text-4xl text-center justify-center mt-10 mb-3 font-semibold" >CHANEL</h1>

      <div className="flex text-base flex-row text-center justify-center">
        <a href="https://www.chanel.com/fr/haute-couture/">
        <button className="pl-6 pr-6 p-4 hover:bg-slate-200 ">
          HAUTE COUTURE
        </button>
        </a>
        <button className="pl-6 pr-6 p-4 hover:bg-slate-200">
          MODE
        </button>
        <a href="https://www.chanel.com/fr/haute-joaillerie/">
        <button className="pl-6 pr-6 p-4 hover:bg-slate-200">
          HAUTE JOAILLERIE
        </button>
        </a>
        <button className="pl-6 pr-6 p-4 hover:bg-slate-200 ">
          JOAILLERIE
        </button>
        <button className="pl-6 pr-6 p-4 hover:bg-slate-200">
          HORLOGERIE
        </button>
        <button className="pl-6 pr-6 p-4 hover:bg-slate-200">
          LUNETTES
        </button>
        <button className="pl-6 pr-6 p-4 hover:bg-slate-200">
          PARFUMS
        </button>
        <button className=" pl-6 pr-6 p-4 hover:bg-slate-200 ">
          MAQUILLAGE
        </button>
        <button className="pl-6 pr-6 p-4 hover:bg-slate-200 ">
          SOIN
        </button>
        <button className="pl-6 pr-6 p-4 hover:bg-slate-200">
          ABOUT CHANEL
        </button>
      </div>
    </>
  );
}