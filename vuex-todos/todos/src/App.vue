<template>
  <div id="app">
    	<section class="todoapp">
				<TodoHeader/>
				<TodoMain/>
				<TodoFooter/>



		</section>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoFooter from './components/TodoFooter'
import TodoMain from './components/TodoMain'
	export default {
    name: "App",
    components: {
        TodoHeader,
        TodoFooter,
        TodoMain
    },
}
</script>

<style>

</style>
