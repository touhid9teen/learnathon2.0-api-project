import { useState } from "react";


function Searchbar(){
    const  [value, SetValue] = useState('');
    
    const onchange = (event) =>{
        console.log(event.tRGET.Vlue);
    }
    
    const onSearch=(searchTerm)=>{
        console.log('search', searchTerm);
    }
    return(
        <div>
            <h1>Search</h1>
            <div className="search-container"/>
            <div className="search-inner"/>

            <input type="text" value={value} onchange={onchange}/>
            <button onClik={()=>onchange(value)}>Search</button>
        </div>
    )
}
export default Searchbar;