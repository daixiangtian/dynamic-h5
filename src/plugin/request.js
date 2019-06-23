import axios from 'axios'			//导入axios		 cmd安装  =>  淘宝镜像 ? cnpm install axios -S : npm install axios -S

const backendPath = 'http://localhost',		//后台请求地址

  port = ':8080',

  maxRequest = 3,		//限制当前请求的错误次数

  headersConfig = () => {			//请求头配置
    return {
      // 这里就是配置一些请求的参数值
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  },
  openDebug = false,			//是否开始debug
  debugOrder = [],			//请求后台的记录

  debug = (params) => {		//请求后台的记录进行存储

    if (!openDebug) return false		//是否开始了记录存储
    // 如果有参数 就进行存储
    if (params) {
      debugOrder.push({
        ...params,		//请求的信息 以及回馈值
        headers: {		//请求头的信息
          ...headersConfig(),
        },
        time: new Date().getTime(),		//请求的时间
      })
    }

    return debugOrder  //返回所有的请求记录
  }

/**
 GET请求
 */

async function requestByGet (url, params={}, num = 0) {
  if (!url) {
    return {
      code: 0,
      msg: 'haven\'t request url'
    }
  }
  let isRequestError = false,		// 是否请求失败
    errorMsg = ''					//请求的错误信息

  const urlParams = new URLSearchParams()

  for (let i in params) urlParams.append(i, params[i]);



  const result = await axios.get(url.indexOf("http")==0?url:`${backendPath + port}${url}`, urlParams, {
    headers: {
      ...headersConfig(),
    }
  }).catch(error => {
    /** 当请求出现错误，就会执行 */
    isRequestError = !isRequestError
    errorMsg = error
  })

  if (isRequestError) {			// 判断是否出现错误的请求
                             // 判断错误次数是否在允许的范围内
    if (num < maxRequest) {
      return await requestByGet(url, params, num + 1)
    } else {	// 超出了错误次数的范围内 将错误的信息进行返回出去
      return {
        code: 0,
        msg: errorMsg,
      }
    }
  }

  debug({
    method: 'GET',
    url: `${backendPath}/${url}`,
    params,
    result,
  })
  console.log('get', result)
  return result			// 返回最终的结果
}

/**
 POST请求
 */

async function requestByPost (url, params, num = 0) {

  if (!url) {
    return {
      code: 0,
      msg: 'haven\'t request url'
    }
  }

  let isRequestError = false,		// 是否请求失败
    errorMsg = ''					//请求的错误信息

  console.log('params', params)

  const urlParams = new URLSearchParams()

  for (let i in params) urlParams.append(i, params[i])

  const result = await axios.post(url.indexOf("http")==0?url:`${backendPath + port}${url}`, urlParams, {
      headers: {
        ...headersConfig(),
      }
    }
  ).catch(error => {
    /** 当请求出现错误，就会执行 */
    isRequestError = !isRequestError
    errorMsg = error
  })

  if (isRequestError) {			// 判断是否出现错误的请求
                             // 判断错误次数是否在允许的范围内
    if (num < maxRequest) {
      return await requestByPost(url, params, num + 1)
    } else {	// 超出了错误次数的范围内 将错误的信息进行返回出去
      return {
        code: 0,
        msg: errorMsg,
      }
    }
  }

  debug({
    method: 'POST',
    url: `${backendPath}/${url}`,
    params,
    result,
  })

  return result			// 返回最终的结果
}

async function requestUploadFiles (url, params, num = 0) {
  if (!url) {
    return {
      code: 0,
      msg: 'haven\'t request url'
    }
  }

  let isRequestError = false,		// 是否请求失败
    errorMsg = ''					//请求的错误信息



  let formData = new FormData() //创建form对象

  for (let i in params) {
    if (i == 'fils') {
      formData.append(i, params[i], params.file.name)
    } else {
      formData.append(i, params[i])
    }

  }
  console.log('formData', formData)
  const result = await axios.post(url.indexOf("http")==0?url:`${backendPath + port}${url}`, formData, {
      headers: {
        ...headersConfig(),
      }
    }
  ).catch(error => {
    /** 当请求出现错误，就会执行 */
    isRequestError = !isRequestError
    errorMsg = error
  })
  console.log('requestUploadFiles = >result====>', result)
  if (isRequestError) {			// 判断是否出现错误的请求
                             // 判断错误次数是否在允许的范围内
    if (num < maxRequest) {
      return await requestUploadFiles(url, params, num + 1)
    } else {	// 超出了错误次数的范围内 将错误的信息进行返回出去
      return {
        code: 0,
        msg: errorMsg,
      }
    }
  }

  debug({
    method: 'POST',
    url: `${backendPath}/${url}`,
    params,
    result,
  })

  return result;
}

/** 最重要的一步 将方法导出*/
export {
  requestByGet, requestByPost,requestUploadFiles
}


