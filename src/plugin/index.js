/**
 * 获取数据类型
 * */
export function getType(obj, str) {
  let type = ''
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    type = 'array'
  } else if (obj === true || obj === false) {
    type = 'boolean'
  } else if (!isNaN(obj)) {
    type = 'number'
  } else if (obj instanceof HTMLElement) {
    type = 'dom'
  } else if (obj instanceof Map) {
    type = 'map'
  } else if (typeof (obj) == 'object' && Object.prototype.toString.call(obj).toLowerCase() == '[object object]' && !obj.length) {
    type = 'json'
  } else {
    type = typeof (obj)
  }
  return str ? type === str : type
}

export function getAttrs(dom) {
  let attrs = new Object(null)
  if (getType(dom, 'dom')) {
    let attrsMap = dom.attributes
    console.log("dom.attributes", dom.attributes)
    for (let a in attrsMap) {

      let val = attrsMap[a].nodeValue
      if (val) {
        attrs[attrsMap[a].name] = val
      }
    }
  }
  return attrs
}

export function touch({dom, start, move, end, stop = true, change}) {


  const off = ()=>{
    dom.removeEventListener('touchstart', f.start)
    dom.removeEventListener('touchmove', f.move)
    dom.removeEventListener('touchend', f.end)
  }


  const f = {
    data: {},
    start(e) {						//手指触碰的屏幕就会触发(一次)
      stop && e.preventDefault()		//阻止冒泡，当stop为false的时候就运行冒泡，默认为true
      f.data = {						//储存的是一些数据
        ...f.data,					//扩展运算，将之前的数据进行合并
        x: e.touches[0].pageX,		//手指开始的横向位置
        y: e.touches[0].pageY,		//手指开始的纵向位置
        ex: 0,						//手指结束的横向位置
        ey: 0,						//手指结束的纵向位置
        time: new Date().getTime(),	//手指的开始时间
    }
      start && start(f.data)		//执行自定义的 start 方法
    },
    move(e) {					//多次
      stop && e.preventDefault()		//阻止冒泡，当stop为false的时候就运行冒泡，默认为true
      f.data = {				//储存的是一些数据
        ...f.data,			//扩展运算，将之前的数据进行合并
        ex: e.touches[0].pageX,			//手指结束的横向位置
        ey: e.touches[0].pageY,			//手指结束的纵向位置
      }
      move && move({					//执行自定义的 move方法，并且把得到的数据进行返回
        x: e.touches[0].pageX,
        y: e.touches[0].pageY,
        dx: f.data.ex - f.data.x,
        dy: f.data.ey - f.data.y
      },off)
    },
    end(e) {				//手指离开屏幕就会触发(一次)
      stop && e.preventDefault()		//阻止冒泡，当stop为false的时候就运行冒泡，默认为true
      let time = new Date().getTime()	//手指离开的时间
      end && end({				//执行自定义的 end 方法，并且把得到的数据进行返回
        time,					//当前时间
        startTime: f.data.time,		//手指的开始时间
        dt: time - f.data.time,			//手指在屏幕逗留的时间差 ms
        dy: (f.data.ey || f.data.y) - f.data.y,		//手指在屏幕上的纵向的移动距离
        dx: (f.data.ex || f.data.x) - f.data.x		//手指在屏幕上的横向的移动距离
      },off)

      // ↓ 下面的就是执行判断手指移动的方向，当达到条件，就会执行change事件，
      // change 返回的参数
      //  	direction: left | right | up | down | origin
      if (new Date().getTime() - f.data.time < 300) {		// 手指开屏幕上的时间很短

        if (Math.abs(f.data.ex - f.data.x) > 20 && Math.abs(f.data.ex - f.data.x) > Math.abs(f.data.ey - f.data.y)) {
          if (change) {
            if (f.data.ex > f.data.x) {
              change({
                direction: 'right'
              },off)
            } else if (f.data.ex < f.data.x) {
              change({
                direction: 'left'
              },off)
            }
          }
        } else if (Math.abs(f.data.ey - f.data.y) > 20 && Math.abs(f.data.ex - f.data.x) < Math.abs(f.data.ey - f.data.y)) {
          if (change) {
            if (f.data.ey > f.data.y) {
              change({
                direction: 'down'
              },off)
            } else if (f.data.ey < f.data.y) {
              change({
                direction: 'up'
              },off)
            }
          }
        } else {
          change && change({
            direction: 'origin'
          },off)
        }
      } else if (Math.abs(f.data.ey - f.data.y) >= 50) {
        if (change) {
          if (f.data.ey > f.data.y) {
            change({
              direction: 'down'
            },off)
          } else if (f.data.ey < f.data.y) {
            change({
              direction: 'up'
            },off)
          }
        }
      } else if (Math.abs(f.data.ex - f.data.x) >= 50) {
        if (change) {
          if (f.data.ex > f.data.x) {
            change({
              direction: 'right'
            },off)
          } else if (f.data.ex < f.data.x) {
            change({
              direction: 'left'
            },off)
          }
        }
      } else {
        change && change({
          direction: 'origin'
        },off)
      }
    }
  }
  // 这里是防止dom元素绑定事件异常，导致整体页面无法正常往下执行
  try {
    dom.removeEventListener('touchstart', f.start)
    dom.addEventListener('touchstart', f.start)
    dom.removeEventListener('touchmove', f.move)
    dom.addEventListener('touchmove', f.move)
    dom.removeEventListener('touchend', f.end)
    dom.addEventListener('touchend', f.end)
  } catch (e) {
    console.error('给dom元素绑定事件的时候出现了错误', e)
  }
}
