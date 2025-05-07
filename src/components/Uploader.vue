<script lang="ts" setup>
defineProps<{
    label?: string, 
    name: string, 
    accept: string, 
    required?: boolean
}>();
</script>

<template>
    <div class="uploader">
        <label v-if="label">{{ label }}</label>
        <input type="file" :name="name" :accept="accept" :required="required" />
    </div>
</template>

<style scoped>
.uploader {
    display: flex;
    flex-direction: column;
}
</style>