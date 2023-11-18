import { useState } from "react";
import './style.css'
//-----------hook


function Counter() {
    const [count, setCount] = useState(0);
    //console.log(useState(0));

    function adding(){
        setCount(count+1);
    }


    return (
        <div className="main-content">
            <h1>Count = {count}</h1>
            <div onClick={() => adding()}>
                <button>Plus</button>
            </div>
        </div>
    );
}
export default Counter;
