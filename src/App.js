import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import useStoreon from 'storeon/react';
import MainBanner from './components/mainBanner/index';
import Message from './components/message/index';
import Content from './components/content/index';
import Footer from './components/footer/index';
import axios from 'axios';

const App = () => {
  const {dispatch} = useStoreon('peoples');
  useEffect(() => {
    axios.defaults.headers.put['Content-Type'] = 'application/json';
    axios.get('http://localhost:3008/people').then(res => {
      dispatch('peoples', res);
    });
  }, [dispatch]);
  return (
    <div className="global_container_">
      <div className="group-2">

      <MainBanner></MainBanner>
        <div className="l-unconstrained">
          <div className="l-constrained">
          <Message></Message>
          <Content></Content>
          <Footer></Footer> 
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
