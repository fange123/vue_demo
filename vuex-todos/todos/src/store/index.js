import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  list: [
    {
      id: 1,
      flag: false,
      name: "sleep",
    },
    {
      id: 2,
      flag: true,
      name: "eat",
    },
    {
      id: 3,
      flag: false,
      name: "drink",
    },
  ],
};

const mutations = {
  delTodo(state, id) {
    state.list = state.list.filter((item) => item.id !== id);
  },
  changeState(state, id) {
    state.list = state.list.map((item) => {
      if (item.id === id) {
        item.flag = !item.flag;
      }
      return item;
    });
  },
  addTodo(state, todoName) {
    const newTodo = {
      id: +new Date(),
      name: todoName,
      flag: false,
    };
    state.list = [newTodo, ...state.list];
  },
  editTodo(state, payload) {
    state.list = state.list.map((item) => {
      if (item.id === payload.id) {
        return {
          ...item,
          name: payload.name,
        };
      }
      return item;
    });
  },
  clearTodo(state) {
    state.list = state.list.filter((item) => !item.flag);
  },
};

// vuex中的getters就是它的计算属性，根据state中的数据计算出来的一些值
const getters = {
  isShowFooter(state) {
    return state.list.length > 0;
  },

  leftCount(state) {
    return state.list.filter((item) => !item.flag).length;
  },
  isShowClear(state) {
    return state.list.filter((item) => item.flag).length;
  },
};
// !:mutations里面不能进行异步操作，而actions里面不能直接修改数据
// !:mutations才能修改数据
// !:actions需要commit去修改的mutations
const actions = {
  // content上下文，相当于store
  clearTodoAction(context) {
    setTimeout(() => {
      context.commit("clearTodo");
    }, 1000);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true,
});
