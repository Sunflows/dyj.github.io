import React, { Component } from 'react'
import {getDetail} from '../../../api'
export default class detail extends Component {
    state={
        detailInfo:{},
        btnStatus:false,

        editInfo:{},
        confirmLoading:false
    }
    getDetail(){
        const id=this.props.match.params.id
     
        getDetail(id).then(res=>{
            this.setState({
                detailInfo:{
                    ...res.data,
                    gender:'0',
                    birthday:'2020-01-01'
                }
            }) 
        }) 
    }  
    render() {
        let {detailInfo}=this.state
        return (
            <div>
                  <p>姓名：{detailInfo.realName}</p>
                <p>年龄：{detailInfo.age}</p>
                <p>地址：{detailInfo.domicilePlace}</p>
            </div>
        )
    }
    componentDidMount(){
        this.getDetail()
    }
}
