
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import '../index.css';
const Container = styled.div``;

const Wrapper = styled.div`
display:flex;

`
const BlogContainer = styled.div`
width:100%;
height:150vh;
padding-top:20px;
// background-color:red;
`
const Info = styled.div`
width:100%;
height:80px;
// background-color:yellow;
display:flex;
text-align:center;
align-items:center;

`
const InfoContentLeft = styled.div`
flex:1;
display:flex;
align-item:center;
justify-content:center;

`

const InfoContent = styled.h1`

font-size:30px;
font-style:italic;
font-weight:600;
`

const BlogBlocks = styled.div`
width:100%;
// margin-top:20px;
display:flex;
justify-content:center;
align-item:center;

background-color:whitesmoke;
`
const BlogBlocksLeft = styled.div`
flex:1;
// background-color:red;
`
const BlogBlocksRight = styled.div`
// background-color:blue;
flex:2;
`
const NewsDiv = styled.div`
width:90%;
height:150px;
display:flex;
margin:20px;
border-radius:12px;
background-color:white;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// border:1px solid grey;
overflow-y:hidden;
`
const Imagediv = styled.div`
width:30%;
// height:180px;
// background-color:purple;
`
const Img = styled.img`
width:100%;
height:100%;
object-fit:cover;

`
const NewsContentdiv = styled.div`

width:70%;
// height:250px;
padding: 15px 15px 0;

// background-color:green

`
const Categorydiv = styled.p`
font-weight:400;
font-size:20px;
margin-bottom:5px;
`
const Titleiv = styled.h3`
margin-bottom:7px;
height:18px;
overflow-y:hidden;
`
const Contentdiv = styled.p`
margin-bottom:7px;
text-align:justify;
height:35px;
overflow-y:hidden;
`
const Datediv = styled.p`

font-weight:600;
font-style:italic;
`

const Formnews = styled.form`
margin-top:15px;
display:flex;
align-item:center;
justify-content:center;

`
const AddNews = styled.div`
width: 350px;
border:1px solid gray;
background-color:whitesmoke;
border-radius:20px;
margin-bottom: 10px;
`
const Inputdiv = styled.input`
width:300px;
padding:15px;
margin:20px;
border:none;
border-radius:5px
`

const Textdiv = styled.textarea`
width:300px;
padding:15px;
margin:15px;
border:none;
border-radius:5px
`
const Addbtn = styled.button`
width:90px;
height:40px;
background-color:black;
color:white;
border:none;
font-size:15px;
border-radius:4px;
margin-bottom:10px;
margin-left:120px;
cursor:pointer;
`





function Home(){
    
const removeList=(id:string)=>{
    let getAllNews:any = localStorage.getItem("News");
    getAllNews = JSON.parse(getAllNews);
    let currentNews:any;
    currentNews = getAllNews.filter((obj:any) => obj.id != id);
    addNews(currentNews);
    localStorage.setItem("News", JSON.stringify(currentNews));
    console.log(getAllNews.filter((obj:any) => obj.id != id), id);

}
    // lets map through the newsitem 
    let storedNews:any;
    if(localStorage.getItem("News")) {
        storedNews = localStorage.getItem("News");
        storedNews = JSON.parse(storedNews);
    } else {
        storedNews = []
    }
    const [allNews,addNews]=useState(storedNews);
    return(
        <Container>
            <Navbar/>
            <Wrapper>
                <BlogContainer>
                {/* <Info>
                    <InfoContentLeft>
                    <InfoContent>RoaniBlog</InfoContent>
                    </InfoContentLeft>
  
                </Info> */}

                {/* <BlogBlocks>
                    
                    <BlogBlocksRight>
                    {allNews.map((news:any) => <NewsDiv>
                        <Imagediv key={news.id}>
                            <Img src={news.image}/>
                        </Imagediv>
                        <NewsContentdiv>
                        <Categorydiv>{news.category}</Categorydiv>
                        <Titleiv>{news.title}</Titleiv>
                        <Contentdiv>
                        {news.content} 
                        </Contentdiv>
                        <Datediv>{news.date}</Datediv>
                        </NewsContentdiv>
                    </NewsDiv>
                    
                    )}
                    </BlogBlocksRight>
                    
                </BlogBlocks> */}
                <BlogBlocks>

<main>

<section  className="py-5 text-center container">
  <div  className="row py-lg-5">
    <div  className="col-lg-6 col-md-8 mx-auto">
      <h1  className="fw-light">RoaniBlog</h1>
      <p  className="lead text-body-secondary">Welcome to RoaniBlog - Your Window to the World's Latest News and Happenings! we are dedicated to keeping you informed about the most current events, developments, and stories from across the globe</p>
      
    </div>
    
  </div>
</section>

<div  className="album py-5 bg-body-tertiary">
  <div  className="container">

    <div  className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        {allNews.map((news:any, index:number) =>
            <div key={index} className="col">
                <div className="card shadow-sm">
                <img src={news.image}  className="bd-placeholder-img card-img-top" width="100%" height="225" />
                <div  className="card-body">
                <p className='caTegory'>{news.category}</p>
                    <strong>{news.title}</strong>
                    <p  className="card-text">{news.content}</p>
                    <small >{news.date}</small>
                    <div  className="d-flex justify-content-between align-items-center">
                    <div  className="btn-group">
                        {/* <button type="button" onClick={() => removeList(news.id)} className="btn btn-sm btn-outline-secondary">Delete</button> */}
                        {/* <button type="button"  className="btn btn-sm btn-outline-secondary">Edit</button> */}
                    </div>
                    <button type="button" onClick={() => removeList(news.id)} className="btn btn-sm btn-outline-secondary">Delete</button>
                    {/* <small  className="text-body-secondary">9 mins</small> */}
                    </div>
                </div>
                </div>
            </div>
        )}
    </div>
  </div>
</div>

</main>
</BlogBlocks>
                
                

                </BlogContainer>

            </Wrapper>

         </Container>

         
        
         



       

    )
}

export default Home;
