(function (window) {
  const vm = new Vue({
    el: ".todoapp",
    data: {
      list: [],
    },

    created() {
      //ajax发送请求
      //直接从localStorage中取数据
      this.list = JSON.parse(localStorage.getItem("todo")) || [];
    },
    methods: {
      add(name) {
        this.list.unshift({
          id: +new Date(),
          name,
          flag: false,
        });
      },
      deleteTodo(id) {
        this.list = this.list.filter((item) => item.id !== id);
      },

      changeState(id) {
        const todo = this.list.find((item) => item.id === id);
        todo.flag = !todo.flag;
      },

      edit(id, name) {
        const todo = this.list.find((item) => item.id === id);
        todo.name = name;
      },
      clear() {
        this.list = this.list.filter((item) => !item.flag);
      },
    },

    watch: {
      list: {
        deep: true,
        handler(value) {
          localStorage.setItem("todo", JSON.stringify(value));
        },
      },
    },
  });

  window.vm = vm;
})(window);
