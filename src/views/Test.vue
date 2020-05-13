<template>
  <div class="test">
    <h1 @click="addFun">test count: {{ count }}</h1>
    <h1>double count: {{ doubleCount }}</h1>
    <h1 @click="chageState">state info from vuex: {{ stateInfo }}</h1>
    <div ref="objdom">reactive: {{ obj.name }}</div>
    <div v-for="(item, i) in list" :ref="el => { divs[i] = el }" :key="item">{{item}}</div>
    <div @click="handleClick">click</div>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, getCurrentInstance, onMounted } from 'vue'
  export default {
    props: {
      pName: String
    },
    setup(props, context) {
      // props
      console.log(props.pName);
      // context
      console.log('context :>> ', context);
      // 当前实例
      const { ctx } = getCurrentInstance();
      console.log('ctx :>> ', ctx);

      const count = ref(0);
      console.log('count :>> ', count);
      const addFun = () => {
        count.value ++
      }

      // reactive
      const obj = reactive({
        name: 'lijing'
      })

      // refs
      const objdom = ref(null);
      const list = reactive([1, 2, 3])
      const divs = ref([])

      // watch(source, cb, options?)
      watch(
        () => count.value,
        (value, oldValue) => {
          console.log('now count :>> ', value);
          console.log('old value : >>', oldValue);
          // console.log(p);
        }
      )

      const handleClick = () => {
        console.log('divs', divs);
        list.push(4);
        console.log('list', list);
        console.log(divs.value);
      }
      
      // computed
      const doubleCount = computed(
        () => {
          return count.value * 2
        }
      )

      const stateInfo = computed(
        () => {
          return ctx.$store.state.stateInfo;
        }
      )

      // 
      const chageState = () => {
        ctx.$store.commit('changeStateInfo', count.value)
      }

      // lifecycle
      onMounted(() => {
        // console.log('ref: objdom');
        console.log(objdom);
      })

      // router info
      console.log(ctx.$router);
      return {
        count,
        addFun,
        doubleCount,
        stateInfo,
        chageState,
        obj,
        objdom,
        list,
        divs,
        handleClick
      }
  }
}
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>