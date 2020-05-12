import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-dark-green dib grow br3 pa3 ma2 bw2 shadow-5'>
            <img alt='robophoto' src={`https://robohash.org/${id}set=set2?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;