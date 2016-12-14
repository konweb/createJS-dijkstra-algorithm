# import modules
Route = require 'modules/Route'
route = null

init = ->
  route = new Route()
  route.init()

  $reroute = $ '.js-reroute'
  $reroute.on 'click', => route.reRoute()


# DOM Ready
$ -> init()


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
