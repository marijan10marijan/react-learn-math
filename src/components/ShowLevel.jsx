import Begginer from "./Begginer/Begginer";
import Advanced from './Advanced/Advanced';
import Professional from './Professional/Professional';

// CONTEXT API
import AppContext from "../context/AppContext";
import { useContext } from "react";

const ShowLevel = () => {

    const {level} = useContext(AppContext)

    if(level === 'begginer'){
        return ( 
            <Begginer />
        )
    } else if(level === 'advanced'){
        return (
            <Advanced />
        )
    } else if(level === 'professional'){
        return (
            <Professional />
        )
    }


}
 
export default ShowLevel;