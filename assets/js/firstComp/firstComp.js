import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Julio',
      health: 40,
      level: 10
    }
  }

  render () {
    return (
      <section id="parent">
        <section className={(this.state.health) < 55 ? 'danger-red' : 'blue-bg'}>
          <h3>Name: {this.state.name}</h3>
          <h3>Health: {this.state.health}</h3>
          <h3>Level: {this.state.level}</h3>
          <img src="/img/bape.png" alt="girl with bape" />
        </section>
      </section>
    );
  }
}

const Header = function() {
  return (
    <header>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
