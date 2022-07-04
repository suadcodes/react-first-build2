
const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.name}</button>
  )
}

export const FavButton = (props) => {
  return (
    <Button onFav={props.onClick} name={props.name}> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Heart_coraz%C3%B3n.svg"></img>
    </Button>
  )
}
