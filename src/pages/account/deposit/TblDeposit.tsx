import React from "react";
import Swal from "sweetalert2";
import { deleteDeposit } from "../../../api/DepositAPI";

class TblDeposit extends React.Component<any, any> {
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
            const isDelete = await deleteDeposit(id);
            if (isDelete.status === 200) {
               window.location.reload();
            } else {
               Swal.fire("Xoá không thành công", "", "error");
            }
         }
      });
   }

   render() {
      if (this.props.deposits.length === 0)
         return <h3>Không tìm thấy tài khoản gửi tiền</h3>;
      else
         return (
            <div>
               <table className="table table-hover">
                  <thead className="bg-gray">
                     <tr>
                        <th>Mã số</th>
                        <th>Loại</th>
                        <th>Số dư</th>
                        <th>Lãi suất hàng tháng</th>
                        <th>Số dư tối thiểu</th>
                        <th>Chức năng</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.props.deposits.map((deposit: any) => (
                        <tr key={deposit.id}>
                           <th
                              onClick={() =>
                                 (window.location.href = `/transaction/deposit/${deposit.id}`)
                              }
                           >
                              {deposit.id}
                           </th>
                           <td
                              onClick={() =>
                                 (window.location.href = `/transaction/deposit/${deposit.id}`)
                              }
                           >
                              {deposit.type}
                           </td>
                           <td
                              onClick={() =>
                                 (window.location.href = `/transaction/deposit/${deposit.id}`)
                              }
                           >
                              {deposit.balance}
                           </td>
                           <td
                              onClick={() =>
                                 (window.location.href = `/transaction/deposit/${deposit.id}`)
                              }
                           >
                              {deposit.rate}%
                           </td>
                           <td
                              onClick={() =>
                                 (window.location.href = `/transaction/deposit/${deposit.id}`)
                              }
                           >
                              {deposit.minBalance}
                           </td>
                           <td>
                              <form
                                 action={`/deposit/edit/${deposit.id}/${this.props.idClient}`}
                                 method="GET"
                              >
                                 <button className="btn btn-warning">
                                    Sửa
                                 </button>
                              </form>
                              <button
                                 className="btn btn-dark ml-3"
                                 onClick={this._deleteHandle.bind(
                                    this,
                                    deposit.id,
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

export default TblDeposit;
