const getRanking = response => {
    var ranking = [];
    const itemLength = 20
    for(let index = 0; index < itemLength; index++){
        var item = response.ResultSet['0'].Result[index];
        ranking.push({
            code: item.Code,
            name: item.Name,
            imageUrl: item.Image.Medium
        })
    }
    return ranking;
}

const initialState = {
    category: undefined,
    ranking: undefined,
    error: false
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'START_REQUEST':
            return{
                category : action.payload.category,
                ranking: undefined,
                error: false
            };
        case 'RECEIVE_DATA':
            return action.payload.error
            ? {...state,error: true}
            : {
                ...state,
                ranking: getRanking(action.payload.response)
            };
        default:
            return state;

    }
}