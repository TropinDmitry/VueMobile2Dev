<script lang="ts" setup>
defineProps<{
    label: string, 
    name: string, 
    placeholder?: string,
    value?: string
}>();
</script>

<template>
    <div class="textarea">
        <label :for="name">{{ label }}</label>
        <textarea :name="name" :placeholder="placeholder" :value="value" />
    </div>
</template>

<style scoped lang="scss">
.textarea {
    display: flex;
    flex-direction: column;

}
</style>