import 'styled-components'

import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// integrando os tipos do tema ao styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
