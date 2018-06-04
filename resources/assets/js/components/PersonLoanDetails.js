import React from 'react';
import Moment from 'moment';
import {baseUrl} from './library/baseUrl';

class PersonLoanDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            customers: [],
            customer: [{
                fname: '',
                lname: '',
                address: '',
                days: '',
                interest: ''
            }]
        });
    }

    componentDidMount(props) {
        axios.get(baseUrl + 'customer/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    customers: response.data
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

        var currentDate = Date.parse(Moment().format("YYYY/MM/DD"));
        console.log(currentDate);
        var takendate = Date.parse(this.state.customers.TransactionDate);
        console.log(takendate);
        var duration = currentDate - takendate;
        var days = Math.ceil(duration / (1000 * 60 * 60 * 24));
        if (this.state.customers.options == "AutoLoan") {
            var rate = 13;
            var amount = customer.Amount;
            var time = days;
            var Interest = (amount * rate * time) / 100;
            console.log(success);
        }
        else if (this.state.customers.options == "HomeLoan") {
            var rate = 10;
            var amount = customer.Amount;
            var time = days;
            var Interest = (amount * rate * time) / 100;
        }
        else if (this.state.customers.options == "LandLoan") {
            var rate = 9;
            var amount = customer.Amount;
            var time = days;
            var Interest = (amount * rate * time) / 100;
        }
        else if (this.state.customers.options == "BusinessLoan") {
            var rate = 8;
            var amount = customer.Amount;
            var time = days;
            var Interest = (amount * rate * time) / 100;
        }
        this.state.customer.fname = this.state.customers.Fname;
        this.state.customer.lname = this.state.customers.Lname;
        this.state.customer.address = this.state.customers.Address;
        this.state.customer.days = days;
        this.state.customer.interest = Interest;
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Address</th>
                        <th scope="col">Days</th>
                        <th scope="col">Interest</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.customer.fname}</td>
                        <td>{this.state.customer.lname}</td>
                        <td>{this.state.customer.address}</td>
                        <td>{this.state.customer.days}</td>
                        <td>{this.state.customer.interest}</td>

                    </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}

export default PersonLoanDetails;