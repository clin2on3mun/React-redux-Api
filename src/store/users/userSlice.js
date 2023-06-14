import { createSlice, createAsyncThunk,isRejectedWithValue } from '@reduxjs/toolkit' 


export const fetchDatafromApi = createAsyncThunk('fetch user', async ()=>{
    try{
     const data= await fetch(`https://randomuser.me/api/?results=5`)
     const getData= await data.json()
     return getData.results
    }
    catch(error){
       return isRejectedWithValue(error.message)
    }
})

const initialState ={
    users:[],
    isLoading:false,
    error:undefined
}

const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{

    },
       extraReducers:(builder) =>{
         builder.addCase(fetchDatafromApi.pending,(state)=>{
            state.isLoading=true;
         });
         builder.addCase(fetchDatafromApi.fulfilled,(state, action)=>{
            state.isLoading=false;
            state.users = action.payload
         })
         builder.addCase(fetchDatafromApi.rejected,(state, action)=>{
            state.error= action.error.message
         })
       }
    
})

export default userSlice.reducer