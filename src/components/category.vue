<template>
    <div v-show="!!total" class="category" >
        <div class="total" :class="active === 0 ? 'total-select' : ''" @click="changeActive(0)">
            <span>
                total:{{ total }}
            </span>
        </div>
        <div class="pendding" :class="active === 1 ? 'pendding-select' : ''" @click="changeActive(1)">
            <span>
                pendding:{{ pendding }}
            </span>
        </div>
        <div class="complete" :class="active === 2 ? 'complete-select' : ''" @click="changeActive(2)">
            <span v-show="complete">
                complete:{{ complete }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { storeToRefs } from 'pinia'
import { userTodoLists } from "../store/index"

export default defineComponent({
    name: "Category",
    setup() {
        const store = userTodoLists()
        const { total,pendding,complete,active } = storeToRefs(store)

        function changeActive(id:number){3
            console.log(id)
            store.changeActive(id)
        }
        return {
            total,
            pendding,
            complete,
            changeActive,
            active
        }
    },
})
</script>
<style scoped>
.category{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.total{
    width: 33%;
    display: flex;
    justify-content: center;
}
.pendding{
    width: 33%;
    display: flex;
    justify-content: center;
}
.complete{
    width: 34%;
    display: flex;
    justify-content: center;
}
.total span{
    background-color: #C7D2FE;
    color: #3730A3;
    padding: 0px 4px 0px 4px;
    border-radius: 2px;
}
.pendding span{
    background-color: #FECACA;
    color: #B91C1C;
    padding: 0px 4px 0px 4px;
    border-radius: 2px;
}
.complete span{
    background-color: #D1FAE5;
    color: #10B981;
    padding: 0px 4px 0px 4px;
    border-radius: 2px;

}
.total-select span{
    border: #3730A3 solid 1px;
}
.pendding-select span{
    border: #B91C1C solid 1px;
}
.complete-select span{
    border: #10B981 solid 1px;
}
</style>