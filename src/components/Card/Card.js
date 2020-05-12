import React from 'react';
import classes from './Card.module.css';

 const Card = (props)=>{
     return (
         <div className={classes.Container}>
           <img className={classes.imgContainer} src={props.url} alt="picsum"/>
           <p className={classes.text}>{props.text}</p>
         </div>
     );
 }


 export default Card;