import React from 'react';

import Hotel from 'components/Hotel.jsx';

class ListHotels extends React.Component {
  constructor(){
    super();
  }
  fitsFilter(hotel){
    const filters = this.props.filters;

    if (filters.Stars != "ALL" && hotel.Stars != filters.Stars) return false;
    if (hotel.Name.toLowerCase().indexOf(filters.Name.toLowerCase()) === -1) return false;

    if (filters.UserRatingFrom != "" && filters.UserRatingFrom > hotel.UserRating) return false;
    if (filters.UserRatingTo != "" && filters.UserRatingTo < hotel.UserRating) return false;
    if (filters.MinCostFrom != "" && filters.MinCostFrom > hotel.MinCost) return false;
    if (filters.MinCostTo != "" && filters.MinCostTo < hotel.MinCost) return false;

    return true;
  }
  getOrderedHotels(){
    const hotels = [...this.props.hotels];
    switch (this.props.ordering) {
      case "DEFAULT":
        break;
      case "PRICE_ASCENDING":
        hotels.sort((a, b) => {
          return a.MinCost-b.MinCost;
        });
        break;
      case "PRICE_DESCENDING":
        hotels.sort((a, b) => {
          return b.MinCost-a.MinCost;
        });
        break;
      case "STARS_ASCENDING":
        hotels.sort((a, b) => {
          return a.Stars-b.Stars;
        });
        break;
      case "STARS_DESCENDING":
        hotels.sort((a, b) => {
          return b.Stars-a.Stars;
        });
        break;
      case "DISTANCE_ASCENDING":
        hotels.sort((a, b) => {
          return a.Distance-b.Distance;
        });
        break;
      case "DISTANCE_DESCENDING":
        hotels.sort((a, b) => {
          return b.Distance-a.Distance;
        });
      case "USER_RATING_ASCENDING":
        hotels.sort((a, b) => {
          return a.UserRating-b.UserRating;
        });
        break;
      case "USER_RATING_DESCENDING":
        hotels.sort((a, b) => {
          return b.UserRating-a.UserRating;
        });
        break;
    }
    return hotels;
  }
  render(){
    const HotelElements = this.getOrderedHotels().filter(hotel => this.fitsFilter(hotel)).slice(0, this.props.limitHotelsTo).map((hotel) => <Hotel hotel={hotel} key={hotel.EstablishmentId}/>);

      return (
      <div className="list_hotels">
        {HotelElements.length > 0 ? HotelElements : <div className="no_hotels">No hotels were found</div>}
      </div>
    );
  }
};

export default ListHotels;
