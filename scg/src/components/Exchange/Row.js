import React, { Component } from "react"
import { Link } from "react-router-dom"
import Exchange from "./Exchange.css"

export default Row => {
  return (
    <div className="row">
      <div
        className="product-detail product-content product-detail-resize product-content col-md-6"
        id="newsContent"
      >
        <img class="proimg" src={require("../../assets/img/news.png")} alt="" />
        <div className="product-group-header">
          <div className="product-header-text">
            ใหม่! ไม้ฝา ไม้ระแนง ไม้เชิงชาย เอสซีจี
          </div>
          <div className="group-detail">
            <section id="skills" className="progress-group">
              <progress value="20" max="100" />
              <span className="icon-icon_point">13,000</span>
            </section>
            <div className="progress-subtext">ขาดอีก 2500 คะแนน</div>{" "}
          </div>
        </div>
      </div>
      <div
        className="product-detail product-content product-detail-resize col-md-6"
        id="newsContent"
      >
        <img class="proimg" src={require("../../assets/img/news.png")} alt="" />
        <div className="product-group-header">
          <div className="product-header-text">
            ใหม่! ไม้ฝา ไม้ระแนง ไม้เชิงชาย เอสซีจี
          </div>
          <div className="group-detail">
            <section id="skills" className="progress-group">
              <progress value="20" max="100" />
              <span className="icon-icon_point">13,000</span>
            </section>
            <div className="progress-subtext">ขาดอีก 2500 คะแนน</div>{" "}
          </div>
        </div>
      </div>
    </div>
  )
}
