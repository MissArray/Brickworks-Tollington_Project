import React from 'react';
import logoImg from '../../../public/images/Brickworks-logo1.png';
import fbLogo from '../../../public/images/facebook-logo.svg';
import twitterLogo from '../../../public/images/twitter-logo.svg';
import emailSymbol from '../../../public/images/email-symbol.svg';

class Home extends React.Component {
  
  constructor(props){
  super(props)
  this.state= {
    name: null
  }
  }
  
  addEvent = () => {
    this.props.history.push('/social-actions');
  }
 

  render() {
    return( 
      <div>
        
        <div className='wrapper'>
          <h1>Brickworks - Home</h1>
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
            <div id='logo'>
              <img id='logo-img' src={logoImg} alt='Brickworks logo'/>
            </div> 
            <div id='hub-description'>
            <p>Brickworks is a social-action hub rooted in Tollington that actively fosters grass-roots action. Brickworks supports local people to contribute to collective action, build the community and create a better, more democratic society.
            </p>        
            <p>Click 'Next' to find out more and get involved!
            </p>
            </div>
            <button className='button-large' onClick={this.addEvent}>Next</button>
          </main>
        
        </div>
      </div>
  )}
}

export default Home;