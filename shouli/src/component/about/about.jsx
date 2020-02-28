import React,{Component} from 'react'
export default class about extends Component{
constructor(){
    super()
}
render(){
    return(
        <div id="about">
            <div id="about-top">
                    <p style={{height:'60px',textAlign:'center',borderbottom:'2px #fff solid',}}>我的</p>
            </div>
            <div id="about-zhon">
                    <p style={{}}>请调用微信 QQ昵称</p>
            </div>
            <div id="about-bottom">
                    <p style={{}}>设置</p>
                    <p style={{}}>返馈</p>
                    <p style={{}}>帮助</p>
                    <p style={{}}>关于</p>
                    <p style={{}}>分享</p>
            </div>
        </div>
    )
}
}
