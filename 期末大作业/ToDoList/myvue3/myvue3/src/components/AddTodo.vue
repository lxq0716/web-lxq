<template>
    <div>
        <label>编号</label><input type="text" max="10" v-model.trim="todoId" />
        <br />
        <label>任务名称</label><input type="text" maxlength="50" v-model.trim="todoElement" />
        <br />
        <button @click="submintodo">保存</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const todoElement = ref('')
const todoId = ref('')

//注册点击事件
const emit = defineEmits(['add-todo'])

//保存函数的编写
const submintodo = () => {
    if (todoElement.value) {
        console.log(todoElement.value)
        emit('add-todo', todoElement.value, todoId.value)
        todoElement.value = ' '
        todoId.value = ' '
    }
}
</script>