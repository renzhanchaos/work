import React, { Component } from 'react'
import axios from 'axios'
export default class One extends Component {
  state={
      arr:[]
  }
  componentDidMount(){
      axios.get("/datass.json").then((res)=>{
          console.log(res)
          this.setState({
              arr:res.data
          })
      })
  }
    render() {
        let {arr}=this.state
        console.log(arr)
        return (
            <div className="one">
              <header>
                  <input type="text" placeholder="输入商家名、品名"/>
              </header>
              <section>
                 <div className="tu">
                     <img src="/images/17.jpg" alt=""/>
                 </div>
                 <div className="shang">
                     <dl>
                        <dt>
                     <img src="/images/18.jpg" alt=""/>
    
                        </dt>
                        <dd>
                            火锅
                        </dd>
                     </dl>
                     <dl>
                     <dt>
                  <img src="/images/19.jpg" alt=""/>
 
                     </dt>
                     <dd>
                         甜点饮品
                     </dd>
                  </dl>
                  <dl>
                  <dt>
               <img src="/images/20.jpg" alt=""/>

                  </dt>
                  <dd>
                      自助餐
                  </dd>
               </dl>
               <dl>
               <dt>
            <img src="/images/21.jpg" alt=""/>

               </dt>
               <dd>
                   小吃快餐
               </dd>
            </dl>
            <dl>
            <dt>
         <img src="/images/22.jpg" alt=""/>

            </dt>
            <dd>
                西餐
            </dd>
         </dl>
         <dl>
         <dt>
      <img src="/images/23.jpg" alt=""/>

         </dt>
         <dd>
             烧烤烤肉
         </dd>
      </dl>
      <dl>
      <dt>
   <img src="/images/24.jpg" alt=""/>

      </dt>
      <dd>
          香锅烤鱼
      </dd>
   </dl>
   <dl>
   <dt>
<img src="/images/25.jpg" alt=""/>

   </dt>
   <dd>
       海鲜
   </dd>
</dl>

                 </div>
                 <div className="nav">
                     <ul>
                        <li>全部分类
                          <i className="iconfont icon-below-s"></i>
                        </li>

                        <li>附近商家
                        <i className="iconfont icon-below-s"></i>

                     </li>
                     <li>智能排序
                     <i className="iconfont icon-below-s"></i>

                  </li>
                  <li>筛选
                  <i className="iconfont icon-below-s"></i>
               </li>
                     </ul>
                 </div>
                 <div className="han">
                 {
                     arr.map((v)=>
                     <div className="li"key={v.id}>
                     <dl className="dlsss">
                       
                             <dt className="sila">
                                <img src={v.img} alt=""/>
                             </dt>
                             <dd className="wanle">
                                 <h1>{v.name}</h1>
                       <h2><img src="/images/29.jpg" alt=""/>
                       ¥{v.sl}/人
                          <span className="rigs">上地{v.km}m</span>
                       </h2>
                       <h3>{v.names}</h3>
                       <h4>支持外卖</h4>
                             </dd>
                     </dl>
                     <div className="di">
                         <ul>
                             <li>
                                <img src="/images/30.jpg" alt=""/>
                             </li>
                             <li>
                             <img src="/images/31.jpg" alt=""/>
                          </li>
                          <li>4.5元小食</li>
                          <li>8.8元早餐</li>
                          <li>9元小食</li>
                          <li>9元早餐</li>
                         </ul>
                     </div>
                </div>
                     )
                 }
                    
                 </div>
              </section>
            </div>
        )
    }
}
