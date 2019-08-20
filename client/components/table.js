import React, {Fragment} from "react";
import { connect } from "react-redux";

class Table extends React.Component {
    onEdit = (item) => {  //Use arrow function to bind `this`
        this.props.selectedData(item);
    }

    onDelete = (id) => {
        const data = {
            id,
        }
        this.props.dispatch({ type: 'DELETE_POST', data });
    }
    render() {
        return (
            <Fragment>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.employees.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>
                            <button
                                type="button"
                                onClick={() => this.onEdit(item)}>EDIT
                            </button>
                            <button
                                onClick={ () => this.onDelete(item.id) }>DELETE
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({ employees: state.employees });

export default connect(mapStateToProps)(Table);