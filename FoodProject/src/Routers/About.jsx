import Heading from "../Components/Header"
import AboutComponent from "./AboutComponent"
import AboutClass from "./AboutClass"
const About = ()=>{
    return(
        <div>
            <Heading/>
            <AboutComponent name="Subrat Anand (functional)"/> 
            <AboutClass name="Subrat Anand (Classs)"/>
        </div>
    )
}
export default About