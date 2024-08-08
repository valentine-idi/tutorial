import { useState } from "react";

function Message(){
    var [counter, setCounter] = useState(0);

    const increaseCounter = ()=>{

        var number = counter;
        number += 1;
        setCounter(number);
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={()=>increaseCounter()}>Increase Count</button>
        </div>
    
    )


}
export default Message;