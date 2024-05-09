import React from "react";
import Swal from "sweetalert2";
import { insertClient } from "../../api/ClientAPI";

interface IProps {}

interface IState {
   client: {
      id: number;
      identityCard: string;
      name: string;
      dateOfBirth: string;
      address: string;
   };
}

class ClientAdd extends React.Component<IProps, IState> {
   constructor(props: IProps) {
      super(props);
      this.state = {
         client: {
            id: 0,
            identityCard: "",
            name: "",
            dateOfBirth: "",
            address: "",
         },
      };
   }

   componentWillMount() {
      document.title = "Bank | Add Client";
   }

   render() {
      return (
         <div className="form-infor">
            <h2 className="title">Thêm khách hàng</h2>
            <div className="input-group">
               <span className="input-group-text">
                  <i className="fas fa-passport"></i>
               </span>
               <input
                  className="form-control"
                  required
                  placeholder="Chứng minh thư"
                  value={this.state.client.identityCard}
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
                  onClick={() => clickAdd(this.state.client)}
               >
                  Thêm
               </button>
               <a className="btn btn-dark" href="/client">
                  Huỷ
               </a>
            </div>
         </div>
      );
   }
}

export default ClientAdd;

const clickAdd = async (client: object) => {
   const isInsert = await insertClient(client);
   if (isInsert.status === 201) window.location.href = "/client";
   else Swal.fire("Thêm không thành công", "", "error");
};
