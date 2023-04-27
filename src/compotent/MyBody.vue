<template>
  <div class="mybody">
    <div class="box-left" v-show="showSelect">
      <ul>
        <li @click="showGood = !showGood">产品设计</li>
        <li>技术研发</li>
        <li>测试验收</li>
        <div class="good" v-show="showGood">
          <ul>
            <li @click="showTask=!showTask">原型图</li>
            <li>流程图</li>
            <li>思维导图</li>
            <li>设计图</li>
          </ul>
        </div>
        <div class="addTask" v-show="showTask">
          <input 
          type="text" 
          placeholder="新建任务" 
          />
          <div class="historyTask" v-for="item in 4" :key="item">历史任务{{ item }}</div>
        </div>
      </ul>
    </div>
    <div class="box-center">
      <!-- 内容部分 -->
      <div class="center-header">
        <h1>RDR问题预设</h1>
      </div>
      <div class="center-content">
        <div v-for="item in 9" :key="item" class="gr">
          <p>常用问题1常用问题1常用问题1常用问题1常用问题1</p>
        </div>
      </div>
      <div class="center-footer">
        <div class="search">
          <input type="text" placeholder="请输入内容" />
          <van-icon class="xfj" name="guide-o" />
        </div>
      </div>
    </div>
    <div class="box-right">
      <van-collapse v-model="activeNames" border="true">
        <van-collapse-item title="问题预设" name="1" border="true">
          <div class="text1">预设问题自定义</div>
          <div class="text2">提问记录管理</div>
          <div class="text3" @click="showCenter = !showCenter">
            问题预设编辑
            <van-popup
              v-model:show="showCenter"
              :closeOnClickOverlay="false"
              round
              :style="{ width: '400px', height: '500px' }"
            >
              <div class="submitbox">
                <van-tabs v-model:active="active">
                  <van-tab title="分类 1"></van-tab>
                  <van-tab title="分类 2"></van-tab>
                  <van-tab title="分类 3"></van-tab>
                  <van-tab title="分类 4"></van-tab>
                  <van-tab title="分类 5"></van-tab>
                </van-tabs>
                <!-- 问题预设 -->
                <div class="question" v-for="item in 6" :key="item">
                  <p>问题预设{{ item }}</p>
                  <input type="text" name="" id="" />
                </div>
                <!-- 按钮 -->
                <van-button class="sbtn" type="success">确定</van-button>
                <van-button class="sbtn" type="default">取消</van-button>
              </div>
            </van-popup>
          </div>
        </van-collapse-item>
        <van-collapse-item title="常用网站" name="2" border="true">
          <div class="text2">提问记录管理</div>
        </van-collapse-item>
        <van-collapse-item title="常用工具" name="3" border="true">
          <div class="text1">语言翻译</div>
          <div class="text2">语言切换</div>
          <div class="text2">常用工具编辑</div>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const activeId = ref(1);
    const activeIndex = ref(0);
    const activeNames = ref(["1"]);
    const showCenter = ref(false);
    const active = ref(true);
    const showSelect = ref(true);
    const showGood = ref(true);
    const showTask = ref(true);
    return {
      activeId,
      activeIndex,
      activeNames,
      showCenter,
      active,
      showSelect,
      showGood,
      showTask,
    };
  },
};
</script>

<style lang="less" scoped>
.mybody {
  width: 100vw;
  height: 92vh;
  display: flex;

  .box-left {
    width: 20vw;
    position: relative;
    li {
      padding-left: 10px;
      height: 40px;
      line-height: 40px;
    }
    .good {
      position: absolute;
      left: 12vw;
      top: 0;
      width: 10vw;
      height: 100%;
      background-color: #fff;
    }
    .addTask {
      position: absolute;
      left: 22vw;
      top: 0;
      width: 14vw;
      height: 100%;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.3);
      input{
        width: 12vw;
        margin: 20px 10px 10px 10px;
      }
      .historyTask{
        height: 24px;
        margin: 10px ;
      }
    }
  }

  .box-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65vw;
    height: 100%;
    background-color: rgb(231, 230, 230);
    .center-header {
      width: 80%;
      height: 200px;
      display: flex;
      h1 {
        margin: auto;
      }
    }
    .center-content {
      width: 80%;
      height: 350px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .gr {
        width: 30%;
        height: 100px;
        background-color: #fff;
        display: flex;
        border-radius: 16px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        p {
          font-size: 16px;
          margin: auto;
          padding: 0 10px;
        }
      }
    }
    .center-footer {
      width: 80%;
      height: 200px;
      display: flex;
      .search {
        width: 100%;
        height: 30px;
        margin: auto;
        position: relative;
        input {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(0, 0, 0, 0.3);
        }
        .xfj {
          font-size: 30px;
          font-weight: 200;
          position: absolute;
          right: 20px;
        }
      }
    }
  }
  .box-right {
    width: 15vw;
    font-size: 24px;
    .text1 {
      width: 100%;
      height: 30px;
      line-height: 10px;
    }
    .text2 {
      width: 100%;
      height: 30px;
      line-height: 30px;
    }
    .text3 {
      width: 100%;
      height: 30px;
      line-height: 50px;
    }
    .submitbox {
      width: 400px;
      height: 500px;
      .question {
        width: 80%;
        height: 50px;
        display: flex;
        align-items: center;
        position: relative;
        margin: 0 10px;
        p {
          position: absolute;
        }
        input {
          position: absolute;
          left: 100px;
          width: 80%;
          height: 20px;
        }
      }
      .sbtn {
        width: 100px;
        margin: 40px;
      }
    }
  }
}
</style>
