import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  userDetails: {},
  token:'',
  isLoggedIn:false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUserDetails:(state, action)=>{
            console.log(action.payload)
            return{
                ...state,
                userDetails:action.payload,
                isLoggedIn:true
            }
        }
    }
})

export const {setUserDetails} = userSlice.actions;
export default userSlice.reducer;