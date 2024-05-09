import React from "react";
import style from "../styles/NavStyle.module.css";

class Navigation extends React.Component {
   constructor(props: any) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <div
            className={`${style.container} ${style.green} ${style.borderXwidth}`}
         >
            <a href="/">Trang chủ</a>
            <a href="/client">Khách hàng</a>
            <a href="/employee">Nhân viên</a>
            <div className="drop-menu">
               {/* eslint-disable-next-line */}
               <a className="drop-btn">
                  Thống kê <i className="fas fa-caret-right ml-2"></i>
               </a>
               <ul className="dropdown-menu">
                  <li>
                     <a className="dropdown-item" href="/statistic/transaction">
                        Giao dịch
                     </a>
                  </li>
                  <li>
                     <a
                        className="dropdown-item"
                        href="/statistic/account-in-debt"
                     >
                        Những tài khoản tín dụng còn nợ
                     </a>
                  </li>
                  <li>
                     <a className="dropdown-item" href="/statistic/top10">
                        Top 10 khách hàng gửi tiền nhiều nhất
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      );
   }
}

export default Navigation;
