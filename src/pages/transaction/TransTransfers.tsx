import React from "react";
import Swal from "sweetalert2";
import { getAllCredit } from "../../api/CreditAPI";
import { getAllDeposit } from "../../api/DepositAPI";
import { transferMoney } from "../../api/TransactionAPI";

class TransTransfers extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         credits: [],
         deposits: [],
      };
   }

   async componentDidMount() {
      const credits = await getAllCredit();
      const deposits = await getAllDeposit();
      this.setState({ credits: credits, deposits: deposits });
   }

   async _clickHandle() {
      const isAdd = await transferMoney(
         this.state.amount,
         this.state.idCredit,
         this.state.idDeposit,
      );
      if (isAdd.status === 200)
         window.location.href = `/client/${this.props.match.params.id}`;
      else Swal.fire("Thêm không thành công", "", "error");
   }

   render() {
      return (
         <div className="form-infor">
            <h2 className="title">Thêm giao dịch chuyển tiền</h2>
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
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-user"></i>
               </span>
               <select
                  className="form-select"
                  value={this.state.idCredit}
                  onChange={(e) =>
                     this.setState({
                        idCredit: Number.parseInt(e.target.value),
                     })
                  }
               >
                  <option disabled selected>
                     Chọn tài khoản tín dụng
                  </option>
                  {this.state.credits.map((credit: any) => (
                     <option key={credit.id} value={credit.id}>
                        id: {credit.id} - số dư: {credit.balance}
                     </option>
                  ))}
               </select>
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-user-tie"></i>
               </span>
               <select
                  className="form-select"
                  value={this.state.idDeposit}
                  onChange={(e) =>
                     this.setState({
                        idDeposit: Number.parseInt(e.target.value),
                     })
                  }
               >
                  <option disabled selected>
                     Chọn tài khoản gửi tiền
                  </option>
                  {this.state.deposits.map((deposit: any) => (
                     <option key={deposit.id} value={deposit.id}>
                        id: {deposit.id} - số dư: {deposit.balance}
                     </option>
                  ))}
               </select>
            </div>
            <div className="action">
               <button
                  className="btn btn-success"
                  onClick={this._clickHandle.bind(this)}
               >
                  Thêm
               </button>
               <button
                  className="btn btn-dark"
                  onClick={() => this.props.history.goBack()}
               >
                  Huỷ
               </button>
            </div>
         </div>
      );
   }
}

export default TransTransfers;
