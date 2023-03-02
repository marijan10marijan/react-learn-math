import { useState } from "react"
import ShowLevel from "./ShowLevel";

// CONTEXT API
import AppContext from "../context/AppContext";

const Header = () => {

    const [level, setLevel] = useState('');
    const [operation , setOperation] = useState(''); 

    return ( 
        <>
            <AppContext.Provider value={{level, operation, setOperation}}>
                <h1 className="title">Matematical Quiz</h1>
                <div className="level">
                    <div className="buttons">
                        <button className="begginer" onClick={()=> setLevel('begginer')}>Begginer</button>
                        <button className="advanced" onClick={()=> setLevel('advanced')}>Advanced</button>
                        <button onClick={()=> setLevel('professional')}>Professional</button>
                    </div>
                </div>
                <ShowLevel />
            </AppContext.Provider>
        </>
     );
}
 
export default Header;