import { Children, createContext } from 'react';
import  {useContext, useState} from 'react';
import userContext from "./useContext";


const Context = ({Children}) => {

    const [femisora, setFemisora] = useState(0);
    const [figlesia, setFiglesia] = useState(0);
    const [fliceo, setFliceo] = useState(0);

    // const object = {
    //     femisora,
    //     setFemisora,
    //     figlesia,
    //     setFiglesia,
    //     fliceo,
    //     setFliceo
    // }

  return (
     <userContext.Provider 
        value={{femisora, setFemisora }}>
         {Children}
     </userContext.Provider>
  );
};

export default Context;
