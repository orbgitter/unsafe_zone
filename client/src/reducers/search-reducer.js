
const initState = {
    searchsQueue :   [],
    input: 'Please Enter Track'
}


const SearchReducer = (state = initState, action) => {

    switch (action.type) {
      case "SET_QUEUE":
        return {...state, searchsQueue: [...action.payload]} ;
        
      case "SET_INPUT":
        return {...state, input: action.payload} ;

      default:
        return state;
    }

}

export default SearchReducer;