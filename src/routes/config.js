/*
 * @Author: your name
 * @Date: 2020-12-27 20:59:50
 * @LastEditTime: 2020-12-28 12:58:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-zsgc\my-zsgc\src\routes\config.js
 */
import Login from '../pages/login'
import lazyLoader from '../lazyLoader'
import Word from '../pages/main/word/inde'
import Add from '../pages/main/add/index'
import Detail from '../pages/main/detail/detail'
const Main = lazyLoader(() => import('../pages/main'))

// import Main from '../pages/main'
// const Main=lazyLoader(()=>import('../pages/main/index.jsx'))
const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/main',
        component: Main,
        children: [
            {
                path: '/main/word',
                component: Word,
                title:'世界'
            },
            {
                path: '/main/add',
                component: Add,
            },
            {
                path: '/main/detail',
                component: Detail,
            }
        ]
    },
    {
        from: '/',
        to: '/login'
    }
]
export default routes;