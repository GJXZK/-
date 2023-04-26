<template>
  <div class="box">
    <div class="left-box">
      <div class="text">
        ROR
      </div>
      <div class="AI-work">
        <van-popover v-model:show="showPopover" theme="dark" :actions="actions">
          <template #reference>
            AI工作平台
          </template>
        </van-popover>
      </div>

    </div>
    <div class="right-box">
      <div class="moudel">
        <van-popover v-model:show="showMoudel" theme="dark" :actions="moudels">
          <template #reference>
            模块名称
          </template>
        </van-popover>
      </div>
      <div class="dididi">
        <van-icon name="bulb-o" size="30"/>
      </div>
      <div class="name">
        Name
        <van-icon name="apps-o" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const showPopover = ref(false);
    const showMoudel = ref(false);
    const actions = [
      { text: 'AI工作平台' },
    ];
    const moudels = [
      {text:'模板名称'},
      {text:'模板名称'},
      {text:'模板名称'},
    ]

    return {
      actions,
      moudels,
      showMoudel,
      showPopover,
    };
  },
};
</script>

<style lang="less" scoped>
.box {
  background-color: rgb(95, 95, 95);
  width: 100vw;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-box {
    width: 400px;
    display: flex;
    .text {
      width: 40%;
      height: 26;
      text-align: center;
      font-size: 24px;
      color: #fff;
      border-right: 2px solid;
    }

    .AI-work {
      width: 60%;
      height: 24px;
      text-align: center;
      font-size: 24px;
      color: #fff;
      padding: 0 5px;
      margin-left: 20px;
      display: flex;
      align-items: center;

      .van-icon {
        margin-left: 20px;
      }
    }
  }
  .right-box{
    width: 300px;
    height: 8vh;
    display: flex;
    color: #fff;
    font-size: 22px;
    align-items: center;
    .moudel{
      width: 40%;
      text-align: center;
    }
    .dididi{
      width: 10%;
      font-size: 20px;
    }
    .name{
      width: 50%;
      text-align: center;
    }
  }
}
</style>