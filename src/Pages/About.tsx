import { styled } from "styled-components";
import Navbar from "../Components/Navbar";


const Container = styled.div`
padding-top:75px;
`
function About(){
    return(
        <Container>
        <Navbar/>
        <h1>About</h1>
    </Container>
    )
}

export default About;