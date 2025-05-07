<script lang="ts" setup>

</script>

<template>
    <form class="form__wrapper">
        <slot></slot>
    </form>
</template>

<style scoped lang="scss">
.form__wrapper {
    display: flex;
    flex-direction: column;

    &.import {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>