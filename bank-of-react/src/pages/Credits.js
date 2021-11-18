// src/components/Credits.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Credits extends Component {
  render() {

    var totalCredits;

    let credits = this.props.credits;
    console.log(credits);
    return (
        <div>
            <h1>Credits</h1>
            <div>
          {credits.map( (credit) => {
              return (
                <div key={credit.id}>
                <li>{credit.amount} {credit.description} {credit.date}</li>
                <script>{Credits.totalCredits += credit.amount}</script>
              </div> 
              )
          } )}
          <br/>
          

          
          <div> <AccountBalance accountBalance={this.props.accountBalance}/> </div>
          <li>{credits.totalCredits}</li>
          <br/>
          <div> <Link to="/">Home </Link> </div>
          
        </div>
        </div>
        
    );
  }
}

export default Credits;

