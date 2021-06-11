import React from "react";
import "../DashboardContent/DashboardContent.scss";

import home from "../../../assets/imgs/estate.svg";
import dark from "../../../assets/imgs/adjust.svg";
import atom from "../../../assets/imgs/atom.svg";
import card from "../../../assets/imgs/credit-card.svg";
import dolar from "../../../assets/imgs/dolar.svg";
import game from "../../../assets/imgs/map.svg";
import user from "../../../assets/imgs/user.svg";

export const DashboardContent = () => {
  return (
    <div className="dashboard__container">
      <div className="dashboard__navbar">
        <div className="dashboard__nav">
          <img src={home} alt="home" />
          <img src={dark} alt="dark" />
          <img src={atom} alt="emoji" />
        </div>
        <div className="points__nav">
          <button>Perfil</button>
          <img src={card} alt="card" />
          <h3 className="cantidad">68150.50</h3>
          <h3 className="money__type">$</h3>
        </div>
      </div>
      <div className="dash__information">
        <img
          src="https://ligadecracks.com/wp-content/uploads/2021/01/Scar-Megalodon.png"
          alt="arma2"
        />
        <div className="dash__card__info">
          <h4>Information</h4>
          <div className="payments">
            <h3>7.19$</h3>
            <h3>
              <span>{">>"}</span>
            </h3>
            <h3>8.15$</h3>
          </div>
          <div className="buttons">
            <button>1.7$</button>
            <button>recibe 2.54$</button>
          </div>
        </div>
      </div>
      <div className="dashboard__buttons">
        <div className="button__dash">
          <i className="fas fa-money-check-alt"></i>
          <h3>W</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
            reiciendis.
          </span>
        </div>
        <div className="button__dash">
          <i className="fab fa-sellsy"></i>
          <h3>X</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
            reiciendis.
          </span>
        </div>
        <div className="button__dash">
          <i className="fas fa-truck-moving"></i>
          <h3>%</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
            reiciendis.
          </span>
        </div>
      </div>
      <div className="dash__cards__items">
        <div className="dash__title__items">
          <h5>statistic</h5>
          <div className="container__icons__title">
            <img src={user} alt="user" />
            <h5>73</h5>
            <img src={dolar} alt="dolars" />
            <h5>24.75</h5>
            <img src={game} alt="municion" />
            <h5>56</h5>
          </div>
        </div>
        <div className="dash__card__item">
          <div className="dash__item__content">
            <img
            className="people"
              src="https://avatarfiles.alphacoders.com/163/163127.png"
              alt="user_icon"
            />
            <div className="raised__money">
              <h5>Ayouni</h5>
              <h4>20.47$</h4>
            </div>
            <img
            className="gun__favorite"
              src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/tools/crate_key_community_3.37247b8634e99bd7061ed75e9b298cb031b24beb.png"
              alt="gun__favorite"
            />
            <button>involved</button>
          </div>
        </div>
        <div className="dash__card__item">
          <div className="dash__item__content">
            <img
            className="people"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6pB362eMqRKHf-wz8irlQe2teahiOGJawP1UFIiY1yjzd-epMz9GyiYE4XSCZ5xtgvk&usqp=CAU"
              alt="user_icon"
            />
            <div className="raised__money">
              <h5>Ayouni</h5>
              <h4>20.47$</h4>
            </div>
            <img 
            className="gun__favorite"
            src="https://pngimage.net/wp-content/uploads/2018/05/csgo-keys-png-1.png" alt="gun__favorite" />
            <button>involved</button>
          </div>
        </div>
      </div>
    </div>
  );
};
