
const reducer = (state,action) => {
//   switch(action.type){
//     case action.type ==="INC":
//         return state+=1
//     case action.type === "DEC":
//         return state-=1
//     default: return state;    

//   }
if(action.type==="INC"){
    return  state+=1;
}
else if(action.type==="DEC"){
    let num = 0;
    return state===num ? num : state-=1;
}
return state;
}

export default reducer