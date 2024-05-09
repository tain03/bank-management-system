import React from "react";
import Swal from "sweetalert2";
import { getCreditByID, updateCredit } from "../../../api/CreditAPI";

class CreditEdit extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         credit: {},
      };
   }

   componentWillMount() {
      document.title = "Bank | Edit Credit Account";
   }

   async componentDidMount() {
      const credit = await getCreditByID(this.props.match.params.idCredit);
      this.setState({ credit: credit });
   }

   async _saveHandle() {
      let newCredit = this.state.credit;
      newCredit.creditLimit = Number.parseFloat(newCredit.creditLimit);
      newCredit.balance = Number.parseFloat(newCredit.balance);
      this.setState({ credit: newCredit });
      const isSave = await updateCredit(this.state.credit);
      if (isSave.status === 200)
         window.location.href = `/client/${this.props.match.params.idClient}`;
      else Swal.fire("Sửa không thành công", "", "error");
   }

   render() {
      return (
         <div className="form-infor">
            <h2 className="title">Sửa tài khoản tín dụng</h2>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-credit-card"></i>
               </span>
               <input
                  className="form-control"
                  placeholder="Mã tài khoản"
                  disabled
                  value={this.state.credit.id}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fab fa-codepen"></i>
               </span>
               <input
                  className="form-control"
                  placeholder="Loại tài khoản"
                  value={this.state.credit.type}
                  onChange={(e) => {
                     let newCredit = this.state.credit;
                     newCredit.type = e.target.value;
                     this.setState({ credit: newCredit });
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
                  value={this.state.credit.balance}
                  onChange={(e) => {
                     let newCredit = this.state.credit;
                     newCredit.balance = e.target.value;
                     this.setState({ credit: newCredit });
                  }}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-hourglass-end"></i>
               </span>
               <input
                  className="form-control"
                  placeholder="Hạn mứu tín dụng"
                  value={this.state.credit.creditLimit}
                  onChange={(e) => {
                     let newCredit = this.state.credit;
                     newCredit.creditLimit = e.target.value;
                     this.setState({ credit: newCredit });
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

export default CreditEdit;
