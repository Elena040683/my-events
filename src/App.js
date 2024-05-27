import './App.scss';
import {Component} from 'react';
import {Counter} from './components/Counter/Counter';
import {Form} from './components/Forms/Form';

// function App() {
//   return (<div className="App"></div>);
// }

class App extends Component {
state = {
  counter: 0,

  allProducts: [],
}

addNewProduct = (obj) => {
  this.setState((prevState) => {
    return {
      allProducts:[...prevState.allProducts, obj],
    }
  })
}

handleDecrement = () => {
  console.log('-');
  // Просто перепишем текущий стейт
  // this.setState({
  //   counter: this.state.counter - 1,
  // })

  // Если нужно отталкиваться от предыдущего значения
  // this.setState((prevState) => {
  //   return {counter: prevState.counter - 1}
  // })
  // или короче
  this.setState((prevState) => ({
      counter: prevState.counter - 1
    }) 
  )
}

handleIncrement = () => {
  console.log('+');

  this.setState((prevState) => ({
    counter: prevState.counter + 1
  }) 
)
}



  render() {
    const {counter} = this.state;
    const {handleDecrement, handleIncrement} = this;
    return (
      <div className="App">
        <h1>FE-35</h1>
        <Form addNewProduct={this.addNewProduct} />
        <Counter 
          value={counter} 
          handleDecrement={handleDecrement} 
          handleIncrement={handleIncrement}
        />
        {/* <div className="counter">
          <button onClick={handleDecrement}>-</button>
          <p>{counter}</p>
          <button onClick={handleIncrement}>+</button>
        </div> */}

  
      </div>
    );
  }
}

export default App;
