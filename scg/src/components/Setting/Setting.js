import React, { Component } from "react"
import { Link } from "react-router-dom"
import Nav from "../Home/Nav"
import Setting from "./Setting.css"
import Breadcrumb from "./Breadcrumb"
import Section from "./Section"
import Buttons from "./Buttons"

export default Setting => {
  return (
    <div>
      <Nav />
      <div className="home">
        <Breadcrumb />
        <Section />
        <Buttons />
      </div>
    </div>
  )
}
