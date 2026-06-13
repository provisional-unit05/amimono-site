<script setup>
import { siteContent } from '../data/content';
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const router = useRouter();
const showFutureBg = ref(false);
const futureBg = `${import.meta.env.BASE_URL}images/koro.jpg`;
let futureBgTimer = null;

onMounted(() => {
  futureBgTimer = setTimeout(() => {
    showFutureBg.value = true;
  }, 5000);
});

onUnmounted(() => {
  if (futureBgTimer) clearTimeout(futureBgTimer);
});

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <main class="page future-page">
    <header class="section-header">
      <div>
        <p class="eyebrow">{{ siteContent.future.eyebrow }}</p>
        <h1>{{ siteContent.future.title }}</h1>
      </div>
    </header>
    <section class="future-panel">
      <div class="future-copy">
        <p>{{ siteContent.future.text1 }}</p>
        <p>{{ siteContent.future.text2 }}</p>
      </div>
      <a
        class="instagram-button"
        :href="siteContent.future.instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        @knitting_mayumayu をフォローする
      </a>
      <div class="future-card">
        <div
          class="future-bg"
          :style="{ backgroundImage: `url('${futureBg}')` }"
          :class="{ visible: showFutureBg }"
        />
        <span>coming soon</span>
      </div>
    </section>
    <button class="secondary-button" type="button" @click="goHome">トップへ</button>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 40px 24px 60px;
  max-width: 980px;
  margin: 0 auto;
  background: #fff;
  color: #3f5f4c;
}

.future-panel {
  display: grid;
  gap: 22px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(139, 159, 142, 0.2);
  border-radius: 32px;
  padding: 40px 36px;
  box-shadow: 0 26px 72px rgba(28, 50, 41, 0.08);
}

.eyebrow {
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.82rem;
  color: #a56c2c;
}

h1 {
  margin: 0 0 20px;
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: #ffca2c;
}

.future-panel p {
  margin: 0;
  line-height: 1.8;
  color: #3f5f4c;
}

.future-card {
  position: relative;
  min-height: 260px;
  display: grid;
  place-items: center;
  border-radius: 28px;
  background: #f7f8f5;
  border: 1px dashed rgba(120, 137, 122, 0.35);
  color: #667063;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  overflow: hidden;
}

.future-card span {
  position: relative;
  z-index: 1;
}

.future-copy {
  display: grid;
  gap: 16px;
}

.future-instagram {
  display: grid;
  gap: 14px;
  padding: 28px 26px;
  border-radius: 24px;
  background: #fff8f3;
  border: 1px solid rgba(229, 180, 154, 0.35);
}

.insta-lead {
  margin: 0;
  font-weight: 700;
  color: #a65b3c;
}

.instagram-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 12px 20px;
  border-radius: 999px;
  background: #ffe6f063;
  color: #d52483;
  text-decoration: none;
  font-weight: 700;
  font-size: 80%;
  transition: background 0.2s ease, transform 0.2s ease;
}

.instagram-button:hover {
  background: #ffe6f0;
  transform: translateY(-1px);
}

.future-bg {
  position: absolute;
  inset: 0;
  opacity: 0;
  background-size: cover;
  background-position: center;
  transition: opacity 2s ease;
  pointer-events: none;
}

.future-bg.visible {
  opacity: 0.5;
}

.future-card {
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(146, 171, 150, 0.35);
  color: #3f5f4c;
  margin-top: 30px;
  padding: 12px 18px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
}

.secondary-button {
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(146, 171, 150, 0.35);
  color: #3f5f4c;
  margin-top: 30px;
  padding: 12px 18px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
}

@media (max-width: 640px) {
  .page {
    padding: 28px 18px 40px;
  }

  .future-panel {
    padding: 28px 24px;
  }
}

@media (max-width: 520px) {
  .future-card {
    min-height: 220px;
  }
}
</style>