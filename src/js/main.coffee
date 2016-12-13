# import modules
utils     = require 'utils'
GridCanvas = require 'modules/grid-canvas'

gridCanvas = null

initialize = ->
  return new Promise (resolve) =>
    # create constructor
    gridCanvas = new GridCanvas()
    
    resolve()


# DOM Ready
$ ->
  initialize()
    .then -> gridCanvas.init()
