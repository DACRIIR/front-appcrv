import { useState } from "react";
import CampoEmisoras from "./CampoEmisoras";

const Formulario = (props) => { 

        return ( 
  
            <div className="md:w-1/2 lg:w-2/5 mx-5">
    
                <h2 className='font-black text-3xl text-center'>Datos del Informe</h2>
                <p className='text-lg mt-5 text-center mb-10'>
                    Añade la información del {''}
                    <span className='text-indigo-600 font-bold '>Informe técnico</span>
                </p>
    
                <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
    
                    <div className=" mb-5">
                        <CampoEmisoras entidad="emisoras/listEmisoras" optione='1' nombre="Nombre de la emisora" />
                    </div> 
                    <div className='mb-5'>
                        <CampoEmisoras entidad="emisoras/listEmisoras" optione='4' nombre="Nombre de frecuencia" />
                    </div>
    
                    <div className='mb-5 '>
                      <CampoEmisoras entidad="user/listUser" optione='5' nombre="Nombre del técnico" />
                    </div>
                    {/* http://localhost:9000/apiscrv/iglesias/listIglesias */}
                    <div className='mb-5 '>
                        <CampoEmisoras entidad="iglesias/listIglesias" optione='6' nombre="Nombre de la sede" />
                    </div>
                    {/* http://localhost:9000/apiscrv/emisoras/listEmisoras/ */}
                    <div className='mb-5 '>
                      <CampoEmisoras entidad="emisoras/listEmisoras" optione='7' nombre="Ubicacion" />
                    </div>
                    <div className='mb-5'>
                        <label className='block text-gray-700 uppercase font-bold ' htmlFor="Alta"> Fecha </label>
                        <input type="date" id='Alta' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
                    </div>
                    <div className='mb-5'>
                        <label className='block text-gray-700 uppercase font-bold ' htmlFor="descripcion"> Descripción breve </label>
                        <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="descripcion" placeholder='Describe brevemente lo que se hizo..'  />
                    </div>
    
                     <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-shadow' value="Crear informe" />
                </form>
            </div>
    
        );

};

export default Formulario; 
