<script setup>
import { works } from '../data/works';
</script>

<template>
  <main class="page home-page">
    <section class="hero-panel">
      <div class="hero-copy">
        <p class="eyebrow">まゆまゆの編み物たち</p>
        <h1>まゆまゆの編み物たち</h1>
        <p>「温かみを日常のそばに」をコンセプトに・・・・</p>
      </div>
    </section>

    <section class="works-grid" aria-label="作品一覧">
      <router-link
        v-for="item in works"
        :key="item.id"
        :to="`/item/${item.id}`"
        class="work-card"
      >
        <div class="work-image">
          <img :src="item.image" :alt="item.title" loading="lazy" />
        </div>
        <div class="work-meta">
          <h2>{{ item.title }}</h2>
          <p>{{ item.subtitle }}</p>
        </div>
      </router-link>
    </section>
  </main>
</template>

<style scoped>
.page {
  position: relative;
  padding: 28px 24px 40px;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
}

.hero-panel {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(18px);
  border-radius: 32px;
  padding: 36px 32px;
  box-shadow: 0 30px 80px rgba(24, 60, 56, 0.08);
  margin-bottom: 28px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.82rem;
  margin-bottom: 14px;
  color: #5b7f63;
}

h1 {
  margin: 0 0 14px;
  font-size: clamp(2.1rem, 4vw, 3.4rem);
  line-height: 1.04;
  color: #16412f;
}

.hero-panel p {
  margin: 0;
  max-width: 780px;
  line-height: 1.78;
  color: #3d5b48;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 22px;
}

.work-card {
  display: block;
  border-radius: 28px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  transition: transform 0.24s ease, box-shadow 0.24s ease;
  color: inherit;
  text-decoration: none;
}

.work-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.12);
}

.work-image {
  position: relative;
  min-height: 200px;
  background: #f2f8f4;
}

.work-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.work-meta {
  padding: 22px 20px 24px;
}

.work-meta h2 {
  margin: 0 0 8px;
  font-size: 1.2rem;
  color: #143a24;
}

.work-meta p {
  margin: 0;
  color: #526051;
  line-height: 1.6;
}
</style>
