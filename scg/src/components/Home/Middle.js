import React from "react"
import "./Middle.css"
import Boxfirst from "./Boxfirst"
import Boxsec from "./Boxsec"
import Boxthird from "./Boxthird"

export default Middle => {
  return (
    <div className="fullscreen grey-background">
      <div className="home">
        <div className="foryou">
          <div class="foryou_box">
            <Boxfirst />
            <Boxsec />
            <Boxthird />
          </div>
        </div>
      </div>
    </div>
  )
}
