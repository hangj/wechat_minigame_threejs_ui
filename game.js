import './js/libs/weapp-adapter'
import './js/libs/symbol'

import Main from './js/main'

GameGlobal.ImageBitmap = function () { } // 不加这个，加载 texture 时报错，找不到 ImageBitmap

new Main()
