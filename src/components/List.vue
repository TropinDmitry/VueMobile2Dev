<script lang="ts" setup>

interface ListItems {
    text: string,
    icon?: string
}[];

defineProps<{items: ListItems[]}>();
</script>

<template>
    <div class="list">
        <ul>
            <li v-for="item in items" :key="item.text" class="list-item">{{ item.text }}</li>
        </ul>
    </div>
</template>

<style scoped>
.list li {
    list-style: none;
}
</style>