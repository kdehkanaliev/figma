import React from "react";
import "./header.css";
import img1 from "../assets/personaling img1.png";
import img2 from "../assets/personaling img2.png";
const Personaling = () => {
  return (
    <div>
      <div className="up container">
        <img src={img1} alt="" />
        <div className="up_right">
          <h1>Индивидуальность в каждом метре</h1>
          <h3>
            Чем отличается пространство, в котором сразу ощущаешь стиль и
            органичность деталей,
          </h3>
          <br />
          <span>Концепция. Дизайн. Профессиональный взгляд.</span>
          <h3>
            <br /> По нашему опыту 95% обращений не требуют сложной проектной
            работы. Для создания уютного и функционального пространства прежде
            всего нужна грамотная планировка и опытный взгляд в выборе сочетаний
            и материалов.
          </h3>
        </div>
      </div>

      <div className="down">
        <img src={img2} alt="" />
        <div className="down_right">
          <h1>
            80% людей, решивших делать ремонт без дизайн-проекта остаются
            недовольны результатом
          </h1>
          <h3>
            При этом времени и денег в результате уходит больше, чем при работе
            с дизайнером
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Personaling;
