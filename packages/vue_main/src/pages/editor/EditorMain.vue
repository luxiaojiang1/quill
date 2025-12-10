<script setup lang="ts">
import Quill from 'quill'
import { onMounted, ref } from 'vue'
// import 'quill/dist/dist/quill.snow.css'
import 'quill/quill.snow.css'

const EditorRef = ref()

onMounted(() => {
  const quill = new Quill(EditorRef.value, {
    theme: 'snow',
  })
  window.quill = quill
})
</script>

<template>
  <div ref="EditorRef" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
