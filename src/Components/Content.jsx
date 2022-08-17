import React from 'react';
const ContentSection = (props) => {
    return (
        <div className="bg-light p-5">
            <h1 className="text-danger">{props.name} Section</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, minima.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tempora, ipsum exercitationem quaerat corrupti, magni accusamus culpa sequi assumenda eveniet quia, odio optio! Magni repellendus totam sapiente quia asperiores sed!</p>
            <button className="btn btn-warning">Read More</button>
        </div>
    );
}

export default ContentSection;
