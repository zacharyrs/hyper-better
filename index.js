'use strict'

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
    css: `
      ${config.css || ''}
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
      .tab_active::after {
        content: '';
        border-bottom: ${config.borderColor} 1px solid;
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
