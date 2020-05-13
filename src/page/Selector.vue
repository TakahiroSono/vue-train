<template>
  <div>
    <Title title='セレクタの説明'></Title>
    <h1 class="first">hello</h1>
    <h2 id="second">hello</h2>
    <h3>hello</h3>
    <h4>hello</h4>
    <h5>hello</h5>
  </div>
</template>

<script>
import Title from '../components/Title'

export default {
  name: 'Selector',
  components: {
    Title
  }
}
</script>

<style lang="scss" scoped>
.first{
  font-size: 32px;
  color: red;
}
#second {
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
