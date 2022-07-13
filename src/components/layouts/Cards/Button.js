import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.name}</button>
  )
}

export const FavButton = (props) => {
  return (
    <Button onFav={props.onClick} name={props.name}> 
     <FontAwesomeIcon icon="faAtom" />
    </Button>
  )
}
