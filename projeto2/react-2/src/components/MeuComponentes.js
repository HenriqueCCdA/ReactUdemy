import React, { Component } from 'react';

class MeuComponenete extends Component {

  constructor(props){
    super(props);
    this.state = { numero: 5 };
    this.adicionarNumero = this.adicionarNumero.bind(this)
    console.log('construtor ...');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps...');
    // console.log(props);
    // console.log(state);
    // return { numero: 6 };
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldCompenetUpdate...');
    console.log('estado atual', this.state);
    console.log('proximo estado', nextState);
    return true;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate...')
  }

  adicionarNumero() {
    console.log('setState...');
    let numeroAtual = this.state.numero;
    numeroAtual += 1;
    this.setState({ numero: numeroAtual });
  }

  render() {
    console.log('render ...');
    return(
      <div>
        <p>{this.props.titulo}</p>
        <p>{this.state.numero}</p>

        <button onClick={this.adicionarNumero} >
          Adicionar numero
        </button>
      </div>
    );
  }

}

export default MeuComponenete;