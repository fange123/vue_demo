(function (window) {
  const vm = new Vue({
    el: ".todoapp",
    data: {
      task: "",
      //任务列表
      list: [
        {
          id: 1,
          name: "睡觉",
          flag: false,
          isEdit: false,
        },
        {
          id: 2,
          name: "吃饭",
          flag: true,
          isEdit: false,
        },
        {
          id: 3,
          name: "蹦迪",
          flag: true,
          isEdit: false,
        },
      ],
    },
    methods: {
      deleteList(id) {
        this.list = this.list.filter((item) => item.id !== id);
      },
      addList() {
        this.list.unshift({
          id: this.list[this.list.length - 1].id + 1,
          name: this.task,
          flag: false,
          isEdit: false,
        });
        this.task = "";
      },
      editList(id) {
        this.list = this.list.map((item) =>
          item.id === id ? (item.isEdit = true) : (item.isEdit = false)
        );
      },
    },
    updated() {
      console.log(this.list);
    },
  });
})(window);
