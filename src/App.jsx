import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from '@emotion/react'
import { customTheme } from './themeConfig'
import AppRouter from "./router/AppRouter"


function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>


    //<ThemeProvider theme={customTheme}>
    //{/* <Navbar /> */ }
    //<ResponsiveAppBar />
    //{/* <ItemDetailContainer /> */ }
    //{/* <Footer /> */ }
    //</ThemeProvider>
  )
}

export default App