import React from "react";
import TblEmployee from "./TblEmployee";
import Nav from "../../components/Navigation";
import { getAllEmployee, searchEmployee } from "../../api/EmployeeAPI";

class Employee extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         keyword: "",
         employees: [],
      };
   }

   componentWillMount() {
      document.title = "Bank | Employee";
   }

   async componentDidMount() {
      const employees = await getAllEmployee();
      this.setState({ employees: employees });
   }

   async _inpHandle(e: React.ChangeEvent<HTMLInputElement>) {
      await this.setState({ keyword: e.target.value });
      if (this.state.keyword && this.state.keyword !== " ") {
         searchEmployee(this.state.keyword).then((data) =>
            this.setState({ employees: data }),
         );
      } else {
         getAllEmployee().then((data) => this.setState({ employees: data }));
      }
   }

   render() {
      return (
         <div>
            <Nav />
            <div className="w-75 mx-auto">
               <div className="row mt-4 bg-white content pt-3 pb-3">
                  <div className="text-center mb-3">
                     <h1>Thông tin nhân viên</h1>
                  </div>
                  <div className="d-flex justify-content-center mb-3">
                     <div className="input-group w-50 mr-5">
                        <span className="input-group-text">
                           <i className="fas fa-search"></i>
                        </span>
                        <input
                           className="form-control"
                           type="search"
                           placeholder="Nhập tên nhân viên"
                           value={this.state.keyword}
                           onChange={(e) => this._inpHandle(e)}
                        />
                     </div>
                     <a className="btn btn-success" href="/employee/add">
                        Thêm Nhân viên
                     </a>
                  </div>
                  <TblEmployee employees={this.state.employees} />
               </div>
            </div>
         </div>
      );
   }
}

export default Employee;
