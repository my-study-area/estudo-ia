<script setup lang="ts">
</script>

<template>
  <div class="preview-page">
    <h1 class="page-title">Component Preview</h1>
    
    <section class="preview-section">
      <h2 class="section-title">AvatarCircle</h2>
      <div class="preview-grid">
        <div class="preview-item">
          <AvatarCircle initial="A" bgColor="primary" />
          <p>Primary</p>
        </div>
        <div class="preview-item">
          <AvatarCircle initial="B" bgColor="secondary" />
          <p>Secondary</p>
        </div>
        <div class="preview-item">
          <AvatarCircle initial="C" bgColor="accent" />
          <p>Accent</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.preview-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.preview-section {
  margin-bottom: 4rem;
}
.preview-grid {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  background-color: var(--component-bg-color);
  padding: 3rem;
  border-radius: 8px;
}
.preview-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.preview-item p {
  font-size: 0.8rem;
  color: var(--text-color-secondary);
}
</style>
