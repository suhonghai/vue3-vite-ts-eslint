import axios from 'axios'
/**
 * axios请求拦截器配置
 * @param config
 * @returns {any}
 */
const requestConf: any = (config: any): any => {
  const token = '' // 从自己保存的token位置获取token
  if (token) config.headers['token'] = `${token}`
  return config
}

/**
 * axios响应拦截器
 * @param config 请求配置
 * @param data response数据
 * @param status HTTP status
 * @param statusText HTTP status text
 * @returns {Promise<*|*>}
 */
const handleData = async (res: any): Promise<any | any> => {
  const { data, config } = res
  if (config.export) return data //导出
  const { code } = data.heads
  switch (code) {
    case 200:
      return data.body
    case 4001:
      break
    case 403:
      break
    default:
      return Promise.reject(data)
      break
  }
}

/**
 * @description axios初始化
 */
const instance = axios.create({
  baseURL: import.meta.env.VUE_APP_BASE_API,
  timeout: 60000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

/**
 * @description axios请求拦截器
 */
instance.interceptors.request.use(requestConf, (error) => {
  return Promise.reject(error)
})

/**
 * @description axios响应拦截器
 */
instance.interceptors.response.use(
  (response) => handleData(response),
  (error) => {
   //这里可以写提示错误信息的逻辑
    return Promise.reject(error)
  }
)

export default instance
