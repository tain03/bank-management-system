import React from "react";
import Swal from "sweetalert2";
import { deleteCredit } from "../../../api/CreditAPI";

class TblCredit extends React.Component<any, any> {
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
            const isDelete = await deleteCredit(id);
            if (isDelete.status === 200) {
               window.location.reload();
            } else {
               Swal.fire("Xoá không thành công", "", "error");
            }
         }
      });
   }

   render() {
      if (this.props.credits.length === 0)
         return <h3>Không tìm thấy tài khoản tín dụng</h3>;
      else
         return (
            <div>
               <table className="table table-hover">
                  <thead className="bg-gray">
                     <tr>
                        <th>Mã số</th>
                        <th>Loại</th>
                        <th>Số dư</th>
                        <th>Hạn mức tín dụng</th>
                        <th>Chức năng</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.props.credits.map((credit: any) => (
                        <tr key={credit.id}>
                           <th
                              onClick={() =>
                                 (window.location.href = `/transaction/credit/${credit.id}`)
                              }
                           >
                              {credit.id}
                           </th>
                           <td
                              onClick={() =>
                                 (window.location.href = `/transaction/credit/${credit.id}`)
                              }
                           >
                              {credit.type}
                           </td>
                           <td
                              onClick={() =>
                                 (window.location.href = `/transaction/credit/${credit.id}`)
                              }
                           >
                              {credit.balance}
                           </td>
                           <td
                              onClick={() =>
                                 (window.location.href = `/transaction/credit/${credit.id}`)
                              }
                           >
                              {credit.creditLimit}
                           </td>
                           <td>
                              <form
                                 action={`/credit/edit/${credit.id}/${this.props.idClient}`}
                              >
                                 <button className="btn btn-warning">
                                    Sửa
                                 </button>
                              </form>
                              <button
                                 className="btn btn-dark ml-3"
                                 onClick={this._deleteHandle.bind(
                                    this,
                                    credit.id,
                                 )}
                              >
                                 Xoá
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         );
   }
}

export default TblCredit;
