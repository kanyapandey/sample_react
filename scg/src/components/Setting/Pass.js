import React, { Component } from "react"
import { Link } from "react-router-dom"
import Nav from "../Home/Nav"

export default Pass => {
  return (
    <div className="setting-pass">
      <div className="profile">
        <span className="label1">แก้ไขรหัสผ่าน</span>
        <span className="label2">
          <input
            className="setting-input"
            value="1234567890"
            type="password"
            disabled=""
          />
          <i className="fa fa-chevron-right" />
        </span>
      </div>
      <b>ตั้งค่าแอพลิเคชั้น</b>
    </div>
  )
}
