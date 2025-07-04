import { use, useState } from "react";
import BMIResult from './BMIResult'
import './BMICalculator.css'
const BMICalculator = () => {

    const [height , setHeight] = useState('');
    const [weight , setWeight] = useState('');
    const [bmi , setBmi] = useState(null)
    

    const calculateBMI = () => {

        if(height && weight){
            const HeightInMeters = height / 100;
            const bmiValue = weight / (HeightInMeters * HeightInMeters)
            setBmi(bmiValue.toFixed(2));
        }
    }
    return(
        <div className="bmi-calculator">
             <h2>BMI Calculator</h2>

             <div className="form">
                    <input type="number" 
                     placeholder="Height(cm)"
                     value={height}
                     onChange={(e) => setHeight(e.target.value)}
                    />
                    <input type="number" 
                     placeholder="Weight(cm)"
                     onChange={(e) => setWeight(e.target.value)}
                    />
                    <button
                    onClick={calculateBMI}
                    >Calculate</button>
             </div>
             {
                bmi && <BMIResult bmi = {bmi}/>
             }
        </div>
    )
}
export default BMICalculator;