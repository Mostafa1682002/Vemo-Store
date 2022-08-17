import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Content from '../Content';
import './about.css'

const AboutPage = () => {
    return (
        <div >
            <Content name='About'/>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-4 g-2 my-3">
                    <Card >
                        <Card.Img variant="top" className="img"
                        src="https://media-cdn.placedestendances.com/en/closed-embroidered-organic-cotton-sweatshirt-with-round-neck-green/image/18/8/3488188.jpg?fit=bounds&bg-color=FFFFFF&width=380&height=520&canvas=380,520" />
                        <Card.Body>
                            <Card.Title>Women's</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-6 col-lg-4 g-2 my-3">
                    <Card >
                        <Card.Img variant="top" className="img"
                        src="https://eg.hm.com/sites/g/files/hm/styles/product_zoom_medium_606x504/brand/assets-shared/HNM/13651791/58e08acd5bbb2ded394938633ed0eabdfaf0bc76/1/58e08acd5bbb2ded394938633ed0eabdfaf0bc76.jpg?itok=kzFPG1RP" />
                        <Card.Body>
                            <Card.Title>Man's</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    <div className="col-6 col-lg-4 g-2 my-3">
                    <Card >
                        <Card.Img variant="top" className="img"
                        src="https://eg.hm.com/sites/g/files/hm/styles/product_listing/brand/assets-shared/HNM/13632553/19304ca76eacd6451fce2974e8f0e1c8babaf30d/1/19304ca76eacd6451fce2974e8f0e1c8babaf30d.jpg?itok=pMVb0gEt" />
                        <Card.Body>
                            <Card.Title>Kid's</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
