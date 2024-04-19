import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import './App.css'

function App() {
  return (
    <div>
      {/* <Chicken />
      <Chicken />
      <Chicken /> */}

      {/* <Greeter person="Bill" from="Dev" />
      <Greeter />
      <Greeter person="Tyrex" from="Core" /> */}

      {/* <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}

      {/* <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} /> */}

      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
    </div>
  );
}

export default App
