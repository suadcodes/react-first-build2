import Layout from "./components/layouts/Layout.js"
import PageNotFound from "./components/pages/404.js";
import Home from "./components/pages/Home.js"
import SignIn from "./components/pages/Signin.js";
import ContactUs from "./components/pages/ContactUs.js";

import './App.css';
function App() {
  return (
 <Layout>
 <Home/>
 </Layout>

 
  );
}

export default App;