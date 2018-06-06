import React from "react"
import "./Home.css"
import Pointfirst from "./Pointfirst"
import Pointsec from "./Pointsec"

export default Point => {
  return (
    <div className="point">
      <Pointfirst />
      <Pointsec />
    </div>
  )
}
