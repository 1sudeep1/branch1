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
            return{
                ...state,
                userDetails:action.payload.existingUser,
                token:action.payload.token,
                isLoggedIn:true
            }
        },

        setLogout:(state, action)=>{
            return{
                ...initialState
            }
        }
    }
})

export const {setUserDetails, setLogout} = userSlice.actions;
export default userSlice.reducer;