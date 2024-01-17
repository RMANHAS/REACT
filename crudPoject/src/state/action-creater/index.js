// export const counter=(amount)=>{
//     return (dispatch)=>{
//        dispatch({
//         type:'count',
//         state:amount+1
//        })

//     }
// }

export const counter = (amount) => {
    return {
        type: "count",
        payload: amount
    }
}