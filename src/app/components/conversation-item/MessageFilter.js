/*global document*/

import React from 'react';
import $ from 'jquery';


export default class MessageFilter extends React.Component {
  constructor(props) {
    super();

    this.state = {
      filter: '' //the filter text
    }
  }

 
    
  applyFilter(e) {
    this.setState({filter: e.target.value});
    let filter = this.state.filter.trim();
    this.props.onApplyFilter({filter});
    //this.setState({filter: ''})
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="write name"
          value={this.state.filter}
          onChange={this.applyFilter.bind(this)}
        />

      </form>
    )
  }
}

MessageFilter.propTypes = {
    onApplyFilter: React.PropTypes.func.isRequired
};
