import logo from './logo.svg';
import './App.css';
import Helmet from 'react-helmet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TS4U Interactive Terminal for Learning Linux
        <Helmet>
          <script type="text/javascript" src="http://katacoda.com/embed.js"></script>
        </Helmet>
        <div id="katacoda-scenario-1"
          data-katacoda-id="shahedmehbub/shahedmehbub-katakoda"
          data-katacoda-color="004d7f"
          style={{ height: '600px', width: '1080px', paddingTop: '0px' }}>
        </div>
      </header>
    </div>
  );
}

export default App;
