<script>
import torenderTest from '../components/torenderTest'
export default {
    props:{
        tag:String,
    },
    data() {
        return {
            name:['张三','李四','王五']
        }
    },
    //常规写法
    // render(createElement){
    //     return createElement(
    //         this.tag,
    //         {},
    //         this.name.map((item) => 
    //         createElement('li',{attrs:{class:'test'}, on: {
    //             click: ()=>{
    //                 console.log('li clicked')
    //     }}},`${item}`)))
    // }
    // 直接返回h5
    // render(){
    //     return(
    //         <h1>hello 焦诗博啊</h1>
    //     )
    // }
    // 返回组件

    render(createElement){
        return createElement(torenderTest,{props:{
            msg:'啦啦啦'
        }})
    }
}
</script>