config   = require 'config'
UAParser = require 'ua-parser-js'
parser   = new UAParser()

module.exports =

  screen:
    sp: ->
      return $(window).innerWidth() <= config.screen.sp

    tablet: ->
      return $(window).innerWidth() <= config.screen.tablet


  sleep: (msec) ->
    d = $.Deferred()

    setTimeout ->
      d.resolve()
    , msec

    return d.promise()


  ua: ->
    return parser.getResult()


#
# console.log wrapper
#
window.log = (->
  if window.console?
    if window.console.log.bind?
      return window.console.log.bind window.console
    else
      return window.console.log
  else
    return window.alert
)()
