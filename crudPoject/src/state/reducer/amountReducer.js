// const reducer = (state = 0, action) => {
//   if (action.type === "count") {
//     return state + action.state;
//   } else {
//     return state;
//   }
// };

// export default reducer;


const INIT_STATE = {
  carts: []
};


 const reducer= (state = 0, action) => {
  switch (action.type) {
      case "count":

      const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

      if(IteamIndex >= 0){
          state.carts[IteamIndex].qnty +=1
          return {
              ...state,
              carts:[...state.carts]
          }
      }else{
          const temp = {...action.payload,qnty:1}
           return {
              ...state,
              carts: [...state.carts, temp]
          }
      }
    }
  }
  export default reducer