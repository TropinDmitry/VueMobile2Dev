<script
    setup
    lang="ts"
>

defineProps<{title: string, isOpen: boolean}>();
const emits = defineEmits<{ (evt: 'close') }>();

const close = () => {
    emits('close');
}
</script>

<template>
    <Transition name="slide">
        <div v-if="isOpen" class="slide-panel">
            <div class="title-bar">
                <h2>{{ title }}</h2>
                <button
                    class="modal-close"
                    @click="close"
                >
                    &times;
                </button>
            </div>

            <slot></slot>
        </div>
    </Transition>
</template>

<style
    scoped
    lang="scss"
>
.title-bar {
    .modal-close {
        position: absolute;
        right: 14px;
        top: 8px;
        border: none;
        background: transparent;
        font-size: 1.7rem;
        cursor: pointer;
    }
}

.slide-panel {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    background-color: rgb(67, 123, 100);
    padding: 0 30px;
    height: 100%;
    z-index: 999;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>