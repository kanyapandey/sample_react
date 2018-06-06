import React, { Component } from "react"
import { Link } from "react-router-dom"
import Nav from "../Home/Nav"
import "./Prompt.css"

export default Prompt => {
  return (
    <div>
      <Nav />
      <div className="prompt">
        <div className="prompt-group">
          <img src={require("../../assets/img/icon-prompt.png")} alt="" />
          <div className="prompt-text">
            พบกับระบบสั่งซื้อสินค้า SCG<br />ผ่านแอพพลิเคชั่น ช้าง แฟมิลี่ เร็วๆ
            นี้
          </div>
          <div className="icon-prompt">
            <img
              className="prompt-icon-app"
              src={require("../../assets/img/app-store.png")}
              alt=""
            />
            <img
              className="prompt-icon-google"
              src={require("../../assets/img/google-play.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
