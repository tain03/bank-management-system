import React from "react";
import Swal from "sweetalert2";
import { insertDeposit } from "../../../api/DepositAPI";
import { getAllEmployee } from "../../../api/EmployeeAPI";

class DepositAdd extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         deposit: { client: {}, employeeCreate: {} },
         employees: [],
      };
   }

   componentWillMount() {
      document.title = "Bank | Add Deposit Account";
   }

   async componentDidMount() {
      const employees = await getAllEmployee();
      this.setState({
         deposit: {
            client: { id: this.props.match.params.id },
            employeeCreate: {},
         },
         employees: employees,
      });
   }

   async _addHandle() {
      const isAdd = await insertDeposit(this.state.deposit);
      if (isAdd.status === 200)
         window.location.href = `/client/${this.props.match.params.id}`;
      else Swal.fire("Thêm không thành công", "", "error");
   }

   render() {
      return (
         <div className="form-infor">
            <h2 className="title">Thêm tài khoản gửi tiền</h2>
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
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-user-tie"></i>
               </span>
               <select
                  className="form-select"
                  value={this.state.deposit.employeeCreate.id}
                  onChange={(e) => {
                     let preDeposit = this.state.deposit;
                     preDeposit.employeeCreate.id = Number.parseInt(
                        e.target.value,
                     );
                     this.setState({ deposit: preDeposit });
                  }}
               >
                  <option disabled selected>
                     Chọn một nhân viên
                  </option>
                  {this.state.employees.map((employee: any) => (
                     <option key={employee.id} value={employee.id}>
                        id: {employee.id} - name: {employee.name}
                     </option>
                  ))}
               </select>
            </div>
            <div className="action">
               <button
                  className="btn btn-success"
                  onClick={this._addHandle.bind(this)}
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

export default DepositAdd;
