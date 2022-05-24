<template>
  	<header class="header">
				<h1>todos</h1>
				<input class="new-todo" placeholder="What needs to be done?" autofocus v-model="todoName" @keyup.enter="addTodo">
			</header>

</template>

<script>
export default {
    name:'TodoHeader',
    data() {
        return {
            todoName: ''

        }
    },
    methods:{
        addTodo(){
            this.$store.commit('addTodo',this.todoName);
            this.todoName = ''
        }
    },
    computed:{

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
