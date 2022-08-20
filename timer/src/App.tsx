import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { defautTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defautTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
