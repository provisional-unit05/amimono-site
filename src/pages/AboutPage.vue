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
    <section class="about-panel">
      <div class="about-copy">
        <p class="eyebrow">作成者紹介</p>
        <h1>{{ siteContent.about.title }}</h1>
        <p>{{ siteContent.about.lead }}</p>
        <p>{{ siteContent.about.body }}</p>
      </div>
      <div class="about-badge">
        <div class="badge-circle">M</div>
        <p>{{ siteContent.about.note }}</p>
      </div>
    </section>
    <button class="secondary-button" type="button" @click="goHome">トップへ</button>
  </main>
</template>

<style scoped>
.page {
  position: relative;
  padding: 40px 26px 52px;
  max-width: 940px;
  margin: 0 auto;
  background: #fff;
  color: #1d2f28;
}

.about-panel {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 24px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(147, 164, 150, 0.25);
  border-radius: 32px;
  padding: 34px;
  box-shadow: 0 28px 72px rgba(20, 61, 49, 0.08);
}

.eyebrow {
  margin: 0 0 14px;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-size: 0.82rem;
  color: #7a8c7e;
}

h1 {
  margin: 0 0 20px;
  font-size: clamp(2rem, 3vw, 3rem);
  color: #183528;
}

.about-copy p {
  margin: 0 0 16px;
  line-height: 1.78;
  color: #3f5f4c;
}

.about-badge {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  background: #f5f7f2;
  border-radius: 28px;
  padding: 30px 26px;
}

.badge-circle {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: #d7e3d5;
  color: #1f3e2f;
  display: grid;
  place-items: center;
  font-size: 2.4rem;
  font-weight: 700;
  box-shadow: inset 0 0 0 2px rgba(44, 91, 64, 0.14);
}

.about-badge p {
  margin: 0;
  color: #3c5544;
  line-height: 1.72;
}

.profile-list {
  display: grid;
  gap: 18px;
  margin-bottom: 32px;
}

.profile-list article {
  background: rgba(255, 255, 255, 0.96);
  border-radius: 24px;
  padding: 26px;
  box-shadow: 0 18px 36px rgba(17, 56, 41, 0.08);
}

.profile-list h2 {
  margin: 0 0 12px;
  font-size: 1.2rem;
  color: #18422c;
}

.profile-list p {
  margin: 0;
  line-height: 1.75;
  color: #4c6250;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #1d3e28;
  text-decoration: none;
  font-weight: 600;
}

.secondary-button {
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(146, 171, 150, 0.35);
  color: #1f3e2f;
  margin-top: 30px;
  padding: 12px 18px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
}

@media (max-width: 860px) {
  .about-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .page {
    padding: 28px 18px 36px;
  }

  .about-panel {
    padding: 24px;
  }

  .about-badge {
    padding: 24px 22px;
  }
}

@media (max-width: 520px) {
  .profile-list article {
    padding: 20px;
  }
}
</style>