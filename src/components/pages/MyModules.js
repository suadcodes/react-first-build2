import Card from "../layouts/Cards/Card";
import modules from "../layouts/Cards/module";
import './Card.css';
function MyModules(){

return (
    <div>
<h1>My Modules</h1>
<div className='containerr'>
<Card details={modules}/>
    </div>
</div>
)
}

export default MyModules;