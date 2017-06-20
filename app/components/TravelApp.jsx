import React from 'react';

import * as RestAPI from 'api/RestAPI.jsx';
import FilterHotels from 'components/FilterHotels.jsx';
import ListHotels from 'components/ListHotels.jsx';

class TravelApp extends React.Component {
  constructor(){
    super();
    this.state = {
      hotels: [],
      filters: {
        Name: "",
        Stars: "ALL",
        UserRatingFrom: "",
        UserRatingTo: "",
        MinCostFrom: "",
        MinCostTo: ""
      },
      limitHotelsTo: 50,
      ordering: "DEFAULT"
    }
    RestAPI.get_hotels().then((res) => {
      this.setState({
        hotels: JSON.parse(res.body).Establishments
      });
    }).catch(err => {});
  }
  updateFilters(filters){
    this.setState({
      filters: {
        ...this.state.filters,
        ...filters
      }
    });
  }
  changeOrdering(orderingType){
    this.setState({
      ordering: orderingType
    });
  }
  getMoreHotels(){
    this.setState({
      limitHotelsTo: this.state.limitHotelsTo+50
    });
  }
  checkIfNearBottom(){
    const TravelAppElement = this.refs.TravelApp;
    if (TravelAppElement.scrollTop + TravelAppElement.clientHeight * 3 >= TravelAppElement.scrollHeight) {
      this.getMoreHotels();
    }
  }
  render(){
    return (
      <div className="travel_app" onScroll={this.checkIfNearBottom.bind(this)} ref="TravelApp">
        <FilterHotels updateFilters={this.updateFilters.bind(this)} changeOrdering={this.changeOrdering.bind(this)}/>
        <ListHotels hotels={this.state.hotels} filters={this.state.filters} limitHotelsTo={this.state.limitHotelsTo} ordering={this.state.ordering}/>
      </div>
    );
  }
};

export default TravelApp;
