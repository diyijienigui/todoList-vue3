<template>
    <div class="input-wrapper" >
        <a-input 
            class="input"
            v-focus
            size="large"
            placeholder="请输入todo"
            v-model:value.trim="inputValue" 
            @keyup.enter="handleInput"
        />
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { userTodoLists } from "../store/index"

function uid(id:number){
    return function(){
       return id++
    }
}
let uuid = uid(0)
export default defineComponent({
    name: "Input",
    setup() {
        let inputValue = ref<string>("");
        const store = userTodoLists()
        function handleInput(){
            if(inputValue.value){
                store.addTodo({
                    id: uuid(),
                    title:inputValue.value,
                    done:false,
                    isEdit:false,
                })
                inputValue.value = ""
            }else{
                alert("请输入")
            }
        }
        return {
            inputValue,
            handleInput,
        }
    },
})
</script>
<style scoped>
.input{
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 0;
    border: none;
    background: transparent;
    /* border-bottom: 1px solid #11cdef; */
    color: #32325d;
    padding-right: 50px;
}
.input-wrapper{
    border-bottom: 1px solid #11cdef;
}
</style>