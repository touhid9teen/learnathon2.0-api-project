import { useState } from "react";
import "./style.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
//-----------hook

function Counter() {
    const [count, setCount] = useState(0);
    //console.log(useState(0));

    function adding() {
        setCount(count + 1);
    }

    return (
        <div >
            <Navbar />
            <div className="main-content">
               <h1>Count = {count}</h1> 
               <div onClick={() => adding()}>
                    <button className="button">Click me</button>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}
export default Counter;
