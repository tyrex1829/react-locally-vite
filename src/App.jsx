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
      <Greeter />
      <Greeter person="Tyrex" from="Core" />

      <Die numSides={20} />
      <Die />
      <Die numSides={10} />
    </div>
  );
}

export default App
