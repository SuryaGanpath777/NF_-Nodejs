import React from 'react';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css' ;
const Plans = () => {
  return (
    <div className="plans-container">

        <div className='programs-header' style={{gap:'3rem'}}>
        <span className="stroke-text" style={{justify:"center"}}>READY TO START YOUR JOURNEY NOW WITH US</span>
        
        </div>      
        <div className="plans">
        {plansData.map((plan,i)=>(
            <div className='plan'> 
            {plan.icon}
            <span>{plan.name}</span>
            <span>₹{plan.price}</span>

            <div className='features'>
            {plan.features.map((feature,i)=>(
                <div className='feature'>
                <img scr= {whiteTick} alt=""/>
                <span key={i}>{feature}</span>
                </div>
            ))}
            </div>
            <div ><span >See More benefits -></span></div>
            <button className="btn">Join Now </button> 
            </div>
        ))}
        </div>
    </div>
  )
}

export default Plans
