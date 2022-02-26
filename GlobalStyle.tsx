import styled, { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
     * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-margin-top: 25vh;
    }
    html {
        overflow-x: hidden;
        @media (max-width: 1200px){
            font-size: 75%;
        }
    } 
    body {
        background-color: #1B202B;
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
        width: 100%;
        color: whitesmoke;
    }
    p {
        font-weight: lighter;
        line-height: 200%;        
    }
    h1,h2,h3 {
        font-family: 'Rubik';
    }
    a {
        color: whitesmoke;
    }
`;

export const Em = styled.span`
    font-weight: 900;
    font-size: 3rem;
    color: #F89A9A;
    padding: 0 1rem;
    @media (max-width: 768px){
        display: block;

    } 
`
export const BigText = styled.h2`
    /* overflow: hidden; */
    text-shadow: 0  15px 7px #081730; 
    text-transform: uppercase;
    &.center {
        width: 100%;
        text-align: center;
    }
    font-size: 2rem;
`

export const H1 = styled.h1`  {
    // https://codepen.io/jeromevanoverbeke/pen/wfzIq
    /*	
    ============
        Light
    ============
    */
    ::before {
      content:"";
      position: absolute;
      transform: rotate(55deg);
      background: rgba(206,188,155,.7);
      background: -moz-linear-gradient(left, rgba(206,188,155,.7) 0%, rgba(42,31,25,0) 65%);
      background: -webkit-gradient(left top, right top, color-stop(0%, rgba(206,188,155,.7)), color-stop(65%, rgba(42,31,25,0)));
      background: -webkit-linear-gradient(left, rgba(206,188,155,.7) 0%, rgba(42,31,25,0) 65%);
      background: -o-linear-gradient(left, rgba(206,188,155,.7) 0%, rgba(42,31,25,0) 65%);
      background: -ms-linear-gradient(left, rgba(206,188,155,.7) 0%, rgba(42,31,25,0) 65%);
      background: linear-gradient(to right, rgba(206,188,155,.7) 0%, rgba(42,31,25,0) 65%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cebc9b', endColorstr='#2a1f19', GradientType=0.7 ); );
    }   
    
  `

export default GlobalStyle;

