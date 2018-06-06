import React, { Component } from "react"
import { Link } from "react-router-dom"
import Nav from "../Home/Nav"
import Breadcrumb from "../Exchange/Breadcrumb"
import Row from "../Exchange/Row"

export default Promotion => {
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
