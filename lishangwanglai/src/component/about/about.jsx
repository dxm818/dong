import React,{Component} from 'react'
import './about.css'
export default class about extends Component{
constructor(){
    super()
}
render(){
    return(
        <div id="about">
            <div id="about-top">
                    <p style={{height:'51px',textAlign:'center', background: '#FFFFFF',fontSize: '24px',lineHeight: '51px',borderbottom:'2px #fff solid',}}>我的</p>
            </div>
            <div id="about-zhon">
                    <div style={{height:'88px',background: '#FFFFFF',marginTop: '10px'}}><p className="u889_img"></p><p className="u890_img">调用QQ 微信昵称</p></div>
            </div>
            <div id="about-bottom">
                <p className="u891_p">设置</p>
				<p className="u891_arrow">></p>
            </div>
			<div id="about-bottom">
			    <p className="u891_p">返馈</p>
				<p className="u891_arrow">></p>
			</div>
			<div id="about-bottom">
			    <p className="u891_p">帮助</p>
				<p className="u891_arrow">></p>
			</div>
			<div id="about-bottom">
			    <p className="u891_p">关于</p>
				<p className="u891_arrow">></p>
			</div>
			<div id="about-bottom">
			    <p className="u891_p">分享</p>
				<p className="u891_arrow">></p>
			</div>
        </div>
    )
}
}
