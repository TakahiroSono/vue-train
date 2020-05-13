<template>
  <div class="title">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: [ 'title' ]
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 32px;
  height: 50px;
  margin-top: 20px;
  line-height: 50px;
}
</style>
