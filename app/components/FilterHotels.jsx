import React from 'react';

class FilterHotels extends React.Component {
  constructor(){
    super();
  }
  updateFilters(){
    this.props.updateFilters({
      Name: this.refs.Name.value,
      Stars: this.refs.Stars.options[this.refs.Stars.selectedIndex].value,
      UserRatingFrom: parseInt(this.refs.UserRatingFrom.value),
      UserRatingTo: parseInt(this.refs.UserRatingTo.value),
      MinCostFrom: parseInt(this.refs.MinCostFrom.value),
      MinCostTo: parseInt(this.refs.MinCostTo.value)
    });
  }
  changeOrdering(){
    let changeOrdering = this.props.changeOrdering();
    switch (this.refs.Ordering.selectedIndex){
      case 0:
        return this.props.changeOrdering("DEFAULT");
      case 1:
        return this.props.changeOrdering("PRICE_ASCENDING");
      case 2:
        return this.props.changeOrdering("PRICE_DESCENDING");
      case 3:
        return this.props.changeOrdering("STARS_ASCENDING");
      case 4:
        return this.props.changeOrdering("STARS_DESCENDING");
      case 5:
        return this.props.changeOrdering("DISTANCE_ASCENDING");
      case 6:
        return this.props.changeOrdering("DISTANCE_DESCENDING");
      case 7:
        return this.props.changeOrdering("USER_RATING_ASCENDING");
      case 8:
        return this.props.changeOrdering("USER_RATING_DESCENDING");
      default:
        return this.props.changeOrdering("DEFAULT");
    }
  }
  render(){
    return (
      <div className="filter_hotels">
        <p>Filter hotels</p>
        <form onChange={this.updateFilters.bind(this)} onSubmit={(e)=>e.preventDefault()}>
          <div>
            <div>Name</div>
            <input className="input" type="text" ref="Name"/>
          </div>
          <div>
            <div>Stars</div>
            <select defaultValue="ALL" ref="Stars">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>ALL</option>
            </select>
          </div>
          <div>
            <div>User rating between:</div>
            <input className="input" type="text" ref="UserRatingFrom" placeholder="From"/>
            <input className="input" type="text" ref="UserRatingTo" placeholder="To"/>
          </div>
          <div>
            <div>Min cost between:</div>
            <input className="input" type="text" ref="MinCostFrom" placeholder="From"/>
            <input className="input" type="text" ref="MinCostTo" placeholder="To"/>
          </div>
        </form>

        <div>
          <div>Sort by:</div>
          <select ref='Ordering' defaultValue="Default" onChange={this.changeOrdering.bind(this)}>
            <option>Default</option>
            <option>Price ascending</option>
            <option>Price descending</option>
            <option>Stars ascending</option>
            <option>Stars descending</option>
            <option>Distance ascending</option>
            <option>Distance descending</option>
            <option>User rating descending</option>
            <option>User rating descending</option>
          </select>
        </div>
      </div>
    );
  }
};

export default FilterHotels;
