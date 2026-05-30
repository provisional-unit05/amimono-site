<template>
  <div id="app">
    <div class="background">
      <div class="cloud cloud-1"></div>
      <div class="cloud cloud-2"></div>
      <div class="cloud cloud-3"></div>
      <div class="cloud cloud-4"></div>
      <div class="ground"></div>
    </div>
    <router-view />
  </div>
</template>

<style>
:root {
  color-scheme: light;
  font-family: 'Noto Sans JP', system-ui, sans-serif;
  background: linear-gradient(180deg, #c7e9ff 0%, #e6f3d7 52%, #f5fbf0 100%);
}

html,
body,
#app {
  min-height: 100%;
}

body {
  margin: 0;
  background: transparent;
}

#app {
  position: relative;
  overflow-x: hidden;
}

.background {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.cloud {
  position: absolute;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 999px;
  box-shadow: 0 24px 60px rgba(53, 95, 97, 0.14);
}

.cloud::before,
.cloud::after {
  content: '';
  position: absolute;
  background: inherit;
  border-radius: inherit;
}

.cloud-1 {
  width: 260px;
  height: 92px;
  top: 10%;
  left: 6%;
}

.cloud-1::before {
  width: 140px;
  height: 90px;
  top: -42px;
  left: 30px;
}

.cloud-1::after {
  width: 170px;
  height: 96px;
  top: 18px;
  left: 140px;
}

.cloud-2 {
  width: 200px;
  height: 74px;
  top: 22%;
  right: 8%;
}

.cloud-2::before {
  width: 130px;
  height: 70px;
  top: -34px;
  left: 22px;
}

.cloud-2::after {
  width: 100px;
  height: 80px;
  top: 18px;
  left: 100px;
}

.cloud-3 {
  width: 180px;
  height: 64px;
  top: 44%;
  left: 14%;
}

.cloud-3::before {
  width: 110px;
  height: 66px;
  top: -28px;
  left: 20px;
}

.cloud-4 {
  width: 280px;
  height: 90px;
  top: 55%;
  right: 20%;
}

.cloud-4::before {
  width: 180px;
  height: 88px;
  top: -40px;
  left: 68px;
}

.ground {
  position: absolute;
  inset: auto 0 0;
  height: 26vh;
  background: radial-gradient(circle at 20% 0, rgba(103, 154, 105, 0.34) 0%, transparent 48%),
    radial-gradient(circle at 75% 12%, rgba(187, 221, 127, 0.28) 0%, transparent 46%),
    #def3d5;
}

router-view {
  position: relative;
  z-index: 1;
}
</style>