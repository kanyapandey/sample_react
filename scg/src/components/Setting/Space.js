import React, { Component } from "react"
import { Link } from "react-router-dom"

export default Space => {
  return (
    <div>
      <b>ข้อมูลส่วนตัว</b>
      <div className="setting-profile">
        <div className="in-profile">
          <div className="profile">
            <span className="label">ชื่อร้าน</span>
            <span className="label2">
              <input
                className="setting-input"
                value="ชื่อร้านค้า"
                type="text"
                disabled=""
              />
              <i className="fa fa-chevron-right" />
            </span>
          </div>
          <div className="profile">
            <span className="label">ที่อยู่</span>
            <span className="label2">
              <input
                className="setting-input"
                value="เขต จังหวัด รหัสไปรษณีย์"
                type="text"
                disabled=""
              />
              <i className="fa fa-chevron-right" />
            </span>
          </div>
        </div>
        <div className="in-profile">
          <div className="profile">
            <span className="label1">วันทำการ</span>
            <span className="label2">
              <input
                className="setting-input"
                value="จันทร์ - เสาร์ "
                type="text"
                disabled=""
              />
              <i className="fa fa-chevron-right" />
            </span>
          </div>
          <div className="profile">
            <span className="label1">เวลาทำการ</span>
            <span className="label2">
              <input
                className="setting-input"
                value="00:00 - 00:00 น."
                type="text"
                disabled=""
              />
              <i className="fa fa-chevron-right" />
            </span>
          </div>
        </div>
        <div className="in-profile">
          <div className="profile">
            <span className="label1">โทรศัพท์</span>
            <span className="label2">
              <input
                className="setting-input"
                value="000-000-0000"
                type="text"
                disabled=""
              />
              <i className="fa fa-chevron-right" />
            </span>
          </div>
          <div className="profile">
            <span className="label">อีเมล</span>
            <span className="label2">
              <input
                className="setting-input"
                value="name@mail.com"
                type="text"
                disabled=""
              />
              <i className="fa fa-chevron-right" />
            </span>
          </div>
        </div>
      </div>
      <b>รหัสผ่าน</b>
    </div>
  )
}
