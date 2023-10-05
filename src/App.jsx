//import { Navbar } from './components/layout/Navbar/Navbar'
import { ItemListContainer } from './components/pages/itemListContainer/ItemListContainer'
import { ThemeProvider } from '@emotion/react'
import { customTheme } from './themeConfig'
import ResponsiveAppBar from './components/layout/navbar/ResponsiveAppBar'
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <ThemeProvider theme={customTheme}>
      {/* <Navbar /> */}
      <ResponsiveAppBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </ThemeProvider>
  )
}

export default App