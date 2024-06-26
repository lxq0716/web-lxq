<template>
    <li :class="{ completed: todo?.completed }"></li>
    {{ todo?.title }}
    <button @click="toggleTodo">任务已经完成</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button @click="deteleTodo">删除</button>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
interface Todo {
    id: Number;
    title: String;
    completed: Boolean;
}
const props = defineProps({
    todo: Object as () => Todo
})
const emit = defineEmits(['toggle-todo', 'detele-todo'])
const toggleTodo = () => {
    console.log("对当前任务标记已完成")
    emit('toggle-todo', props.todo?.id)
}
const deteleTodo = () => {
    console.log("对当前任务进行删除")
    emit('detele-todo', props.todo?.id)
}
</script>
<style scoped>
li {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button {
    padding: 5px 10px;
    background-color: #d9534f;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
}

button:hoverm {
    background-color: #c9302c;
}

.completed {
    color: #777;
    text-decoration: line-through;

}
</style>