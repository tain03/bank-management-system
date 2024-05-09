import React from "react";
import { getTop10Client } from "../../api/ClientAPI";
import Navigation from "../../components/Navigation";
import TblClient from "../client/TblClient";

class Top10Client extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = {
         clients: [],
      };
   }

   async componentDidMount() {
      const clients = await getTop10Client();
      this.setState({ clients: clients });
   }

   render() {
      return (
         <div>
            <Navigation />
            <div className="container">
               <div className="row mt-4 bg-white content pt-3 pb-3">
                  <div className="text-center mb-3">
                     <h1>Thông tin top 10 khách hàng gửi nhiều tiền nhất</h1>
                  </div>
                  <TblClient clients={this.state.clients} />
               </div>
            </div>
         </div>
      );
   }
}

export default Top10Client;
