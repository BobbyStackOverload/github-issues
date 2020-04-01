import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Issue extends Component {
   constructor(props) {
       super(props);
       this.state = {
           issues: []
       };
   } 


    componentDidMount() {
        const number = this.props.match.params.issue_number;
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${number}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    issues: result
                }); 
            });
    }

    render() {
        const data = this.state.issues;
        console.log("data");
        return (
            <div> 
                <div> 
                    <h3>{data.title}</h3>
                </div>
                <div>
                    <ReactMarkdown source={data.body} escapeHtml={false}/>
                </div>
            </div>
        )
    }
}


export default Issue;