import React from "react"
import "./Footer.css"

export default Footer => {
  return (
    <footer className="{{class}}">
      <div className="footer-all wrapping">
        <div className="footer-logo">
          <img src={require("../../assets/img/logo-scg-footer.png")} alt="" />
        </div>
        <div className="footer-app">
          <img src={require("../../assets/img/app-store.png")} alt="" />
          <img src={require("../../assets/img/google-play.png")} alt="" />
        </div>
      </div>
    </footer>
  )
}
