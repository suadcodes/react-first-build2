const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.name}</button>
  )
}

export const FavButton = (props) => {
  return (
    <Button onFav={props.onClick} name={props.name}> 
     alert("Button Clicked!");
    </Button>
  )
}
