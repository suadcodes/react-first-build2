import {FavButton} from "./Button.js";
import './Card.css';
import module from "./module.js";
const Card = (props) => {

const onfav =()=>{
  return(
    console.log("FAVVVV")
  )
}
const ondelete =()=>{
  return(
    console.log("FAVVVV")
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
      </div>3
    </div>
  
  )
};

export default Card