import React from "react";
import Swal from "sweetalert2";
import { insertTranstion } from "../../api/TransactionAPI";

class TransAddCredit extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         content: "",
         amount: "",
      };
   }

   async _clickHandle() {
      let tran;
      if (this.props.match.params.type === "credit") {
         tran = {
            content: this.state.content,
            amount: Number.parseFloat(this.state.amount),
            creditAccount: { id: this.props.match.params.id },
         };
      } else if (this.props.match.params.type === "deposit") {
         tran = {
            content: this.state.content,
            amount: Number.parseFloat(this.state.amount),
            depositAccount: { id: this.props.match.params.id },
         };
      }
      const isAdd = await insertTranstion(tran);
      if (isAdd.status === 200)
         window.location.href = `/transaction/${this.props.match.params.type}/${this.props.match.params.id}`;
      else Swal.fire("Thêm không thành công", "", "error");
   }

   render() {
      return (
         <div className="form-infor">
            <h2 className="title">Thêm giao dịch</h2>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="far fa-comment"></i>
               </span>
               <input
                  className="form-control"
                  placeholder="Nội dung"
                  value={this.state.content}
                  onChange={(e) => this.setState({ content: e.target.value })}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-money-check-alt"></i>
               </span>
               <input
                  className="form-control"
                  placeholder="Số tiền"
                  value={this.state.amount}
                  onChange={(e) =>
                     this.setState({
                        amount: e.target.value,
                     })
                  }
               />
            </div>
            <div className="action">
               <button
                  className="btn btn-success"
                  onClick={this._clickHandle.bind(this)}
               >
                  Thêm
               </button>
               <a
                  className="btn btn-dark"
                  href={`/transaction/${this.props.match.params.type}/${this.props.match.params.id}`}
               >
                  Quay lại
               </a>
            </div>
         </div>
      );
   }
}

export default TransAddCredit;
