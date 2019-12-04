<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/depechemode">Depeche Mode</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  z-index: 10;
  background: rgba(0,0,0,0.5);
  a {
    font-weight: bold;
    color: #fff;
    &.router-link-exact-active {
      color: #bbb;
    }
  }
}

</style>