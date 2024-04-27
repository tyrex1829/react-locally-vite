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
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Form from './Form';
import Counter from './Counter';
import Toggler from './Toggler';

const data = [
  { id: 1, item:"bread", quantity: 2, completed: false },
  { id: 2, item:"milk", quantity: 1, completed: true },
  { id: 3, item:"chicken breasts", quantity: 4, completed: false },
  { id: 4, item:"carrots", quantity: 6, completed: true }
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <div>

      <Toggler />

      {/* <Counter /> */}

      {/* <Clicker message="HI!!!!" buttonText="Click Me" />

      <Clicker message="Please Stop Clicking Me!" buttonText="do not click" /> */}

      {/* <Form /> */}

      {/* <Clicker /> */}

      {/* <PropertyList items={ properties } /> */}

      {/* <ShoppingList items={ data } /> */}

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
