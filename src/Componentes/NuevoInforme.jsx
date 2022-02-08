import React from 'react';
import {useState, useContext} from 'react';
import userContext from "./useContext";


const NuevoInforme = () => {

    const {femisora, setFemisora} = useContext(userContext);

    const cambio = () =>{
        setFemisora(1)
        if (femisora === 1) {
            console.log(femisora);
        }
    }

    return (
        <div>
            <div className="flex flex-col lg:flex-row text-center justify-center md:items-center" >
                <div onChange={() => {cambio()}} className="border-2 md:w-60 md:h-38 md:text-lg hover:bg-gray-300 hover:text-white">
                    Emisora
                </div>
                <div  className=" border-2 md:w-60 md:h-38 md:text-lg hover:bg-gray-300 hover:text-white">
                    Liceo
                </div>
                <div  className="border-2 md:w-60 md:h-38 md:text-lg hover:bg-gray-300 hover:text-white">
                    Iglesia
                </div>
            </div>
        </div>
    );

    
};

export default NuevoInforme;
