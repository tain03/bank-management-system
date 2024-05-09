import React from "react";
import Nav from "../../components/Navigation";
import style from "../../styles/HomeStyle.module.css";

class Home extends React.Component {
   render() {
      return (
         <div className={style.bg_body}>
            <Nav />
            <header className={style.showcase}>
               <div className={style.content}>
                  <img
                     src="/resources/image/develop.svg"
                     className={style.logo}
                     alt="Traversy Media"
                  />
                  <div className={style.title}>Let's learn with me</div>
                  <div className={style.text}>
                     Dốt đến đâu học lâu cũng biết
                  </div>
               </div>
            </header>
         </div>
      );
   }
}

export default Home;
