Vue.component("todo-main", {
  template: `
			<section class="main">
			<input id="toggle-all" class="toggle-all" type="checkbox">
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
				<li :class="{completed:item.flag,editing:active === item.id}" v-for="item in list" :key='item.id'>
					<div class="view">

						<input class="toggle" type="checkbox" :checked='item.flag' @click='changeState(item.id)'>
						<label @dblclick='show(item.id)'>{{item.name}}</label>
						<button class="destroy" @click='deleteTodo(item.id)'></button>
					</div>
					<input class="edit" :value="item.name" @keyup.enter='edit'>
				</li>

			</ul>
		</section>
		`,
  props: {
    list: Array,
  },
  data() {
    return { active: "" };
  },
  methods: {
    deleteTodo(id) {
      this.$emit("delete-todo", id);
    },
    show(id) {
      this.active = id;
    },
    edit(e) {
      this.$emit("edit", this.active, e.target.value);
      this.active = "";
    },
    changeState(id) {
      this.$emit("change-state", id);
    },
  },
});
