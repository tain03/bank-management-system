import React from "react";
import Swal from "sweetalert2";
import { deleteEmployee } from "../../api/EmployeeAPI";

class TblEmployee extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {};
   }

   async _deleteHandle(id: any) {
      Swal.fire({
         title: "Bạn có chắc muốn xoá không?",
         text: "Bạn sẽ không thể quay lại!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Có, hãy xoá nó!",
      }).then(async (result) => {
         if (result.isConfirmed) {
            const isDelete = await deleteEmployee(id);
            if (isDelete.status === 200) {
               window.location.href = "/employee";
            } else {
               Swal.fire("Xoá không thành công", "", "error");
            }
         }
      });
   }

   render() {
      if (this.props.employees.length === 0)
         return <h3>Không tìm thấy nhân viên</h3>;
      else
         return (
            <table className="table table-hover">
               <thead className="bg-gray">
                  <tr>
                     <th>ID</th>
                     <th>CMT</th>
                     <th>Họ tên</th>
                     <th>Ngày sinh</th>
                     <th>Địa chỉ</th>
                     <th>Bậc nghề</th>
                     <th>Kinh nghiệm</th>
                     <th>Vị trí</th>
                     <th>Chức năng</th>
                  </tr>
               </thead>
               <tbody>
                  {this.props.employees.map((employee: any) => (
                     <tr key={employee.id}>
                        <th
                           onClick={() =>
                              (window.location.href = `/employee/salary/${employee.id}`)
                           }
                        >
                           {employee.id}
                        </th>
                        <td
                           onClick={() =>
                              (window.location.href = `/employee/salary/${employee.id}`)
                           }
                        >
                           {employee.identityCard}
                        </td>
                        <td
                           onClick={() =>
                              (window.location.href = `/employee/salary/${employee.id}`)
                           }
                        >
                           {employee.name}
                        </td>
                        <td
                           onClick={() =>
                              (window.location.href = `/employee/salary/${employee.id}`)
                           }
                        >
                           {new Date(employee.dateOfBirth).toDateString()}
                        </td>
                        <td
                           onClick={() =>
                              (window.location.href = `/employee/salary/${employee.id}`)
                           }
                        >
                           {employee.address}
                        </td>
                        <td
                           onClick={() =>
                              (window.location.href = `/employee/salary/${employee.id}`)
                           }
                        >
                           {employee.level}
                        </td>
                        <td
                           onClick={() =>
                              (window.location.href = `/employee/salary/${employee.id}`)
                           }
                        >
                           {employee.experience}
                        </td>
                        <td
                           onClick={() =>
                              (window.location.href = `/employee/salary/${employee.id}`)
                           }
                        >
                           {employee.position}
                        </td>
                        <td>
                           <form
                              action={`/employee/edit/${employee.id}`}
                              method="GET"
                           >
                              <button className="btn btn-warning">Sửa</button>
                           </form>
                           <button
                              className="btn btn-dark ml-3"
                              type="button"
                              onClick={this._deleteHandle.bind(
                                 this,
                                 employee.id as number,
                              )}
                           >
                              Xoá
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         );
   }
}

export default TblEmployee;
