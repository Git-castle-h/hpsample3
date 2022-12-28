
import {Header} from './pages/header.js';
import {Main, main} from './pages/main.js';
import {Login} from './pages/login.js';
import {Skip} from './pages/skip.js';
import {Footer} from './pages/footer.js';
import { Sub } from './pages/subpage';
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/font.css';
import './css/App.css';
import './css/nomalize.css';
import './css/header.css';
import './css/main.css';
import './css/sub.css';
import './css/login.css';
import './css/footer.css';


function App() {
  return (
    <div className="App"> 
    <BrowserRouter basename='/hpsample3'>
      <Routes>
          <Route path ='/' element={<MainPage></MainPage>}></Route>
          <Route path ='/subpage' element={<SubPage></SubPage>}></Route>
          <Route path ='/login' element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </BrowserRouter>
    </div>

  );
}

function MainPage(){
  useEffect(()=>{
    let fullpage = document.querySelector('.fullPageSwiper');
    let footer = document.querySelector('.Footer');
    let footerHeight = footer.clientHeight;
    // console.log(fullpage);
    // console.log(footerHeight);
      fullpage.style.height = 'calc(100vh - '+footerHeight+'px)';
      window.addEventListener('resize',function(){
        fullpage.style.height = 'calc(100vh - '+footerHeight+'px)';
      })
  })
  return(
    <div className="MainPage">
    <Header></Header>
    <Skip></Skip>
    <Main></Main>
    <Footer></Footer>
    </div>
  )
}



function  SubPage(){
  return(
    <div className="MainPage">
    <Header></Header>
    <Sub></Sub>
    <Footer></Footer>
    </div>
  )
}

function LoginPage(){
  return(
    <div className="LoginPage">
      <Header></Header>
      <Login></Login>
    </div>
  )
}

export default App;
