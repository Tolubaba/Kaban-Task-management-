import React from 'react'
import { BoardIcon } from './Icon'
import styled from 'styled-components'
import Globalstyles from './Globalstyles'
import { useState } from "react";
import { useEffect } from "react";
import data from "../assets/data.json";

const Sidebar = () => {
  let allData: any
  let jsonData: any 
  const getdata = () => {
    allData = localStorage.getItem("tolu-kaban");
    return allData ? JSON.parse(allData) : [];
  };

  useEffect(() => {
    localStorage.setItem("tolu-kaban", JSON.stringify(data));
  }, getdata());

  jsonData =  JSON.parse(allData)
const [datanow,setdatanow]=useState(jsonData.boards)

console.log(datanow)

  return (
    <Wrapper>
        <Globalstyles/>
        {
        datanow.map((_item:any)=>{

          return <h1 key={_item.id}>
              {_item.name}
          </h1>

        })
      }


    </Wrapper>
  )
}


const Wrapper=styled.section`

background-color:var(--color);
height:calc(100vh - 75px);
width:400px;    
border-right:0.01rem solid rgba(100%,100%,100%,0.2);


    

`

export default Sidebar