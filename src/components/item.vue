<template>
    <li class="item" @dblclick="switchEdit()">
        <span class="item-label-wrapper">
            <label class="item-label" :class='todo.done ? "item-done" : ""' v-if="!todo.isEdit" >{{todo.title}}</label>
            <a-input 
                size="large"
                class="item-input"
                v-else
                v-focus
                v-model:value="todo.title" 
                @blur="handleEdit($event)"
                @keyup.enter="handleEdit($event)"
            />
        </span>

        <span v-show="!todo.isEdit" class="item-check-wrapper">
            <a-checkbox class="item-check"  :checked="todo.done" @change="handleCheck(todo.id)"></a-checkbox>
        </span>
        <span v-show="!todo.isEdit"  @click="handleDelete(todo.id)" class="item-del-wrapper">
            <svg t="1677580354945" class="item-del" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3740" id="mx_n_1677580354946" width="16" height="16"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72z m504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" fill="#1890ff" p-id="3741"></path></svg>
        </span>
    </li>
</template>

<script setup lang="ts">
import { userTodoLists } from "../store/index"
import { TodoItem } from "@/types/index"
import { defineProps } from "vue";
    const store = userTodoLists()
    const props = defineProps<{
        todo: TodoItem,
        index: number
    }>()
    function handleEdit(e:any){
        store.editTodo(e.target.value,props.index)
    }
    function handleDelete(id:number){
        store.deleteTodo(id)
    }
    function switchEdit(){
        store.switchEdit(props.index)
    }
    function handleCheck(id:number){
        store.checkTodo(id)
    }
</script>

<style scoped>
    .item-done{
        color: #d9d9d9;
        text-decoration: line-through;
    }
    .item{
        display: flex;
        padding-top: 10px;
    }

    .item-input{
        height: 36px;
        border-radius: 0;
        border: none;
        background: transparent;
        /* border-bottom: 1px solid #11cdef; */
        color: #32325d;
        flex:1;
        font-size: 18px;
    }
    .item-label-wrapper{
        flex:1;
        height: 36px;
        width: 100%;
    }

    .item-label{
        text-align: left;
        flex:1;
        font-size: 18px;
        padding: 6px 11px;
        margin: auto;
    }
    .item-check-wrapper{
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .item-check{
        text-align: center;
    }
    .item-del-wrapper{
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .item-del{
        color: #1890ff;
    }
</style>