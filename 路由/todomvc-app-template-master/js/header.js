Vue.component("todo-header", {
  template: `
		<header class="header">
			<h1>todos</h1>
			<input class="new-todo" placeholder="What needs to be done?" v-model='inputName' @keyup.enter='add'>
		</header>
		`,
  data() {
    return { inputName: "" };
  },
  methods: {
    add() {
      this.$emit("add-todo", this.inputName);
      this.inputName = "";
    },
  },
});
