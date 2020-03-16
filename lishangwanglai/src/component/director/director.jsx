import React,{Component} from 'react'
import './director.css'
export default class director extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
		   <div className="u83_div">
		   			<span className="u84_img">
		   			  返回
		   			</span>
		   			<div className="u88_div">待参加</div>
		   			<div className="u89_div">已参加</div>
		   			<span className="u90_img">+</span>
		   </div>
		   <div className="ax_default_one">
		     <ul className="nav_tour">
		   		<li className="u237_text">类别</li>
		   		<li className="u238_text">时间</li>
		   	</ul>
		   </div>
		   <div className="u94_div">
		      <div className="u94_div_t">
		   				   <div className="u95_div_t_l">
		   				     王大锤搬家请客
		   					 <span className="u95_div_t_r">待参加</span>
		   				   </div>
		   				</div>
		   				<div className="u101_div">
		   				    <div className="u101_div_b">
		   					   <span className="u101_div_b_l">地点名称地点名称</span>
		   					   <span className="u101_div_b_r">2016.8.21</span>
		   					</div>
		   				</div>
		   </div>
		   <div className="u94_div">
		      <div className="u94_div_t">
		   				   <div className="u95_div_t_l">
		   				     王大锤搬家请客
		   					 <span className="u95_div_t_r">已参加</span>
		   				   </div>
		   				</div>
		   				<div className="u101_div">
		   				    <div className="u101_div_b">
		   					   <span className="u101_div_b_l">地点名称地点名称</span>
		   					   <span className="u101_div_b_r">2016.8.21</span>
		   					</div>
		   				</div>
		   </div>
		</div>
    )
}
}
