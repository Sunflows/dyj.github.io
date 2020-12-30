import React, { Component } from 'react'
import {Input,Form,Button,Spin} from 'antd'
import {addList} from '../../../api'
export default class index extends Component {
    state={
        newData:{
            "mainId": "1",
            "realName": "小杜",
            "gender": 0,
            "mobile": "15605249636",
            "relation": "朋友",
            "birthday": "2001-07-13",
            "idCard": "198762001071354321",
            "age": 0,
            "isMarried": 0,
            "nativePlace": "内蒙古",
            "domicilePlace": "河南",
            "nation": "中国",
            "politicsStatus": "群主",
            "workUnit": "八维",
            "workTelephone": "010-12121",
            "education": "胎教",
            "university": "八维",
            "isDisability": 0,
            "buildingPlot": "蒙古包",
            "isRenting": 0,
            "isDb": 0,
            "db_sum": 0
    },
    spinLoading:false
    }
    onFinish(e){
        const data={
            ...this.state.newData,
            ...e,
        }
        this.setState({
            spinLoading:true
        })
        addList(data).then(res=>{
            this.setState({
                spinLoading:false
            })
        })
        this.props.history.push('/main/word')
    }
    render() {
        let {spinLoading}=this.state
        return (
    
                 <Spin spinning={spinLoading}>
                <div>
                    <Form
                    name="basic"
                    onFinish={(e)=>this.onFinish(e)}
                    >
                    <Form.Item
                        label="姓名"
                        name="realName"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="年龄"
                        name="age"
                        rules={[{ required: true, message: 'Please input your age!' }]}
                    >
                       <Input />
                    </Form.Item>

                    <Form.Item
                        label="地址"
                        name="domicilePlace"
                        rules={[{ required: true, message: 'Please input your address!' }]}
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                         </Button>
                    </Form.Item>
                </Form>
            </div>
            </Spin>
  
        )
    }
}
