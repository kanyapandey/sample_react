import React, { Component } from "react"
import styled from "styled-components"
import Headlogo from "./components/Header/Headlogo"
import Headrightcontent from "./components/Header/Headrightcontent"
import Footer from "./components/Footer/Footer"
import { render } from "react-dom"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from "./components/Home/Home"
import Date from "./components/Home/Date"
import Middle from "./components/Home/Middle"
import Exchange from "./components/Exchange/Exchange"
import Promotion from "./components/Promotion/Promotion"
import Prompt from "./components/Prompt/Prompt"
import Setting from "./components/Setting/Setting"

class App extends Component {
  render() {
    // Create a Title component that'll render an <h1> tag with some styles
    const Title = styled.section`
      padding-top: 10px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      max-width: 810px;
      width: 100%;
      padding-right: 15px;
    `
    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
      height: 60px;
      background: transparent linear-gradient(to right, #a71818, #ee2524) repeat
        scroll 0% 0%;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    `

    return (
      <Wrapper>
        <Title>
          <Headlogo />
          <Headrightcontent />
        </Title>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/exchange" component={Exchange} />
            <Route path="/promotion" component={Promotion} />
            <Route path="/prompt" component={Prompt} />
            <Route path="/setting" component={Setting} />
          </div>
        </BrowserRouter>
        <Footer />
      </Wrapper>
    )
  }
}

export default App
