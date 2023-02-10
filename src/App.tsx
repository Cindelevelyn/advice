import { useEffect, useState } from 'react'
import { BtnShare, Container, ThemeBtn } from './style'
import { api } from './services/api'
import { Link } from 'react-router-dom';

import { IoLogoTwitter, IoMdLink } from 'react-icons/io'

import Lateral from './assets/icons/LightTheme/Lateral'
import { LateralDark } from './assets/icons/DarkTheme/LateralDark'
import Moon from './assets/icons/LightTheme'
import Sun from './assets/icons/DarkTheme'
import './index.css'

function App() {
  const [isLightTheme, setLightTheme] = useState(true)
  const [advice, setAdvice] = useState("")
  const [link, setLink] = useState("")

  function changeTheme() {
    setLightTheme(!isLightTheme)
  }


  useEffect(() => {
    api.get("/advice")
      .then((res) => {
        setAdvice(res.data['slip']['advice'])
        setLink(`https://twitter.com/intent/tweet?text=${advice}`)
      })
      .catch((err) =>
        console.log("ops! houve um erro: " + err))
  }, []);

  return (
    <Container isLight={isLightTheme}>
      {isLightTheme ?
        <>
          < ThemeBtn onClick={changeTheme}>
            <Moon />
          </ThemeBtn>
          <Lateral />
        </> :
        <>
          <ThemeBtn onClick={changeTheme}>
            <Sun />
          </ThemeBtn>
          <LateralDark />
        </>
      }

      <p>this is your daily advice:</p>

      <div className='line' />

      <h1 className='advice'>{advice}</h1>
      <div className='buttons'>
        {/* <Link to={link}> */}
        <BtnShare isLight={isLightTheme}>
          <IoLogoTwitter size={20} />
          tweet</BtnShare>
        {/* </Link> */}
        <BtnShare isLight={isLightTheme}>
          <IoMdLink size={20} />
          share</BtnShare>
      </div>
    </Container >
  )
}

export default App
