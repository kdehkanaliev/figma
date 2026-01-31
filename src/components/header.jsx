import React from "react";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import whatsap from "../assets/whatsap.svg";
import "./header.css";

const Header = () => {
  return (
    <div className=" main_div">
      <div className="container">
        <div className="header ">
          <div className="logo">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
          </div>

          <div className="header_right">
            <img src={whatsap} alt="" />
            <img src={whatsap} alt="" />
            <p>8 (917) 287-01-54</p>
            <button>Заказать звонок</button>
          </div>
        </div>

        <div className="showcase">
          <h1>
            Создаем дизайн-проекты для жизни <br /> в комфорте и красоте!
          </h1>
          <h4>от 300 руб/м2</h4>
          <h3>
            Бесплатная консультация с <br /> дизайнером по вашему проекту
          </h3>
          <button>Записаться на консультацию</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
