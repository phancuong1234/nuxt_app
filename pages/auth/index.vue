<template>
  <div class="wh-full select-none">
    <img src="/assets/images/bg_login.png" class="wave" />
    <div class="login-container">
      <div class="img"></div>
      <div class="login-box">
        <div class="login-form">
          <a-form :model="formState">
            <a-form-item>
              <a-input v-model:value="formState.username" size="large" clearable placeholder="username">
                <template #prefix>
                  <IconifyIconOffline icon="user" style="color: #a8abb2" />
                </template>
              </a-input>
            </a-form-item>

            <a-form-item>
              <a-input v-model:value="formState.password" size="large" clearable placeholder="password">
                <template #prefix>
                  <IconifyIconOffline icon="lock" style="color: #a8abb2" />
                </template>
              </a-input>
            </a-form-item>

            <a-form-item>
              <a-button class="w-full" type="primary" size="large"> Login </a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { IconifyIconOffline } from "../../components/ReIcon/index";
const formState = reactive({
  username: "",
  password: ""
});
</script>
<style scoped lang="scss">
:deep(.ant-input-lg) {
  font-size: 14px;
}
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
  grid-template-columns: repeat(2, 1fr);
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
