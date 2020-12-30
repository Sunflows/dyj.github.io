/*
 * @Author: your name
 * @Date: 2020-12-28 08:46:52
 * @LastEditTime: 2020-12-28 13:01:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-zsgc\my-zsgc\src\api\index.js
 */
import request from '../uitls/request'
//登录接口
export function Login(data){
    return request({
        url:'/api/admin/login',
        method:'post',
        data,
    })
}
//列表接口
export function getList(data){
    return request({
        url:'/api/resident',
        data,
    })
}
//删除接口
export function del(data){
    return request({
        url:'/api/resident',
        method:'delete',
        params:data,
    })
}
//添加接口
export function addList(data){
    return request({
        url:'/api/resident',
        method:'post',
        data
    })
}
//详情
export function getDetail(data){
    return request({
        url:'/api/resident/info',
        params:data
    })
}