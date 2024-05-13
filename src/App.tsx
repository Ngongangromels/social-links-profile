import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './componant/slp.css'
import { SocialLinksProfil } from './componant/SocialLinksProfil';
import { getSocialLinksProfilById } from './server';
import { TsocialLinks } from './type/type-element';

function App() {
  const [social, setSocial] = useState<TsocialLinks | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    (async () => {
      setLoading(true)
      const social = await getSocialLinksProfilById("1")
      setTimeout(() => {
        setSocial(social)
        setLoading(false)
      }, 3000 )
    }) ()
  }, [])
  
  return <div className='App'>{loading ? <p className='loading'>Loading....</p> : <SocialLinksProfil social={social!}/> } </div>
  

  

}

export default App;
