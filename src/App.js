import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import OpinionsList from './components/OpinionsList';
import NotFound from './components/NotFound';
import OpinionDetails from './components/OpinionDetails';
import AddOpinion from "./components/AddOpinion";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About"; 
import SelectedEssays from "./components/SelectedEssays";

import {
  //BrowserRouter,
  HashRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

/*THIS IS WHERE WE DEFINE PATH!!*/

/*Using Routes instead of Switch in react-router v6*/

/*https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom*/
/* wrap the entire HTML with BrowserRouter */
function App() {
  return (
    <HashRouter>
      <div>
        <Navbar/>
        <div>
            <Routes>

              <Route path="/about" element={ <About/>} />
              <Route path="/selected-essays" element={ < SelectedEssays />} />

              <Route path="*" element={ <NotFound />} />
              
              <Route path="/collaborator/register" element={ <Register/>} />
              <Route path="/collaborator/login" element={ <Login/>} />

              <Route path="/forum/opinions" element={ <OpinionsList />} />
              <Route path="/forum/opinions/add" element={ <AddOpinion />} />
              <Route path="/forum/opinions/edit/:id" element ={ <AddOpinion />}/>
              <Route path="/forum/opinions/:id" element={ <OpinionDetails />} />

            </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
