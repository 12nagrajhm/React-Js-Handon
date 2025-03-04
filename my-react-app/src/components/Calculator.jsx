
import { useState } from "react";
function Calculator(){
    const[num1,setNum1]=useState("");
    const[num2,setNum2]=useState("");
    const[operation,setOperation]=useState("+");
    const[result,setResult]=useState(null);

    const calculateResult=()=>{
        const number1=Number(num1);
        const number2=Number(num2);

        if(isNaN(number1) || isNaN(number2)){
            setResult("Invalid Input");
            return;
        }
        switch(operation){
            case "+":
                setResult(number1 + number2);
                break;
            case "-":
                setResult(number1-number2);
                break;
            case "*":
                setResult(number1 * number2);
                break;
            case "/":
                setResult(number2 !==0? number1/number2 :"cannot divide by 0");
                break;
            default:
                setResult("select an operation");
        }
    };

    return(
    <div style={{textAlign: "center", marginTop:"20px"}}>
        <h2>Simple Calculator</h2>
        <input type="number" placeholder="Enter first number" value={num1} onChange={(e)=>setNum1(e.target.value)}/>
        <br/><br/>
        <input type="number" placeholder="Enter second number" value={num2} onChange={(e)=>setNum2(e.target.value)}></input>
        <br/><br/>
        <select onChange={(e)=>setOperation(e.target.value)} value={operation}>
            <option value="+">Addition</option>
            <option value="-">Subraction</option>
            <option value="*">Multiplication</option>
            <option value="/">Division</option>
        </select>
        <br/><br/>
        <button onClick={calculateResult}>Calculate</button>
        <br/><br/>
        {result!==null && <h3>Result:{result}</h3>}

    </div>);


}




export default Calculator;