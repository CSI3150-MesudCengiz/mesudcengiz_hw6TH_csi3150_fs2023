import React from 'react';
import "./TravelBlog.css";


const TravelBlog = (place) => {
    return (
        <div className="travel-blog container-fluid justify-content-center align-items-center">
            
            <h3 className="travel-blog-heading">{place.heading}</h3>

            <div className="d-flex flex-row">
                <div className="col-sm-4">
                    <img src = {place.img1} alt="First" />
                </div>
                <div className="col-sm-4">
                    <img src={place.img2} alt="Second" />
                </div>
                <div className="col-sm-4">
                    <img src={place.img3} alt="Third" />
                </div>
            </div>
            <p>{place.description}</p>
        </div>
    );
}

export default TravelBlog;