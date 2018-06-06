import React from "react"
import "./Home.css"
import Point from "./Point"
import Texthead from "./Texthead"

export default Date => {
  return (
    <div className="home">
      <div className="date">
        วันพุธ
        <span>&nbsp;31 มกราคม</span>
      </div>
      <Point />
      <Texthead />
    </div>
  )
}
