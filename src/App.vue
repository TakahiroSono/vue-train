<template>
  <div id="app">
    <ui class="nav">
      <router-link to="/hello" tag="li"><a class="nav_item">導入</a></router-link>
      <router-link to="/selector" tag="li"><a class="nav_item">セレクタの説明</a></router-link>
      <router-link to="/selector" tag="li"><a class="nav_item">詳細度/優先順位</a></router-link>
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
  display: flex;
  padding: 10px 30px;
  margin: 20px 30px;
  height: 50px;
  list-style: none;
  justify-content: space-around;
  &_item{
    width: 20%;
    line-height: 30px;
    font-size: 20px;
  }
}
</style>
