import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
export default class index extends Component {
    state={
        activeIndex:0
    }
    change(index){
        this.setState({
            activeIndex:index
        })
    }
    render() {
        const {activeIndex}=this.state
        return (
            <div className="layout">
                <header> 包图网智慧办公系统</header>
                <main>
                    <div className="layout-nav">
                        {/* {
                            this.props.routes.map((item, index) => {
                                return <li key={index} onClick={() => this.change(index)} className={activeIndex === index ? 'color' : ''}>
                                    <NavLink to={item.path}>{item.title}</NavLink>
                                </li>
                            })
                        } */}
                        {
                            this.props.routes.map((item,index)=>{
                                return <li key={index} onClick={()=>this.change(index)} className={activeIndex===index?'color':''}>
                                    <NavLink to={item.path}>
                                        {item.title}
                                    </NavLink>
                                </li>
                            })
                        }
                    </div>
                    <div className="layout-body">
                        <div className="layout-header">
                        </div>
                        <div>
                            {/* <RouterView routes={this.props.routes}/> */}
                            {this.props.children}
                        </div>
                    </div>

                </main>
            </div>
        )
    }
}
