import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/home/Home";
import Client from "./pages/client/Client";
import ClientAdd from "./pages/client/ClientAdd";
import ClientEdit from "./pages/client/ClientEdit";
import Employee from "./pages/employee/Employee";
import EmployeeAdd from "./pages/employee/EmployeeAdd";
import EmployeeEdit from "./pages/employee/EmployeeEdit";
import EmployeeSalary from "./pages/employee/EmployeeSalary";
import Account from "./pages/account/Account";
import DepositAdd from "./pages/account/deposit/DepositAdd";
import DepositEdit from "./pages/account/deposit/DepositEdit";
import CreditAdd from "./pages/account/credit/CreditAdd";
import CreditEdit from "./pages/account/credit/CreditEdit";
import Transaction from "./pages/transaction/Transaction";
import PageNotFound from "./pages/page_not_found/PageNotFound";
import Top10Client from "./pages/statistic/Top10Client";
import TransAdd from "./pages/transaction/TransAdd";
import TransTransfers from "./pages/transaction/TransTransfers";
import AccountInDebt from "./pages/statistic/AccountInDebt";
import StatisticTransaction from "./pages/statistic/StatisticTransaction";

render(
   <StrictMode>
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/client/" component={Client} />
            <Route exact path="/client/add" component={ClientAdd} />
            <Route exact path="/client/edit/:id" component={ClientEdit} />
            <Route exact path="/employee" component={Employee} />
            <Route exact path="/employee/add" component={EmployeeAdd} />
            <Route exact path="/employee/edit/:id" component={EmployeeEdit} />
            <Route
               exact
               path="/employee/salary/:id"
               component={EmployeeSalary}
            />
            <Route exact path="/client/:id" component={Account} />
            <Route exact path="/deposit/add/:id" component={DepositAdd} />
            <Route
               exact
               path="/deposit/edit/:idDeposit/:idClient"
               component={DepositEdit}
            />
            <Route exact path="/credit/add/:id" component={CreditAdd} />
            <Route
               exact
               path="/credit/edit/:idCredit/:idClient"
               component={CreditEdit}
            />
            <Route
               exact
               path="/transaction/:type/:id"
               component={Transaction}
            />
            <Route
               exact
               path="/transaction/add/:type/:id"
               component={TransAdd}
            />
            <Route exact path="/transfers/:id" component={TransTransfers} />
            <Route
               exact
               path="/statistic/transaction"
               component={StatisticTransaction}
            />
            <Route
               exact
               path="/statistic/account-in-debt"
               component={AccountInDebt}
            />
            <Route exact path="/statistic/top10" component={Top10Client} />
            <Route path="/404" component={PageNotFound} />
            <Redirect to="/404" />
         </Switch>
      </BrowserRouter>
   </StrictMode>,
   document.getElementById("root"),
);
