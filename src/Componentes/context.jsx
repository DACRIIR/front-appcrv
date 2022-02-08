import  {useState} from 'react';
import UserContext from "./UserContext";


const Context = ({children}) => {

    const [femisora, setFemisora] = useState(0);
    const [figlesia, setFiglesia] = useState(0);
    const [fliceo, setFliceo] = useState(0);

    const contexValue = {
         femisora,
         setFemisora,
         figlesia,
         setFiglesia,
         fliceo,
         setFliceo
     }

  return (
     <UserContext.Provider value={contexValue}>
         {children}
     </UserContext.Provider>
  );
};

export default Context;
