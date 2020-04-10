import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

//Refactored functional component to be class component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then((response) => {
        console.log(response);
        this.setState({
          players: response.data,
        });
      })
      .catch((error) => {
        console.log("the data was not returned", error);
      });
  }
  render(){
    return (
      <div>
        <label data-testid='Navbar' htmlFor='Navbar'>
          <Navbar />
        </label>
        <label data-testid='Player' htmlFor='Player'>
          {this.state.players.map((player, index) => {
            return <Player key={index} player={player} />;
          })}
        </label>
      </div>
    );
  }
}

export default App;
