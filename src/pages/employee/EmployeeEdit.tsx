import React from "react";
import Swal from "sweetalert2";
import { getEmployeeByID, updateEmployee } from "../../api/EmployeeAPI";

class EmployeeEdit extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         employee: {},
      };
   }

   componentWillMount() {
      document.title = "Bank | Edit Employee";
   }

   async componentDidMount() {
      const employee = await getEmployeeByID(
         this.props.match.params.id as number,
      );
      this.setState({ employee: employee });
   }

   async _saveHandle() {
      const isSave = await updateEmployee(this.state.employee);
      if (isSave.status === 200) window.location.href = "/employee";
      else Swal.fire("Lưu không thành công", "", "error");
   }

   render() {
      return (
         <div className="form-infor">
            <h2 className="title">Sửa thông tin nhân viên</h2>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-id-card"></i>
               </span>
               <input
                  className="form-control"
                  disabled
                  placeholder="Mã nhân viên"
                  value={this.state.employee.id}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-passport"></i>
               </span>
               <input
                  className="form-control"
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
                  onClick={this._saveHandle.bind(this)}
               >
                  Lưu
               </button>
               <a className="btn btn-dark" href="/employee">
                  Huỷ
               </a>
            </div>
         </div>
      );
   }
}

export default EmployeeEdit;
