import {useState}from 'react'

import "./Bmicalculator.css"
import bmigif from "../images/tools.png"
function Bmicalculator() {
    const[height,setHeight]=useState("");
    const[weight,setWeight]=useState("");
    const [bmi,setBmi]=useState(null);
    const[bmistatus,setBmistatus]=useState("");
    const[heightvalidation,setheightvalidation]=useState("")
    const[weightvalidation,setweightvalidation]=useState("")
    const CalculateBmi=(e)=>{
      e.preventDefault();
      validate();
      if(height && weight)
      {
      const heightinmeters=height/100;
      const bmivalue=weight/(heightinmeters*heightinmeters);
      setBmi(bmivalue.toFixed(2));
      if(bmivalue <18.5)
      {
        setBmistatus("underweight")
      }
      else if(bmivalue >=18.5 && bmivalue <=22.9){
        setBmistatus("normalweight")
      }
      else if(bmivalue >=23 && bmivalue <=24.9){
        setBmistatus("overweight")
      }
      else if(bmivalue >=25 && bmivalue <=24.9){
        setBmistatus("pre-obese")
      }
      else{
        setBmistatus("obese")
      }
      }
      else{
        setBmi(null);
        setBmistatus("")
      }

    }
    const handleheightinput=(e)=>{
        setHeight(e.target.value); 
        setheightvalidation("")
        validate();
    }
        const handleWeightinput=(e)=>{
            setWeight(e.target.value); 
            setweightvalidation("")
            validate();
        }

        const validate=()=>{
            if(height==="")
            {
             setheightvalidation("please Enter the height value")
            }
            else if(height>1000)
            {setheightvalidation("please Enter the correct value")}
            else
            {console.log("add sucessfully")}
            if(weight==="")
            {
             setweightvalidation("please Enter the weight value")
            }
            else if(weight>1000)
            {setweightvalidation("please Enter the correct value")}
            else
            {console.log("add sucessfully")}
        }


    return (
        <>
            <div className="container">
                <div className='data-container'>
                  
                    <div className="data">
                        <img src={bmigif} alt="" />
                    </div>
                    <div className="box">

                        <div className="height">
                        <h1> BMI CALCULATOR</h1>
                            <label htmlFor="height">Height</label>
                            <input type="number" inputMode='number' placeholder="Enter the height" value={height} onChange={handleheightinput}/>
                        {heightvalidation &&<div className="error">{heightvalidation}</div>}
                        </div>
                        <div className="weight">
                            <label htmlFor="height">Weight</label>
                            <input type="number"inputMode='number' placeholder="Enter the weight" value={weight} onChange={handleWeightinput} />
                            {weightvalidation &&<div className="error">{weightvalidation}</div>}
                        </div>
                        <button type="sumbit" onClick={CalculateBmi}>BMI VAlUE</button>
                       {bmi!==null&& <div className="result">
                            <p>your BMI value is :{bmi}</p>
                            <p>your BMI status is: {bmistatus}</p>
                        </div>
}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bmicalculator