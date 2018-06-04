import React from 'react';


class GetLoans extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const customerList = {
            Fname: this.refs.Fname.value,
            Lname: this.refs.Lname.value,
            Address: this.refs.Address.value,
            Amount: this.refs.Amount.value,
            TransactionDate: this.refs.TransactionDate.value,
            Duration: this.refs.Duration.value,
            options: this.refs.options.value
        };
        let uri = 'http://localhost/Loan_Calculator/public/customer';
        axios.post(uri, customerList)
            .then(response => {
                this.props.history.push('/details');
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="form-group">
                            First Name:<input ref="Fname" name="Fname" name="first" className="form-control"
                                              placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            Last Name:<input ref="Lname" name="Lname" className="form-control" placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            Address:<input ref="Address" name="Address" className="form-control" placeholder="Address"/>
                        </div>
                        <div className="form-group">
                            Amount:<input ref="Amount" name="Amount" className="form-control" placeholder="Amount"/>
                        </div>
                        <div className="form-group">
                            Duration:<input ref="Duration" name="Duration" className="form-control"
                                            placeholder="Duration"/>
                        </div>
                        <div className="form-group">
                            Date:<input type="date" name="TransactionDate" ref="TransactionDate" step="1"/>
                        </div>
                        <div>
                            <select ref="options" className="selectpicker" name="options">
                                <option>AutoLoan</option>
                                <option>HomeLoan</option>
                                <option>LandLoan</option>
                                <option>BusinessLoan</option>
                            </select>
                        </div>
                        <button type="Submit" className="btn btn-secondary" name="button">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default GetLoans;
