import React from "react";
import styled from 'styled-components';
import {Link }from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";






// navbar component styling 
const Container = styled.div`
    height:70px;
    background-color:whitesmoke;
    position:fixed;
    left:0;
    z-index:1000;
    right:0;
    top:0;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    // background-color:green;
`
const Logo = styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-color:black;
    
`
const WriteUp = styled.div`
    font-weight:600;
    color:white;
    font-style:italic;
`
const MenuList = styled.div`
    font-size:20px;
    cursor:pointer;
    margin-left:25px;
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    margin-right:20px;
    justify-content:flex-end;
    // background-color:pink;
`
const SearchContainer = styled.div`
    width:250px;
    border:1px solid lightgray;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-left:25px;
    padding:5px;
`
const Input = styled.div`
border:none;
color:lightgray;
`




function Navbar(){
  


    return(
        <Container>
            <Wrapper>
                <Left>
                    
                    <Logo>
                    <WriteUp>Roani</WriteUp>
                    </Logo>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>
                    <MenuList>Home</MenuList>
                    </Link>

                    <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuList>About</MenuList>
                    </Link>

                    <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuList>Contact</MenuList>
                    </Link>

                    <Link to="/postnews" style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuList>Addpost</MenuList>
                    </Link>

                </Left>
                <Right>
                    <SearchContainer>
                        <Input>Search</Input>
                        <FontAwesomeIcon icon={faSearch} />
                        
                    </SearchContainer>

                </Right>
            </Wrapper>

        </Container>
    )
}

export default Navbar;