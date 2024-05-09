import React from "react";
import { getByBalance } from "../../api/CreditAPI";
import Navigation from "../../components/Navigation";
import TblCredit from "../account/credit/TblCredit";

class AccountInDebt extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
      this.state = { credits: [] };
   }

   async componentDidMount() {
      const credits = await getByBalance();
      this.setState({ credits: credits });
   }

   render() {
      return (
         <div>
            <Navigation />
            <div className="container">
               <div className="row mt-4 bg-white content pt-3 pb-3">
                  <div className="text-center mb-3">
                     <h1>Các tài khoản tín dụng còn nợ</h1>
                  </div>
                  <TblCredit credits={this.state.credits} />
               </div>
            </div>
         </div>
      );
   }
}

export default AccountInDebt;
