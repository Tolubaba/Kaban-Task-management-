import React, { ReactNode } from 'react'
import { useEffect, useState} from 'react'
import { useContext,createContext } from 'react'
import data from '../assets/data.json'
import reducer from '../Reducer/Productreducer'
import { Localstoragetype } from '../types'


export interface context{
  children:ReactNode
}
 

interface productcontex{
openmodal: () => void


}


export interface stateprops{



}

const getlocalstorage = () =>{

 const data=localStorage.getItem('tolu-kaban')
  return data?JSON.parse(data):{ boards:[],boardsid:[],
  currentBoardid:''}
}


const ProductContext =createContext ( {} as productcontex)
 export const  Productprovider = ({children}:context)  => {


  const initialState={
    boards:getlocalstorage().boards,
    boardsid:getlocalstorage().boardsid,
    sidebaropen:false,
    addnewColumnFlag:false,
    addnewtask:false
  }


  const [state,dispatch]=React.useReducer(reducer,initialState)

  const openmodal=()=>{

  }


  useEffect(()=>{

  })


  return (

    <ProductContext.Provider value={{...state, openmodal}}>

      {children}


    </ProductContext.Provider>
  )

}


export const useProductContext=():productcontex=>{
  return useContext(ProductContext)

}