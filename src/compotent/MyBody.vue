<template>
    <div class="mybody">
        <div class="box-left">
            <van-tree-select 
                v-model:active-id="activeId" 
                v-model:main-active-index="activeIndex" 
                :items="items" 
            />
        </div>
        <div class="box-center">
            center
        </div>
        <div class="box-right">
            right
        </div>
    </div>
</template>
  
<script>
import {ref} from 'vue' 
export default {
  setup() {
    const activeId = ref(1);
    const activeIndex = ref(0);
    const items = [
      {
        text: '浙江',
        children: [
          { text: '杭州', id: 1 },
          { text: '温州', id: 2 },
          { text: '宁波', id: 3},
        ],
      },
      {
        text: '江苏',
        children: [
          { text: '南京', id: 4 },
          { text: '无锡', id: 5 },
          { text: '徐州', id: 6 },
        ],
      },
      { text: '福建', disabled: true },
    ];

    return {
      items,
      activeId,
      activeIndex,
    };
  },
};

</script>
  
<style lang="less" scoped>
.mybody {
    width: 100vw;
    height: 90vh;
    display: flex;

    .box-left {
        width: 20vw;

    }

    .box-center {
        width: 70vw;
        background-color: rgb(231, 230, 230);
    }
}
</style>