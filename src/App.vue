<template>
  <div id="app">
  <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
:root {
  --bg: #000;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: var(--bg);
  width: 100%;
  height: 100vh;
  position: relative;
}
.container {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding-top: 3rem;
  z-index: 1;
}
.c-band {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;

}
.c-youtube {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
