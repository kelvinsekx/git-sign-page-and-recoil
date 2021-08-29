import './App.css';
import GithubSignup from "./components/github"
import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
  button: {
    border: {
      color: 'rgb(8, 175, 8)'
    }
  }
};

function App() {
  return (
   <Grommet theme={theme}>
    <div className="App">
    	<GithubSignup />
    </div>
   </Grommet>
  );
}

export default App;
