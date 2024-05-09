import React from "react";

class TblTransaction extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {};
   }
   render() {
      if (this.props.transactions.length === 0)
         return (
            <div className="row mt-3 bg-white content pt-3 pb-3">
               <h3>Không có giao dịch nào</h3>
            </div>
         );
      else
         return (
            <div className="row mt-3 bg-white content pt-3 pb-3">
               <h4>Giao dịch:</h4>
               <table className="table table-hover">
                  <thead className="bg-gray">
                     <tr>
                        <th>ID</th>
                        <th>Số tiền</th>
                        <th>Nội dung</th>
                        <th>Thời gian</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.props.transactions.map((tran: any) => (
                        <tr key={tran.id}>
                           <th>{tran.id}</th>
                           <td>{tran.amount}</td>
                           <td>{tran.content}</td>
                           <td>{new Date(tran.createAt).toLocaleString()}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         );
   }
}

export default TblTransaction;
