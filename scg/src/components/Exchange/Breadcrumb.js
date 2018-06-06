import React, { Component } from "react"
import { Link } from "react-router-dom"
import Exchange from "./Exchange.css"

export default Breadcrumb => {
  return (
    <div className="breadcrumb-side">
      <div className="breadcrumb-text ">
        <ul className="breadcrumb">
          <li>แลกคะแนน</li>
        </ul>
      </div>
      <div className="breadcrumb-score">
        <div className="breadcrumb-score-group">
          <div className="icon-icon_point" />
          <div className="breadcrumb-text">00,000</div>
        </div>
        <div className="breadcrumb-score-group">
          <div className="icon-icon_card" />
          <div className="breadcrumb-text">00,000</div>
        </div>
      </div>
    </div>
  )
}
