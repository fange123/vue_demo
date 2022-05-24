<template>
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<!-- These are here just to show the structure of the list items -->
					<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
					<li :class="{completed:item.flag,editing:item.id ===current}" v-for="item in list" :key="item.id">
						<div class="view">
							<!-- # 数据不能用v-model绑定，需要用vuex的方法 -->
							<input class="toggle" type="checkbox" :checked="item.flag" @change="changeState(item.id)">
							<label @dblclick="showEdit(item.id)">{{item.name}}</label>
							<button class="destroy" @click="delTodo(item.id)"></button>
						</div>
						<!-- # 不能用v-model双向绑定，:value只取值，不修改，通过mutation修改 -->
						<input class="edit" :value="item.name" @keyup.enter="editTodo">
					</li>

				</ul>
			</section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name:'TodoMain',
    data() {
        return {
					current:-1

        }
    },

		computed:{
			// list(){
			// 	return this.$store.state.list
			// },
			...mapState(['list'])

		},
		methods:{

			//传的参数在mapMutations的方法中自动接收
			...mapMutations(['delTodo','changeState']),
			// delTodo(id){
			// 	this.$store.commit('delTodo',id)
			// },
			// changeState(id){
			// 	this.$store.commit('changeState',id)
			// },
			showEdit(id){
				this.current = id
			},

			//!:editTodo里面还有其他操作,所以得自己写commit，不能写在mapMutations里面
			editTodo(e){
				this.$store.commit('editTodo',{
					id:this.current,
					// TODO:没有双向绑定，可通过事件对象的e获取vale
					name:e.target.value
				})

				this.current = -1
			}
		},
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },

    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
