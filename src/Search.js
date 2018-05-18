import React, {Component} from 'react';
import SearchBar from './SearchBar';


class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',

      };
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
  
    render() {
   return(
    <SearchBar 
        onFilterTextChange={this.handleFilterTextChange}
    />
   );
}
}

export default Search;
