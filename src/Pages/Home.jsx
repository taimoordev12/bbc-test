import './Home.style.css';
import React, { useState, useEffect } from "react"
import axios from 'axios'
 import Container from '@material-ui/core/Container';
import Article from '../Components/Article/Article';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
 import Pagination from '@material-ui/lab/Pagination';
 import { useHistory } from "react-router-dom";

function Home() {
const history = useHistory();
 let [article, setArticle] = useState({})
 let [currentArticle, setcurrentArticle] = useState(1);
 let [loading, setLoading] = useState(true);
 



 useEffect(() => {

      axios.get(`/api/articles/${currentArticle}`)
     .then((response)=> {
       // handle success
     
       setArticle(response.data.article);
       setLoading(false);  
       

     })
     .catch((error)=>  {
       // handle error
       console.log(error);
     })  ;

      
 }, [currentArticle])


 const handleChange = (event, value) => {
   setLoading(true);  

   setcurrentArticle(value);
 };

 const changePage = () => {

    history.push("/ranking");


   
 };

 console.log(loading);
 

 return (
   
   <div className="App">
    
       <Container fixed={true}> 
       {loading ? <>
         <Typography variant="h1">
         <Skeleton variant="text" />
          </Typography>
       <Skeleton variant="text" />
       <Skeleton variant="text" />
       <Skeleton variant="text" />
       <Skeleton variant="text" />
       <Skeleton variant="rect" width={640} height={420} />
       <Skeleton variant="text" />
       <Skeleton variant="text" />
       <Skeleton variant="text" />
       <Skeleton variant="text" />
       <Skeleton variant="text" />



        </>
       :<>
       <h1>Article # {currentArticle}</h1>
       <Article articleData={article }/>
       <Pagination count={5} page={currentArticle} onChange={handleChange} variant="outlined" shape="rounded" className='pagination' />
       {currentArticle ===5 ? <div className="btn-container"> <Button size='large' variant="contained" color="secondary" className='ranking-Btn' onClick={changePage}>
       Rank Articles
     </Button></div>:'' }
       </>}
       
       
       </Container>
   </div>
 );
}

export default Home;
