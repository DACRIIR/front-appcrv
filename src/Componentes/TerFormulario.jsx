import { useState } from 'react';
import CampoEmisoras from "./CampoEmisoras";

const TerFormulario = () => {

    const [check, setCheck] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [tecnico, setTecnico] = useState(false);
    const [transmisores, setTransmisores] = useState(false);
    const [electrica, setElectrica] = useState(false);
    const [transElectrica, setTransElectrica] = useState(false);

    const comprobar = (e) => {
        if (check) {
            setCheck(false);
        } else {
            setCheck(true);
        }
        if (check == false) {
            setTransmisores(false);
            setElectrica(false);
            setTransElectrica(false);
        }
        return check
    }

    const comprobar2 = (e) => {
        if (check2) {
            setCheck2(false);
        } else {
            setCheck2(true);
        }

        return check2
    }

    const tecnicomve = (e) => {
        if (tecnico) {
            setTecnico(false);
        } else {
            setTecnico(true);
        }

        return tecnico
    }

    const manTransmisores = () => {
        if (transmisores) {
            setTransmisores(false);
        } else {
            setTransmisores(true);
        }

        return transmisores
    }

    const plantaElectrica = () => {
        if (electrica) {
            setElectrica(false);
        } else {
            setElectrica(true);
        }

        return transmisores
    }

    const tElectrica = () => {
        if (transElectrica) {
            setTransElectrica(false);
        } else {
            setTransElectrica(true);
        }
    }

    return (

        <div className="mx-5 my-10 bg-white px-18 py-10 text-center">
            <p className="text-xl mt-5 mb-10 text-center">Selecciona el trabajo realizado a {' '}
                <span className="text-indigo-600 font-bold">
                    Diligenciar
                </span>
            </p>


            <label className="text-xl text-indigo-600 font-bold m-5" htmlFor="transmisores">Transmisores</label>
            <input onClick={comprobar} type="checkbox" name="" id="transmisores" />
            <label className="text-xl text-indigo-600 font-bold m-5" htmlFor="estudios">Estudios</label>
            <input onClick={comprobar2} type="checkbox" name="" id="estudios" />

            {check &&
                <div className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                    <div className="w-full text-left">
                        <label className='text-lg text-gray-700 font-bold m-5' htmlFor="mtransmisores">
                            Mantenimiento a trasmisores
                        </label>
                        <input onClick={manTransmisores} type="checkbox" name="" id="mtransmisores" />
                    </div>

                    {transmisores &&
                        <div >
                            <CampoEmisoras entidad="emisoras/listEmisoras" optione='1' nombre="Tranmisores" />
                            {/* <label htmlFor="transmisores">Transmisores: {' '}</label>
                            <input type="text" name="" id="transmisores" /> */}
                        </div>
                    }

                    <div className="w-full text-left">
                        <label className='text-lg text-gray-700 font-bold m-5' htmlFor="planta">
                            Planta electrica
                        </label>
                        <input onClick={plantaElectrica} type="checkbox" name="" id="planta" />
                    </div>


                    {electrica &&
                        <div className='m-5'>
                            <CampoEmisoras entidad="emisoras/listEmisoras" optione='8' nombre="Planta electrica" />
                            {/* <label htmlFor="marca">Marca: {' '}</label>
                            <input className='m-5' type="text" name="" id="marca" /><br />
                            <label htmlFor="potencia">Potencia: {' '}</label>
                            <input className='m-5' type="text" name="" id="potencia" /><br />
                            <label htmlFor="motor">Motor: {' '}</label>
                            <input className='m-5' type="text" name="" id="motor" /> */}
                        </div>
                    }

                    <div className="w-full text-left">
                        <label className='text-lg text-gray-700 font-bold m-5' htmlFor="transferencia">
                            Transferencia electrica
                        </label>
                        <input onClick={tElectrica} type="checkbox" name="" id="transferencia" />
                    </div>

                    {transElectrica &&
                        <div className='m-5'>
                            <label htmlFor="marca">Tablero de distribución: {' '}</label>
                            <input className='m-5' type="text" name="" id="marca" /><br />
                            <label htmlFor="potencia">Tablero de circuitos: {' '}</label>
                            <input className='m-5' type="text" name="" id="potencia" /><br />
                            <label htmlFor="motor">Breaker: {' '}</label>
                            <input className='m-5' type="text" name="" id="motor" />
                        </div>
                    }

                </div>
            }

            {
                check2 &&
                <div className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                    <label htmlFor="equipo">Equipo intervenido : </label>
                    <input className='border-2 w-1/2 p-2 mt-2 placeholder-gray-400 rounded-md' type="text" name="" id="equipo" />
                </div>
            }


            <div className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Diagnostico' cols="30" rows="10"></textarea>
                <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='¿Qué se realizo?' cols="30" rows="10"></textarea>
                <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Conclusiones' cols="30" rows="10"></textarea>
                <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Recomendaciones' cols="30" rows="10"></textarea>
            </div>

            <div className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                <label className='text-xl text-indigo-600 font-bold m-5' htmlFor="personal">
                    Personal de area técnica
                </label>
                <input onClick={tecnicomve} type="checkbox" name="" id="personal" />
            </div>

            {
                tecnico &&

                <div className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                    <label htmlFor="tecnica">Fecha y hora de salida: </label><br />
                    <input type="date" id="tecnica" /><br />
                    <input type="time" id="tecnica" /><br />

                    <label htmlFor="radial">Fecha y Hora de llegada a la estación radial a intervenir: </label><br />
                    <input type="date" id="radial" /><br />
                    <input type="time" id="radial" /><br />

                    <label htmlFor="salida">Fecha y hora de salida de la estación intervenida si son varios días, especifiquelos por favor</label><br />
                    <input type="date" id="salida" /><br />
                    <input type="time" id="salida" /><br />

                    <label htmlFor="regreso">Fecha y hora de regreso a bogotá</label><br />
                    <input type="date" id="regreso" /><br />
                    <input type="time" id="regreso" /><br />

                    <label htmlFor="llegada">Fecha y hora de llegada a bogotá</label><br />
                    <input type="date" id="llegada" /><br />
                    <input type="time" id="llegada" /><br />

                    <label htmlFor="dias">Días a compensar: {' '}</label>
                    <input type="text" name="" id="dias" /><br /><br />

                    <textarea name="" id="" cols="30" placeholder='Observaciones del viaje' rows="10"></textarea>
                </div>

            }

            <div className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                <h3 className="text-xl text-indigo-600 font-bold">Anexos</h3>
                <input type="file" name="" id="" />
            </div>
        </div >

    )
};

export default TerFormulario;
