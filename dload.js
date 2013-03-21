// Code snippets for dynamically loading JavaScript and CSS
// Copyright    : This script has been placed in the public domain.
// Author       : Yu-Jie Lin
// Website      : http://yjl.im

function load_CSS(src, cb) {
  var link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = src;
  if (cb) {
    link.addEventListener('load', cb);
  }
  document.getElementsByTagName('head')[0].appendChild(link);
}

function inject_CSS(css, cb) {
  var style = document.createElement('style');
  style.innerHTML = css
  if (cb) {
    style.addEventListener('load', cb);
  }
  document.getElementsByTagName('head')[0].appendChild(style);
}

function load_JS(src, cb) {
  var script = document.createElement('script');
  script.src = src;
  if (cb) {
    script.addEventListener('load', cb);
  }
  document.getElementsByTagName('head')[0].appendChild(script);
}