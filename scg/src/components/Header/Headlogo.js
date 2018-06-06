import React from "react"
import styled from "styled-components"

export default Headlogo => {
  const Img = styled.img`
    width: 68px;
  `

  return <Img src={require("../../assets/img/logo-scg-header.png")} alt="" />
}
