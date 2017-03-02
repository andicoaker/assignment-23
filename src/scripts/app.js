import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

let appContainerEl = document.querySelector('#app-container')

const CongressPeepsProps = React.createClass({

  render: function(){
    console.log('props.congressPeeps', this.props.congressPeeps)

    return (
      <div>
        <SingleCongressPeepsProfile someCongressPeeps={this.props.congressPeeps.results}/>
        {/* map over data and insert single CongressPeeps template here, then return the single CongressPeeps template */}
      </div>
    )
  }
})

const SingleCongressPeepsProfile = React.createClass({

  _createSingleCongressPeepsJSX: function(arrOfPeeps){

    let jsxArr = arrOfPeeps.map(function(peepsObj){
      return (

        <div>
          <h3> {peepsObj.first_name} {peepsObj.last_name} </h3>
          <h4> {peepsObj.title} -- {peepsObj.party} - {peepsObj.state_name} </h4>
          <ul>
            <li> email: {peepsObj.oc_email} </li>
            <li> website: {peepsObj.website} </li>
            <li> facebook: {peepsObj.facebook_id} </li>
            <li> twitter: {peepsObj.twitter_id} </li>
          </ul>
          <p>Term End {peepsObj.term_end} </p>
        </div>

      )
    })
    return jsxArr
  },

  render: function(){
    let congressPeepsList = this.props.someCongressPeeps;
    return (
      {this._createSingleCongressPeepsJSX(congressPeepsList)}
    )
  }
})


$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
  ReactDOM.render(
  <CongressPeepsProps congressPeeps={serverRes}/> , appContainerEl);
})
