<template>
  <div class="layout-aside-container">
    <!-- 左侧边栏列表 -->
    <ul class="user-select-none menu">
      <li class="menu-item">
        <router-link to="/home/user">用户管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/right">权限管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/good">商品管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/order">订单管理</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/home/setting">系统设置</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyAside',
}
</script>

<style lang="less" scoped>
.layout-aside-container {
  width: 150px;
  height: 100%;
  border-right: 1px solid #eaeaea;
}

.menu {
  list-style-type: none;
  padding: 0;
  .menu-item {
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      // 鼠标悬浮样式
    &:hover {
      background-color: #efefef;
      // cursor: pointer;
    }
    // router的样式
    a {
      display: block;
      color: black;
      // padding-left: 30px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}

// 设置路由高亮效果
.router-link-active {
  background-color: blueviolet;
  box-sizing: border-box;
  position: relative;
  // 伪元素实现路由高亮效果
  &::before {
    content: ' ';
    display: block;
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #42b983;
  }
}
</style>