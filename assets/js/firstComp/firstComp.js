import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Julio',
      health: 100,
      level: 10
    }

    this.clickedGirl = this.clickedGirl.bind(this);
  }

  clickedGirl() {
    this.setState({
      health: (this.state.health === "DEAD!" || this.state.health === 10) ? "DEAD!" : this.state.health - 10
    }, function() {
      if (this.state.health !== "DEAD!")
        console.log("Hey I clicked the girl. Her health is now " + this.state.health);
      else
        console.log("The girl is already dead!");
    });
  }

  render () {
    return (
      <section id="parent">
        <Header />
        <section className={(this.state.health === "DEAD!" || this.state.health < 55) ? 'danger-red' : 'blue-bg'}>
          <div className="user-info">
            <h3>Name: {this.state.name}</h3>
            <h3>Health: {this.state.health}</h3>
            <h3>Level: {this.state.level}</h3>
          </div>
          <GirlImage clickEvt={this.clickedGirl} />
        </section>
      </section>
    );
  }
}

class GirlImage extends Component {
  constructor () {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <section className="girlImageComp">
        <img src="/img/bape.png" alt="girl with bape"
        onClick={this.props.clickEvt} />
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
