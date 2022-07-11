import Card from "../layouts/Cards/Card";
import modules from "../layouts/Cards/module";


function MyModules(){
    const makeCard = (module) =>{
        return(
            <Card key={module.ModuleID} module={module} />
        )
    };
    return (
        <div>
            <h1>My Modules</h1>
            <div className="CardContainer">
                {
                modules.map(makeCard)
                }
            </div>
        </div>
    )
}

export default MyModules;