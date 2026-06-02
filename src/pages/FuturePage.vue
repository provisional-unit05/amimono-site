<template>
  <main class="page future-page">
    <section class="future-panel">
      <p class="eyebrow">これから</p>
      <h1>準備中のコンテンツ</h1>
      <p>新しい作品や展示、活動情報をまもなく公開します。今後の展開にぜひご期待ください。</p>
      <div class="future-card">
        <span>coming soon</span>
      </div>
      <router-link class="back-link" to="/">トップに戻る</router-link>
    </section>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 40px 24px 60px;
  max-width: 980px;
  margin: 0 auto;
  background: #fff;
  color: #1d2f28;
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
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  color: #7a8c7d;
  font-size: 0.82rem;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
}

.future-panel p {
  margin: 0;
  line-height: 1.8;
  color: #4d5d51;
}

.future-card {
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
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #1d3e28;
  text-decoration: none;
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