import React, { Fragment } from "react"
import { connect } from 'react-redux'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: this.props.selectedData.id, 
      name: this.props.selectedData.name, 
      age: this.props.selectedData.age,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(event) {
    const data = {
      name: this.state.name, 
      age: this.state.age, 
      email: this.state.email
    };
    if (this.props.isEdit) {
      data.id = this.props.selectedData.id;
      console.log('edit', data);
      this.props.dispatch({ type: 'EDIT_POST', data })
    } else {
      // generate id here for new emplyoee
      this.props.dispatch({ type: 'ADD_POST', data })
    }
  }

  onHandleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedData.age !== this.props.selectedData.age) {  //Check on email, because email is unique
      this.setState({ name: this.props.selectedData.name, age: this.props.selectedData.age })
    }
  }



  render() {
    return (
      <form>
        <div className="form-group">
          <input onChange={(event) => this.onHandleChange(event)} value={this.state.name} name="name" type="text" />
        </div>

        <div className="form-group">
          <input onChange={(event) => this.onHandleChange(event)} value={this.state.age} name="age" type="number" />
        </div>

        <button onClick={(event) => this.submit(event)} type="button">
          {this.props.isEdit ? 'Update' : 'SAVE'}
        </button>

      </form>
    );
  }
}

export default connect(null)(Form);