import React from "react";
import Swal from "sweetalert2";
//import components
import TblClient from "./TblClient";
import Nav from "../../components/Navigation";
// import call api
import { getAllClient, searchClient } from "../../api/ClientAPI";

interface IProps {}

interface IState {
   keyword: string;
   clients: [];
}

class ClientPage extends React.Component<IProps, IState> {
   constructor(props: any) {
      super(props);
      this.state = {
         keyword: "",
         clients: [],
      };
   }

   UNSAFE_componentWillMount() {
      //set title
      document.title = "Bank | Client";
   }

   async componentDidMount() {
      const clients = await getAllClient();
      this.setState({ clients: clients });
   }

   submitHandle = (e: React.FormEvent | React.MouseEvent) => {
      e.preventDefault();
      if (this.state.keyword === "") {
         Toast.fire({
            icon: "error",
            title: "Bạn chưa nhập tên khách hàng",
         });
      } else {
         searchClient(this.state.keyword).then((data) =>
            this.setState({ clients: data }),
         );
      }
   };

   inputHandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
      await this.setState({ keyword: e.target.value });
      if (this.state.keyword && this.state.keyword !== " ") {
         searchClient(this.state.keyword).then((data) =>
            this.setState({ clients: data }),
         );
      } else {
         getAllClient().then((data) => this.setState({ clients: data }));
      }
   };

   render() {
      return (
         <div>
            <Nav />
            <div className="container">
               <div className="row mt-4 bg-white content pt-3 pb-3">
                  <div className="text-center mb-3">
                     <h1>Thông tin khách hàng</h1>
                  </div>
                  <div className="d-flex justify-content-center mb-3">
                     <div className="input-group w-50 mr-5">
                        <span className="input-group-text">
                           <i className="fas fa-search"></i>
                        </span>
                        <input
                           className="form-control"
                           type="search"
                           placeholder="Nhập tên khách hàng"
                           name="keyword"
                           value={this.state.keyword}
                           onChange={(e) => this.inputHandle(e)}
                        />
                     </div>
                     <a className="btn btn-success" href="/client/add">
                        Thêm khách hàng
                     </a>
                  </div>
                  <TblClient clients={this.state.clients} />
               </div>
            </div>
         </div>
      );
   }
}

export default ClientPage;

const Toast = Swal.mixin({
   toast: true,
   position: "top-end",
   showConfirmButton: false,
   timer: 3000,
   timerProgressBar: true,
   didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
   },
});
