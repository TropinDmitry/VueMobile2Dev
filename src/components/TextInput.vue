<script lang="ts" setup>
const props = defineProps<{
    label: string, 
    name: string, 
    placeholder?: string,
    required?: boolean
}>();

let modelValue = defineModel()

</script>

<template>
    <div class="input">
        <label :for="name">{{ label }}</label>
        <input type="text" :name="name" :placeholder="placeholder" v-model="modelValue" :required="required" />
    </div>
</template>

<style scoped lang="scss">
.input {
    display: flex;
    flex-direction: column;

    &.settings {
        flex-direction: row;

        label {
            min-width: 400px;
        }

        input {
            width: 100%;
        }
    }
}
</style>