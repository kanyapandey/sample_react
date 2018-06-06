import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Home.css"
import Date from "./Date"
import Middle from "./Middle"
import Nav from "./Nav"

export default Home => {
  return (
    <div>
      <Nav />
      <Date />
      <Middle />
    </div>
  )
}
