import { useState } from "react";
import Card from "./Card";
import  "./Testimonials.css";

import {MdOutlineKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowLeft} from "react-icons/md";

const Testimonials=(props)=>{
    let reviews=props.reviews;
    const [index,setIndex]=useState(0);
    function rightHandler(){
         if(index>=reviews.length-1){
            setIndex(0);
         }
         else{
            setIndex(index+1);
         }
    }
    function leftHandler(){
        if(index<=0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }
    function surpriseHandler(){
        setIndex((Math.floor(Math.random()*reviews.length)));
    }
    
    return(
        <div className="outer">
            <div>
                 <Card reviews={reviews[index]}/>
            </div>

            <div className="m-1 text-3xl">
                <button className="mr-1" onClick={leftHandler} ><MdOutlineKeyboardDoubleArrowLeft/></button>
                
                <button className="ml-2" onClick={rightHandler}><MdOutlineKeyboardDoubleArrowRight/></button>
            </div>
            <div className="mb-8 btn-h mt-4 relative bg-violet-600 h-8 p-4 rounded-md">
                <button onClick={surpriseHandler} className="font-semibold text-white text-base btn ">Surprise me</button>
            </div>
             
        </div>
       


    )
}
export default Testimonials;