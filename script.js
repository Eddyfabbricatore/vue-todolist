const {createApp} = Vue;

createApp({
  data(){
    return{
      tasks: [
        {
        text: 'Comprare la pappa ad Artù',
        done: false
        },
        {
        text: 'Pagare la bolletta',
        done: false
        },
        {
        text: 'Ripassare Vue',
        done: false
        }
      ],
      newTask: '',
      isError: false
    }
  },
  methods:{
    addTask(){
      if(this.newTask.length < 5){
        this.isError = true;
      }else{
        this.tasks.unshift({text: this.newTask, done: false});

        this.newTask = '';
        this.isError = false;
      }
    },
    removeTask(event, i){
      if(this.tasks[i].done){
        this.tasks.splice(i, 1);
      }
      event.stopPropagation();  // NON FUNZIONA
    },
    isDone(i){
      this.tasks[i].done = !this.tasks[i].done;
    }
  }
}).mount('#app');