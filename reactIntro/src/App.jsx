import './App.css'
import WelcomeF from './components/WelcomeF/WelcomeF';
import WelcomeC from './components/WelcomeC/WelcomeC';


const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number, index) => <li key={index}> {number} </li>);

const users = ["Olatz", "Dani", "Adrian", "Eder", "Iker", "Evgeny", "Arantza"];

function App() {
  return (
    <>
    <div>
      {users.map((user, index) => (

        <WelcomeF key={index} name={user} />
      )) }
      <WelcomeC name="Patricia"/>
      <WelcomeF name="OLATZ"/>
    </div>
    <div>
    <ul>{listItems}</ul>
    </div>
    </>
  );
}


export default App
