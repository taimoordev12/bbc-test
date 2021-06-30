import { createServer, Model } from "miragejs"
import article1 from './data/article-1.json'
import article2 from './data/article-2.json'
import article3 from './data/article-3.json'
import article4 from './data/article-4.json'
import article5 from './data/article-5.json'
 


export function makeServer({ environment = "test" } = {}) {
    let data=[article1,article2,article3,article4,article5];

    let server = createServer({
      environment,
  
      models: {
        article: Model,
      },
  
      seeds(server) {
          data.forEach(article=>{
            server.create("article",article)

          })
       
      },
  
      routes() {
        this.namespace = "api"
  
        this.get("/articles/:id", (schema,request) => {
            let id = request.params.id
            console.log(schema.articles.all());
          return schema.articles.find(id);
        })
      },
    })
  
    return server
  }