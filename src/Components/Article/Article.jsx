import React from 'react'
import './Article.style.css';
const Article= (props)=> {
    
 
 
     
    return (
        <>
            <h1 className='main-heading'>{props?.articleData?.body && props.articleData.title}</h1>
          
            {props?.articleData?.body && props.articleData.body.map(data=> {
                   if(data.type==='heading') {
                   return <h3 className="sub-heading">{data.model.text}</h3>  
                   } 
                   if(data.type==='image') {
                    return  <img src={data.model.url} alt={data.model.altText} height={data.model.height} width={data.model.width} />
                    }
                    if(data.type==='paragraph') {
                        return <p className='parapraph'>
                      {data.model.text}
                    </p> 
                        }
                     if(data.type==='list') {
                         if(data.model.type==='unordered') {
                            return <ul className="list-unordered">
                             {data.model.items.map((item)=>{
                                return <li>{item}</li>
                             })}
                        </ul> 
                         } else {
                            return <ol className="list-ordered">
                            {data.model.items.map((item)=>{
                               return <li>{item}</li>
                            })}
                       </ol> 
                         }
                             
                            }
                            else {
                                return null;
                            }

            }
              
             )}

             
        </>
    )
}

export default Article;