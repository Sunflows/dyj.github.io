/*
 * @Author: your name
 * @Date: 2020-12-27 20:59:45
 * @LastEditTime: 2020-12-28 08:37:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-zsgc\my-zsgc\src\routes\index.js
 */
import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
const RouterView=(props)=>{
    return <Switch>
        {
            props.routes.map((item,index)=>item.path?
            <Route
            key={index}
            path={item.path}
            render={(pro)=><item.component routes={item.children?item.children:[]} {...pro}>
                <RouterView routes={item.children?item.children:""}/>
            </item.component>}
            />:<Redirect key={index} {...item}/>)
        }
    </Switch>
}
export default RouterView