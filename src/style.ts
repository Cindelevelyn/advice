import styled, { css } from 'styled-components'

interface IContainer {
  isLight: boolean;
}

export const Container = styled.div<IContainer>`

  min-height: 100vh;
  top: 0;
  left: 0;
  padding: 6rem;
  overflow-y: hidden;

  
  @media(max-width: 1000px){
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .advice{
      text-align: center;
      width: 18rem;
      font-size: 30px!important;
      margin-bottom: 2rem;
    }
  }

  p {
    opacity: 70%;
    font-family: 'Alata', sans-serif;
    margin-top: 9rem;
  }

  .line{
    width: 180px;
    height: 2rem;
    border-bottom: 1px solid white;
    opacity: 70%;
    transition: 2s;
  }

  .advice{
    margin-top: 2rem;
    font-size: 50px;
    font-family: "KALIVO";
  }

  .buttons{
    display: flex;
    flex-direction: row;
  }

  ${(props) =>
    props.isLight && css`
    
      transition: 2s;
      background: linear-gradient(108.43deg, #FFFBDA 0%, #FFFFFF 92.65%);
      color: #121212;

      .line{
        border-bottom: 1px solid black;
      }
  `}

  ${(props) =>
    !props.isLight && css`
    
      transition: 2s;
      background: linear-gradient(107.95deg, #121212 0%, #06242B 100.58%);
      color: white;
  `}
`

export const ThemeBtn = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  z-index: 1000;
  
  transition: 2s;

  @media(max-width: 1000px){
    margin-bottom: -4rem;
    margin-top: -5rem;
  }
`

export const BtnShare = styled.button<IContainer>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  text-align: center;
  font-size: 20px;
  width: 8rem;
  height: 3rem;
  background: #121212;
  color: white;
  border: 0;
  cursor: pointer;
  font-family: "KALIVO";

  margin-right: 1rem;
  
  transition: 0.5s;

  ${(props) =>
    !props.isLight && css`
    
      background-color: #fff;
      color: #121212;

      &:hover{
      background: #AFAFAF!important;
      }
  `}

  &:hover{
    background: #333333;
  }

`