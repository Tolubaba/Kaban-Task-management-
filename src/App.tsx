import styled from "styled-components"
import { Navbar } from "./Component"
import Globalstyles from "./Component/Globalstyles"
import Mainbody from "./Component/Mainbody"
const App = () => {
  return (
    <Wrapper>
      <Globalstyles/>
      <Navbar/>
      <Mainbody/>

    </Wrapper>
  )
}

export default App

const Wrapper =styled.section`
  
`