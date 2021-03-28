const user = {
    currentUser: {},
    appointments: []
}

const currentUserReducer = (state=user, action) => {
    let user = state;
    switch(action.type){
        case 'SIGN_UP':
            user.currentUser.id = action.data.user.id
            user.currentUser.username = action.data.user.username
            if(action.data.appts){
                user.appointments = action.data.appts
            } else {
                user.appointments = {...state.appointments}
            }
            return user
        case 'NEW_APPT_CREATED':
            user.appointments.push(action.data)
            return user
        case 'EDIT_APPT_SUCCESS':
            const objIndex = user.appointments.findIndex(obj => obj.id === action.data.id)
            user.appointments[objIndex] = action.data
            return user
        case 'DELETE_APPT_SUCCESS':
            debugger
            var id = parseInt(action.data, 10)
            user.appointments.filter(appt => appt.id !== id)
            return user
        case 'IMAGE_UPLOADED_SUCCESS':
            debugger
                //###
                //###    
                //###
            return user
        default:
            return state
    }
}

export default currentUserReducer;