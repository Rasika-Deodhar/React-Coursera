import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';
import Rough from './components/RoughComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Restaurant Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
        <Rough />
      </div>
    );
  }

}

export default App;
