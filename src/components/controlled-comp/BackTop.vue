<template>
  <div id="components-back-top-demo-custom">
    <a-back-top>
      <div class="ant-back-top-inner"><i class="fa fa-arrow-up icon-up"></i></div>
    </a-back-top>
  </div>
</template>

<style lang="scss" scoped>
#components-back-top-demo-custom {
  .ant-back-top {
    bottom: 100px;
  }
  .ant-back-top-inner {
    position: relative;
    text-align: center;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    background-color: #1088e9;
    color: #fff;
    font-size: 20px;
    box-shadow: 5px 2px 19px 3px rgba(0, 0, 0, 0.36);
    .icon-up {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
