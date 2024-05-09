import React from "react";
import { getCreditByID } from "../../api/CreditAPI";
import { getDepositByID } from "../../api/DepositAPI";
import Nav from "../../components/Navigation";
import TblTran from "./TblTran";

class Transaction extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         transactions: [],
      };
   }

   async componentDidMount() {
      if (this.props.match.params.type === "deposit") {
         const deposit = await getDepositByID(this.props.match.params.id);
         this.setState({ transactions: deposit.listTransaction });
      } else if (this.props.match.params.type === "credit") {
         const credit = await getCreditByID(this.props.match.params.id);
         this.setState({ transactions: credit.listTransaction });
      }
   }

   render() {
      return (
         <div>
            <Nav />
            <div className="container">
               <div className="row mt-4 bg-white content pt-3 pb-3">
                  <div className="text-center mb-3">
                     <h1>Thông tin lịch sử giao dịch</h1>
                  </div>
                  <div className="d-flex justify-content-around mb-3">
                     {this.props.match.params.type === "credit" ? (
                        <a
                           className="btn btn-success"
                           href={`/transaction/add/credit/${this.props.match.params.id}`}
                        >
                           Thêm giao dịch tín dụng
                        </a>
                     ) : (
                        <a
                           className="btn btn-success"
                           href={`/transaction/add/deposit/${this.props.match.params.id}`}
                        >
                           Thêm giao dịch gửi tiền
                        </a>
                     )}
                  </div>
                  <TblTran transactions={this.state.transactions} />
               </div>
            </div>
         </div>
      );
   }
}

export default Transaction;
