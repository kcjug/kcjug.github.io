import React from 'react';
import stripHtml from 'string-strip-html';

class MeetupEvent extends React.Component{
    render() {
        return (
            <div className="card">
                {console.log("Event:" + JSON.stringify(this.props, null, 2))}
                <h4>{this.props.data.name}</h4>
                <h5>{formatDate(this.props.data.local_date,this.props.data.local_time)}</h5>
                <p>{stripHtml(this.props.data.description)}</p>
                <a href={this.props.data.link} className="button">RSVP</a>
                {/*<h4>{this.props.value.local_date.toLocaleDateString()}</h4>*/}
            </div>
        )
    }
}

function formatDate(date, time) {
    return new Date(date+'T'+time).toLocaleString('en-US', {timeZone: 'America/Chicago', dateStyle: 'full', timeStyle: 'short'});
}

export default MeetupEvent