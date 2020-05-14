<template>
  <div id="app">
    <ui class="nav">
      <router-link to="/hello" tag="li"><a class="nav_item">導入</a></router-link>
      <router-link to="/selector" tag="li"><a class="nav_item">詳細度</a></router-link>
      <router-link to="/responsive" tag="li"><a class="nav_item">レスポンシブ</a></router-link>
    </ui>
    <hr>
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  $up-lg: 901px; $dw-lg: 900px;
  $up-sm: 601px; $dw-sm: 600px;

  display: flex;
  padding: 10px 30px;
  margin: 20px 30px;
  height: 50px;
  list-style: none;
  justify-content: space-around;
  @media screen and (max-width: $dw-sm) {
    margin: 20px 0 0;
    padding: 0;
    height: 60px;
  }
  li {
    width: 30%;
  }
  &_item{
    width: 100%;
    line-height: 30px;
    font-size: 20px;
    @media screen and (max-width: $dw-sm) {
      font-size: 18px;
      height: 100%;
      line-height: 60px;
    }
  }
}
</style>
