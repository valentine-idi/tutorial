import { useState } from "react";
import Button from "react-bootstrap/Button";

function Message(){
    const [data, setData] = useState({name: "", isNameValid: false});

    const setInputValue = (e: { target: any; })=>{
        const newData = {...data};
        newData.name = e.target.value;
        setData(newData)
    }

    const greet = ()=>{
        const newData = {...data};
      
        if(!newData.name) return
        newData.isNameValid = true;

        setData(newData)
    }

    return (
        <div>
            <div>
                <input name="name" value={data.name} onChange={setInputValue}/> 
                <Button onClick={greet}>SetName</Button>
            </div>
            
            {data.isNameValid && <div>Hello {data.name}</div>}
        </div>
    
    )


}
export default Message;