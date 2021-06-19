
const initState = {
    trackList: [],
    errorMassage: false,
    errorMassageValue: 'No Results Were Found',
    loaderFlag: false,
}


const TrackReducer = (state = initState, action) => {

    switch (action.type) {
        case "SET_TRACK_LIST":
          return {...state, trackList: action.payload.tracks , errorMassage: action.payload.isEmpty} ;
        
        case "CLEAN_TRACK_LIST":
          return {...state, trackList: [...action.payload]} ;

        default:
          return state;
    }
}

export default TrackReducer;