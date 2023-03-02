import Operation from '../Operation';

// CONTEXT API
import AppContext from "../../context/AppContext";
import { useContext } from "react";

const Professional = () => {

    const { setOperation} = useContext(AppContext)

    return ( 
        <>
            <div className="buttons professional-buttons">
                <button onClick={()=> setOperation('additionPro')}>ADD</button>
                <button onClick={()=> setOperation('multiplicationPro')}>MUL</button>
                <button onClick={()=> setOperation('subtractionPro')}>SUB</button>
            </div>
            <Operation />
        </>
     );
}

export default Professional;