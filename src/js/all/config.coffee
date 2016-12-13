module.exports =
  # デバックモードかどうか
  is_debug: process.env.NODE_ENV is 'development'

  # スクリーンサイズ
  screen:
    sp    : 480
    tablet: 768