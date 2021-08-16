export const initialState = {
    user:null,
    playlists: [],
    playing: false,
    item: null,
    //Set token value to null after developing process is complete
    //token: 'BQDhb6DZne7ZgBMmCmByCKLfZCN-0LDQFV6gv4S8zkqFbiWBfmnkM-gfrEM1Tz1C4LiEcxcq3UwOfrJrCXrba9B51FIfCvxyVPjh7WxpgfXzWCPXExnHX6_z7GxGmcMCMPEqqI7_vMY2whlVWs1grN7t8p6I8RWVJSs',
};

const reducer = (state,action) => {
console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
            case 'SET_TOKEN':
                return{
                    ...state,
                    token:action.token
            }
            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists:action.playlists
            }
            case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly:action.discover_weekly
            }
    default:
        return state;
    }
}
export default reducer;
