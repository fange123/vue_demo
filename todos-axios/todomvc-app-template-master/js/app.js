(function (window) {
  const vm = new Vue({
    el: ".todoapp",
    data: {
      list: [],
      inputValue: "",
      active: 0,
      current: "all",
    },
    methods: {
      clearList() {
        this.list
          .filter((item) => item.flag)
          .forEach((item) => this.deleteTodoList(item.id));
      },

      filterTodo(type) {
        this.current = type;
      },

      getTodoList() {
        axios({
          method: "get",
          url: "http://localhost:3000/todos?_sort=id&_order=desc",
        }).then((res) => {
          this.list = res.data;
          this.selectList = res.data;
        });
      },

      editTodoName(id, name) {
        axios({
          method: "patch",
          url: `http://localhost:3000/todos/${id}`,
          data: {
            name,
          },
        }).then(() => {
          this.getTodoList();
          this.active = "";
        });
      },

      editTodoCheck(id, flag) {
        axios({
          method: "patch",
          url: `http://localhost:3000/todos/${id}`,
          data: {
            flag,
          },
        }).then(() => {
          this.getTodoList();
        });
      },

      deleteTodoList(id) {
        axios({
          method: "delete",
          url: `http://localhost:3000/todos/${id}`,
        }).then(() => {
          this.getTodoList();
        });
      },

      addTodo() {
        axios({
          method: "post",
          url: "http://localhost:3000/todos",
          data: {
            name: this.inputValue,
            flag: false,
          },
        }).then(() => {
          this.getTodoList();
          this.inputValue = "";
        });
      },

      isEdit(id) {
        this.active = id;
      },
    },
    computed: {
      computedCompleted() {
        return this.list.filter((item) => !item.flag).length;
      },

      computedCheck: {
        get() {
          return this.list.some((item) => item.flag);
        },
        set(value) {
          this.list.forEach((item) => (item.flag = value));
        },
      },

      selectList: {
        get() {
          switch (this.current) {
            case "active":
              return this.list.filter((item) => item.flag);

            case "completed":
              return this.list.filter((item) => !item.flag);

            default:
              return this.list;
          }
        },
        set() {},
      },

      isShowFooter() {
        return this.list.length;
      },
    },

    watch: {
      list: {
        deeper: true,
        handler() {},
      },
    },
    created() {
      this.getTodoList();
    },
  });
  window.vm = vm;
})(window);
