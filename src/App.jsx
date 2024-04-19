import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';
import './App.css'

const data = [
  { item:"bread", quantity: 2, completed: false },
  { item:"milk", quantity: 1, completed: true },
  { item:"chicken breasts", quantity: 4, completed: false },
  { item:"carrots", quantity: 6, completed: true }
]

function App() {
  return (
    <div>

      <ShoppingList items={ data } />

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

      {/* <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}

      {/* <Heading color="magenta" text="welcome" fontSize="20px" />
      <Heading color="teal" text="Hey, there" fontSize="48px" /> */}

      {/* <ColorList colors={["red", "pink", "purple", "teal"]} /> */}

      {/* <Slots val1="🍎" val2="🍎" val3="🍎" />
      <Slots val1="🍎" val2="🍌" val3="🍎" /> */}

    </div>
  );
}

export default App
