import React from 'react';
        function MenuCard({ image, title, oldPrice, newPrice }) {
        return (
            <div className="card col-md-3 p-lg-0" style={{ width: '18rem' }}>
            <img
                src={image}
                className="card-img-top"
                alt="..."
            />
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="d-flex">
                <p className="card-text text-decoration-line-through">{oldPrice}</p>
                <strong className="text-warning">{newPrice}</strong>
                </div>
                <a href="#" className="btn btn-primary">Buy</a>
            </div>
            </div>
        );
}

export default MenuCard;
