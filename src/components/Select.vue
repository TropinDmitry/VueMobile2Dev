<script lang="ts" setup>
import { ref } from 'vue';

defineProps<{ name: string, label: string, items: string[] }>();
let modelValue = defineModel();

</script>

<template>
    <div class="select__wrapper">
        <label :for="name">{{ label }}</label>
        <select v-model="modelValue" :name="name" class="select">
            <option v-for="item in items" :key="item">
                {{ item }}
            </option>
        </select>
    </div>

</template>

<style scoped lang="scss">
.select__wrapper {
    display: flex;
    flex-direction: column;

    label {
        min-width: 400px;
        display: inline-block;
    }
}

.select {
    background-color: white;
    width: 100%;
}

.settings-holder {
    .select__wrapper {
        flex-direction: row;

        label {
            min-width: 400px;
        }

        select {
            width: 100%;
        }
    }
}
</style>