import React from 'react';
import { Button } from './Button';
import './content.css';

const Content = () => {
  return (
    <div className='content-container'>
      <video src="/shortvid/tree-134913.mp4" autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="content-btns">
        <Button className="btns" 
        >Get Started</Button>

        <Button className="btns" 
        >Watch Trailer</Button>
      </div>     
    </div>
  )
}

export default Content
