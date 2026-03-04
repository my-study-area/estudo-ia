<script setup lang="ts">
import { ref } from 'vue'
import { X } from 'lucide-vue-next'

const foodOne = ref('')
const foodTwo = ref('')
const description = ref('')
const tags = ref<string[]>([])
const tagInput = ref('')

const handleTagInput = () => {
  if (tagInput.value.includes(',')) {
    const parts = tagInput.value.split(',')
    parts.forEach(tag => {
      const trimmedTag = tag.trim()
      if (trimmedTag && tags.value.length < 5 && !tags.value.includes(trimmedTag)) {
        tags.value.push(trimmedTag)
      }
    })
    tagInput.value = ''
  }
}

const removeTag = (index: number) => {
  tags.value.splice(index, 1)
}

const handleSubmit = () => {
  if (!foodOne.value || !foodTwo.value || !description.value) {
    alert('Please fill out all required fields.')
    return
  }
  
  // Add remaining text in tagInput as a tag if it exists and fits
  if (tagInput.value) {
    const trimmedTag = tagInput.value.trim()
    if (trimmedTag && tags.value.length < 5 && !tags.value.includes(trimmedTag)) {
      tags.value.push(trimmedTag)
    }
  }

  const comboData = {
    foodOne: foodOne.value,
    foodTwo: foodTwo.value,
    description: description.value,
    tags: [...tags.value],
  };

  console.log('New Combo Data:', comboData)

  // Clear form
  foodOne.value = ''
  foodTwo.value = ''
  description.value = ''
  tags.value = []
  tagInput.value = ''
};
</script>

<template>
  <div class="create-page">
    <h1 class="page-title">Create a New Combo</h1>
    <form @submit.prevent="handleSubmit" class="create-form">
      <div class="form-group">
        <label for="foodOne">Food One</label>
        <input
          type="text"
          id="foodOne"
          v-model="foodOne"
          required
        />
      </div>
      <div class="form-group">
        <label for="foodTwo">Food Two</label>
        <input
          type="text"
          id="foodTwo"
          v-model="foodTwo"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="description"
          rows="4"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="tags">Tags (comma-separated)</label>
        <input
          type="text"
          id="tags"
          v-model="tagInput"
          placeholder="e.g. sweet, savory, crunchy"
          @input="handleTagInput"
          :disabled="tags.length >= 5"
        />
        <div v-if="tags.length > 0" class="tag-pills-container">
          <span v-for="(tag, index) in tags" :key="index" class="tag-pill">
            {{ tag }}
            <X class="tag-pill-icon" :size="14" @click="removeTag(index)" />
          </span>
        </div>
      </div>
      <button type="submit" class="btn submit-btn">Create Combo</button>
    </form>
  </div>
</template>

<style scoped>
input:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
