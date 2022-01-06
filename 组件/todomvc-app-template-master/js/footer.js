Vue.component("todo-footer", {
  template: `
			<footer class="footer" v-show='isShowFooter'>
			<span class="todo-count"><strong>{{count}}</strong> 条</span>

			<ul class="filters">
				<li>
					<a class="selected" href="#/">All</a>
				</li>
				<li>
					<a href="#/active">Active</a>
				</li>
				<li>
					<a href="#/completed">Completed</a>
				</li>
			</ul>

			<button class="clear-completed" v-show='isShowClear' @click="clear">Clear completed</button>
		</footer>
		`,
  props: ["list"],
  computed: {
    isShowFooter() {
      return this.list.length;
    },
    count() {
      return this.list.filter((item) => item.flag).length;
    },
    isShowClear() {
      return this.list.some((item) => item.flag);
    },
  },
  methods: {
    clear() {
      this.$emit("clear");
    },
  },
});
