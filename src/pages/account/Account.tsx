import React from "react";
import Nav from "../../components/Navigation";
import { getClientByID } from "../../api/ClientAPI";
import TblDeposit from "./deposit/TblDeposit";
import TblCredit from "./credit/TblCredit";

class Account extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         client: { depositAccounts: [], creditAccounts: [] },
      };
   }

   componentWillMount() {
      document.title = "Bank | Acount";
   }

   async componentDidMount() {
      const client = await getClientByID(this.props.match.params.id);
      this.setState({ client: client });
   }

   render() {
      return (
         <div>
            <Nav />
            <div className="container">
               <div className="row mt-4 bg-white content pt-3 pb-3">
                  <div className="text-center mb-3">
                     <h1>
                        Thông tin tài khoản của khách hàng:{" "}
                        {this.state.client.name}
                     </h1>
                  </div>
                  <div className="d-flex mb-3 mt-3 align-item-center">
                     <h4>Tài khoản gủi tiền:</h4>
                     <a
                        className="btn btn-success ml-5"
                        href={`/deposit/add/${this.state.client.id}`}
                     >
                        Thêm tài khoản gửi tiền
                     </a>
                     <a
                        className="btn btn-success ml-3"
                        href={`/transfers/${this.props.match.params.id}`}
                     >
                        Thêm giao dịch chuyển tiền
                     </a>
                  </div>
                  <TblDeposit
                     deposits={this.state.client.depositAccounts}
                     idClient={this.state.client.id}
                  />
               </div>
               <div className="row mt-3 bg-white content pt-3 pb-3">
                  <div className="d-flex mb-3 align-item-center">
                     <h4>Tài khoản tín dụng:</h4>
                     <a
                        className="btn btn-success ml-5"
                        href={`/credit/add/${this.state.client.id}`}
                     >
                        Thêm tài khoản tín dụng
                     </a>
                  </div>
                  <TblCredit
                     credits={this.state.client.creditAccounts}
                     idClient={this.state.client.id}
                  />
               </div>
            </div>
         </div>
      );
   }
}

export default Account;
