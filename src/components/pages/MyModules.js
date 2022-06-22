import Cardss from "../layouts/Cards/Cardss";
import Card from "../layouts/Cards/Card";
import modules from "../layouts/Cards/module";
function MyModules(){

return (
    <div>
<h1>My Modules</h1>

<Card details={modules}/>
    </div>

)
}

export default MyModules;