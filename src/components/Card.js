import {BiSolidQuoteLeft,BiSolidQuoteRight} from "react-icons/bi";
import "./Card.css"
const Card=(props)=>{
    let reviews=props.reviews;
    console.log(reviews);
    return(
        <div className="inner">
             <div className="img-titles">
                <div className="image"></div>
                <img src={reviews.image}/>
                <div className="head">
            <div className="font-bold text-xl tracking-wide p-1 name">
                <p>{reviews.name}</p>
            </div>
            <div id="job">
                <p>{reviews.job}</p>
            </div>
            </div>
            </div>
          
            
            <div className="reviews">
              <BiSolidQuoteLeft/>
              <p className="text">{reviews.text}</p>
              <BiSolidQuoteRight/>
            </div>
           
        </div>
    )
}
export default Card;