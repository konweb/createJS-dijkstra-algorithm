createjs = require 'EaselJS'

class GridCanvas

  # 何 x 何のグリッドか
  _GRID = 5


  # [constructor description]
  # @return {[type]} [description]
  constructor: ->
    @c = createjs


  # 初期設定
  # @return {[type]} [description]
  init: ->
    @canvas = document.getElementById 'canvas'
    @stage  = new @c.Stage canvas

    @setStage()
    @createRouteData()
      .then => @createGrid()
    
    log 'routeData',@routeData

    # update stage
    @c.Ticker.addEventListener('tick', @stage)


  setStage: ->
    width            = window.innerWidth
    height           = window.innerHeight
    devicePixelRatio = window.devicePixelRatio

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


  createRouteData: ->
    return @setData()
      .then => @setNearPoints()


  setData: ->
    @routeData = []

    # 縦横カウント
    x_count = 0
    y_count = 0

    # グリッド分のデータを作成
    for i in [0..(Math.pow(_GRID, 2)) - 1]
      position = []
      type     = 'route'

      if i % _GRID is 0 and i isnt 0
        x_count = 0
        y_count++

      # x軸の端にいるかどうか
      switch x_count
        when 0
          position.push 'left'

        when _GRID - 1
          position.push 'right'

      # y軸の端にいるかどうか
      switch y_count
        when 0
          position.push 'top'

        when _GRID - 1
          position.push 'bottom'

      x_count++

      # スタート位置の設定
      # とりあえず最初のデータをスタートにする
      if i is 0
        type = 'start'

      # ゴール位置の設定
      # とりあえず最後のデータをスタートにする
      if i is (Math.pow(_GRID, 2)) - 1
        type = 'goal'

      # 配列に格納
      @routeData.push
        id: i,
        cost: 1
        line:
          x: x_count
          y: y_count
        position: position,
        type: type

    return Promise.resolve()


  setNearPoints: ->
    # 隣り合うIDの設定
    for data,i in @routeData
      nearPoints = []

      top_id    = data.id - _GRID
      bottom_id = data.id + _GRID
      left_id   = data.id - 1
      right_id  = data.id + 1

      if data.position.indexOf('top') is -1
        nearPoints.push top_id

      if data.position.indexOf('bottom') is -1
        nearPoints.push bottom_id

      if data.position.indexOf('left') is -1
        nearPoints.push left_id

      if data.position.indexOf('right') is -1
        nearPoints.push right_id

      @routeData[i].nearPoints = nearPoints

    return Promise.resolve()


  createGrid: ->
    @gridContainer = new @c.Container()
    @stage.addChild @gridContainer

    # 1マスのサイズ
    w = 50
    h = 50


    # グリッド作成
    for data,i in @routeData
      fill = '#fff'

      switch data.type
         when 'start'
           fill = '#b3c9f5'

         when 'goal'
           fill = '#ff933f'

      shape = new @c.Shape()
      shape.graphics.beginStroke('#999').beginFill(fill).drawRect(0, 0, w, h)
      shape.x = w * data.line.x
      shape.y = h * data.line.y

      text = new @c.Text(i, '15px Arial', '#000')
      text.x = (w * data.line.x) + (w / 2)
      text.y = (h * data.line.y) + (h / 2)
      text.textAlign = 'center'
      text.textBaseline = 'middle'

      @gridContainer.addChild shape
      @gridContainer.addChild text

    containerBounds = @gridContainer.getBounds()
    @gridContainer.x = (window.innerWidth / 2) - (containerBounds.width / 2)
    @gridContainer.y = (window.innerHeight / 2) - (containerBounds.height / 2)


    # log @gridContainer.children[0].graphics.clear().beginFill('red').drawRect(0, 0, w, h)




module.exports = GridCanvas
