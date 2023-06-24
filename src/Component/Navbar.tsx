import logo from '../image/kaban navbar.svg'
import logo2 from '../image/navbar kaban.svg'
import styled from 'styled-components';
import { FaArrowDown } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import Globalstyles from './Globalstyles';
import {FaChevronDown} from 'react-icons/fa'
import {FaPlus} from 'react-icons/fa'
import { RiMoreLine } from 'react-icons/ri';
import { BiDotsVertical } from 'react-icons/bi';

const Navbar = () => {
  return (
    <Wrapper>
        <Globalstyles/>
        <div className='namemain'>
        <img src={logo2}/>
        <h1 className='kabanname'> KABAN</h1>
        </div>

<section className='navmain'>



        <div className='boardname'>
        <div >
        <img src={logo2}/>
    </div>
    <div className='platform'>
        <h1> platform </h1>
        <FaChevronDown   className='down'  style={{color:'#635fc7'}}  />
        
    </div>


        </div>
       

    <div className='clickmain' >

    
    <div className='clickplus'>
        <FaPlus style={{color:'white'}} className='plus'/>

    </div>

    <div className='clickplus2'>
        <FaPlus style={{color:'white'}} className='plus2' />
        Add New task

    </div>


        <BiDotsVertical style={{ color:'white', fontSize:'20px' ,opacity:'0.5'}}/>
        </div>

        </section>

    
    
        
    
        

    </Wrapper>
  )
}

export default Navbar

const Wrapper=styled.header`
height:75px;
display:flex;
align-items:center;
font-family:var(--fontfamily);
background-color:#2b2c37;
justify-content:space-between;
gap:20px;
border-bottom:0.01rem solid rgba(100%,100%,100%,0.2);


.navmain{

    display:flex;
    justify-content:space-between;
    width:100%;
    height:100%;
    align-items:center;
    padding-right:15px;
}

.platform{
    display:flex;
    align-items:center;
    text-transform:capitalize;
    color:white;
    font-size:15px;
    gap:5px;

}

.clickmain{
display:flex;
align-items:center;
}

.clickplus{
width:45px;
height:30px;
background-color:#635fc7;
border-radius:30px;
display:flex;
justify-content:center;
align-items:center;
}

.clickplus2{
width:100%;
height:40px;
background-color:#635fc7;
border-radius:30px;
display:flex;
justify-content:center;
align-items:center;
padding:15px;
color:white;
text-transform:capitalize;
font-weight:600;
display:none;
}



.down{
    display:flex;
    align-self:flex-end;
    margin-bottom:5px;
}

.plus2{
    margin-right:10px;
}

.kabanname{
    color:white;
}

.namemain{
    display:flex;
    gap:10px;
    width:400px;
    height:100%;
    align-items:center;
    border-right:0.01rem solid rgba(100%,100%,100%,0.2);
    padding-left:15px;
    

}
   
.boardname{
    display:flex;
    gap:20px;

}
   
`

