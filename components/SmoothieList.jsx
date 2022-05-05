import React from 'react'
import sytles from "../styles/SmoothieList.module.css";
import SmoothieCard from './SmoothieCard';


const SmoothieList = () => {
  return (
    <div className={sytles.container}>
    <h1 className={sytles.title}>Feeling great with healhty choices</h1>
    <p className={sytles.desc}>
    A smoothie can be the ideal start to your day. Smoothies are quick and easy to make and, if you use the right ingredients, can give you a great start in getting the recommended daily services of fruits and veggies.
    </p>
    <div className={sytles.wrapper}>
      <SmoothieCard/>
      <SmoothieCard/>
      <SmoothieCard/>
      <SmoothieCard/>
      <SmoothieCard/>
      <SmoothieCard/>
      <SmoothieCard/>
      <SmoothieCard/>
      <SmoothieCard/>
      
    </div>
    </div>
  );
};




export default SmoothieList