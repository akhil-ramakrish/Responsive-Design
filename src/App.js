import React,{useEffect,useState} from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import './App.css';

const App = ()=>{
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch('https://picsum.photos/v2/list')
         .then(response=>response.json())
         .then(resData=>{
               setData(resData.slice(0,10));
         });
  },[])
return (
  <div className="body">
    <Header/>
    <div className="cardContainer">
      {
         data.map(obj=>{
           return <Card key={obj.id} url={obj.download_url} text={obj.author}/>
         })
       }
    </div>
       
  </div>
);
}


export default App;
