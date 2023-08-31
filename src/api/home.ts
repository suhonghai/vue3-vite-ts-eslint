import request from '@/utils/request'
export const   getHomeInfo = (data:never) => {
  return request({
    url: '/home/info',
    method: 'post',
    data,
  })
}
