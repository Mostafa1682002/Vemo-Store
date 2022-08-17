// import axios from 'axios';
// import { useEffect, useState } from 'react';
import MyCards from './MyCards';
import Content from '../Content'

const Products = ({products}) => {

    let productList=()=>{
        return products.map((product)=>
        <MyCards key={product.id} product={product}/>
        )
    }
    return (
        <div className='alert alert-info p-4'>
            <Content name="Products" />
            <div className='container my-3' >
                <div className="row">
                    {productList()}
                </div>
            </div>
        </div>
    );
}

export default Products;
