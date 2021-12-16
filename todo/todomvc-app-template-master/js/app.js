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
        },
        {
          id: 2,
          name: "吃饭",
          flag: true,
        },
        {
          id: 3,
          name: "蹦迪",
          flag: true,
        },
      ],
      active: "",
      selectList: [],
      type: "All",
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
        });
        this.task = "";
      },
      editList(id) {
        this.active = id;
      },
      editTodo() {
        this.active = "";
      },
      clearList() {
        this.list = this.list.filter((item) => !item.flag);
      },
    },
    //?指定计算属性
    //?计算属性和data一样，也能提供给属性的，但是和data不一样，computed 里面的值必须经过计算得到的结果
    //?计算属性在写法上是个函数，但是不能调用，计算逻辑写在函数中，返回值就是属性值
    //~计算属性的性能非常高，基于缓存实现
    //~计算属性一旦把计算结果结算出来，就会把结果存储起来，不管使用多少次，直接用
    //~计算属性的值只会当它依赖的属性发生改变，计算属性的结果才会变
    computed: {
      activeNum: function () {
        return this.list.filter((item) => !item.flag).length;
      },
      completedNum: function () {
        return this.list.some((item) => item.flag);
      },
      isShow: function () {
        return this.list.length > 0;
      },
      // filterTodo: function (type) {
      //   this.type = type;
      //   switch (type) {
      //     case "All":
      //       this.list = this.list;
      //       break;
      //     case "Active":
      //       this.list = this.list.filter((item) => item.flag !== true);
      //       break;
      //     case "Completed":
      //       this.list = this.list.filter((item) => item.flag === true);
      //       break;
      //     default:
      //       break;
      //   }
      // },
    },
    mounted() {},
    updated() {
      console.log(this.selectList);
    },
  });
})(window);
