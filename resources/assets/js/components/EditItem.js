
import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {Fname: '', Lname: '',Address:'',Amount:'',Duration:'',TransactionDate:'',options:''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.handleChange6 = this.handleChange6.bind(this);
        this.handleChange7 = this.handleChange7.bind(this);
    }

    componentDidMount(props){
        axios.get(`http://localhost/Loan_Calculator/public/customer/${this.props.match.params.id}/edit`)
            .then(response => {
                this.setState({
                    Fname: response.data.Fname,
                    Lname: response.data.Lname,
                    Address:response.data.Address,
                    Amount:response.data.Amount,
                    Duration:response.data.Duration,
                    TransactionDate:response.data.TransactionDate,
                    options:response.data.options
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    handleChange1(e){
        this.setState({
            Fname: e.target.value
        })
    }
    handleChange2(e){
        this.setState({
            Lname: e.target.value
        })
    }
    handleChange3(e){
        this.setState({
            Address: e.target.value
        })
    }
    handleChange4(e){
        this.setState({
            Amount: e.target.value
        })
    }
    handleChange5(e){
        this.setState({
            Duration: e.target.value
        })
    }
    handleChange6(e){
        this.setState({
            TransactionDate: e.target.value
        })
    }
    handleChange7(e){
        this.setState({
            options: e.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const customers = {
            Fname: this.state.Fname,
            Lname: this.state.Lname,
            Address:this.state.Address,
            Amount:this.state.Amount,
            TransactionDate:this.state.TransactionDate,
            Duration:this.state.Duration,
            options:this.state.options

        }
        let uri = 'http://localhost/Loan_Calculator/public/customer/'+this.props.match.params.id;
        axios.patch(uri, customers)
            .then(response => {
                if(response.data.status) {
                    this.props.history.push('/details');
                }
                else{
                    alert(response.data.msg);
                }
            })
            .catch(error=>{
                console.log(error.response)
            });

    }
    render(){
        return (
            <div>
                <h1>Update Item</h1>
                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <Link to="/display-item" className="btn btn-success">Return to Items</Link>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.Fname}
                               onChange={this.handleChange1} />
                    </div>

                    <div className="form-group">
                        <label name="product_price">Last Name</label>
                        <input type="text" className="form-control"
                               value={this.state.Lname}
                               onChange={this.handleChange2} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.Address}
                               onChange={this.handleChange3} />
                    </div>
                    <div className="form-group">
                        <label>Amount</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.Amount}
                               onChange={this.handleChange4} />
                    </div>
                    <div className="form-group">
                        <label>Duration</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.Duration}
                               onChange={this.handleChange5} />
                    </div>
                    <div className="form-group">
                        <label>Transaction Date</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.TransactionDate}
                               onChange={this.handleChange6} />
                    </div>
                    <div className="form-group">
                        <label>Loan Type</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.options}
                               onChange={this.handleChange7} />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default EditItem;