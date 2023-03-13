

const productreducer =(state={data:null},action)=>{
    switch(action.type){
    
    case 'P_DETAILS':
     return {...state,data:action.payload};
    case 'FETCH_PRODUCTS':
     return {...state,data:action.payload};

     default:
        return state;
    
    }
    
    
    
    }


    export default productreducer;