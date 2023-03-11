import { defineStore } from 'pinia'
import { ref,reactive,computed } from "vue";
import {TodoItem} from "@/types/index"

export const userTodoLists = defineStore('TodoLists',() => {
    let todoList = reactive<TodoItem[]>([])
    let active = ref<number>(0)
    let total = computed<number>(() => todoList.length) 
    let pendding = computed<number>(() => {
        let count = 0;
        todoList.forEach((todo) => {
            if(!todo.done){
                count++
            }
        })
        return count
    }) 

    let complete = computed<number>(() => {
        let count = 0;
        todoList.forEach((todo) => {
            if(todo.done){
                count++
            }
        })
        return count
    }) 
    function initTodo(){
        const temp:string | null = localStorage.getItem('TodoLists')
        if(typeof temp === 'string'){
            todoList = reactive<TodoItem[]>(JSON.parse(temp).todoList)
        }
        console.log(todoList)
    }
    function changeActive(id:number){
        active.value = id
    }

    function addTodo(todo: TodoItem) {
        todoList.unshift(todo)
    }
    function editTodo(value: string,index:number) {
        todoList[index].title = value 
        todoList[index].isEdit = false 
    }
    function switchEdit(index:number) {
        todoList[index].isEdit = true 
    }

    function deleteTodo(id: number) {
        todoList.forEach((item,index) =>{
            if(item.id === id) todoList.splice(index, 1)
        })
    }
    function checkTodo(id: number) {
        todoList.forEach((todo:TodoItem,index:number) => {
            if(todo.id === id) todoList[index] = {
                ...todoList[index],
                done:!todo.done
            }
        })
    }
    function updateTodo(id: number,title:string) {
        todoList.forEach((todo:TodoItem) => {
            if(todo.id === id) todo.title = title
        })
    }
    function checkAllTodo(done:boolean) {
        todoList.forEach((todo:TodoItem) => {
            todo.done = done
        })
    }
    function clearAllTodo() {
        for(let i = todoList.length - 1;i > -1 ; i--){
            if(todoList[i].done) todoList.splice(i, 1)
        }
    }
    return { todoList, active,total, pendding,complete,initTodo,changeActive,addTodo,editTodo,switchEdit, deleteTodo, checkTodo,updateTodo,checkAllTodo,clearAllTodo}
  },{
    // persist: {
    //     enabled: true,
    //     strategies: [{storage: localStorage}]
    // }
})