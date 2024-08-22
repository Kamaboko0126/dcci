<script>
export default {
  setup() {},
};
</script>

<template>
  <div class="header-content">
    <div class="left">
      <div class="menu-icon">
        <i class="material-icons">menu</i>
      </div>
    </div>
    <div class="logo">
      <img alt="Vue logo" src="@/assets/logo-dark.png" />
    </div>
    <div class="right"></div>
  </div>
</template>

<style scoped>
.header-content {
  /* background: #999; */
  height: var(--header-height);
  width: 100%;
  display: flex;
  padding: var(--header-padding);
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  z-index: 99999;
}

.menu-icon i {
  cursor: pointer;
  font-size: 3em;
  color: #fff;
}

.logo {
  height: calc(var(--header-height) - 30px);
  width: auto;
  position: relative;
}

.logo img {
  height: 100%;
}
</style>
