import { connect } from "react-redux";
import { Add, asyscADD } from "../redux/actions";
function Counter(props) {
    let { count } = props
    // console.log(count)
    let clickMe = () => {
        // props.dispatch({ type: 'ADD', data: 123 })
        props.Add(11)
    }
    let asyscclickMe = () => {
        console.log(props)
        props.asyscADD(12)
    }
    return (<>
        <div>{count}</div>
        <button onClick={clickMe}>Click me</button>
        <button onClick={asyscclickMe}>ASYSCADD Click me</button>

    </>)
}
// const mapStateToProps = (state) => {
//     // 这个return的对象怎么写的,react组件的props里面就是有什么数据
//     // 这个state接收的是所有的数据,想要哪个取哪个就行
//     // console.log(state);
//     return {
//         count: state.count,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         Add() {
//             dispatch({ type: "ADD", data: 123 })
//         },
//         asyscADD() {
//             dispatch({ type: "asyncAdd",data: 1234 })
//         }
//     }
// }

// const WithCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const WithCounter = connect(
    (state) => ({ count: state.count }),
    { Add,asyscADD }
)(Counter)

export default WithCounter