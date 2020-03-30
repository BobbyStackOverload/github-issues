import React from 'react';
import './issue.css';

const Issue = (props) => {

    return (
        <div className="issueBody">
            <h3>Issue:</h3>
            <div className="props">
                {props.issue.title}
            </div>

            <h3><a href={props.issue.html_url}>Issue Link</a></h3>
            <hr />            
            <div className="text">{props.issue.body}</div>
        </div>
    )
}

export default Issue;