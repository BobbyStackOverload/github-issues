import React, { Component } from 'react';
import Issue from './Issue';
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
            <div className="allIssues">
                <ul>
                {issues.map(value => (
                    <Issue key={value.id} issue={value} />
                ))}
                </ul>                
            </div>

        );
      }
    }



export default IssueList;