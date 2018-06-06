import React, { Component } from "react"
import { Link } from "react-router-dom"
import Nav from "../Home/Nav"
import Group from "./Group"
import Pass from "./Pass"
import Setapp from "./Setapp"
import Space from "./Space"
import "./Setting.css"

export default Section => {
  return (
    <div className="setting">
      <Group />
      <Space />
      <Pass />
      <Setapp />
    </div>
  )
}
