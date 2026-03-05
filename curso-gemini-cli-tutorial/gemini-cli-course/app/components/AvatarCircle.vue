<script setup lang="ts">
defineProps<{
  initial: string;
  bgColor: 'primary' | 'secondary' | 'accent';
}>();
</script>

<template>
  <div class="avatar-circle" :class="`bg-${bgColor}`">
    {{ initial }}
  </div>
</template>
