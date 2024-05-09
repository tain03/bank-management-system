import React from "react";
import { getEmployeeByID, getEmployeeSalary } from "../../api/EmployeeAPI";

class EmployeeSalary extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         salary: NaN,
         time: "",
         employee: {},
      };
   }

   async componentDidMount() {
      const employee = await getEmployeeByID(this.props.match.params.id);
      this.setState({ employee: employee });
   }

   async _clickHandle() {
      const salary = await getEmployeeSalary(
         this.props.match.params.id,
         this.state.time,
      );
      this.setState({ salary: salary });
   }

   render() {
      return (
         <div className="form-infor">
            <h2 className="title">
               Tính lương nhân viên: {this.state.employee.name}
            </h2>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="far fa-calendar-alt"></i>
               </span>
               <input
                  className="form-control"
                  placeholder="Nhập tháng"
                  value={this.state.time}
                  onChange={(e) => this.setState({ time: e.target.value })}
               />
               <span className="input-group-text">MM-yyyy</span>
            </div>
            <div className="input-group">
               <span className="input-group-text form-control">
                  Tiền lương: {this.state.salary}
               </span>
            </div>
            <div className="action">
               <button
                  className="btn btn-success"
                  onClick={this._clickHandle.bind(this)}
               >
                  Xem lương
               </button>
               <a className="btn btn-dark" href="/employee">
                  Quay lại
               </a>
            </div>
         </div>
      );
   }
}

export default EmployeeSalary;
