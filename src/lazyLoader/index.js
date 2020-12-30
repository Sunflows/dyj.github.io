/*
 * @Author: your name
 * @Date: 2020-12-28 09:59:16
 * @LastEditTime: 2020-12-28 10:10:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-zsgc\my-zsgc\src\lazyLoader\index.js
 */
import React from 'react'
import Loadable from 'react-loadable'

export default function Index(dom) {
    return Loadable({
        loader:dom,
        loading(){
            return <div>
                <img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4105776946,2723577313&fm=26&gp=0.jpg" alt=""/>
            </div>
        }
    })
}



