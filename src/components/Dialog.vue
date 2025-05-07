<script lang="ts" setup>

defineProps<{ isOpen: boolean, title: string }>();

const emits = defineEmits<{ (evt: 'close') }>();

const close = () => {
    emits('close');
}

</script>

<template>
    <Transition name="fade">
        <div v-if="isOpen" class="modal-overlay">

            <Transition name="slide">
                <div class="modal">
                    <div class="title-bar">
                        <h2>{{ title }}</h2>
                        <button class="modal-close" @click="close">
                            &times;
                        </button>
                    </div>

                    <slot></slot>
                </div>
            </Transition>
        </div>
    </Transition>

</template>

<style scoped lang="scss">
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1111;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal {
        position: relative;
        background-color: #fff;
        padding: 25px;

        .title-bar {
            h2 {
                color: #000;
            }
        }

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
}
</style>