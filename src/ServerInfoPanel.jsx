import Navbar from "./components/Navbar";
import "./ServerInfoPanel.css";
import back from "../public/Assests/background.png";
import axios from "axios"
import { useEffect, useState } from "react";
import { baseurl } from "./serverinfo";

const ServerInfoPanel = () => {

 const [serverData,setServerData]=useState({});

 useEffect(()=>{
  
   axios.get(`${baseurl}/gamedata`).then((result) => {
      setServerData(result.data)
   }).catch((err) => {
     console.log("error occured",err)
   });


 },[])



  return (
    <div className="home">
      <Navbar />
       <span className="spanux1"><button>Tickets - {serverData.tickets}</button></span>

      <button className="bullet">Bullet Damage - {serverData.bulletdamage}</button>
      <button className="playerhealth">Player Health -{serverData.playerhealth}</button>
      <img className="homeimg" src="../public/Assests/home.png" alt="" /> 
      


      <h1 className="server">SERVER INFO</h1>
      <div className="background">
        <div className="leftside">
          <div className="icon">
            <img
              className="img img1"
              src="../public/Assests/icon3.png"
              alt=""
            />
          </div>
          <div className="icon">
            <img
              className="img img2"
              src="../public/Assests/icon2.png"
              alt=""
            />
          </div>
          <div className="icon">
            <img
              className="img  img3"
              src="../public/Assests/icon3.png"
              alt=""
            />
          </div>
          <div className="icon">
            <img
              className="img  img4"
              src="../public/Assests/icon1.png"
              alt=""
            />
          </div>
        </div>
        <div className="leftbottom">
          <div>
            <img className="img" src="../public/Assests/question.png" alt="" />
          </div>
          <div>
            <img className="img" src="../public/Assests/exit.png" alt="" />
          </div>
        </div>
        <div className="serverdata">
          {serverData.name}
          <div className="data1">
            <img
              className="germany"
              src="../public/Assests/germanyflag.svg"
              alt=""
            />
            {serverData.region}
            <div className="data2">{serverData.linkData}</div>
            <div className="data3">
              <button>JOIN</button>
              <button>SPECTATE</button>
              <button>JOIN AS COMMANDER</button>
              <button>✯13672</button>
            </div>
            <div className="data3">
              <span className="player">Player</span>
              <span className="ping">Ping</span>
              <span className="tickrate">Tickrate</span>
            </div>

            <div className="data3">
              <span className="player1">{serverData.players}</span>
              <span className="ping1">{serverData.ping}</span>
              <span className="tickrate1">{serverData.tickrate}</span>
            </div>

            <div className="data3">
              <span className="setting">Settings</span>
              <span className="advanced">Advanced</span>
              <span className="rule">Rules</span>
            </div>

            <div className="settings1">
              <div>
                <button>Region Europe - {serverData.regioneurope}</button>
                <span className="spanu1"><button>Minimap - {serverData.minimap}</button></span>
              </div>
              <div>
                <button>Punkbaster -{serverData.punkbaster}</button>
                <span className="spanu2"><button>Vehicals - {serverData.vehicals}</button></span>
              </div>
              <div>
                <button>Fairfight -{serverData.fairfight}</button>
                <span className="spanu3"><button>Team Balance - {serverData.teambalance}</button></span>
              </div>
              <div>
                <button>Password -{serverData.password}</button>
                <span className="spanu4"><button>Regenrative Health - {serverData.regenerativehealth}</button></span>
              </div>
              <div>
                <button>Preset -{serverData.preset}</button>
              </div>
            </div>
          </div>
        </div>

        <img src={back} alt="" className="banner-image" />
      </div>
    </div>
  );
};

export default ServerInfoPanel;
