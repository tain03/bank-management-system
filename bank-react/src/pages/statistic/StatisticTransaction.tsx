import React from "react";
import { getAllClient } from "../../api/ClientAPI";
import { getByTimeTransaction } from "../../api/CreditAPI";
import Navigation from "../../components/Navigation";
import TblCredit from "./TblCredit";

class StatisticTransaction extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = { clients: [], credits: [] };
   }

   async componentDidMount() {
      const clients = await getAllClient();
      this.setState({ clients: clients });
   }

   async _onUpdate() {
      const credits = await getByTimeTransaction(
         this.state.idClient,
         this.state.start,
         this.state.end,
      );
      this.setState({ credits: credits });
   }

   render() {
      return (
         <div>
            <Navigation />
            <div className="container">
               <div className="row mt-4 bg-white content pt-3 pb-3">
                  <div className="text-center mb-3">
                     <h1>Thống kê các giao dịch của khách hàng</h1>
                  </div>
                  <div className="d-flex justify-content-around">
                     <div className="input-group w-25">
                        <span className="input-group-text">
                           <i className="fas fa-user"></i>
                        </span>
                        <select
                           className="form-select"
                           value={this.state.idClient}
                           onChange={async (e) => {
                              await this.setState({
                                 idClient: Number.parseInt(e.target.value),
                              });
                              this._onUpdate();
                           }}
                        >
                           <option disabled selected>
                              Chọn một khách hàng
                           </option>
                           {this.state.clients.map((client: any) => (
                              <option key={client.id} value={client.id}>
                                 id: {client.id} - name: {client.name}
                              </option>
                           ))}
                        </select>
                     </div>
                     <div className="input-group time-select">
                        <span className="input-group-text">Bắt đầu</span>
                        <input
                           className="form-control"
                           required
                           type="datetime-local"
                           value={this.state.start}
                           onChange={async (e) => {
                              await this.setState({ start: e.target.value });
                              this._onUpdate();
                           }}
                        />
                     </div>
                     <div className="input-group time-select">
                        <span className="input-group-text">Kết thúc</span>
                        <input
                           className="form-control"
                           required
                           type="datetime-local"
                           value={this.state.end}
                           onChange={async (e) => {
                              await this.setState({ end: e.target.value });
                              this._onUpdate();
                           }}
                        />
                     </div>
                  </div>
               </div>
               <TblCredit credits={this.state.credits} />
            </div>
         </div>
      );
   }
}

export default StatisticTransaction;
