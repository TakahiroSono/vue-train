<template>
  <div class="hello">
    <Title title='導入'></Title>
    <h1>hello</h1>
    <h2>hello</h2>
    <h3>hello</h3>
    <h4>hello</h4>
    <h5>hello</h5>
  </div>
</template>

<script>
import Title from '../components/Title'

export default {
  name: 'Hello',
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 32px;
  color: red;
}
h2 {
  font-size: 28px;
  color: rgba($color: #bbcc00, $alpha: 1.0);
}
h3 {
  font-size: 24px;
}
h4 {
  font-size: 18px;
  height: 100px;
  line-height: 100px;
}
h5 {
  font-size: 14px;
}
</style>
