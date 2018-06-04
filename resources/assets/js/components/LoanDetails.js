import React from 'react';
import TableRow from './TableRow';


class LoanDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {Fname: '', Lname: '', Address: '', Amount: '', Duration: '', options: '', TransactionDate: ''};

    }

    componentDidMount() {
        axios.get('http://localhost/Loan_Calculator/public/customer')
            .then(response => {
                this.setState({customer: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        if (this.state.customer instanceof Array) {
            return this.state.customer.map(function (object, i) {
                return <TableRow obj={object} key={i}/>;
            })
        }
    }


    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Address</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Loan type</th>
                        <th scope="col">Date of loan taken</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LoanDetails;