import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-lightest-blue br4 pa3 ma1 dib bw2 shadow-5 m-30'>
      <img alt='robots' src={`https://robohash.org/${id}?size=180x180`} />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
