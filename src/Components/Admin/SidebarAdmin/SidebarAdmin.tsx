import React, { useEffect, useState } from "react";
import "../SidebarAdmin/SidebarAdmin.scss";
import { Line } from "react-chartjs-2";
import icon1 from "../../../assets/imgs/bell.svg";
import icon2 from "../../../assets/imgs/plus.svg";
import chica from "../../../assets/imgs/chica6.png";
import gun1 from "../../../assets/imgs/arm2.png";
import usericon from "../../../assets/imgs/user.svg";

export const SidebarAdmin = () => {
  const [chartdata, setChartData] = useState({});
  const chart: any = () => {
    setChartData({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          label: "level of thiccnness",
          data: [32, 40, 50, 60, 65],
          backgroundColor: ["#2C81CA"],
          borderWidth: 4,
          borderColor: "#2C81CA",
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    });
  };
  const options: object = {
    responsive: true,
    title: { text: "DAYS SCALE", display: true },
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="sidebar__content">
      <div className="sidebar__header">
        <div className="sidebar__title">
          <h2 className="title_side">Home</h2>
          <div className="icons__content">
            <div className="icon">
              <img src={icon1} className="bell" alt="bell" />
            </div>
            <div className="icon">
              <img src={icon2} className="noti" alt="notification" />
            </div>
          </div>
        </div>
        <div className="content__chart">
          <h3>Progress in Game</h3>
          <Line type data={chartdata} options={options} />
        </div>
        <div className="mini__cards">
          <div className="card__price">1.45x</div>
          <div className="card__price">3.42x</div>
          <div className="card__price">5.22x</div>
          <div className="card__price">1.20x</div>
        </div>
        <div className="card__info">
          <div className="card-left">
            <div className="card__avatar">
              <img src={chica} alt="chica" />
              <div className="card__name">
                <h4>Last Win</h4>
                <h4>Hurley</h4>
              </div>
            </div>
            <button>join</button>
          </div>
          <div className="card-rigth">
            <img className="gun" src={gun1} alt="gun" />
            <div className="content_hour">
              <h3>23h : 43m</h3>
              <img className="user" src={usericon} alt="viewers" />
              <h5>128</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar__fotter">
        <div className="footer">
          <div className="container__foot">
            <h3>Checked</h3>
            <h2>0.00$</h2>
          </div>
          <div className="checked">
            <h3>All</h3>
            <input id="check" type="checkbox" name=""/>
            <label htmlFor="check"></label>
          </div>
        </div>
      </div>
    </div>
  );
};
