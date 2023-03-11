<script lang="ts">
import { defineComponent } from "vue";

import todoList from "./components/todoList.vue"
import myInput from "./components/input.vue"
import myfooter from "./components/footer.vue"
import category from "./components/category.vue"



export default defineComponent({
  name: "App",
  components: {
    todoList,
    myInput,
    myfooter,
    category
  }
});
</script>

<template>
  <div class="app-main">
    <div class="todoList-wrapper">
      <myInput />
      <todoList/>
      <myfooter/>
      <category/>
    </div>
  </div>
</template>

<style scoped>
.app-main{
  height: 100%;
}
.todoList-wrapper{
  margin: 4rem auto;
  padding: 2rem 3rem 3rem;
  max-width: 750px;
  background: #fff;
  color: #32325d;
  box-shadow: 0 0 19px 10px rgba(100, 100, 100, 0.2);
  overflow: visible;
}
</style>
