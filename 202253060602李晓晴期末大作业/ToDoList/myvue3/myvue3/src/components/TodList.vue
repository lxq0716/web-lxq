<template>
    <!-- 任务列表组件页面 -->
    <h1>任务列表</h1>
    <ul>
        <TodoItem v-for=" todo in list " :todo="todo" :key="todo.id" @toggle-todo="toggleTodo"
            @detele-todo="deletoTodo"></TodoItem>
    </ul>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import TodoItem from './TodoItem.vue';
interface Todo {
    id: Number;
    title: String;
    completed: Boolean;
}
const props = defineProps({
    list: Array as () => Todo[]
})
const emit = defineEmits(['toggled-todo', 'del-todo'])
const toggleTodo = (id: number) => {
    console.log(id)
    emit('toggled-todo', id)
}
// 删除
const deletoTodo = (id: number) => {
    console.log(id)
    emit('del-todo', id)
}
</script>
<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

li:last-child {
    border-bottom: none;
}
</style>