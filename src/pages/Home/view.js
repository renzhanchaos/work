import React, { Component } from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import O from '../../One'
export default class view extends Component {
    state={
        arr:[],
        arrs:[]
    }
    componentDidMount(){
        axios.get("/data.json").then((res)=>{
            this.setState({
                arr:res.data
            })
        })
        axios.get("/datas.json").then((ress)=>{
            console.log(ress)
            this.setState({
                arrs:ress.data
            })
        })
    }
    render() {
        let {arr}=this.state
        let {arrs}=this.state
        console.log(arrs)
        return (
            <div className="view">
                <header>
                   <div className="lef">
                      <ul>
                         <li>北京</li>
                         <li>
                            <select name="" id="">
                                 <option value=""></option>
                                 <option value="">海淀</option>
                            </select>
                         </li>
                      </ul>
                   </div>
                   <div className="cen">
                      <div className="cenlef">
                          <i className="iconfont icon-sousuo"></i>
                      </div>
                      <div className="cenrig">
                          <input type="text" placeholder="请输入商家名或品类"/>
                      </div>
                   </div>
                   <div className="rig">
                      <img src="/images/1.jpg" alt=""/>
                   </div>
                </header>
                <section>
                   <div className="img">
                      <img src="/images/3.jpg" alt=""/>
                   </div>
                   <div className="mei">
                   {
                       arr.map((v)=>
                       <dl key={v.id}>
                       <dt>
                  <NavLink to="/one"> <img src={v.img} alt=""/></NavLink>
                       </dt>
                       <dd>{v.name}</dd>
                    </dl>
                       )
                   }
                      
                   </div>
                   <p className="cai">猜你喜欢</p>
                   <div className="xuan">
                   {
                       arrs.map((v)=>
                       <dl key={v.id}>
                       <dt className="dts">
                           <img src={v.img}/>
                       </dt>
                       <dd className="dds">
                          <h1>{v.name}</h1>
                          <h2>{v.addr}</h2>
                          <h3>
                             <span className="price">{v.price}元</span>
                             <span className="men">门市价:{v.men}元</span>
                             <span className="shou">已售{v.sl}</span>
                          </h3>
                       </dd>
                    </dl>
                       )
                   }
                       
                   </div>
                </section>
            </div>
        )
    }
}
