import React from 'react';
import {SingleEvent} from './eventComp';
import getOneEvent from '../utils/utilsgetOneEvent'
import fbLogo from '../../../public/images/facebook-logo.svg'
import twitterLogo from '../../../public/images/twitter-logo.svg'
import emailSymbol from '../../../public/images/email-symbol.svg'

class EventDetailed extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      sendData:'rec' + this.props.location.pathname.split('rec')[1],
      recData: []
    }
  }

  componentDidMount () {
  
    const sendData = JSON.stringify(this.state.sendData)
    console.log('data', sendData)
    fetch('/api/queryARecord', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: sendData,
    })
      .then(res => {
       return res.json()
       
      })
      .then(data => {
        console.log(data);
        this.setState({recData: [data]})
      })
      .catch(err => {
        console.log('ERROR IS', err);
        this.props.history.push('/500error');
      })
     
    }
// if(this.props.data !== {}){
  
// }
  


  render()  {
  
    return (
      <div data-testid="event-detailed" className='wrapper'>
        <h1 data-testid="social-actions-page">{this.props.location.pathname.split('rec')[0].split('/event-detailed/')[1]}</h1>
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
        <div single-event-container>
      <ul className='ul-single-event'>
    {this.state.recData.map( event => (
        <SingleEvent key={event.fields.event_id} {...event.fields} /> 
      ))} 

        </ul>
        </div>
        </main>
      </div>
    )
  }
}


export default EventDetailed;