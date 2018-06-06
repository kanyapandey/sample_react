import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Home.css"
import { NavLink } from "react-router-dom"

export default Nav => {
  return (
    <div>
      <div className="nav">
        <ul role="nav">
          <li>
            <NavLink
              activeClassName={"active"}
              className="menu-text"
              exact={true}
              to="/"
            >
              <div class="icon-1" />หน้าหลัก
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={"active"}
              className="menu-text"
              to="/exchange"
            >
              <div class="icon-2" />แลกคะแนน
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={"active"}
              className="menu-text"
              to="/promotion"
            >
              <div class="icon-3" />โปรโมชั่น
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={"active"}
              className="menu-text"
              to="/prompt"
            >
              <div class="icon-4" />พร้อม
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={"active"}
              className="menu-text"
              to="/setting"
            >
              <div class="icon-5" />ตั้งค่า
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
