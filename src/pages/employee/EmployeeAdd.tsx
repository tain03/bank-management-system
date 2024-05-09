import React from "react";
import Swal from "sweetalert2";
import { insertEmployee } from "../../api/EmployeeAPI";

class EmployeeAdd extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         employee: {},
      };
   }

   componentWillMount() {
      document.title = "Bank | Add Employee";
   }

   async _clickHandle() {
      const isAdd = await insertEmployee(this.state.employee);
      if (isAdd.status === 201) window.location.href = "/employee";
      else Swal.fire("Thêm không thành công", "", "error");
   }

   render() {
      return (
         <div className="form-infor">
            <h2 className="title">Thông tin nhân viên</h2>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-passport"></i>
               </span>
               <input
                  className="form-control"
                  required
                  placeholder="Chứng minh thư"
                  value={this.state.employee.identityCard}
                  onChange={(e) => {
                     let newEmployee = this.state.employee;
                     newEmployee.identityCard = e.target.value;
                     this.setState({ employee: newEmployee });
                  }}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-signature"></i>
               </span>
               <input
                  className="form-control"
                  required
                  placeholder="Họ tên"
                  value={this.state.employee.name}
                  onChange={(e) => {
                     let newEmployee = this.state.employee;
                     newEmployee.name = e.target.value;
                     this.setState({ employee: newEmployee });
                  }}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-birthday-cake"></i>
               </span>
               <input
                  className="form-control"
                  required
                  type="date"
                  value={this.state.employee.dateOfBirth}
                  onChange={(e) => {
                     let newEmployee = this.state.employee;
                     newEmployee.dateOfBirth = e.target.value;
                     this.setState({ employee: newEmployee });
                  }}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-map-marked-alt"></i>
               </span>
               <input
                  className="form-control"
                  required
                  placeholder="Địa chỉ"
                  value={this.state.employee.address}
                  onChange={(e) => {
                     let newEmployee = this.state.employee;
                     newEmployee.address = e.target.value;
                     this.setState({ employee: newEmployee });
                  }}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fab fa-codepen"></i>
               </span>
               <input
                  className="form-control"
                  required
                  placeholder="Bậc nghề"
                  value={this.state.employee.level}
                  onChange={(e) => {
                     let newEmployee = this.state.employee;
                     newEmployee.level = e.target.value;
                     this.setState({ employee: newEmployee });
                  }}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-dollar-sign"></i>
               </span>
               <input
                  className="form-control"
                  required
                  placeholder="Thâm niên"
                  value={this.state.employee.experience}
                  onChange={(e) => {
                     let newEmployee: any = this.state.employee;
                     newEmployee.experience = e.target.value;
                     this.setState({ employee: newEmployee });
                  }}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-chair"></i>
               </span>
               <input
                  className="form-control"
                  required
                  placeholder="Vị trí công việc"
                  value={this.state.employee.position}
                  onChange={(e) => {
                     let newEmployee = this.state.employee;
                     newEmployee.position = e.target.value;
                     this.setState({ employee: newEmployee });
                  }}
               />
            </div>
            <div className="action">
               <button
                  className="btn btn-success"
                  onClick={this._clickHandle.bind(this)}
               >
                  Thêm
               </button>
               <a className="btn btn-dark" href="/employee">
                  Huỷ
               </a>
            </div>
         </div>
      );
   }
}

export default EmployeeAdd;
