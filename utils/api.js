import axios from 'axios';
import React from 'react';

const habitApi = axios.create({
    baseURL : 'https://be-habit.onrender.com/api'});

const newsApi = axios.create({ 
    baseURL : 'https://nc-news-h4q7.onrender.com/api'
    
})

  


export const fetchHabitsbyUser = (owner)=>{

console.log(owner)
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
        console.log("inapi", habit_id)
        return habitApi.delete(`/habits/${habit_id}`).then 
        ((response)=>{
            return response.data.habits
        })
    }
