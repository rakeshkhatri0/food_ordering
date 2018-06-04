import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import GetLoans from './GetLoans';
import LoanDetails from './LoanDetails';
import PersonLoanDetails from './PersonLoanDetails';
import EditItem from './EditItem';


const AppRouter = () =>
    (
        <BrowserRouter basename="/Loan_Calculator/public/">
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true}/>
                    <Route path="/get" component={GetLoans} />
                    <Route path="/details" component={LoanDetails} />
                    <Route path="/loanDetails/:id" component={PersonLoanDetails} />
                    <Route path="/edit/:id" component={EditItem} />
                </Switch>
            </div>
        </BrowserRouter>
);
export default AppRouter;
