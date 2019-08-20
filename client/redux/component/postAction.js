import React from 'react'
import { connect } from 'react-redux'

class postAction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 'SAVE', // button name
            employees: [{name: 'jhon', age: '23', email: 'a@a'}, {name: 'doe', age: '24', email: 'b@a'}],
            currentEmp: {},
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onSubmit(name, age, email, index=null) {
        this.setState({ employees: [...this.state.employees, { name: name, age: age, email: email }] });
    };




    // delete employee
    onDelete(event, index) {
        this.setState({
            employees: this.state.employees.filter((item, itemIndex) => (index != itemIndex)),
        });
    };
    return (
        <div>
            <button onClick={ () => props.SAVE() }>SAVE</button>
            <button onClick={ () => props.Update() } >Update</button>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        name: '',
        age: '',
        email: '',
    }
}


function mapDispatchToProps (dispatch) {

    return {
        SAVE : () => {
            dispatch({type : 'SAVE'})
        },
        Update : () => {
            dispatch({type : 'Update'})
        }
    };

};



export default connect(mapStateToProps, mapDispatchToProps)(postAction); // Connect fuction takes argument mapDispatchtoProps by default, to avoid this, we implement this
