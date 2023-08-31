<script setup>

</script>

<template>
  <div class="error-container">
    <div class="error-content">
      <el-row :gutter="20">
        <el-col
          :lg="12"
          :md="12"
          :sm="24"
          :xl="12"
          :xs="24"
        >
          <div class="pic-error">
            404
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .error-container {
    position: relative;
    min-height: 100vh;

    .error-content {
      position: absolute;
      top: 55%;
      left: 50%;
      width: 40vw;
      height: 400px;
      transform: translate(-50%, -50%);
      .pic-error {
        position: relative;
        float: left;
        width: 100%;
        overflow: hidden;
      }
    }
  }
</style>
