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
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log(e.target.checked);
  
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
      id: uuid(),
      title: this.state.title,
      desc: this.state.desc,
      size: this.state.size,
    }

    this.setState({product: obj});
    this.props.addNewProduct(obj);
    this.resetForm();
  };
  
  resetForm = () => {
    this.setState({
      title: '',
      desc: '',
      size: '',
      agreed: false,
    })
    // распыляем дефолтное состояние стэйта
    // this.setState({ ...this.state})
  }


  render() {
    const {title, desc, size, agreed} = this.state;
    const {handleSubmit, handleChange, handleCheck} = this;
    return ( 
      <form onSubmit={handleSubmit}>
        <label htmlFor={this.prodIdTitle}>Title</label>
        <input 
          type="text" 
          id={(this.prodIdTitle)} 
          name="title" 
          value={title}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor={this.prodIdDesc}>Description</label>
        <input 
          type="text" 
          id={this.prodIdDesc} 
          name="desc"
          value={desc}
          onChange={handleChange}
        />
        <br/>
        <label htmlFor={this.prodIdSize}>Choose your size</label>
        <select 
          name="size"
          id={this.prodIdSize}
          value={size}
          onChange={handleChange}
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
          checked={agreed}
          onChange={handleCheck} 
          />
        <br/>
        <button type="submit" disabled={!agreed}>add</button>
      </form>
    )
  }
};
