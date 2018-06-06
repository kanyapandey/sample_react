import React, { Component } from "react"
import { Link } from "react-router-dom"

export default Group => {
  return (
    <div className="setting-group">
      <b>ร้านผู้แทนจำหน่ายที่คุณเลือกสะสมในปี 2561</b>
      <div className="store-point">
        <div className="profile">
          <span>1) บ.เอสซีจี รีเทล จก.</span>
          <span>
            เปลี่ยน
            <i className="fa fa-chevron-right" />
          </span>
        </div>
        <div className="profile">
          <span>2) - </span>
          <span>
            เปลี่ยน
            <i className="fa fa-chevron-right" />
          </span>
        </div>
      </div>
    </div>
  )
}
