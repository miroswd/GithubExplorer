import styled, {css} from 'styled-components';
import {shade} from 'polished'

interface Formprops {
  hasError:boolean;
}


export const Title = styled.h1`
  max-width:450px;
  margin-top:80px;


  color: #3A3A3A;
  font-size: 48px;
  line-height:56px;
`

export const Form = styled.form<Formprops>`

  max-width:700px;
  margin-top:40px;

  display:flex;

  input {
    flex:1;
    height:70px;
    padding: 0 24px;
    border:0;
    border-radius:5px 0 0 5px;
    color:#3a3a3a;
    border:2px solid transparent;

    ${(props) => props.hasError && css`
      transition: border-color 0.2s;
      border-color:#c53030;
      border-right:0;
    `}

    &::placeholder {
      color:#a8a8b3;
    }
  }

  button {
    width:210px;
    height:70px;
    background-color:#04d361;
    border: 0;
    border-radius:0 5px 5px 0 ;
    color:#FFF;
    font-weight:bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#04d361")}
    }
  }


`

export const Error = styled.span`
  display:block;
  color:#c53030;
  margin-top:8px;
`

export const Repositories = styled.div`
  margin-top:80px;
  max-width:700px;

  a{
    background:#fff;
    border-radius: 5px;
    width:100%;
    padding:24px;
    display:block;
    text-decoration:none;

    display:flex;
    align-items:center;
    transition:transform 0.2s;

    & + a {
      margin-top:16px;
    }

    &:hover {
      transform:translateX(10px)
    }

    img {
      width:64px;
      height:64px;
      border-radius:50%;
    }

    div {
      margin-left:16px;
      flex:1;

      strong {
        font-size: 20px;
        color:#3a3a3a;
      }

      p {
        font-size:18px;
        color:#a8a8b3;
        margin-top:4px;
      }
    }

    svg {
      /* Setinha = FiChevron */
      margin-left:auto;
      color: #cbcbc6;
    }

  }
`
