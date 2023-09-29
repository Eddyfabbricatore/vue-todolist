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
        },
      ]
    }
  }
}).mount('#app');