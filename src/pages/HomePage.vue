<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { siteContent } from '../data/content';

const { hero, menu } = siteContent;
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

const galleryImages = siteContent.imageGallery || [];
const galleryItems = galleryImages.map((src) => ({
  src,
  type: 'square',
}));

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
    <header class="page-header">
      <div class="header-brand">
        <span class="brand-mark">K</span>
        <div class="brand-copy">
          <p class="brand-title">{{ siteContent.webName }}</p>
        </div>
      </div>
      <button
        class="header-menu-button"
        :class="{ open: menuOpen }"
        type="button"
        @click="toggleMenu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
    <section class="hero-banner">
      <div class="bg-layer bg-layer-a" :style="layerAStyle" :class="{ visible: showFirst }" />
      <div class="bg-layer bg-layer-b" :style="layerBStyle" :class="{ visible: !showFirst }" />
      <div class="hero-banner-overlay" />
      <div class="hero-banner-content">
        <div class="hero-copy">
          <p class="eyebrow">{{ hero.label }}</p>
          <h1>{{ hero.title }}</h1>
          <p class="intro">{{ hero.description }}</p>
        </div>
      </div>
    </section>
    <section class="concept-section">
      <div class="concept-copy">
        <h2>{{ hero.concept }}</h2>
        <p>{{ hero.conceptText }}</p>
      </div>
    </section>
    <section class="gallery-section">
      <div class="gallery-grid">
        <div
          v-for="(item, index) in galleryItems"
          :key="index"
          :class="['gallery-card', item.type]"
        >
          <img :src="item.src" :alt="`作品写真 ${index + 1}`" loading="lazy" />
        </div>
      </div>
    </section>
    <div class="caution-note">
      <p>{{ siteContent.CautionaryNote }}</p>
    </div>
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

.page-header {
  position: fixed;
  inset: 0 auto auto 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: #fff;
  z-index: 50;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: #ffe6f0;
  color: #d52483;
  font-weight: 800;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
}

.brand-copy {
  display: grid;
  line-height: 1.1;
}

.brand-title {
  margin: 0;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #816076;
}

.header-menu-button {
  width: 40px;
  height: 36px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  cursor: pointer;
}

.header-menu-button span {
  width: 100%;
  height: 3px;
  border-radius: 999px;
  background: #2e2e2e;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.header-menu-button.open span:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

.header-menu-button.open span:nth-child(2) {
  opacity: 0;
}

.header-menu-button.open span:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}

.hero-banner {
  position: relative;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
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

.bg-layer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
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

.hero-copy {
  margin-top: 80px;
}

.eyebrow {
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-banner h1 {
  margin: 0 0 20px;
  font-size: clamp(1.5rem, 6vw, 3.5rem);
  line-height: 1.02;
  letter-spacing: -0.04em;
}

.intro {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
}

.concept-section {
  padding: 48px 24px 0;
  max-width: 940px;
  margin: 0 auto;
}

.concept-copy {
  background: #fff;
  border-radius: 28px;
  padding: 30px 28px;
  box-shadow: 0 24px 56px rgba(30, 43, 44, 0.08);
}

.concept-copy h2 {
  margin: 0 0 16px;
  font-size: 1.4rem;
  color: #a56c2c;
}

.concept-copy p {
  margin: 0;
  line-height: 1.8;
  color: #3f5f4c;
}

.gallery-section {
  padding: 40px 24px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.gallery-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  min-height: 0;
  aspect-ratio: 1 / 1;
}

.gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-card:hover img {
  transform: scale(1.04);
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(10px);
  z-index: 60;
  display: grid;
  place-items: center;
  padding: 24px;
}

.menu-panel {
  width: min(420px, 100%);
  background: #fff;
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
  color: #a56c2c;
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
  gap: 14px;
}

.menu-link {
  display: inline-flex;
  width: 100%;
  justify-content: flex-start;
  color: #3f5f4c;
  text-decoration: none;
  font-size: 1.15rem;
  padding: 18px 16px;
  border-radius: 18px;
  background: rgba(244, 247, 242, 0.96);
}

.caution-note {
  margin: 32px 10px 0;
  font-size: 0.5rem;
  color: #627161;
}

@media (max-width: 960px) {
  .page-header {
    padding: 0 18px;
  }

  .hero-banner-content {
    padding: 32px 20px 42px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

}

@media (max-width: 680px) {
  .page {
    padding-top: 0;
  }

  .page-header {
    height: 72px;
    padding: 0 16px;
  }

  .hero-banner {
    margin-top: 72px;
    min-height: calc(100vh - 72px);
  }

  .hero-banner-content {
    padding: 28px 16px 36px;
  }

}

</style>