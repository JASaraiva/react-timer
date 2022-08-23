import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { LayoutContainer } from './Styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
