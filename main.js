"use strict"

new Vue({

  el:"#toDolist"
  data: {
  todos :[],
  newlist :''
  },

  methods:{

    addTodo:function(){
      this.todos.push(this.newlist);
      this.newList="";
    },

  filters:{

    capitalize: function(value){

      if(!value) return  ''
      value =value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
  })
