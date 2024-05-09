import React from "react";
import Swal from "sweetalert2";
//import call api
import { getClientByID, updateClient } from "../../api/ClientAPI";

interface IProps {
   match: { params: { id: string } };
}

interface IState {
   client: object;
}

class ClientEditPage extends React.Component<IProps, IState> {
   constructor(props: IProps) {
      super(props);
      this.state = {
         client: {},
      };
   }

   componentWillMount() {
      document.title = "Bank | Edit Client";
   }

   componentDidMount() {
      getClientByID(Number.parseInt(this.props.match.params.id)).then((data) =>
         this.setState({ client: data }),
      );
   }

   render() {
      return (
         <div className="form-infor">
            <h2 className="title">Sửa thông tin khách hàng</h2>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-id-card"></i>
               </span>
               <input
                  className="form-control"
                  required
                  disabled
                  placeholder="Mã khách hàng"
                  value={(this.state.client as any).id}
               />
            </div>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-passport"></i>
               </span>
               <input
                  className="form-control"
                  required
                  placeholder="Chứng minh thư"
                  value={(this.state.client as any).identityCard}
                  onChange={(e) => {
                     let newClient: any = this.state.client;
                     newClient.identityCard = e.target.value;
                     this.setState({ client: newClient });
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
                  value={(this.state.client as any).name}
                  onChange={(e) => {
                     let newClient: any = this.state.client;
                     newClient.name = e.target.value;
                     this.setState({ client: newClient });
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
                  value={(this.state.client as any).dateOfBirth}
                  onChange={(e) => {
                     let newClient: any = this.state.client;
                     newClient.dateOfBirth = e.target.value;
                     this.setState({ client: newClient });
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
                  value={(this.state.client as any).address}
                  onChange={(e) => {
                     let newClient: any = this.state.client;
                     newClient.address = e.target.value;
                     this.setState({ client: newClient });
                  }}
               />
            </div>
            <div className="action">
               <button
                  className="btn btn-success"
                  onClick={(e) => clickSave(this.state.client)}
               >
                  Lưu
               </button>
               <a className="btn btn-dark" href="/client">
                  Huỷ
               </a>
            </div>
         </div>
      );
   }
}

export default ClientEditPage;

const clickSave = async (client: object) => {
   const isSave = await updateClient(client);
   if (isSave.status === 200) window.location.href = "/client";
   else Swal.fire("Sửa không thành công", "", "error");
};
