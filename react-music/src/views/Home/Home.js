import React, {Component, Fragment} from "react";
// 引入二级路由组件
import SecondRouter from "../../router/SecondRouter";
// 引入适用性比较低的组件
import ContentTopHeader from '../../component/content/TopHeader'
import ContentTabBar from '../../component/content/TabBar'
class Home extends Component{
    // 我们每一次刷新的时候 需要把当前路由重置到'/home/recommend' 路径上
    componentWillMount () {
        this.props.history.push('/home/recommend')
    }
    // 编导式导航 对应的路由路径
    TabClick = (url) => {
        this.props.history.push(url)
    }
    render () {
        return (
            <Fragment>
                <div className={"top"}>
                    <ContentTopHeader />
                    <ContentTabBar TabClick={this.TabClick}/>
                </div>
               <SecondRouter />
            </Fragment>
        )
    }
}

export default Home
