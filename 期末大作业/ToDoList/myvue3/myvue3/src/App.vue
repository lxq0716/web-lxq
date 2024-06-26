<script lang="ts" setup>
import { reactive } from 'vue';
import TodList from './components/TodList.vue'
import AddTodo from './components/AddTodo.vue';

interface Todo {
    id: Number;
    title: String;
    completed: Boolean;
}
const list = reactive<Todo[]>([])

//通用的list集合添加
const addNewTodo = (newTodo: string, todoId: Number) => {
    console.log("进入公共的列表添加方法")

    const todo = list.find(item => item.id == todoId)

    if (!todo) {
        list.push({ id: todoId, title: newTodo, completed: false })
    } else {
        todo.completed = false
        todo.title = newTodo
    }
}
//任务标记已完成
const toggleTodo = (todoId: Number) => {
    console.log("任务已完成通用方法")
    console.log(todoId)
    const todo = list.find(item => item.id == todoId)
    if (todo) {
        todo.completed = !todo.completed
        console.log(todo)
    }
}
//任务删除
const deteleTodo = (todoId: Number) => {
    console.log("删除通用方法")
    console.log(todoId)
    const index = list.findIndex(item => item.id == todoId)
    if (index != -1) {
        list.splice(index, 1)
    }
}
</script>

<template>
    <h1>任务列表管理</h1>
    <AddTodo @add-todo="addNewTodo"></AddTodo>
    <tod-list :list="list" @toggled-todo="toggleTodo" @del-todo="deteleTodo"></tod-list>
</template>

<style scoped>
body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
}

#app {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2p rgba(0, 0, 0, 0.1);
    width: 400px;
}
</style>