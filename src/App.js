import './App.css';
import User from './components/User/User';

const friends = [
  { id: 1, name: 'Chris', age: 31 },
  { id: 2, name: 'Liza', age: 17 },
  { id: 3, name: 'Peter', age: 66 },
];
function App() {
  const sayHello = () => {
    console.log('Hello');
  };
  return (
    // <div className="App">
    <>
      <User age="26" friends={friends} myMethod={sayHello} />
      <h1>Lesson 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae,
        dignissimos.
      </p>
    </>
    // </div>
  );
}

export default App;
