import {
    FETCH_CLASSES_START,
    FETCH_CLASSES_SUCCESS,
    FETCH_CLASSES_FAILURE,
    SET_ACTIVE_USER,
    SET_MY_CLASS,
    FETCH_MY_CLASSES,
    SET_CLASSES
} from '../actions';

const initialState = {
    IsLoading: false,
    Error: '',
    // ActiveUser: {},
    // AllUsers: [],
    Classes: [],
    MyClasses: []
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CLASSES_START:
            return {
                ...state,
                IsLoading: true,
                Error: '',
                ActiveUser: state.ActiveUser,
                Classes: state.Classes,
                MyClasses: state.MyClasses
            };
        case FETCH_CLASSES_SUCCESS:
            return {
                ...state,
                IsLoading: false,
                Error: '',
                ActiveUser: state.ActiveUser,
                Classes: action.payload,
                MyClasses: state.MyClasses
            };
        case FETCH_CLASSES_FAILURE:
            return {
                ...state,
                IsLoading: false,
                Error: action.payload,
                ActiveUser: state.ActiveUser,
                Classes: [],
                MyClasses: state.MyClasses
            };
        case SET_ACTIVE_USER:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: {
                    email: action.payload.email,
                    password: action.payload.password,
                    fullName: action.payload.fullName,
                    instructorCode: action.payload.instructorCode
                },
                Classes: state.Classes,
                MyClasses: state.MyClasses
            };
        case SET_MY_CLASS:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                Classes: state.Classes,
                MyClasses: [
                    ...state.MyClasses,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        type: action.payload.type,
                        start_time: action.payload.start_time,
                        duration: action.payload.duration,
                        intensity_level: action.payload.intensity_level,
                        location: action.payload.location,
                        current_attendees: action.payload.current_attendees,
                        max_attendees: action.payload.max_attendees
                    }
                ]
            };
        case FETCH_MY_CLASSES:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                Classes: state.Classes,
                MyClasses: action.payload
            };
        case SET_CLASSES:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                Classes: action.payload,
                MyClasses: state.MyClasses
            };
        default:
            return state;
    }
};
