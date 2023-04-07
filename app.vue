<template>
  <div>
    {{ a.now }}
  </div>
</template>
<script setup lang="ts">
const a = await $fetch('/api/hello')
</script>