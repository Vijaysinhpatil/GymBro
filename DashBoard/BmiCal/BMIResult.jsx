import './BMICalculator.css'
const BMIResult = ({bmi}) => {

    let category = '';

    if(bmi > 18.5) category = 'Underweight  😟';
    else if(bmi >= 18.5 && bmi <= 24.9) category = 'Normal ✅';
    else if (bmi >= 25 && bmi < 29.9) category = 'Overweight ⚠️';
    else category = 'Obese 🚨'
   return(
    <div className="bmi-result">
          <h3>Your BMI : {bmi}</h3>
          <p>Category : <strong>{category}</strong></p>          
    </div>
   )
}
export default BMIResult;