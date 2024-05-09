import React from "react";
import Swal from "sweetalert2";
import { deleteClient } from "../../api/ClientAPI";

interface IProps {
   clients: [];
}

interface IState {}

class TblClient extends React.Component<IProps, IState> {
   constructor(props: IProps) {
      super(props);
      this.state = {};
   }
   componentDidMount() {}
   render() {
      if (this.props.clients.length === 0) {
         return <h3>Không tìm thấy khách hàng</h3>;
      } else {
         return (
            <table className="table table-hover">
               <thead className="bg-gray">
                  <tr>
                     <th>ID</th>
                     <th>CMT</th>
                     <th>Họ tên</th>
                     <th>Ngày sinh</th>
                     <th>Địa chỉ</th>
                     <th>Chức năng</th>
                  </tr>
               </thead>
               <tbody>
                  {this.props.clients.map((client: any) => (
                     <tr key={client.id}>
                        <th
                           onClick={() =>
                              (window.location.href = `/client/${client.id}`)
                           }
                        >
                           {client.id}
                        </th>
                        <td
                           onClick={() =>
                              (window.location.href = `/client/${client.id}`)
                           }
                        >
                           {client.identityCard}
                        </td>
                        <td
                           onClick={() =>
                              (window.location.href = `/client/${client.id}`)
                           }
                        >
                           {client.name}
                        </td>
                        <td
                           onClick={() =>
                              (window.location.href = `/client/${client.id}`)
                           }
                        >
                           {new Date(client.dateOfBirth).toDateString()}
                        </td>
                        <td
                           onClick={() =>
                              (window.location.href = `/client/${client.id}`)
                           }
                        >
                           {client.address}
                        </td>
                        <td>
                           <form
                              action={`/client/edit/${client.id}`}
                              method="GET"
                           >
                              <button className="btn btn-warning">Sửa</button>
                           </form>
                           <button
                              className="btn btn-dark ml-3"
                              type="button"
                              onClick={() => clickDelete(client.id)}
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
}

export default TblClient;

const clickDelete = (id: number) => {
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
         const isDelete = await deleteClient(id);
         if (isDelete.status === 200) {
            window.location.reload();
         } else {
            Swal.fire("Xoá không thành công", "", "error");
         }
      }
   });
};
