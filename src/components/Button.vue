<script lang="ts" setup>
interface Props {
    type?: 'button' | 'submit',
    isActive?: boolean,
    disabled?: boolean
}

const props = defineProps<Props>();
</script>

<template>
    <button :type="type" class="button" :disabled="disabled" :class="{ 'active': isActive }">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.button {
    border: none;
    font-size: 16px;
    cursor: pointer;

    &.route__btn {
        padding: 0 15px;
        background-color: var(--c-bg-header);
        color: white;
        flex: 0 1;
        white-space: nowrap;

        &:hover {
            background-color: white;
            color: #000000;
        }
    }
}

.add__btn {
    background-image: var(--add-icon);
    background-position: 10px;
    background-repeat: no-repeat;
    background-size: 1em;
    font-size: 0.9em;
    text-align: center;
    border-radius: 10px;
    padding: 0.5em 1.5em 0.5rem 2rem;
    margin-right: 30px;
}

.list__btn {
    padding: 0 1em;
    height: 100%;
}

.add {
    background-color: var(--c-bg-header);
    padding: 10px 15px;
    border-radius: 10px;
    color: #fff;
}

.cancel {
    background-color: #fff;
    padding: 10px 15px;
    border-radius: 10px;

    &:hover {
        background-color: #c3c3c3;
    }
}

.back-arrow {
    background-image: var(--arrow-back-icon);
    width: 30px;
    height: 30px;
    background-size: 26px;
    background-color: transparent;
}
</style>