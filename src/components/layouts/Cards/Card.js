import './Card.css';
const Card = (props) => {
    return (
     <>
      {props.details.map((value,index) =>(

          <div className='wrapper'>
          <div className="Card" key={index}>
            <div><img src={value.ModuleImage}></img></div>
              <p>{value.ModuleName}</p>
              <p>({value.ModuleCode})</p>
              <p>Level {value.ModuleLevel}</p>
              </div>
              </div>
          )
        )
          }
          </>
        )
};

export default Card