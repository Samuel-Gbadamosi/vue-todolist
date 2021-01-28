var app = new Vue ({
 el : '#app',
  data: {
    todos : [
      'Fare la spesa',
      'Go fishing',
      'Play video games',
      'study programming'
    ],
  todosDelete : []
},
  methods : {
    deleteTodo (index){
      this.todosDelete.push(this.todos[index]);
       this.todos.splice(index,1);
       console.log(this.todosDelete);
       if(this.todos.length == 0){
         alert('Oops! you deleted all files 😱');
       }
    },
    restoreTodo (index){
      this.todos.push(this.todosDelete[index]);
      this.todosDelete.splice(index,1);
      if(this.todosDelete.length == 0){
        alert('you restored all files previously deleted 👻');
      }

    }
  }
});
