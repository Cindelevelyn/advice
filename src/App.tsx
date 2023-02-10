import { useEffect, useState } from 'react'
import { BtnShare, Container, ThemeBtn } from './style'
import { api } from './services/api'
import { TwitterShareButton, WhatsappShareButton } from 'react-share';
import { IoLogoTwitter, IoLogoWhatsapp } from 'react-icons/io'

import Lateral from './assets/icons/LightTheme/Lateral'
import { LateralDark } from './assets/icons/DarkTheme/LateralDark'
import Moon from './assets/icons/LightTheme'
import Sun from './assets/icons/DarkTheme'
import './index.css'

function App() {
  const [isLightTheme, setLightTheme] = useState(true)
  const [advice, setAdvice] = useState("")

  function changeTheme() {
    setLightTheme(!isLightTheme)
  }

  useEffect(() => {
    api.get("/advice")
      .then((res) => {
        setAdvice(res.data['slip']['advice'])
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

      <p>this is your advice:</p>

      <div className='line' />

      <h1 className='advice'>{advice}</h1>
      <div className='buttons'>
        <TwitterShareButton
          url='https://cici-advice.vercel.app'
          title={`this is my advice: ${advice}`}
          hashtags={['ciciconselhos']}
        >
          <BtnShare isLight={isLightTheme}>
            <IoLogoTwitter size={20} />
            <span>tweet</span>
          </BtnShare>
        </TwitterShareButton>
        <WhatsappShareButton
          title={`this is my advice: ${advice}`}
          url={'https://cici-advice.vercel.app'}
          separator={'\n'}
        >
          <BtnShare isLight={isLightTheme}>
            <IoLogoWhatsapp size={20} />
            <span>share</span>
          </BtnShare>
        </WhatsappShareButton>
      </div>
    </Container >
  )
}

export default App
