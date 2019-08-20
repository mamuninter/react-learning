import React from "react"
import Table from "../components/table"
import Form from '../components/form'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           selectedData: {name: '', age: ''},
           isEdit: false
        };
    }

    selectedData = (item) => {
       this.setState({selectedData: item,isEdit:true})
    }
    render() {
        return (
            <React.Fragment>   
              <Form selectedData={this.state.selectedData} isEdit={this.state.isEdit}/>          
            <table>
                <Table selectedData={this.selectedData} />
            </table>
            </React.Fragment>
        );
    }
}
export default Home;