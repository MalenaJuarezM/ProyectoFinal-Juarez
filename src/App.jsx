import { useState } from 'react'
import { Navbar } from './components/layout/Navbar/Navbar'
import { ItemListContainer } from './components/pages/itemListContainer/ItemListContainer'
import { ThemeProvider } from '@emotion/react'
import { customTheme } from './themeConfig'

function App() {

  let saludo = "Hola, te damos la bienvenida al Atelier de muebles."

  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      <ItemListContainer saludo={saludo} />
    </ThemeProvider>
  )
}

export default App
