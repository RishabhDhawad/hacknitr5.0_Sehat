// reducers/formReducer.js
const initialState = {
    hid:'',
    email: '',
    tel_no: '',
    mob_no: '',
    h_name: '',
    owner:'',
    staff:'',
    city:'',
    state:'',
    pin:'',
    type:'',
    feature:'',
    year_est:'',
    pvt_path:'',
    path_lic:'',
    alw_apnt_bk:'',
    addr1:'',
    addr2:'',
    addr3:'',
    tan_no:'',
    pan:'',
//    govt_lic:''
};

const share = {
    id:'',
    hid:'',
    Hname:''
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FORM_FIELD':
            return { ...state, [action.fieldName]: action.fieldValue };
        default:
            return state;
    }
};

export const shareReducer = (state = share, action) =>{
    switch (action.type){
        case 'UPDATE_DATA':
            return {...state, [action.fieldName]: action.fieldValue};
        default:
            return state;
    }
}

