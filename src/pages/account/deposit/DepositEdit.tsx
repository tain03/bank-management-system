import React from "react";
import Swal from "sweetalert2";
import { getDepositByID, updateDeposit } from "../../../api/DepositAPI";

class DepositEdit extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         deposit: {},
      };
   }

   componentWillMount() {
      document.title = "Bank | Edit Deposit Account";
   }

   async componentDidMount() {
      const deposit = await getDepositByID(this.props.match.params.idDeposit);
      this.setState({ deposit: deposit });
   }

   async _saveHandle() {
      const isSave = await updateDeposit(this.state.deposit);
      if (isSave.status === 200)
         window.location.href = `/client/${this.props.match.params.idClient}`;
      else Swal.fire("Sửa không thành công", "", "error");
   }

   render() {
      return (
         <div className="form-infor">
            <h2 className="title">Sửa tài khoản gửi tiền</h2>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-credit-card"></i>
               </span>
               <input
                  className="form-control"
                  placeholder="Mã tài khoản"
                  disabled
                  value={this.state.deposit.id}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fab fa-codepen"></i>
               </span>
               <input
                  className="form-control"
                  placeholder="Loại tài khoản"
                  value={this.state.deposit.type}
                  onChange={(e) => {
                     let newDeposit = this.state.deposit;
                     newDeposit.type = e.target.value;
                     this.setState({ deposit: newDeposit });
                  }}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-wallet"></i>
               </span>
               <input
                  className="form-control"
                  placeholder="Số dư"
                  type="number"
                  value={this.state.deposit.balance}
                  onChange={(e) => {
                     let newDeposit = this.state.deposit;
                     newDeposit.balance = Number.parseFloat(e.target.value);
                     this.setState({ deposit: newDeposit });
                  }}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-percent"></i>
               </span>
               <input
                  className="form-control"
                  placeholder="Lãi suất hàng tháng"
                  type="number"
                  value={this.state.deposit.rate}
                  onChange={(e) => {
                     let newDeposit = this.state.deposit;
                     newDeposit.rate = Number.parseFloat(e.target.value);
                     this.setState({ deposit: newDeposit });
                  }}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-dollar-sign"></i>
               </span>
               <input
                  className="form-control"
                  placeholder="Số dư tối thiểu"
                  type="number"
                  value={this.state.deposit.minBalance}
                  onChange={(e) => {
                     let newDeposit = this.state.deposit;
                     newDeposit.minBalance = Number.parseFloat(e.target.value);
                     this.setState({ deposit: newDeposit });
                  }}
               />
            </div>
            <div className="action">
               <button
                  className="btn btn-success"
                  onClick={this._saveHandle.bind(this)}
               >
                  Lưu
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

export default DepositEdit;
