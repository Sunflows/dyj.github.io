/*
 * @Author: your name
 * @Date: 2020-12-28 08:47:31
 * @LastEditTime: 2020-12-28 09:37:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-zsgc\my-zsgc\src\uitls\request.js
 */
import axios from 'axios'
function request(options){
    let {
        url,
        data={},
        params={},
        method='get',
        headers={
            Authorization:`Bearer ${localStorage.getItem('token')}`
        }
    }=options
    return new Promise((resolve,reject)=>{
        axios({
            url,
            data,
            params,
            method,
            headers
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            console.log(err.msg)
            reject({
                code:'000',
                msg:'请求错误'
            })
        })
    })
}
export default request