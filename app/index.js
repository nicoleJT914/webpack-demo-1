import _ from 'lodash'
import $ from 'jquery'
import foo from './foo.js'

function component () {
  //var element = document.createElement('div');
  foo()
  var element = $('<div></div>')
  /* lodash is required for the next line to work */
  //element.innerHTML = _.join(['Hello','webpack'], ' ');
  element.html(_.join(['Hello','webpack'], ' '))

  //return element;
  return element.get(0)
}

document.body.appendChild(component());