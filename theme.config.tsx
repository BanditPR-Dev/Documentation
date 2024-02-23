import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/static/logo.png" style={{width: 40, height: 'auto'}} alt="Hyperscripts Logo"></img>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        HyperScripts Docs
      </span>
    </>
  ),
  head:(
      <>
        <title>HyperScripts Docs</title>
        <meta property="og:title" content="HyperScripts Docs" />
        <meta property="og:description" content="HyperScripts, Elevate Your Code, Accelerate Your Success!" />
        <meta property="og:url" content={'https://docs.pribilovic.net'} />
        <meta property="og:image" content="/static/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HyperScripts" />
        <meta name="twitter:title" content={'HyperScripts Docs'} />
        <meta
          name="twitter:description"
          content={'HyperScripts, Elevate Your Code, Accelerate Your Success!'}
        />
        <meta name="theme-color" content="#1a202c" />

        <link rel="shortcut icon" href="https://cdn.roate.net/NoNU6/vAXaviLu54.png/raw" />

      </>
  ),
  project: {
    link: 'https://github.com/HyperScripts-FiveM',
  },
  chat: {
    link: 'https://pribiovic.net/discord',
  },
  docsRepositoryBase: 'https://github.com/HyperScripts-FiveM/HyperScripts-Docs`',
  footer: {
    text: 'HyperScripts',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default config