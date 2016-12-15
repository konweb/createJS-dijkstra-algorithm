grid = 10

module.exports =
  # 何 x 何のグリッドか
  _GRID: grid

  # マス数
  _GRID_LENGTH: (Math.pow(grid, 2)) - 1

  # 1マスのサイズ
  _GRID_SIZE: 50