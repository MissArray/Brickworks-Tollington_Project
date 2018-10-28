import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getAllEvents from '../utils/utilsgetAllEvent';
import getPastEvents from '../utils/utilsgetPastEvent';
import {EventComp, UpcomingEvents, PastEvents} from './eventComp';
import fbLogo from '../../../public/images/facebook-logo.svg';
import twitterLogo from '../../../public/images/twitter-logo.svg';
import emailSymbol from '../../../public/images/email-symbol.svg';

class SocialActions extends React.Component {
  
  
state = {
  allEvents : [],
  pastEvents : [],
  allEvntLoading : true,
  pastEvntLoading: true,
}

  componentDidMount() {
    
    getAllEvents()
    .then(response => {
      //set allEvents state
      this.setState( { allEvents: response, allEvntLoading: false});
      //pass data to parent
      this.props.extractData(this.state.allEvents);
    })
    
    .catch(err => console.log(err));

    getPastEvents()
    .then(response => {
   
    this.setState( { pastEvents : response, pastEvntLoading:false});
    this.props.extractData(this.state.pastEvents);
    
  })

  .catch(err => console.log(err));
  }
  
  addEvent = () => {
    this.props.history.push('/topten');
  }
  
  render() {
    if (this.state.allEvntLoading || this.state.pastEvntLoading) {
      return (
        <div className='wrapper'>
        <h1 data-testid="social-actions-page">Social Actions</h1>     
      
        <div id='sidebar'>
        <div id='logo-container'>
            <a href='https://www.facebook.com/hanleycrouch/' target='_blank'><img src={fbLogo} id='fb-logo-img' alt='Facebook logo' />
            </a>
            <a href='https://twitter.com/HanleyCrouch' target='_blank'>
            <img src={twitterLogo} id='twitter-logo-img' alt='Twitter logo' />
            </a>
            <a href='mailto:brickworks.web.app@gmail.com'  target='_blank'>
            <img src={emailSymbol} id='email-symbol-img' alt='Email symbol' />
            </a>
        </div>
      </div>

        <main>
        <h3>loading...</h3>
        </main>
        </div>
      )
      
    } 
   
    const {allEvents} = this.state;
    const {pastEvents} = this.state;

    return (
      
    <div className='wrapper'>
        <h1 data-testid="social-actions-page">Social Actions</h1>
          
      <div id='sidebar'>
        <div id='logo-container'>
            <a href='https://www.facebook.com/hanleycrouch/' target='_blank'><img src={fbLogo} id='fb-logo-img' alt='Facebook logo' />
            </a>
            <a href='https://twitter.com/HanleyCrouch' target='_blank'>
            <img src={twitterLogo} id='twitter-logo-img' alt='Twitter logo' />
            </a>
            <a href='mailto:brickworks.web.app@gmail.com'  target='_blank'>
            <img src={emailSymbol} id='email-symbol-img' alt='Email symbol' />
            </a>
        </div>
      </div>
      
      <main>
        <div>
        <UpcomingEvents allEvents={this.state.allEvents} />
        <PastEvents pastEvents={this.state.pastEvents} />  
        </div>  
        <br></br>
        <br></br>         
      <button className='button-large' onClick={this.addEvent}>I want to get involved!</button>
      </main>
    </div>
    )
  }
  }
  


export default SocialActions;