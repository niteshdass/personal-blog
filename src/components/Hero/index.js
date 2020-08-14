import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar';

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
        <Card>
            <div style={{ padding: '50px 0'  }}>
            <h2 style={{textAlign:'center'}}>Bindaas Nitesh</h2>
            </div>
            <Navbar />
        </Card>
    </div>
   )

 }

export default Hero