import './App.css';
import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />
    </Provider>
  );
}

export default App;
