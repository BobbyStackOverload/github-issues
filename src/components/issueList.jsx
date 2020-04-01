import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './issue.css';


class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/repos/facebook/create-react-app/issues")
            .then(res => res.json())
            .then((result) => {
                console.log(result[0])
                this.setState({
                    issues: result
                });
                console.log(this.state);
            });

    }
    render() {
        const { issues } = this.state;
    
        return (
            // <div className="allIssues">
                <ul>
                {issues.map(issue => (
                  <div key={issue.id}>
                      <h1>Issue Title: </h1>
                  {issue.title}
                  <Link to={`/issue/${issue.number}`}>See More Details</Link>
                  </div>
                    // <Issue key={value.id} issue={value} />
                ))}
                </ul>                
            // </div>

        );
      }
    }



export default IssueList;