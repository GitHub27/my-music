<template>
  <div>
    <el-button @click="show = !show">Click Me</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
    <br/>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="4"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row :gutter="5">
      <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row :gutter="5" type="flex" justify="center">
      <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-alert type="info" title="Alert组件 基础版" @close="alertCallBack"></el-alert>
    <br/>
    <button @click="toggleHeheDiv">异步加载组件</button>    
    <largeText v-if="showHeheDiv"></largeText>
  </div>
</template>

<script>
const largeText = () => import('../components/largeText.vue')
export default {
  components: {
    largeText
  },
  name: "asyncComponent",
  data() {
    return {
      show: true,
      showHeheDiv:false
    };
  },
  methods:{
    alertCallBack:function(){
      alert("回调方法");
    },
    toggleHeheDiv:function(){
      this.showHeheDiv=!this.showHeheDiv;
    }
  }
};
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
