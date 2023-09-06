import { styled } from "styled-components";
import Navbar from "../Components/Navbar";
import Home from "./Home";
import { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const Container = styled.div`
padding-top:75px;
diplay:flex;
align-item:center;
justify-content:center;
`;

const Formnews = styled.form`
margin-top:50px;
display:flex;
align-item:center;
justify-content:center;

`
const AddNews = styled.div`
width: 28%;
// height:490px;
border:1px solid gray;
display: flex;
align-items:center;
justify-content:center;
flex-direction: column;
background-color:whitesmoke;
border-radius:20px;
margin-bottom: 10px;
    @media screen and (max-width: 767px) {
        width: 95%;
    }
`
const Inputdiv = styled.input`
width:90%;
padding:15px;
margin:20px;
border:none;
border-radius:5px
`

const Textdiv = styled.textarea`
width:90%;
padding:15px;
margin:15px;
border:none;
border-radius:5px
`
const Addbtn = styled.button`
// width:90px;
padding:15px;
background-color:black;
color:white;
border:none;
font-size:15px;
border-radius:4px;
margin-bottom:20px;
cursor:pointer;
    @media screen and (max-width: 767px) {
        padding:18px 30px;
    }
`
function PostNews(){
    const[addImage, changeAddImage]=useState("");
    const[addCategory, changeAddCategory]=useState("");
    const[addTitle, changeAddTitle]=useState("");
    const[addContent, changeAddContent]=useState("");
    const[addDate, changeAddDate]=useState("");

 
    const handleChange=(event:any)=>{
        switch(event.target.id){
            case"addImage":
            changeAddImage(event.target.value)

            break;
            case"addCategory":
            changeAddCategory(event.target.value)

            break;
            case"addTitle":
            changeAddTitle(event.target.value)

            break;
            case"addContent":
            changeAddContent(event.target.value)

            break;
            case"addDate":
            changeAddDate(event.target.value)

            break;
        }

    }


    let storedNews:any;
    if(localStorage.getItem("News")) {
        storedNews = localStorage.getItem("News");
        storedNews = JSON.parse(storedNews);
    } else {
        storedNews = []
    }
    const[posts, addNewPost] = useState(storedNews);

    const addPost=(event:any)=>{
        if(addImage == "" ){
            Notify.failure('All fields are required');
        }else if(addCategory == ""){
            Notify.failure('All fields are required');
        }else if(addTitle == ""){
            Notify.failure('All fields are required');
        }else if(addContent == "" ){
            Notify.failure('All fields are required');

        }else if(addDate == "" ){
            Notify.failure('All fields are required');
        }else{
        let newItem={
            "id":addTitle,
            "image":addImage,
            "category":addCategory,
            "title":addTitle,
            "content":addContent,
            "date":addDate
        };
        
        let newitems:any =[...posts,newItem];
        addNewPost(newitems);
        
        localStorage.setItem("News", JSON.stringify(newitems));
        
        Notify.success("Post added successfully");
        changeAddImage("")
        changeAddCategory("")
        changeAddTitle("")
        changeAddContent("")
        changeAddDate("")
        
    
    }

    }









    return(
        <Container >
      
             <Navbar/>
             <Formnews>
            <AddNews>
            <Inputdiv id="addImage" value={addImage} type="text" placeholder="Image url "  onChange={handleChange}/>
            <Inputdiv id="addCategory" value={addCategory} type="text" placeholder="Category" onChange={handleChange}/>
            <Inputdiv id="addTitle" value={addTitle} type="text" placeholder="Title" onChange={handleChange}/>
            <Textdiv  id="addContent" value={addContent} placeholder="Content" onChange={handleChange}/>
            <Inputdiv id="addDate" value={addDate} type="text" placeholder="Date" onChange={handleChange}/> 

            <Addbtn type="button" onClick={addPost}>Add News</Addbtn>
            {/* <button className="btn btn-success" type="button" onClick={addPost}>Add News</button> */}
                      

            </AddNews>
             </Formnews>
             </Container >
            
        
    )

}
export default PostNews;