'use strict'

const foregroundColor = '#f8f8f2'
const backgroundColor = '#282a36'
const black = '#44475a'
const red = '#ff5555'
const green = '#50fa7b'
const yellow = '#f1fa8c'
const blue = '#6272a4'
const magenta = '#ff79c6'
const cyan = '#8be9fd'
const gray = '#666666'
const brightBlack = '#999999'
const brightWhite = '#ffffff'

const darkBackgroundColor = '#20222b'
const borderColor = '#44475a'

exports.decorateBrowserOptions = config => {
  return Object.assign({}, config, {
    transparent: false
  });
}

exports.onWindow = window => {
  window.on('enter-full-screen', e => {
    let code = `document.getElementsByClassName('hyper_main')[0].classList.add('hyper_fullscreen')`
    window.webContents.executeJavaScript(code)
  })
  window.on('leave-full-screen', e => {
    let code = `document.getElementsByClassName('hyper_main')[0].classList.remove('hyper_fullscreen')`
    window.webContents.executeJavaScript(code)
  })
  return window
}

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: black,
    cursorColor: brightBlack,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      gray,

      // bright
      brightBlack,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      brightWhite
    },
    css: `
      ${config.css || ''}
      .tabs_list .tab_tab.tab_active .tab_text  {
        background: ${backgroundColor};
      }
      .tab_active:before {
        border-color: rgb(68, 71, 90);
      }
      .tabs_borderShim, .hyper_main, .tab_tab {
        border: none !important;
      }
      .tab_tab {
        padding-left: 0px;
      }
      .header_header {
        left: 0;
        right: 0;
      }
      .tabs_nav {
        background: ${darkBackgroundColor};
      }
      .tabs_nav::before {
        content: '';
        border-bottom: ${borderColor} 1px solid;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1px
      }
      .tab_tab.tab_active::after {
        content: '';
        border-bottom: ${backgroundColor} 1px solid;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1px
      }
      .hyper_fullscreen .tabs_list {
        margin-left: -1px;
      }
    `
  })
}
