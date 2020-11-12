import {ActionType} from '../action/index'




const initialState = [];

 const employeeReducer =(state = initialState,action)=>{
    switch(action.type){
      case ActionType.GET_DATA:{
        return {...state}
    }
    case ActionType.GET_DATA_SUCCESS:{
    
        return {...state, lists: action.payload.map((el, index) => ({...el, key: index}))}
    }  
    case ActionType.GET_DATA_ERROR:{
        return {...state}
    } 
        case ActionType.DELETE_DATA: {
          console.log(action.payload)
          return {...state,lists: state.lists.filter(item=>item.id !== action.payload)}
      }
      case ActionType.ADD_DATA:{
        const newList = [...state.lists];

        return {...state, lists:newList}
    }
    
    case ActionType.EDIT_DATA:{
      
      return {...state,lists:state.lists.map((item,index)=>{
        if(item.id === action.payload.id){
      return {...action.payload.list,key: index}
           }
  return item;
        })};
  }
        
            
            default:
                return state;
    }
}
export default employeeReducer;