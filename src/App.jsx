import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import './App.css'

function App() {
  return (
    <div>
      {/* <Chicken />
      <Chicken />
      <Chicken /> */}

      <Greeter person="Bill" from="Dev" />
      <Greeter person="Saksham" from="Dsa" />
      <Greeter person="Tyrex" from="Core" />
    </div>
  );
}

export default App
