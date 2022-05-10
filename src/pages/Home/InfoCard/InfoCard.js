import React from 'react';

const InfoCard = ({ img, cardTitle, cardText, bgClass }) => {
    return (
        <div className={` card lg:card-side shadow-xl text-white rounded-xl px-6 ${bgClass} `}>
            <figure><img width={86} height={86} src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardText}</p>
            </div>
        </div >
    );
};

export default InfoCard;