import React, { Fragment } from 'react';
import './App.css';
import Bio from './Components/Bio';
import Gallerycard from './Components/Gallerycard';
import galleryData from './galleryData';
import Lightbox from './Components/Lightbox/Lightbox';
import lightboximages from './data/imageData';
import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <Router>
    <div className="App">
      <div className="body">
        {/* <Gallery /> */}
        {/* {
          lightboximages.map((imagesArray, i) => {
            return <Lightbox key={i} sources={imagesArray} />
          })
        } */}
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white container">
        <h2>Jodi Lynn</h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/gallery">Gallery</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/pricing">Pricing</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
      <Route path='/' exact component={Home}  />
      <Route path='/gallery' component={Gallerycard}  />
      
      </div>
      
      <div className='card-container'>
        {
          galleryData.map((item, i) => {
            return (
              <Lightbox key={`${item.imageUrl}-${i}`} sources={lightboximages[i]}>
                <Gallerycard imageUrl={item.imageUrl} />
              </Lightbox>
            );
          })
        }

      </div>
      </div>
      </Router>
  );
}
const Home = () => (
  <Fragment>
    <h1>Jodi Lynn Photography</h1>
    <Bio />
  </Fragment>
);
export default App;
