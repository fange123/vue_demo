<template>
	<footer class="footer" v-show="isShowFooter">
				<!-- This should be `0 items left` by default -->
				<span class="todo-count"><strong>{{leftCount}}</strong> item left</span>
				<!-- Remove this if you don't implement routing -->
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
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed" v-show="isShowClear" @click="clearTodoAction">Clear completed</button>
			</footer>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name:'TodoFooter',
    data() {
        return {

        }
    },
		computed:{
			//  isShowFooter(){
      //       return this.$store.getters.isShowFooter
      //   },
			// 	leftCount(){
			// 		return this.$store.getters.leftCount
			// 	},
			// 	isShowClear(){
			// 		return this.$store.getters.isShowClear
			// 	}
			// TODO:mapGetters是一个辅助函数，可以帮助拿到vuex中的计算属性
			...mapGetters(['isShowFooter',"leftCount",'isShowClear']),
			// 如果有重命名等其他需求可以写对象：
			// ...mapGetters({sb:isShowClear})

		},
		methods:{
			// ...mapMutations(['clearTodo'])
			...mapActions(['clearTodoAction'])

		},
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    }
}
</script>
<style  scoped>
/* @import url(); 引入css类 */

</style>
