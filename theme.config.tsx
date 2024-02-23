import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/static/logo.png" style={{width: 40, height: 'auto'}} alt="Bandit Gaming Logo"></img>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Bandit Gaming Docs
      </span>
    </>
  ),
  head:(
      <>
        <title>Bandit Gaming Docs</title>
        <meta property="og:title" content="Bandit Gaming Docs" />
        <meta property="og:description" content="Bandit Gaming, Elevate Your Code, Accelerate Your Success!" />
        <meta property="og:url" content={'https://docs.banditgaming.com.au'} />
        <meta property="og:image" content="/static/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={'Bandit Gaming Docs'} />
        <meta
          name="twitter:description"
          content={'Bandit Gaming, Elevate Your Code, Accelerate Your Success!'}
        />
        <meta name="theme-color" content="#1a202c" />


      </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config