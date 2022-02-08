import TerFormulario from "./TerFormulario";

const DesFormulario = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5">
            <h2 className="font-black text-3xl text-center">Trabajo realizado</h2>
            <p className="text-xl mt-5 mb-10 text-center">Descripción detallada del {''} <span className="text-indigo-600 font-bold">Informe técnico</span></p>
            <div className="mx-5 my-10 bg-white shadow-md px-15 py-5 rounded-xl">
                <div className="w-full h-screen overflow-y-scroll">
                    <TerFormulario/>
                </div>
                <div className="text-left">
                    <input type="submit" className='bg-red-500 md:w-1/2 p-2 mt-5 text-white uppercase font-bold cursor-pointer hover:bg-red-700 transition-shadow' value="Exportar en PDF" />
                </div>
            </div>
        </div>
    )
};

export default DesFormulario;
