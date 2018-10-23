import React from "react";
import { Link } from "react-router-dom";
import { fork } from "child_process";

const EventComp = ({ event_id, event_name, event_description, event_date_time, event_location, fullname_event_organiser, 
  email_event_organiser, telephone_event_organiser, recurring_event_description}) => {
  

  return (
    
      <ul>
        <Link className='link-txt' key={event_id} to={'/event-detailed/' + event_name} >
          <li className='strong-txt-M'>{event_name.split('rec')[0]}</li>
          <li className='li-content'>{event_description}</li>
          <li className='strong-txt-M'>Date & Time</li>
          <li className='li-content'>{event_date_time}</li>
          <li className='strong-txt-M'>Location</li>
          <li className='li-content'>{event_location}</li>
          <li className='strong-txt-M'>Frequency</li>
          <li className='li-content'>{recurring_event_description}</li>
        </Link >
      </ul>
    
  )
}

const EventByThemeComp = ({ event_id, event_name, event_description, date_time, event_location, theme }) => {
  return (
    <ul>
      <li>{event_id}</li>
      <li>{event_name}</li>
      <li>{event_description}</li>
      <li>{date_time}</li>
      <li>{event_location}</li>
      <li>{theme}</li>
    </ul>
  )
}

const SingleEvent = ({ event_id, event_name, event_description, event_date_time, event_location, fullname_event_organiser, 
  email_event_organiser, telephone_event_organiser, Photo}) => {
    if(Photo){
  return (
    <div key={event_id} >
  
      <li><span className='strong-txt-M'>Title: </span>
        <span className='li-content'>{event_name}</span>
      </li>
      <li><span className='strong-txt-M'>Description: </span>
      <span className='li-content'>{event_description}</span>
      </li>
      <li><span className='strong-txt-M'>Date & Time: </span>
      <span className='li-content'>{event_date_time}</span>
      </li>
      <li><span className='strong-txt-M'>Location: </span>
      <span className='li-content'>{event_location}</span>
      </li>
      <li><span className='strong-txt-M'>Organiser: </span>
      <span className='li-content'>{fullname_event_organiser}</span>
      </li>
      <li><span className='strong-txt-M'>Email: </span>
        {email_event_organiser}
      </li>
      <li><span className='strong-txt-M'>Tel. number: </span>
      <span className='li-content'>{telephone_event_organiser}</span>
      </li>
        <img className='single-event-img' src={Photo[0].url}/>
   
    </div>
  )
}
else {
  return(
    <div key={event_id} >
    <li>
      {event_name}
      {event_description}
      {event_date_time}
      {event_location}
      {fullname_event_organiser}
      {email_event_organiser}
      {telephone_event_organiser}
    </li>
    
  </div>

  )
}
  }
const FormErrors = ({formErrors}) =>
<div className='formErrors'>
{Object.keys(formErrors).map((fieldName, i) => {
  if(formErrors[fieldName].length > 0){
    return (
      <p id='error-container' key={i}><span>&#9785; This </span>{fieldName} {formErrors[fieldName]}</p>
    )
    } else {
    return '';
  }
})}
</div>

const UpcomingEvents = ({ allEvents}) => {
  if(allEvents.length !== 0){
    return (
      <React.Fragment>
        <h2>Current Social Actions</h2>
        {allEvents.map( event => (
            <EventComp key={event.fields.event_id} {...event.fields} /> 
          ))} 
      </React.Fragment>
  )
  } else {
    return '';
  }
}

// NB LINK TO AIRTABLE NOT FUNCTIONAL IN FORK; UPCOMING EVENTS NOT LOADING, SO h2 BELOW CHANGED HERE TO Current Social Actions

const PastEvents = ({ pastEvents}) => {
  if(pastEvents.length !== 0){
    return (
      <React.Fragment>
      <h2 className='h2-left'>Current & Past Social Actions</h2>
        {pastEvents.map( event => (
              <EventComp key={event.fields.event_id} {...event.fields} /> 
            ))} 

      </React.Fragment>
    )
    }else {
      return '';
    }
  }

export { SingleEvent, FormErrors, EventComp, EventByThemeComp, UpcomingEvents, PastEvents };
