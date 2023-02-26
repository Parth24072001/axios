import React , {useState , useEffect} from "react"
import './App.css';
import axios from 'axios';
// import useFetchData  from '../src/api/index';

function App() {
  
  // const url="https://newsapi.org/v2/everything?q=Apple&from=2023-02-22&sortBy=popularity&apiKey=8c5a23eb4dbf456ab68fe9c107c108d0";
  const url=" https://saurav.tech/NewsAPI/everything/cnn.json";

 
  const [post , setPost] = useState([]);
    
  useEffect(() =>{
      axios.get(url).then((res) =>{
          const response = res.data.articles
           setPost(response);
           console.log(response )
      })
  },[])


  return (
    <> 
    
      <div className="parent">
    {post.map((itr) => {
      return(
      <div className="card" key={itr.publishedAt} style={{width: '18rem'}}>
      <img src={itr.urlToImage} className="card-img-top image" alt="images" />
      <div className="card-body">
        <p> {itr.publishedAt}</p>
        <h4 className="card-title">{itr.source.name}</h4>
        <h5 className="card-title">{`Author Name: ${itr.author} `}</h5>
        <p className="card-text">{itr.content.length<=100 ? itr.content.slice(0,100) :itr.content }</p>
        <a href={itr.url  } className="btn btn-primary">Go somewhere</a>
      </div>  
    </div>
);
})}    
</div>
    </>
    
    );
}


export default App;
