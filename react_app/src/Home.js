import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    componentDidMount() {
      fetch('http://127.0.0.1:5000/home') // Chame a rota correspondente no Flask
        .then(response => response.text())
        .then(html => {
          const element = document.getElementById('root'); // Elemento onde o conteúdo será renderizado
          element.innerHTML = html; // Renderize o conteúdo do home.html no elemento desejado
        });
    }
  
    render() {
      return null; // Não renderize nada diretamente neste componente
    }
}

export default Home;