import React from "react";
import TblTransaction from "./TblTransaction";

class TblCredit extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = { transactions: [] };
   }
   render() {
      if (this.props.credits.length === 0)
         return (
            <div className="row mt-3 bg-white content pt-3 pb-3">
               <h3>Không tìm thấy tài khoản tín dụng</h3>
            </div>
         );
      else
         return (
            <div>
               <div className="row mt-3 bg-white content pt-3 pb-3">
                  <h4>Tài khoản tín dụng:</h4>
                  <table className="table table-hover">
                     <thead className="bg-gray">
                        <tr>
                           <th>Mã số</th>
                           <th>Loại</th>
                           <th>Số dư</th>
                           <th>Hạn mức tín dụng</th>
                        </tr>
                     </thead>
                     <tbody>
                        {this.props.credits.map((credit: any) => (
                           <tr
                              key={credit.id}
                              onClick={() =>
                                 this.setState({
                                    transactions: credit.listTransaction,
                                 })
                              }
                           >
                              <th>{credit.id}</th>
                              <td>{credit.type}</td>
                              <td>{credit.balance}</td>
                              <td>{credit.creditLimit}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <TblTransaction transactions={this.state.transactions} />
            </div>
         );
   }
}

export default TblCredit;
