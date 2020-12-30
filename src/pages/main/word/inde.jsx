import React, { Component } from 'react'
import {Table,Button,message} from 'antd'
import {getList,del} from '../../../api'
export default class inde extends Component {
    state={
        // rowSelection:[],
        columns:[
            {
                title:'姓名',
                dataIndex:'realName',
            },
            {
                title:'年龄',
                dataIndex:'age',
            },
            {
                title:'地址',
                dataIndex:'domicilePlace',
            },
            {
                title:'操作',
                render:(text)=><div>
                    <Button onClick={()=>this.toDetail(text)} type="primary">详情</Button>
                    <Button type="danger" onClick={()=>this.toDel(text)}>删除</Button>
                </div>
            }
        ],
        dataSource:[],
        pages: {
            pageIndex: 1,
            pageSize: 10,
            total: 50,
        },
    }
    getList(){
        const data={
            ...this.state.pages,
        }
        getList(data).then(res=>{
            console.log(res.data.list);
            this.setState({
                pages:{
                    ...this.state.pages,
                    pageIndex:res.data.pageIndex,
                    pageSize:res.data.pageSize
                },
                dataSource:res.data.list
            })
            console.log(this.state.dataSource);
        })
    }
    //删除
    toDel(text){
        const id=text.id
        del({id}).then(res=>{
            if(res.code===200){
                this.getList();
            }else{
                message.error(res.msg)
            }
        })
    }
    //跳转添加
    addList(){
        this.props.history.push('/main/add')
    }
    //详情
    toDetail(text){
        let id=text.id
        this.props.history.push(`/main/detail/${id}`)
    }
    render() {
        const {dataSource,pages} = this.state;
        return (
            <div>
                <Button onClick={()=>this.addList()}>添加</Button>
                <Table 
                columns={this.state.columns}
                dataSource={dataSource}
                rowKey="id"
                pagination={pages}
                />
            </div>
        )
    }
    componentDidMount(){
        this.getList()
    }
}


