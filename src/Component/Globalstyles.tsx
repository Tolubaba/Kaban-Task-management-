import { createGlobalStyle } from "styled-components";


const Globalstyles =  createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');


    :root{
        --fontfamily: 'Plus Jakarta Sans', sans-serif;
        --color:#2b2c37;
    }

    body{
        background-color:#20212c;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
`

export default Globalstyles
