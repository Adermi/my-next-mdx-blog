import {
  blue,
  amber,
  deepOrange,
  red,
  grey
} from '@mui/material/colors'

export const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#23272f',
    },
    secondary: {
      main: '#15c6ff'
    },
    divider: '#ebecf0',
    text: {
      primary: '#23272f'
    },
    background: {
      default: '#fff',
      paper: '#fff'
    },
    // 侧边栏配色
    sideList: {
      activeBgColor: '#e6f7ff',
      activeText: '#087ea4',
      hoverBgColor: '#f6f7f9',
      text: '#404756',
      bgColor: '#fff',
    }
  }

}

export const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#15c6ff'
    },
    divider: '#343a46',
    background: {
      default: '#23272f',
      paper: '#23272f',
    },
    text: {
      primary: "#fff",
      secondary: '#fff',
    },
    sideList: {
      activeBgColor: '#283541',
      activeText: '#149eca',
      text: '#fff',
      bgColor: '#23272f',
      hoverBgColor: '#343a46'
    }
  }
}