import React, {Component} from 'react';
import {Link } from 'react-router-dom';


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        let uri = `http://localhost/Loan_Calculator/public/customer/${this.props.obj.id}`;
        axios.delete(uri).then(response => {
            if (response.data.status) {
                this.props.history.push('/details');
            }
            else {
                alert(response.data.msg);
            }
        })
            .catch(error=>{
                console.log(error.response)
            });
    }


    render() {
        return (
            <tr>
                <td>
                    <Link to={'/loanDetails/' + this.props.obj.id}>{this.props.obj.Fname}</Link>
                </td>
                <td>
                    {this.props.obj.Lname}
                </td>
                <td>
                    {this.props.obj.Address}
                </td>

                <td>
                    {this.props.obj.Amount}
                </td>
                <td>
                    {this.props.obj.Duration}
                </td>
                <td>
                    {this.props.obj.options}
                </td>
                <td>
                    {this.props.obj.TransactionDate}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj.id} className="btn btn-secondary">Edit</Link>
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input type="submit" value="Delete" className="btn btn-primary" />
                    </form>
                </td>
            </tr>
        );
    }
}

export default TableRow;