import React from "react"
import "./Home.css"

export default Pointfirst => {
  return (
    <div className="col-md-6 show_point">
      <img src={require("../../assets/img/logo.png")} alt="" />
      <div className="point">10050</div>
      <div className="unit">คะแนน</div>
    </div>
  )
}
