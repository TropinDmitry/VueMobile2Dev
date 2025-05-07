<script
    lang="ts"
    setup
>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import Button from './Button.vue';


interface ListItems {
    text: string,
    icon?: string,
    link?: string
}[];

const buttonRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);

const isOpen = ref(false);
defineProps<{ buttonText: string, items: ListItems[] }>();

function toggleList() {
    isOpen.value = !isOpen.value;
}

function handleClickOutside(e: Event) {
    const target = e.target as EventTarget;

    if (buttonRef.value &&
        !buttonRef.value.contains(target) &&
        !dropdownRef.value.contains(target) &&
        isOpen.value === true
    ) {
        toggleList();
    }
}

onMounted(() => {
    document.addEventListener("click", handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
})
</script>

<template>
    <div class="dropdown">
        <div ref="buttonRef" class="button-ref">
            <Button
                @click="toggleList"
                class="list__btn"
            >
                {{buttonText}}
            </Button>
        </div>

        <ul
            ref="dropdownRef"
            v-show="isOpen"
            class="list"
        >
            <li
                v-for="item in items"
                :key="item.text"
            >
                <img
                    v-if="item.icon"
                    :src="item.icon"
                />
                <a
                    v-if="item.link"
                    :href="item.link"
                >
                    <span>{{ item.text }}</span>
                </a>
                <span v-else>{{ item.text }}</span>
            </li>
        </ul>
    </div>
</template>

<style
    scoped
    lang="scss"
>
.dropdown {
    position: relative;

    .button-ref {
        height: 100%;
    }

    button {
        background-color: transparent;
        color: #fff;
    }
}

.list {
    position: fixed;
    background-color: white;
    z-index: 1000;
    padding: 10px;
    right: 50px;

    li {
        list-style-type: none;
        cursor: pointer;
        padding: 0.5em;
        margin-bottom: 5px;
        white-space: nowrap;

        &:hover {
            background-color: rgb(207, 207, 207);
        }
    }

    span {
        color: black;
    }
}
</style>