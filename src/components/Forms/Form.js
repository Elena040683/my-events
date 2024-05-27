import {Component} from 'react';
import {v4 as uuid} from 'uuid';

export class Form extends Component {
  prodIdTitle = uuid();
  prodIdDesc = uuid();
  prodIdAgreed = uuid();
  prodIdSize = uuid();
  
  state = {
    title: '',
    desc: '',
    agreed: false,
    size: '',
    product: null,
  }

// функции обработчики событий

  handleCheck = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e.target.checked);
  
    this.setState({
      agreed: !this.state.agreed,
    })
  }
  
  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      // title: e.target.value,
      [e.target.name]: e.target.value,
    })
  };
  
  handleChangeAllInputs = () => {
    const {name, type, checked, value} = this.state
    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      description: this.state.desc,
      size: this.state.size,
    }

    this.setState({product: obj});
    this.props.addNewProduct(obj);
    this.resetForm();
  };
  
  resetForm = () => {
    // this.setState({
    //   title: '',
    //   desc: '',
    //   size: '',
    //   agreed: false,
    // })
    // распыляем дефолтное состояние стэйта
    this.setState({...this.state})
  }


  render() {
    return ( 
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.prodIdTitle}>Title</label>
        <input 
          type="text" 
          id={this.prodIdTitle} 
          name="title" 
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br/>
        <label htmlFor={this.prodIdDesc}>Description</label>
        <input 
          type="text" 
          id={this.prodIdDesc} 
          name="desc"
          value={this.state.desc}
          onChange={this.handleChange}
        />
        <br/>
        <label htmlFor={this.prodIdSize}>Choose your size</label>
        <select 
          name="size"
          id={this.prodIdSize}
          value={this.state.size}
          onChange={this.handleChange}
        >
          <option value="" disabled>...</option>
          <option value="s">s</option>
          <option value="m">m</option>
          <option value="l">l</option>
        </select>
        <br/>
        <label htmlFor={this.prodIdAgreed}>Agree?</label>
        <input 
          type="checkbox" 
          name="agreed" 
          id={this.prodIdAgreed}
          checked={this.state.agreed}
          onChange={this.handleCheck} 
          />
        <br/>
        <button type="submit" disabled={!this.state.agreed}>add</button>
      </form>
    )
  }
};
