import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDatafromApi } from '../store/users/userSlice';


const ShowUser = () =>{
   const {users, isLoading,error} = useSelector((store)=> store.user);
   const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(fetchDatafromApi())
   },[])
   if(isLoading){
    return <>
    <h1>isLoading</h1>
    </>
   }
   if(error){
     return <>
       <h1>{error.message}</h1>
     </>
   }
   return (
    <ul>
       {users.map((user)=>
        <li key={user.id.value}><p>Names: {user.name.first} {user.name.last}</p></li>
       )}
    </ul>
   )
   

}
export default ShowUser