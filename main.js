"use strict"

new Vue({

  el:"#toDolist"
  data: {
  todos :[],
  newlist :''
  },

  metods:{

    addTodo:function(){
      this.todos.push(this.newlist);
      this.newList="";
    },

  

