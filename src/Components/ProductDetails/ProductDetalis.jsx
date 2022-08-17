import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetalis = ({products}) => {
    let {id}=useParams();
    let getProduct=()=>{
        return products.filter(product=> (product.id==id))[0];
    }
    console.log(getProduct());
    let product=getProduct();
    //Function To Back Home
    let navigate=useNavigate();
    let goProducts=()=>{
        navigate('/product');
    }
    return (
        <div className="alert alert-secondary">
            <div className="container bg-light p-3 rounded">
                <h1>Product Name : <span className="text-success"> {product.title}</span></h1>
                <img className="my-3 d-inline-block" style={{width:'250px'}} src={product.image} alt="" />
                <p className="fs-3">Price : <span className="text-danger">{product.price}$</span></p>
                <button onClick={goProducts} className="m-auto d-block btn btn-outline-danger fs-3">Go To Products</button>
            </div>
        </div>
    );
}

export default ProductDetalis;
