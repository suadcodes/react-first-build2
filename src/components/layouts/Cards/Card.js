import {FavButton} from "./Button.js";
import './Card.css';
import module from "./module.js";
const Card = (props) => {

const onfav =()=>{
  return(
    alert("Button Clicked!")
  )
}
const ondelete =()=>{
  return(
    alert("Button Clicked!")
  )
}
const onedit = () => {
  return(console.log("FAVVVV"))
}

  return (
    <div className="Card" >
      <div className="CardImage">
        <img src={props.module.ModuleImage} alt="Representation of module"/>
      </div>
      <div className="CardDetails">
        <p>{props.module.ModuleName} ({props.module.ModuleCode})</p> 
        <p>Level {props.module.ModuleLevel}</p>
      </div>
      <div className="CardButtons">
        <FavButton onFav={onfav} name="favourite it" />
        <FavButton onEdit={onedit}name="edit it"/> 
        <FavButton onDelete={ondelete}name="delete it"/> 
      </div>
    </div>
  
  )
};

export default Card