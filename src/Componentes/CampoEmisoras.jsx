import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {useState, useEffect} from 'react';

export default function ñCampoEmisoras(props) {

    const {filtrar, setFiltrar } = useState([])

    const {entidad, optione, nombre} = props;

    const [dataList, setDataList] = useState([]);
    // console.log(dataList);
    // console.log(entidad);
    const URL = ' http://localhost:9000/apiscrv/'+ entidad ;
    // console.log(URL);
    const result =  () => {
        fetch(URL)
        .then((responde) => responde.json())
        .then(data => setDataList(data))
    }    

    useEffect(() => {
      result()
    }, []);

  return (
    <>
      <Stack className=' w-full p-2 mt-2 placeholder-gray-400 rounded-md' >
        <Autocomplete
          id="emisora"
          options={dataList.map((option) => {
            const { nombreEmisora, nombreIglesia, frecuenciaEmisora, userName, ciudadEmisora, plantaElectrica } = option;
            // console.log(nombreEmisora);
            // const result = dataList.filter((emisora)=>{
            //   return emisora !== 'Vida Sampues';
            // })
            function result(emisoraBuscada) {
              // eslint-disable-next-line array-callback-return
              let resBusqueda = dataList.filter((emisora) => {
                if (emisora.nombreEmisora
                  .toString()
                  .toLowerCase()
                  .includes(emisoraBuscada.toLowerCase()))
                  return emisora;
              });
              setFiltrar(resBusqueda);
            }
            switch (optione) {
              case '1':
                return nombreEmisora;
                break;
              case '2':
                return nombreIglesia;
                break;
              case '3':
                return nombreLiceo;
                break;
              case '4':
                return frecuenciaEmisora;
                break;
              case '5':
                return userName;
                break;
              case '6':
                return nombreIglesia;
                break;
              case '7':
                return ciudadEmisora;
                break;
              case '8':
                return plantaElectrica;
                break;
              default:
                console.log('No se encontro seleccion');
                break;
            }
          })}
          renderInput={(params) => <TextField {...params} label={nombre}  />}
        />
      </Stack>
  
    </>
    
  );
}