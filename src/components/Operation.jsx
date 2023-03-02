// BEGGINER
import Add from "./Begginer/Add";
import Multiplication from "./Begginer/Multiplication";
import Subtraction from "./Begginer/Subtraction";

// ADVANCED
import AdvancedlAdd from './Advanced/AdvancedAdd'
import AdvancedlMultiplication from './Advanced/AdvancedMultiplication'
import AdvancedlSubtraction from './Advanced/AdvancedSubtraction'

//PROFESSIONAL
import ProAdd from "./Professional/ProAdd";
import ProMultiplication from "./Professional/ProMultiplication";
import ProSubtraction from "./Professional/ProSubtraction";

// CONTEXT API
import { useContext } from "react";
import AppContext from "../context/AppContext";


const Operation = () => {
    
    const {operation, level} = useContext(AppContext)
    
    if(level === 'begginer'){
        if(operation === 'addition'){
            return (
                <Add />
            )
        } else if(operation === 'multiplication'){
            return (
                <Multiplication />
            )
        } else if(operation === 'subtraction'){
            return (
                <Subtraction />
            )
        }
    } else if(level === 'advanced'){
        if(operation === 'additionAdvanced'){
            return (
                <AdvancedlAdd />
            )
        } else if(operation === 'multiplicationAdvanced'){
            return (
                <AdvancedlMultiplication />
            )
        } else if(operation === 'subtractionAdvanced'){
            return (
                <AdvancedlSubtraction />
            )
        }
    }else if(level === 'professional'){
        if(operation === 'additionPro'){
            return (
                <ProAdd />
            )
        } else if(operation === 'multiplicationPro'){
            return (
                <ProMultiplication />
            )
        } else if(operation === 'subtractionPro'){
            return (
                <ProSubtraction />
            )
        }
    }
    

}
 
export default Operation;