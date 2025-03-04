import { useState } from "react";


function MulTwoNumbers(){
    const[num1,setNum1]=useState("")
    const[num2,setNum2]=useState("")
    const[mul,setMul]=useState(null)

    const handleMultiplication=()=>{
        setMul(Number(num1) * Number(num2))
    };
    return(<div>
        <h2>Multiplication of two numbers</h2>
        <input type="number" placeholder="Enter the first number" value={num1} onChange={(e)=>setNum1(e.target.value)}/><br/><br/>
        <input type="number" placeholder="Enter second number" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
        <br/><br/>
        <button onClick={handleMultiplication}>Mul</button>
        {mul!==null && <h3>mul:{mul}</h3>}
    </div>)

}


export default MulTwoNumbers;