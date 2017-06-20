import React from 'react';

class Hotel extends React.Component {
  constructor(){
    super();
  }
  render(){
    const hotel = this.props.hotel;
    return (
      <div className="hotel">
        <img src={hotel.ImageUrl}/>
        <div>{hotel.Name}</div>
        <div>Stars: {hotel.Stars}</div>
        <div>UserRating: {hotel.UserRating}</div>
        <div>MinCost: {hotel.MinCost}</div>
        <div>Distance: {hotel.Distance}</div>
      </div>
    );
  }
};

export default Hotel;
