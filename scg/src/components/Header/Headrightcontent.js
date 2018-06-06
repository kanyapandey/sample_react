import React from "react"
import Indexprofile from "./Indexprofile"
import "./Headrightcontent.css"
import { Link } from "react-router-dom"

export default Headrightcontent => {
  return (
    <div class="header-account">
      <div class="account-content">
        <div class="account-name">SCG Chang</div>
        <div class="account-code">99999999</div>
      </div>
      <Indexprofile />
      {/* <Link to="/home">Home</Link> */}
    </div>
  )
}
