import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
    </BrowserRouter>
  )
}
