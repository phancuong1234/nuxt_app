<template>
  <div class="wh-full select-none">
    <img src="/assets/images/bg_login.png" class="wave" />
    <div class="login-container">
      <div class="img"></div>
      <div class="login-box">
        <div class="login-form">
        <vxe-toolbar>
          <template #buttons>
            <vxe-button @click="allAlign = 'left'">居左</vxe-button>
            <vxe-button @click="allAlign = 'center'">居中</vxe-button>
            <vxe-button @click="allAlign = 'right'">居右</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          :align="allAlign"
          :data="tableData1">
          <vxe-column type="seq" width="60"></vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="sex" title="Sex"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
        </vxe-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const allAlign = ref()
const tableData1 = ref([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])
</script>
<style scoped lang="scss">
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
.login-container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 18rem;
  padding: 0 2rem;
  .login-box {
    display: flex;
    align-items: center;
    text-align: center;
    .login-form {
      width: 360px;
    }
  }
}

</style>