# import modules
createjs = require 'EaselJS'
Tween    = require 'TweenJS'
config   = require './config'
Router   = require './Router'

class GridCanvas

  # [constructor description]
  # @return {[type]} [description]
  constructor: ->
    @c = createjs
    @$contaniner = $ '#container'
    @contaninerW = @$contaniner.width()
    @contaninerH = @$contaniner.height()



  # 初期設定
  # @return {[type]} [description]
  init: ->
    # canva設定
    @canvas = document.getElementById 'canvas'
    @stage  = new @c.Stage canvas
    @setStage()

    # update stage
    @c.Ticker.addEventListener('tick', @stage)

    # ルートデータの取得後、グリッドの作成
    new Router()
      .then (data) => 
        @pointData = data.point
        @routeData = data.route
        log 'pointData',@pointData
        log 'routeData',@routeData

        @createGrid()
        @createRoute()


  setStage: ->
    width            = config._GRID_SIZE * config._GRID
    height           = config._GRID_SIZE * config._GRID
    devicePixelRatio = window.devicePixelRatio
    containerW      = $('#container').width()

    # devicePixelRatioが存在する場合
    if devicePixelRatio
      @canvas.width        = width * devicePixelRatio
      @canvas.height       = height * devicePixelRatio
      @canvas.style.width  = width + 'px'
      @canvas.style.height = height + 'px'
      @stage.scaleX   = devicePixelRatio
      @stage.scaleY   = devicePixelRatio
    else
      @canvas.width  = width
      @canvas.height = height

    if width > containerW
      @stage.scaleX  = containerW / width
      @stage.scaleY  = containerW / width
      @canvas.width  = containerW
      @canvas.height = containerW
      @canvas.style.width  = ''
      @canvas.style.height = ''



  createGrid: ->
    @mapContainer = new @c.Container()
    @stage.addChild @mapContainer

    # グリッド作成
    for data,i in @pointData
      fill = '#fff'

      if data.type is 'wall'
         fill = '#503809'

      # 四角
      shape = new @c.Shape()
      shape.graphics.beginStroke('#999').beginFill(fill).drawRect(0, 0, config._GRID_SIZE, config._GRID_SIZE)
      shape.x = config._GRID_SIZE * data.line.x
      shape.y = config._GRID_SIZE * data.line.y

      if data.type isnt 'wall'
        # テキスト
        str = data.cost
        # str = 'id: ' + data.id + '\ncost: ' + data.cost
        text = new @c.Text(str, '12px Arial', '#666')
        text.x = (config._GRID_SIZE * data.line.x) + (config._GRID_SIZE / 2)
        text.y = (config._GRID_SIZE * data.line.y) + (config._GRID_SIZE / 2)
        text.textAlign = 'center'
        text.textBaseline = 'middle'

      @mapContainer.addChild shape
      @mapContainer.addChild text

    # @mapContainer.x = (@contaninerW / 2) - (config._GRID_SIZE * config._GRID / 2)
    # @mapContainer.y = 50


  createRoute: ->
    # ルート作成
    for data,i in @routeData
      fill = '#ddd'

      switch data.type
         when 'start'
           fill = '#b3c9f5'

         when 'goal'
           fill = '#ff933f'

      # 四角
      shape = new @c.Shape()
      shape.graphics.beginStroke('#999').beginFill(fill).drawRect(0, 0, config._GRID_SIZE, config._GRID_SIZE)
      shape.x = config._GRID_SIZE * data.line.x
      shape.y = config._GRID_SIZE * data.line.y

      if data.type is 'start' or data.type is 'goal'
        # テキスト
        str = if data.type is 'start' then 'S' else 'G'
        text = new @c.Text(str, '18px Arial', '#333')
        text.x = (config._GRID_SIZE * data.line.x) + (config._GRID_SIZE / 2)
        text.y = (config._GRID_SIZE * data.line.y) + (config._GRID_SIZE / 2)
        text.textAlign = 'center'
        text.textBaseline = 'middle'


      if data.type is 'route'
        shape.alpha = 0

      @mapContainer.addChild shape
      @mapContainer.addChild text

      if data.type is 'route'
        @c.Tween.get(shape)
          .wait 100 * i
          .to alpha: .8, 150, @c.Ease.elasticout


  reRoute: ->
    log 'reRoute'
    @stage.clear()
    @init()


module.exports = GridCanvas
