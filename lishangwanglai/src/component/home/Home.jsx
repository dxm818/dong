import React,{Component} from 'react'
import './Home.css'
export default class Home extends Component{
	constructor(){
		super()
	}
	render(){
		return(
			<div>
				<div className="box"> 
					<ul className="nav">
						<li className="u25_text">历史收礼
						<p className="number">5500.00</p>
						</li>
						<li className="u22_text"><p className="history">历史盈亏</p>
						<p className="number">2948.00</p>
						</li>
						<li className="u26_text">历史送礼
						<p className="number">2500.00</p>
						</li>
					</ul>
					<ul className="nav">
						<li className="u25_text">6月收礼
						<p className="number">5500.00</p>
						</li>
						<li className="u22_text1"><p className="history">本月盈亏</p>
						<p className="number">2948.00</p>
						</li>
						<li className="u26_text">6月送礼
						<p className="number">2500.00</p>
						</li>
					</ul>
				</div>
				<div className="box_div clearfix">
				   <div className="u33_div clearfix">
				   	<ul className="nav_one">
				   		<li>排行</li>
				   		<li>用户</li>
				   		<li>历史盈亏</li>
				   		<li>本月盈亏</li>
				   		<li>更多</li>
				   	</ul>
				   </div>
				   <div className="u40_div clearfix">
				      <ul className="nav_two">
				      	<li>1</li>
				      	<li>JAMES刘</li>
				      	<li>95685.00</li>
				      	<li>4500.00</li>
				      </ul>
				   </div>
				   <div className="u40_div clearfix">
				      <ul className="nav_two">
				      	<li>2</li>
				      	<li>JAMES刘</li>
				      	<li>95685.00</li>
				      	<li>4500.00</li>
				      </ul>
				   </div>
				   <div className="u40_div clearfix">
				      <ul className="nav_two">
				      	<li>3</li>
				      	<li>JAMES刘</li>
				      	<li>95685.00</li>
				      	<li>4500.00</li>
				      </ul>
				   </div>
				   <div className="u40_div clearfix">
				      <ul className="nav_two">
				      	<li>4</li>
				      	<li>JAMES刘</li>
				      	<li>95685.00</li>
				      	<li>4500.00</li>
				      </ul>
				   </div>
				   <div className="u40_div clearfix">
				      <ul className="nav_two">
				      	<li>5</li>
				      	<li>JAMES刘</li>
				      	<li>95685.00</li>
				      	<li>4500.00</li>
				      </ul>
				   </div>
				   <div className="u40_div clearfix">
				      <ul className="nav_two">
				      	<li>6</li>
				      	<li>JAMES刘</li>
				      	<li>95685.00</li>
				      	<li>4500.00</li>
				      </ul>
				   </div>
				   <div className="u40_div_one clearfix">
				      <ul className="nav_two">
				      	<li>7</li>
				      	<li>JAMES刘</li>
				      	<li>95685.00</li>
				      	<li>4500.00</li>
				      </ul>
				   </div>
				</div>
			</div>
		)
	}
}
