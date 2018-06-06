import React, { Component } from "react"
import { Link } from "react-router-dom"
import Nav from "../Home/Nav"
import Breadcrumb from "./Breadcrumb"
import "./Exchange.css"
import Row from "./Row"

export default Exchange => {
  return (
    <div>
      <Nav />
      <div className="home">
        <Breadcrumb />
        <Row />
        <Row />
      </div>
    </div>
  )
}
