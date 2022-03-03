import React from 'react'

/* Adhoc footer component: props should not be passed in */

const footerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
}

const Footer = () => {
  return (
    <footer
      id='footer'
      className='col-sm-12'
      style={{}}
    >
      <div style={footerStyle}>
        <div className='' style={{textAlign: 'center', margin: '0 50px'}}>
          <span>
            <img src='https://storage.googleapis.com/steel-rose-fc/img/steel-roses-club-logo.PNG' alt='steel-rose-banner.png' />
            <p>A free company with a passion for fashion</p>
          </span>
        </div>
        <div className='' style={{textAlign: 'center', alignSelf: 'center',maxWidth: 300, margin: '0 50px'}}>
          <span>
            <a target="_blank" href="https://discord.gg/GZjYFvtK2y">
              <img
                style={{maxWidth: 300, width: '100%'}}
                src='https://cdn.vox-cdn.com/thumbor/Rb_LWJvgtDBNvRMbPXTnMSyij9o=/0x200:2400x1400/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/11946613/discord_logo_wordmark_2400.jpg'
                alt="discord-logo.png"
              /><br/><br/><br/>
              Come check us out on discord!
            </a>
          </span>
        </div>
        <div className='' style={{margin: '0 50px'}}>
          <div style={{textAlign: 'left', marginTop: 25}}>
            <span>
              <h5>Get to know our club</h5>
            </span>
          </div>
          <div style={{textAlign: 'left', margin: '25px 0'}}>
            <span>
              <a href="https://www.steelrosefc.com/about-us">Navigate here to learn about us!</a>
            </span>
          </div>
          <div style={{textAlign: 'left', margin: '25px 0'}}>
            <span>
              <a href="https://www.steelrosefc.com/community">Get involved in our Role Play community</a>
            </span>
          </div>
          <div style={{textAlign: 'left', margin: '25px 0'}}>
            <span>
              <a style={{float: 'left'}} href="https://www.steelrosefc.com/community">
                Put your skills to the test in our pvp parties
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className='row' style={{marginTop: 50}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', textAlign: 'center'}}>
          <p style={{width: '100%', fontSize: '1rem', wordSpacing: 'normal'}} className="steel-rose-regalia">&copy; Steel Rose Club 2021 all rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
