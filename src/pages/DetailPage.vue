<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { works } from '../data/works';

const route = useRoute();
const router = useRouter();

const item = computed(() => works.find((entry) => entry.id === route.params.id));

const goBack = () => {
  router.push('/');
};
</script>

<template>
  <main class="page detail-page" v-if="item">
    <button class="back-button" type="button" @click="goBack">← トップに戻る</button>

    <section class="detail-card">
      <div class="image-panel">
        <img :src="item.image" :alt="item.title" />
      </div>

      <div class="detail-content">
        <p class="category">{{ item.category }}</p>
        <h1>{{ item.title }}</h1>
        <p class="description">{{ item.description }}</p>

        <div class="detail-spec">
          <div>
            <span>材料</span>
            <strong>{{ item.materials }}</strong>
          </div>
          <div>
            <span>難易度</span>
            <strong>{{ item.level }}</strong>
          </div>
          <div>
            <span>仕上がり</span>
            <strong>{{ item.size }}</strong>
          </div>
        </div>
      </div>
    </section>
  </main>

  <main class="page detail-page not-found" v-else>
    <p>指定された作品は見つかりませんでした。</p>
    <button class="back-button" type="button" @click="goBack">トップに戻る</button>
  </main>
</template>

<style scoped>
.page {
  position: relative;
  padding: 24px 24px 40px;
  max-width: 1040px;
  margin: 0 auto;
  z-index: 1;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.86);
  color: #1d3e28;
  padding: 14px 18px;
  border-radius: 999px;
  box-shadow: 0 14px 30px rgba(34, 74, 55, 0.12);
  cursor: pointer;
  font-size: 0.95rem;
  margin-bottom: 28px;
}

.detail-card {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: start;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.86);
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 30px 90px rgba(17, 52, 37, 0.08);
}

.image-panel {
  min-height: 420px;
  position: relative;
  background: linear-gradient(180deg, #d4eef9 0%, #f7faf0 100%);
}

.image-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.detail-content {
  padding: 36px 32px;
}

.category {
  color: #5d7f67;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.82rem;
  margin-bottom: 16px;
}

h1 {
  margin: 0 0 18px;
  font-size: clamp(2rem, 3.2vw, 3rem);
  color: #133521;
  line-height: 1.05;
}

.description {
  margin: 0 0 28px;
  line-height: 1.78;
  color: #3e5e48;
}

.detail-spec {
  display: grid;
  gap: 18px;
}

.detail-spec div {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 18px 18px;
  border-radius: 22px;
  background: rgba(237, 249, 239, 0.85);
}

.detail-spec span {
  color: #56725c;
  font-size: 0.92rem;
}

.detail-spec strong {
  color: #1d3e28;
  font-weight: 600;
}

.not-found {
  text-align: center;
}

.not-found p {
  margin: 0 0 18px;
  font-size: 1.15rem;
  color: #3d5b48;
}
</style>
