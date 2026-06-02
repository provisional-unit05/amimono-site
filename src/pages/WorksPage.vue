<script setup>
import { ref } from 'vue';
import { siteContent } from '../data/content';
import { useRouter } from 'vue-router';

const router = useRouter();
const { works } = siteContent;
const selectedWork = ref(null);

const openModal = (work) => {
  selectedWork.value = work;
};

const closeModal = () => {
  selectedWork.value = null;
};

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <main class="page works-page">
    <header class="section-header">
      <div>
        <p class="eyebrow">作品紹介</p>
        <h1>シンプルで上品な編み物コレクション</h1>
      </div>
      <button class="secondary-button" type="button" @click="goHome">トップへ</button>
    </header>

    <section class="works-grid">
      <button
        v-for="item in works"
        :key="item.id"
        type="button"
        class="work-card"
        @click="openModal(item)"
      >
        <div class="work-image">
          <img :src="item.image" :alt="item.title" />
        </div>
        <div class="work-meta">
          <h2 :style="{ color: item.accent }">{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </button>
    </section>

    <div class="modal-mask" v-if="selectedWork" @click.self="closeModal">
      <div class="modal-panel">
        <button class="modal-close" type="button" @click="closeModal">×</button>
        <div class="modal-image">
          <img :src="selectedWork.image" :alt="selectedWork.title" />
        </div>
        <div class="modal-content">
          <h2 :style="{ color: selectedWork.accent }">{{ selectedWork.title }}</h2>
          <p>{{ selectedWork.description }}</p>
        </div>
      </div>
    </div>
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
  color: #1e2f28;
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
  color: #7d8a7d;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.05;
}

.secondary-button {
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(146, 171, 150, 0.35);
  color: #1f3e2f;
  padding: 12px 18px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.work-card {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #f9faf7;
  border: 1px solid rgba(140, 156, 141, 0.18);
  border-radius: 22px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.work-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 45px rgba(18, 43, 33, 0.08);
}

.work-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #e9ece7;
}

.work-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.work-meta {
  padding: 20px 18px 24px;
}

.work-meta h2 {
  margin: 0 0 10px;
  font-size: 1.25rem;
}

.work-meta p {
  margin: 0;
  color: #545d52;
  line-height: 1.72;
}

.modal-mask {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(18, 32, 27, 0.55);
  padding: 24px;
  z-index: 50;
}

.modal-panel {
  width: min(920px, 100%);
  background: #fff;
  border-radius: 26px;
  overflow: hidden;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  color: #1f3e2f;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.4rem;
  cursor: pointer;
}

.modal-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #f5f6f2;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.modal-content {
  padding: 28px 26px 32px;
}

.modal-content h2 {
  margin: 0 0 14px;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
}

.modal-content p {
  margin: 0;
  color: #4c564d;
  line-height: 1.8;
}

@media (max-width: 860px) {
  .works-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .page {
    padding: 24px 18px 40px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 520px) {
  .modal-panel {
    border-radius: 22px;
  }

  .modal-content {
    padding: 22px 18px 24px;
  }
}
</style>