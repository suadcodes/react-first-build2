
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./components/layouts/Layout.js";
import PageNotFound from "./components/pages/404.js";
import MyModules from "./components/pages/MyModules";
import MyAssesments from "./components/pages/MyAssesments";
import MySchedule from "./components/pages/MyScehdule";
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path ='/' element ={<MyModules/>}/>
          <Route path ='/schedule' element ={<MySchedule/>}/>
          <Route path ='/assessment' element ={ <MyAssesments/>}/>
          <Route path ='*' element ={ <PageNotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
