import request from '@/utils/request'
// 后台银行列表
// export function fetchBankList(query) {
//   return request({
//     url: '/admin/bank/shengList',
//     method: 'get',
//     params: query
//   })
// }
export function fetchBankList(data) {
  return request({
    url: '/admin/bank/shengList',
    method: 'post',
    data
  })
}
// export function updateArticle(data) {
//   return request({
//     url: '/vue-element-admin/article/update',
//     method: 'post',
//     data
//   })
// }
