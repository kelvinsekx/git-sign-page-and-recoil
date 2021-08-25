import './App.css';
import GithubSignup from "./components/github"
import { Grommet } from 'grommet';

function App() {
  return (
   <Grommet plain>
    <div className="App">
    	<GithubSignup />
    </div>
   </Grommet>
  );
}

export default App;
