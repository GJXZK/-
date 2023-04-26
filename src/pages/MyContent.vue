<template>
  <MyHeader></MyHeader>
  <MyBody></MyBody>
</template>

<script>
import MyHeader from '../compotent/MyHeader.vue';
import MyBody from '../compotent/MyBody.vue'
export default {
    components: { MyHeader , MyBody}
}
</script>

<style lang="less" scoped>
  .myheader{
    width: 100%;
    height: 100px;
    background-color: pink;  
  }
</style>