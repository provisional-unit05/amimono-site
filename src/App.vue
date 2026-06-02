<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  color-scheme: light;
  font-family: 'Noto Sans JP', system-ui, sans-serif;
  background: #fff;
}

* {
  box-sizing: border-box;
}

html,
body,
#app {
  min-height: 100%;
}

body {
  margin: 0;
  background: #fff;
  color: #1c2f28;
}

button {
  font: inherit;
}

#app {
  position: relative;
  overflow-x: hidden;
}

router-view {
  position: relative;
  z-index: 1;
}
</style>