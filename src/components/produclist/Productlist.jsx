import React from 'react';
import './productlist.css';
import Product from '../product/Product';
import {products} from '../../data';

const Productlist = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Create and Inspire. It's Aymen</h1>
                <p className="pl-desc">
                    Aymen is a web developper, AI researcher, DevOps Ingenieur. 
                    Always learning new technologies.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item)=>(
                 <Product key={item.id} img={item.img} link={item.link} />                    
                ))}
            </div>
        </div>
    )
}

export default Productlist
