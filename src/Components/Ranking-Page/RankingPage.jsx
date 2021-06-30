import React,{useState} from 'react'
import Container from '@material-ui/core/Container';
import './RankingPage.style.css';
import Rating from '@material-ui/lab/Rating';
  import Button from '@material-ui/core/Button';


export default function RankingPage() {

    const [value, setValue ] = useState([1,1,1,1,1]);
   
 
 const handleValueChange=(event,newValue,index)=> {
 

     
     const ratingTemp =value;
   ratingTemp[newValue]=newValue;
   setValue(ratingTemp);
 

 }


   
console.log(value);

   
 
    return (
        
           <Container className="rating-container">
               {   
                   value.map((item,index)=>  (
                       <div >
                           <h2>Article # {index+1}</h2>
                    <Rating
                    name="simple-controlled"
                    value={item}
                    width={400}
                    mb={3}
                    onChange={(event,newValue)=> handleValueChange(event,newValue)}
                  /> 
                  </div>
                  ))
               }

                <Button mt={4} variant="contained" color="primary">
Sumbit                    
</Button>

           </Container>
         
    )
}
