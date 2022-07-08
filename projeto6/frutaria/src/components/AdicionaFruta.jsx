import React, { useState } from 'react';

const AdicionaFruta = () => {

  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const adicionarFruta = event => {
    event.preventDefault();

    const fruta = {
      id: new Date(),
      nome,
      quantidade
    }

    console.log('Adicionar Fruta', fruta);
  }

  return (
    <form onSubmit={adicionarFruta}>
      <input
        type="text"
        name={nome}
        placeholder="Fruta"
        required onChange={event => setNome(event.target.value)}
      />
      <input
        type="number"
        name={quantidade}
        placeholder="Quantidad"
        required onChange={event => setQuantidade(event.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  )
}

export default AdicionaFruta;