import { styled } from "styled-components"
import Navbar from "../Components/Navbar"


const Container = styled.div`
padding-top:75px;
`

function Contact(){
    return(
        <Container>
            <Navbar/>
            <h1>Contact</h1>
        </Container>
    )
}

export default Contact