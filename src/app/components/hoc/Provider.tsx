import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

const Provider = ({children} : {children : ReactNode}) => {
  return (
    // defaultTheme="system"  it will load according to system theme
    <ThemeProvider attribute='class' defaultTheme="light" enableSystem> 
      {children}
    </ThemeProvider>
  )
}

export default Provider