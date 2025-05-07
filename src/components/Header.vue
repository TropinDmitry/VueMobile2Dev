<script lang="ts" setup>
import { ref } from 'vue';
import Button from './Button.vue';
import Dropdown from './Dropdown.vue';
import SlidePanel from './SlidePanel.vue';
import List from './List.vue';
import plus from './icons/plus.svg';

let isPluginsPanelOpen = ref(false);

const items = [
    { text: 'Remote control', icon: plus },
    { text: 'Rights management', icon: plus },
    { text: 'Users & Groups', icon: plus }
];
</script>

<template>
    <header>
        <div class="logo">
            <img src="../assets/logo.svg" alt="logo" />
        </div>
        <div class="route-btns">
            <Button class="route__btn">Backoffice</Button>
            <Button class="route__btn">Mobile editor</Button>
            <Button class="route__btn">Ai Designer</Button>
        </div>
        <Dropdown :items="items" :button-text="'Test'" class="dropdown__header" />
        <Button @click="isPluginsPanelOpen = true" class="slide__bar"></Button>

        
        <SlidePanel :isOpen="isPluginsPanelOpen" @close="isPluginsPanelOpen = false" title="Plugins">
            <div class="plugins">
                <Button>Open Plugin Builder</Button>
                <List :items="[]" class="plugins-list" />
            </div>
        </SlidePanel>
    </header>
</template>

<style scoped lang="scss">
.logo {
    width: 40px;
    margin: 0 20px;

}

.route-btns {
    width: 100%;
}

header {
    position: relative;
    width: 100%;
    height: 45px;
    top: 0px;
    background-color: var(--c-bg-header);
    overflow: auto;

    .route-btns {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .dropdown__header {
        height: 100%;
        
        &:hover {
            background-color: #056b6b;
        }
    }

    .slide__bar {
        width: 54px;
        height: 100%;
        background-position: center;
        background-image: url('./icons/controls-svgrepo-com.svg');
        background-size: 30px;
        background-repeat: no-repeat;
        background-color: transparent;
        padding: 0 12px;

        &:hover {
            background-color: #056b6b;
        }
    }

    .slide-panel {
        top: 45px;
        bottom: 0;
        width: 350px;
        background-color: #fff;

        :deep(.title-bar) {
            margin: 15px 0;

            h2 {
                color: #000;
            }
        }

        .plugins {
            height: 100%;
        }
    }
}
</style>