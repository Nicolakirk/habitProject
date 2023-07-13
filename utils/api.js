import axios from 'axios';
import React from 'react';

const habitApi = axios.create({
    baseURL : 'https://be-habit.onrender.com/api'});



  


export const fetchHabitsbyUser = (owner)=>{

return habitApi.get(`/owner/habits/${owner}`).then((response)=>{
  
        return response.data.habits
    })
  
};

export const fetchTopics = () =>{
   
    return newsApi.get('/topics').then((response)=>{
       
    return response.data.topics
    })
    }

    export const postHabit = (owner, habitBody) =>{
       
        
        return habitApi.post(`/${owner}/habits`, habitBody).then((response)=>{
           
            return response.data.habits
        })
    };


    export const deleteHabit = ( habit_id)=>{
      
        return habitApi.delete(`/habits/${habit_id}`).then 
        ((response)=>{
            return response.data.habits
        })
    }


    export const fetchhabitById= (habit_id)=>{
        console.log(habit_id)
        return habitApi.get(`/owner/habit/${habit_id}`).then((response)=>{
  
            return response.data.habits
        })
    }


    export const patchHabit = (habit_id) =>{
        console.log("patch", habit_id)
        return habitApi.patch(`/habits/${habit_id}`, { amount_days: 1 })
        
        
        };