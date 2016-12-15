# import modules
config = require './config'

class Route

  # [constructor description]
  # @return {[type]} [description]
  constructor: ->
    return new Promise (resolve) =>
      @setData()
        .then => @setNearPoints()
        .then => @computeCost()
        .then => @computeRoute()
        .then => resolve({point: @pointData, route: @routeData})


  # ルートデータの作成
  # grid * grid 分の配列を生成する
  setData: ->
    @pointData = []

    # 縦横カウント
    x_count = 0
    y_count = 0

    # 乱数の生成
    startIndex = Math.floor( Math.random() * (config._GRID_LENGTH + 1) )
    goalIndex  = Math.floor( Math.random() * (config._GRID_LENGTH + 1) )

    # グリッド分のデータを作成
    for i in [0..config._GRID_LENGTH]
      position  = []
      cost      = -1
      type      = 'route'
      isVisited = false
      wallIndex = Math.floor( Math.random() * (config._GRID_LENGTH + 1) )

      if i % config._GRID is 0 and i isnt 0
        x_count = 0
        y_count++

      # x軸の端にいるかどうか
      switch x_count
        when 0
          position.push 'left'

        when config._GRID - 1
          position.push 'right'

      # y軸の端にいるかどうか
      switch y_count
        when 0
          position.push 'top'

        when config._GRID - 1
          position.push 'bottom'

      # スタート位置の設定
      if i is startIndex
        cost = 0
        type = 'start'

      # ゴール位置の設定
      if i is goalIndex
        type = 'goal'
        
      # 壁の設定
      if i isnt startIndex and i isnt goalIndex and wallIndex > (config._GRID_LENGTH / 1.2)
        type = 'wall'
        # isVisited = true

      # 配列に格納
      @pointData.push
        id: i,
        cost: cost
        line:
          x: x_count
          y: y_count
        position: position,
        type: type,
        isVisited: isVisited

      x_count++

    return Promise.resolve()


  # 隣り合うIDの設定
  setNearPoints: ->
    for data,i in @pointData
      nearPoints = []

      top_id    = data.id - config._GRID
      bottom_id = data.id + config._GRID
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

      @pointData[i].nearPoints = nearPoints

    return Promise.resolve()


  # コスト計算
  computeCost: ->

    count = 0

    while 1
      count++

      # if count > 10 then break

      current = null

      # 現在ノードを検索
      for data in @pointData

        # 訪問済み、コスト未設定の場合はスキップ
        if data.isVisited or data.cost is -1
          continue

        # 現在ノードがなければ設定
        if current is null
          current = data
          continue

        # 現在ノードのコストより低いノードを検索
        if current.cost > data.cost
          current = data

      # 現在ノードを訪問済みとする
      current.isVisited = true

      # すべて訪問したら完了
      if !_.find @pointData, {isVisited: false} then break


      for id in current.nearPoints
        # idからデータのindexを検索
        index = _.findIndex @pointData, {id: id}

        # エラー回避
        # indexが見つからない場合は処理しない
        if index is -1
          continue

        target = @pointData[index]

        if target.type is 'wall'
          target.cost = 9999
          continue

        # ターゲットノードのコスト　-1の場合1とする
        targetCost = if target.cost is -1 then 1 else target.cost

        # 現在ノードのコスト + ターゲットノードのコスト
        # updateCost = targetCost + current.cost
        updateCost = current.cost + 1

        # ターゲットノードが訪問済み且つ、
        # 現在ノードが 現在ノードのコスト + ターゲットノードのコスト より低い場合処理しない
        if target.isVisited and targetCost < updateCost
          continue

        # ターゲットノードのコストをアップデート
        target.cost = updateCost


    return Promise.resolve()


  # ルートの計算
  # ゴールからコストの低い方へ辿っていく
  computeRoute: ->
    @routeData = []

    # 現在ノード（ゴール位置）
    current = _.find @pointData, {type: 'goal'}

    count = 0;
    while 1
      count++
      if count > config._GRID_LENGTH then break

      pointArr = []

      # 配列に追加
      @routeData.push current

      # スタートまでたどり着いたら完了
      if current.type is 'start' then break

      # 隣り合うノードを検索
      for id in current.nearPoints
        point = _.find @pointData, {id: id}
        pointArr.push point

      # 隣り合うノードのコストを取得
      costs = _.map pointArr, (v)-> return v.cost

      # ノードの低い方を現在ノードとする
      current = pointArr[_.indexOf costs, _.min costs]

    # 配列を反転させスタートからにする
    @routeData.reverse()

    return Promise.resolve()


module.exports = Route
