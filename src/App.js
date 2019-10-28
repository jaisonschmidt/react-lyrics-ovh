import React from 'react';

import Header from './features/Header/Header';
import Search from './features/Search/Search';
import LyricWrapper from './features/LyricWrapper/LyricWrapper';
import Footer from './features/Footer/Footer';

import './assets/theme/global.scss';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            searchWord: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        console.log('aaaaaaa', e.target.value);
        this.setState({
            searchWord: e.target.value
        })
    }

  render(){
    return (
        <>
            <Header />
            <Search handleSearch={this.handleSearch} />
            <LyricWrapper searchWorld={this.state.searchWord} />
            <Footer />
        </>
    );
  }
}

export default App;
