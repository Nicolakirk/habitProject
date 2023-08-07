import axios from 'axios';
import React from 'react';

const habitApi = axios.create({
    baseURL : 'https://be-habit.onrender.com/api'});



  


export const fetchHabitsbyUser = (owner)=>{

return habitApi.get(`/owner/habits/${owner}`).then((response)=>{
  
        return response.data.habits
    })
  
};

export const fetchUserbyUsers = (username)=>{

    return habitApi.get(`/users/${username}`).then((response)=>{
    console.log(response.data.users)
            return response.data.users
        })
      
    };

export const fetchTopics = () =>{
   
    return newsApi.get('/topics').then((response)=>{
       
    return response.data.topics
    })
    }

    export const fetchUsers = () =>{
   
        return newsApi.get('/users').then((response)=>{
           
        return response.data.users
        })
        }

    export const postHabit = (owner, habitBody) =>{
       
        
        return habitApi.post(`/${owner}/habits`, habitBody).then((response)=>{
           
            return response.data.habits
        })
    };

    export const postUser = (inputBody) =>{
       
        
        return habitApi.post(`/user`, inputBody).then((response)=>{
           
            return response.data.users
        })
    };


    export const deleteHabit = ( habit_id)=>{
      
        return habitApi.delete(`/habits/${habit_id}`).then 
        ((response)=>{
            return response.data.habits
        })
    }


    export const fetchhabitById= (habit_id)=>{
       
        return habitApi.get(`/habit/${habit_id}`).then((response)=>{
 
            return response.data.habits
        })
    }


    export const patchHabit = (habit_id, days) =>{
       
        return habitApi.patch(`/habits/${habit_id}`, { amount_days: days })
        
        
        };


        export const patchPercentageHabit = (habit_id, new_percentage) =>{
            
            return habitApi.patch(`/habit/${habit_id}`, { percentage: new_percentage })
            
            
            };