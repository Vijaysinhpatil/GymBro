 import Form from "./Component/Form"
import Read from "./Component/Form/Services/Read"
import HeroSection from "./Component/HeroSection"
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from '../src/DashBoard/Home'
import Signup from "./Component/Form/Signup"

import Membership from "./DashBoard/Membership"
// import TrainerCard from "./DashBoard/Trainers/TrainerCard"
import Trainer from "./DashBoard/Trainers/Trainer"
import Program from './DashBoard/Programs/index'
import Reviews from './DashBoard/Reviews/index'
import BMICalculator from "./DashBoard/BmiCal/BMICalculator"
import AboutUs from './DashBoard/AboutUs/index'
import PageNotFound from './Component/PageNotFound/index'
import ContactUs from "./DashBoard/ContactUs/index"
function App() {
 

  return (
    <BrowserRouter>
         
      <Routes>
         <Route exact path="/" element={<HeroSection/>}/>
         <Route exact path="/form" element={<Form/>}/>
         <Route exact path="/form/table" element={<Read/>}/>
         <Route exact path="/form/signup" element={<Signup/>}/>
         <Route exact path="/dashboard" element={<Home/>}/>
         
         <Route exact path="/dashboard/membership" element={<Membership/>}/>
         <Route exact path="/dashboard/trainers" element={<Trainer/>}/>
         <Route exact path="/dashboard/program" element={<Program/>}/>
         <Route exact path="/dashboard/review" element={<Reviews/>}/>
         <Route exact path="/dashboard/bmi" element={<BMICalculator/>}/>
         <Route exact path="/dashboard/about" element={<AboutUs/>}/>
         <Route exact path="/dashboard/contact" element={<ContactUs/>}/>
         <Route exact path="*" element={<PageNotFound/>}/>
        
       </Routes>

    </BrowserRouter>

    
  )
}

export default App
