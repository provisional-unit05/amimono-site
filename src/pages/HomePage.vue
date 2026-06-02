<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { siteContent } from '../data/content';

const { hero, menu, works } = siteContent;
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};


const closeMenu = () => {
  menuOpen.value = false;
};

const images = hero.images || [hero.backgroundImage];
const layerAIndex = ref(0);
const layerBIndex = ref(images.length > 1 ? 1 : 0);
const showFirst = ref(true);

const layerAStyle = computed(() => ({ backgroundImage: `url('${images[layerAIndex.value]}')` }));
const layerBStyle = computed(() => ({ backgroundImage: `url('${images[layerBIndex.value]}')` }));

let timer = null;

function scheduleNextImage() {
  timer = setTimeout(() => {
    if (showFirst.value) {
      layerBIndex.value = (layerAIndex.value + 1) % images.length;
    } else {
      layerAIndex.value = (layerBIndex.value + 1) % images.length;
    }
    showFirst.value = !showFirst.value;
    scheduleNextImage();
  }, 10000);
}

onMounted(() => {
  scheduleNextImage();
});

onUnmounted(() => {
  if (timer) clearTimeout(timer);
});
</script>

<template>
  <main class="page home-page">
    <button class="menu-button" type="button" @click="toggleMenu" aria-label="メニューを開く">
      <span />
      <span />
      <span />
    </button>
    <section class="hero-banner">
      <div class="bg-layer bg-layer-a" :style="layerAStyle" :class="{ visible: showFirst }" />
      <div class="bg-layer bg-layer-b" :style="layerBStyle" :class="{ visible: !showFirst }" />
      <div class="hero-banner-overlay"/>
      <div class="hero-banner-content">
        <div class="top-row"/>
        <div class="hero-copy">
          <p class="eyebrow">{{ hero.label }}</p>
          <h1>{{ hero.title }}</h1>
          <p class="intro">{{ hero.description }}</p>
        </div>
      </div>
    </section>

    <section class="preview-section">
      <div class="section-label">作品紹介</div>
      <div class="preview-grid">
        <div
          v-for="item in works"
          :key="item.id"
          class="preview-card"
          :style="{ borderColor: item.accent }"
        >
          <div class="preview-image">
            <img :src="item.image" :alt="item.title" loading="lazy" />
          </div>
          <div class="preview-meta">
            <h2 :style="{ color: item.accent }">{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="menu-overlay" v-if="menuOpen" @click.self="closeMenu">
      <div class="menu-panel">
        <div class="menu-header">
          <p>Menu</p>
          <button class="close-button" type="button" @click="closeMenu">×</button>
        </div>
        <nav class="menu-links">
          <router-link
            v-for="item in menu"
            :key="item.id"
            :to="{ name: item.id }"
            class="menu-link"
            @click="closeMenu"
          >
            {{ item.label }}
          </router-link>
        </nav>
      </div>
    </div>
  </main>
</template>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  padding: 0 0 60px;
  background: #fff;
  color: #1e2f28;
}

.menu-button {
  position: fixed;
  width: 100px;
  height: 100px;
  margin: 20px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  background: rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  place-items: center;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.menu-button span {
  display: block;
  width: 50px;
  height: 2px;
  background: #fff;
  border-radius: 1px;
}

.menu-button span + span {
  margin-top: 20px;
}

.hero-banner {
  position: relative;
  min-height: 100vh;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: grid;
  align-items: center;
}

.bg-layer {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 2s ease;
}

.bg-layer.visible {
  opacity: 1;
}

.hero-banner-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.04);
  z-index: 1;
}

.hero-banner-content {
  padding: 40px 28px 52px;
  color: #fff;
  position: relative;
  z-index: 2;
}

.top-row {
  display: flex;
  justify-content: flex-start;
}

.hero-copy {
  margin-top: 80px;
}

.eyebrow {
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-banner h1 {
  margin: 0 0 20px;
  font-size: clamp(3rem, 6vw, 5.2rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
}

.intro {
  margin: 0;
  font-size: 2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
}










.preview-section {
  padding: 52px 24px 0;
}

.section-label {
  margin-bottom: 24px;
  font-size: 0.9rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #7e8a7d;
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  max-width: 1180px;
  margin: 0 auto;
}

.preview-card {
  display: grid;
  grid-template-rows: 220px auto;
  border: 1px solid rgba(146, 171, 150, 0.2);
  border-radius: 26px;
  overflow: hidden;
  background: #fff;
}

.preview-image {
  overflow: hidden;
  background: #f7f8f5;
}

.preview-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.preview-meta {
  padding: 18px 18px 22px;
}

.preview-meta h2 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.preview-meta p {
  margin: 0;
  color: #5b6055;
  line-height: 1.75;
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.74);
  backdrop-filter: blur(10px);
  z-index: 40;
  display: grid;
  place-items: center;
  padding: 24px;
}

.menu-panel {
  width: min(420px, 100%);
  background: rgba(255, 255, 255, 0.92);
  border-radius: 30px;
  padding: 28px 24px;
  box-shadow: 0 28px 60px rgba(18, 34, 28, 0.15);
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
}

.menu-header p {
  margin: 0;
  font-size: 0.9rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #627161;
}

.close-button {
  border: none;
  background: transparent;
  font-size: 1.8rem;
  line-height: 1;
  color: #2f3c35;
  cursor: pointer;
}

.menu-links {
  display: grid;
  gap: 16px;
}

.menu-links a,
.menu-links router-link {
  display: inline-flex;
  width: 100%;
  justify-content: flex-start;
  color: #1d3029;
  text-decoration: none;
  font-size: 1.15rem;
  padding: 18px 16px;
  border-radius: 18px;
  background: rgba(244, 247, 242, 0.96);
}

</style>