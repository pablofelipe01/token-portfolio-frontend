import React, { useState }from 'react'
import { BsTwitter,  BsLinkedin } from 'react-icons/bs'


const SocialMedia = () => {

    const [clickSocial, setClickSocial] = useState(false)

   
  return (
    <div className="app__social">
        
        <a href='https://twitter.com/tokensolutions' onClick={() => setClickSocial(false)}>
            <BsTwitter  />
        </a>

        <a href='https://www.linkedin.com/in/pablo-f-acebedo/' onClick={() => setClickSocial(false)}>
            <BsLinkedin  />
        </a>

       
        
     </div>
  )
}

export default SocialMedia

