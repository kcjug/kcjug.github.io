import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import MeetupEvent from './MeetupEvent.js';

export default () => (
    <StaticQuery
    query={graphql`
    query {
      meetupGroup {
      events {
        name
        local_date
        local_time
        venue {
          name
          address_1
          city
        }
        link
        description
      }
    }
  }
  `}
  render={
    data => (
    <div>
        <h2>Upcoming Events</h2>
        <div className='scrolling-wrapper'>
            {data.meetupGroup.events.map(event => (<MeetupEvent data={event}/>))}
        </div>
    </div>
  )}/>
)
