<script setup>
import { siteContent } from '../data/content';
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <main class="page about-page">
    <header class="section-header">
      <div>
        <p class="eyebrow">作成者紹介</p>
        <h1>{{ siteContent.about.title }}</h1>
      </div>
    </header>
    <section class="about-panel">
      <div class="about-badge">
        <div class="badge-circle">
          <img :src="siteContent.about.image" />
        </div>
        <p>{{ siteContent.about.note }}</p>
      </div>
      <div class="about-copy">
        <p>{{ siteContent.about.text1 }}</p>
        <p>{{ siteContent.about.text2 }}</p>
        <p>{{ siteContent.about.text3 }}</p>
        <p>{{ siteContent.about.text4 }}</p>
      </div>
    </section>
    <button class="secondary-button" type="button" @click="goHome">トップへ</button>
  </main>
</template>

<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  padding: 40px 24px 60px;
  max-width: 1180px;
  margin: 0 auto;
  background: #fff;
  color: #3f5f4c;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin-bottom: 28px;
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
  color: #e47ac6;
}

.about-copy p {
  margin: 0 0 16px;
  line-height: 1.78;
  color: #3f5f4c;
}

.about-badge {
  display: flex;
  align-items: center;
  gap: 18px;
  background: #ffc0d93f;
  border-radius: 28px;
  padding: 30px 26px;
  margin-bottom: 15px;
}

.badge-circle {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #ffe6f0;
  display: grid;
  place-items: center;
  overflow: hidden;
  box-shadow: inset 0 0 0 2px rgba(44, 91, 64, 0.14);
  flex-shrink: 0;
}

.badge-circle img {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  object-fit: cover;
}

.about-badge p {
  margin: 0;
  color: #3f5f4c;
  line-height: 1.6;
  flex: 1;
  min-width: 0;
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
    padding: 28px 18px 36px;
  }

  .about-panel {
    padding: 24px;
  }

  .about-badge {
    gap: 14px;
    padding: 24px 22px;
  }

  .about-badge p {
    font-size: 0.95rem;
    line-height: 1.55;
  }
}

@media (max-width: 520px) {
  .about-badge {
    gap: 12px;
  }

  .about-badge p {
    font-size: 0.92rem;
  }
}
</style>