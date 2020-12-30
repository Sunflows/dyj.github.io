import React, { useState,useEffect } from 'react'
import './index.css'
import {Input,Button,message} from 'antd'
import {Login} from '../../api'
import Image from './images/15.jpg'

export default function Index(props) {
    const [userInfo,setUseInfo]=useState({})
    const getLogin=()=>{
        Login(userInfo).then(res=>{
            console.log(res);
            if(res.code===200){
                message.success(res.msg)
                localStorage.setItem('token',res.data.token)
                props.history.push('/main')
            }else{
                message.error(res.msg)
            }
        })
    }
    useEffect(()=>{

    })
  
        return (
            <div className="login">
                <div className="box">
             <img src={Image} alt=""/>
                   <ul>
                       <li>
                           <h1>包网图智能硬件平台</h1>
                       </li>
                       <li>
                           <p>一款让设计更美好的智能AI平台</p>
                       </li>
                       <li>
                           {/* <Input value={userInfo.username} onInput={(e)=>{setUseInfo({...userInfo,username:e.target.value})}} type="text" placeholder="请输入管理员姓名"/> */}
                            <Input value={userInfo.username} onInput={(e)=>{setUseInfo({...userInfo,username:e.target.value})}} type="text" placeholder="请输入管理员姓名"></Input>
                       </li>
                       <li>
                           <Input value={userInfo.password} onInput={(e)=>{setUseInfo({...userInfo,password:e.target.value})}} type="text" placeholder="请输入登录密码"/>
                           {/* <Input value={userInfo.password} onInput={(e)=>{setUseInfo({...userInfo,password:e.target.value})}} type="text" placeholder="密码"></Input> */}
                       </li>
                       <li>
                            <Button onClick={()=>getLogin()}>登录</Button>
                       </li>
                   </ul>
        </div>
            </div>
        )
    }
