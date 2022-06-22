import modules from "./module";
import './Card.css';
const Card = (props) => {
    return (
     <>
      {props.details.map((value,index) =>(

          <div className="Card" key={index}>
            <img src={value.ModuleImage}></img>
              <p>{value.ModuleName}</p>
              <p>({value.ModuleCode})</p>
              <p>Level {value.ModuleLevel}</p>
              </div>
          )
        )
          }
          </>
        )
};

export default Card