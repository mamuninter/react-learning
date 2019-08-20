import React from "react"

class Contacts extends React.Component {
    constructor(props) {
        super(props);
    }
    goback(event){
        this.props.history.push('/');
    }
    render() {
        return (
          <button onClick={this.goback.bind(this)}>Go Back to home</button>
        );
    }
}

export default Contacts;