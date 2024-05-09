import React from "react";
import Swal from "sweetalert2";
import { insertCredit } from "../../../api/CreditAPI";
import { getAllEmployee } from "../../../api/EmployeeAPI";

class CreditAdd extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         credit: { client: {}, employeeCreate: {} },
         employees: [],
      };
   }

   componentWillMount() {
      document.title = "Bank | Add Credit Account";
   }

   async componentDidMount() {
      const employees = await getAllEmployee();
      this.setState({
         credit: {
            client: { id: this.props.match.params.id },
            employeeCreate: {},
         },
         employees: employees,
      });
   }

   async _addHandle() {
      let newCredit = this.state.credit;
      newCredit.creditLimit = Number.parseFloat(this.state.creditLimit);
      this.setState({ credit: newCredit });
      const isAdd = await insertCredit(this.state.credit);
      if (isAdd.status === 200)
         window.location.href = `/client/${this.props.match.params.id}`;
      else Swal.fire("Thêm không thành công", "", "error");
   }

   render() {
      return (
         <div className="form-infor">
            <h2 className="title">Thêm tài khoản tín dụng</h2>
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
                  <i className="fas fa-hourglass-end"></i>
               </span>
               <input
                  className="form-control"
                  placeholder="Hạn mứu tín dụng"
                  value={this.state.creditLimit}
                  onChange={(e) =>
                     this.setState({ creditLimit: e.target.value })
                  }
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-user-tie"></i>
               </span>
               <select
                  className="form-select"
                  value={this.state.credit.employeeCreate.id}
                  onChange={(e) => {
                     let preCredit = this.state.credit;
                     preCredit.employeeCreate.id = Number.parseInt(
                        e.target.value,
                     );
                     this.setState({ credit: preCredit });
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

export default CreditAdd;
