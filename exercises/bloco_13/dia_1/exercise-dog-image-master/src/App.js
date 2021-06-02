import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      photo: '',
    };

    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  shouldComponentUpdate(_nextProps, { photo }) {
    localStorage.setItem('dog', photo);
    return !photo.includes('terrier');
  }

  async fetchApi() {
    this.setState({ loading: true }, async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const { message } = await response.json();

      this.setState({
        photo: message,
        loading: false,
      });

      const dogBreed = message.match(/(?<=breeds\/)\w+-?\w+(?=\/)/);
      alert(dogBreed);
    });
  }

  render() {
    const { photo, loading } = this.state;
    return (
      <>
        <div>
          {loading ? <h1>Loading...</h1> : <img src={ photo } alt="foto" />}
        </div>
        <button type="button" onClick={ this.fetchApi }>
          Próximo Doguinho
        </button>
      </>
    );
  }
}

export default App;
