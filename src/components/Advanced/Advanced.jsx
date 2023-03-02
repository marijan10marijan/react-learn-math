import Operation from '../Operation';

// CONTEXT API
import AppContext from "../../context/AppContext";
import { useContext } from "react";

const Advanced = () => {

    const {setOperation} = useContext(AppContext)

    return ( 
        <>
            <div className="buttons advanced-buttons">
                <button onClick={()=> setOperation('additionAdvanced')}>ADD</button>
                <button onClick={()=> setOperation('multiplicationAdvanced')}>MUL</button>
                <button onClick={()=> setOperation('subtractionAdvanced')}>SUB</button>
            </div>
            <Operation />
        </>
     );
}

export default Advanced;