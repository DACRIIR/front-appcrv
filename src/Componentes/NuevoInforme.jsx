import React from 'react';
import { useContext } from 'react';
import UserContext from "./UserContext";


const NuevoInforme = () => {

    const {femisora, setFemisora} = useContext(UserContext);

    const cambio = () =>{
        setFemisora(femisora+1);
        console.log(femisora);
        if (femisora === 1) {
            console.log(femisora);
        }
    }

    return (
        <div>
            <div className="flex flex-col lg:flex-row text-center justify-center md:items-center" >
                <div onClick={cambio} className="border-2 md:w-60 md:h-38 md:text-lg hover:bg-gray-300 hover:text-white">
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
