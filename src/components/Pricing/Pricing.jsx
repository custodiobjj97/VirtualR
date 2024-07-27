import React from 'react';
import "./pricing.css";
import Cards from '../Cards/Cards';
const Pricing = () => {
  return (
    <section className='pricing'>
        <h2>Pricing</h2>
        <div className="pricing-grids">
            <Cards subtitle='Free' text='$0/Month'/>
            <Cards subtitle='Pro(Most Popular)' text='$10/Month'/>
            <Cards subtitle='Enterprise' text='$200/Month'/>
        </div>
    </section>
  )
}

export default Pricing