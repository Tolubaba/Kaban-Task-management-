import React from 'react'
import Sidebar from './Sidebar'
import styled from 'styled-components'
import Sidemain from './Sidemain'

const Mainbody = () => {
  return (
    
    <Wrapper>
<Sidebar/>
<Sidemain/>

    </Wrapper>
  )
}


const Wrapper=styled.section`
display:flex;
    

`

export default Mainbody