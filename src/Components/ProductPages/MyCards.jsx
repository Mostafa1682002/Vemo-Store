import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './MyCards.css'
const MyCards = ({ product }) => {
    let { title, description, image, category,id ,rating:{count}} = product;
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <Card className="h-100 p-3">
                <Card.Img style={{ objectFit: 'contain',height:'200px' }} variant="top" src={image} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="edit">{description}</Card.Text>
                    <Card.Text>{category}</Card.Text>
                    <Card.Text className="text-light rounded bg-dark fs-3 p-2">Count : <span className="fw-bold text-success">{count}</span> </Card.Text>
                    <div className="row ">
                        <div className="col-12 col-lg-6 g-2">
                        <NavLink to={`/product/${id}`} className="btn btn-warning">Show Details </NavLink>
                        </div>
                        <div className="col-12 col-lg-6 g-2">
                        <NavLink to={`/product/${id}`} className="btn btn-success">Add To Card</NavLink>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MyCards;
