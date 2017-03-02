import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

let appContainerEl = document.querySelector('#app-container')

const CongressPeepsProps = React.createClass({

  render: function(){
    console.log('props.congressPeeps', this.props.congressPeeps)

    return (
      <div>
        <p>  Yoooooo!!! </p>
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
          <h3> firstName  lastName  </h3>
          <h4> title  --  party - stateName </h4>
          <ul>'
            <li> email: email </li>
            <li> website: website </li>
            <li> facebook: facebook </li>
            <li> twitter: twitter </li>
          </ul>
          <p>Term End + termEnd </p>
        </div>

      )

    })
  }
})



$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
  ReactDOM.render(
  <CongressPeepsProps congressPeeps={serverRes}/> , appContainerEl);
})
