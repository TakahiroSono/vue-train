<template>
  <div class="responsive">
    <div class="contents">
      <div class="side">
        <div class="box__1">要素1</div>
        <div class="box__3">要素3</div>
      </div>
      <div class="box__2">要素2</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Responsive',
  components: {

  }
}
</script>

<style lang="scss" scoped>
$up-lg: 901px; $dw-lg: 900px;
$up-sm: 601px; $dw-sm: 600px;

%item {
  height: 100px;
  line-height: 100px;
  color: #fff;
  display: inline-block;
}

.contents {
  position: relative;
}
.side {
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: $dw-sm) {
    flex-wrap: wrap;
  }
}
.box {
  &__1, &__3 {
    @extend %item;
    width: 30%;
    @media screen and (max-width: $dw-lg) {
      width: 50%;
    }
    @media screen and (max-width: $dw-sm) {
      width: 100%;
    }
  }
  &__1{
    background-color: #940000;
  }
  &__2{
    @extend %item;
    background-color: #0b770b;
    width: 100%;
    @media screen and (min-width: $up-lg) {
      width: 40%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &__3{
    background-color: #0000a7;
  }
}
</style>
