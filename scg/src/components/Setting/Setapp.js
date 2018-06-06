import React, { Component } from "react"
import { Link } from "react-router-dom"
import Nav from "../Home/Nav"

export default Setapp => {
  return (
    <div className="setting-app">
      <div className="profile">
        <span className="label1">การแจ้งเตือน</span>
        <span className="card">
          <label for="switch1">
            <input type="checkbox" id="switch1" checked="" />
            <span className="switch" />
            <span className="toggle" />
          </label>
        </span>
      </div>
      <div className="profile">
        <span className="label1">ภาษา</span>
        <span className="label2">
          <input
            className="setting-input"
            value="ภาษาไทย"
            type="text"
            disabled=""
          />
          <i className="fa fa-chevron-right" />
        </span>
      </div>
    </div>
  )
}
