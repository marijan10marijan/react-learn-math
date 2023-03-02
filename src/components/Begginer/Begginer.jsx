import Operation from "../Operation";

// CONTEXT API
import AppContext from "../../context/AppContext";
import { useContext } from "react";

const Begginer = () => {

    const {setOperation} = useContext(AppContext)

    return ( 
        <> 
            <div className="buttons begginer-buttons">
                <button onClick={()=> setOperation('addition')}>ADD</button>
                <button onClick={()=> setOperation('multiplication')}>MUL</button>
                <button onClick={()=> setOperation('subtraction')}>SUB</button>
            </div>
            <Operation/>
        </>
     );
}
 
export default Begginer;