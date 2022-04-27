import {useState} from 'react'
import api from "../api/api";

export default ()=>{
    const [state,setState]=useState({
        data:null,
        loading:false,
        error:null
    })
 const searchResults=async (term)=>{
        setState({
            data: null,
            loading: true,
            error: null
        })
     try{
         const response = await api.get('/v2/',{
             params: {q: term, hl: 'en'}
         })
         setState({
             data: response.data.response.images,
             loading: false,
             error: null
         })
     }catch(error){
         setState({
             data: null,
             loading: false,
             error: 'something went wrong'
         })
     }

}
return [state,searchResults]

}
