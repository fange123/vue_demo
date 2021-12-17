(function (window) {
  let list = JSON.parse(localStorage.getItem("list")) || [];
  const vm = new Vue({
    el: ".todoapp",
    data: {
      task: "",
      //任务列表
      list,
      active: "",
      selectList: [],
      type: "All",
    },
    methods: {
      deleteList(id) {
        this.list = this.list.filter((item) => item.id !== id);
      },
      addList() {
        if (!this.task.trim()) {
          alert("任务名不能为空");
          return;
        }
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
      filterTodo: function (type) {
        this.type = type;
        //*点击类别切换，list是无论如何都不可以变得
        //*使用计算属性
      },
    },
    //?指定计算属性
    //?计算属性和data一样，也能提供给属性的，但是和data不一样，computed 里面的值必须经过计算得到的结果
    //?计算属性在写法上是个函数，但是不能调用，计算逻辑写在函数中，返回值就是属性值
    //~计算属性的性能非常高，基于缓存实现
    //~计算属性一旦把计算结果结算出来，就会把结果存储起来，不管使用多少次，直接用
    //~计算属性的值只会当它依赖的属性发生改变，计算属性的结果才会变
    //!计算属性的值是不可以修改的，所以不可以给计算属性设置v-model双向绑定
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
      completeCheck: {
        get() {
          return this.list.every((item) => item.flag);
        },
        set(value) {
          //使用foreach和map都可以，但是map返回一个新数组，foreach可以直接修改值
          this.list.forEach((item) => (item.flag = value));
        },
      },
      currentList: function () {
        switch (this.type) {
          case "Active":
            // return this.list.filter((item) => item.flag !== true);
            return this.list.filter((item) => !item.flag);
          case "Completed":
            return this.list.filter((item) => item.flag);
          // return this.list.filter((item) => item.flag === true);
          default:
            return this.list;
        }
      },
    },
    watch: {
      //监听list的变化，并且将它的当前值存储在localStorage里面
      //list是数组，是引用类型，所以要用watch的完整形态：
      list: {
        deep: true,
        handler(value) {
          //localStorage只能存字符串，复杂类型转成字符串。。
          localStorage.setItem("list", JSON.stringify(value));
        },
      },
    },
    mounted() {},
    updated() {},
  });
})(window);
