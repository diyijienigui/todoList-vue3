<template>
    <div v-if="active === 0">
        <item v-for="(todo,index) in todoList" :key="todo.id" :todo="todo" :index="index"/>
    </div>
    <div v-else-if="active === 1">
        <item v-for="(todo,index) in penddingTodoList" :key="todo.id" :todo="todo" :index="index"/>
    </div>
    <div v-else >
        <item v-for="(todo,index) in completeTodoList" :key="todo.id" :todo="todo" :index="index"/>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { reactive,onBeforeUpdate } from "vue";
import item from "./item.vue"
import { userTodoLists } from "../store/index"
import {TodoItem} from "@/types/index"

let penddingTodoList = reactive<TodoItem[]>([])
let completeTodoList = reactive<TodoItem[]>([])

const store = userTodoLists()
const { todoList,active } = storeToRefs(store)
onBeforeUpdate(() => {
    penddingTodoList = todoList.value.filter(todo => !todo.done)
    completeTodoList = todoList.value.filter(todo => todo.done)
})

</script>