<script
    lang="ts"
    setup
>
import Button from '@/components/Button.vue';
import Settings from './Settings.vue';
import Screenshots from './Screenshots.vue';
import Icons from './Icons.vue';
import InstallationInfo from './InstallationInfo.vue';
import Members from './Members.vue';
import SenderAccount from './SenderAccount.vue';
import { computed, ref } from 'vue';
import { store } from '@/store/useStore';

enum AppTabs {
    SETTINGS = 'settings',
    SCREENSHOTS = 'screenshots',
    ICONS = 'icons',
    INSTALL_INFO = 'install-info',
    MEMBERS = 'members',
    SENDER_ACCOUNT = 'sender-account'
}

let currentCard = computed(() => store.state.currentCard);

const selectedMenu = ref<'info' | 'editor'>('info');
let activeTab = ref<AppTabs>(AppTabs.SETTINGS);

</script>

<template>
    <div class="info__wrapper">
        <div class="info-header">
            <Button
                @click="$emit('backToMain')"
                class="back-arrow"
            ></Button>
            <img
                :src="currentCard.image"
                alt="card-img"
            />
            <div class="app-name">{{ currentCard.name }}</div>
            <div class="app-menu">
                <Button
                    @click="selectedMenu = 'info'"
                    :is-active="selectedMenu === 'info'"
                >
                    Info
                </Button>
                <Button
                    @click="selectedMenu = 'editor'"
                    :is-active="selectedMenu === 'editor'"
                >
                    Editor
                </Button>
            </div>
        </div>

        <div
            v-if="selectedMenu === 'info'"
            class="app-holder"
        >
            <div class="group-panel">
                <div
                    @click="activeTab = AppTabs.SETTINGS"
                    :class="{ 'active': activeTab === AppTabs.SETTINGS }"
                >Settings</div>
                <div
                    @click="activeTab = AppTabs.SCREENSHOTS"
                    :class="{ 'active': activeTab === AppTabs.SCREENSHOTS }"
                >Screenshots</div>
                <div
                    @click="activeTab = AppTabs.ICONS"
                    :class="{ 'active': activeTab === AppTabs.ICONS }"
                >Icons</div>
                <div
                    @click="activeTab = AppTabs.INSTALL_INFO"
                    :class="{ 'active': activeTab === AppTabs.INSTALL_INFO }"
                >Installation info</div>
                <div
                    @click="activeTab = AppTabs.MEMBERS"
                    :class="{ 'active': activeTab === AppTabs.MEMBERS }"
                >Members</div>
                <div
                    @click="activeTab = AppTabs.SENDER_ACCOUNT"
                    :class="{ 'active': activeTab === AppTabs.SENDER_ACCOUNT }"
                >Sender account</div>
            </div>

            <div class="app-wrapper">
                <Settings v-if="activeTab === AppTabs.SETTINGS" />
                <Screenshots v-if="activeTab === AppTabs.SCREENSHOTS" />
                <Icons v-if="activeTab === AppTabs.ICONS" />
                <InstallationInfo v-if="activeTab === AppTabs.INSTALL_INFO" />
                <Members v-if="activeTab === AppTabs.MEMBERS" />
                <SenderAccount v-if="activeTab === AppTabs.SENDER_ACCOUNT" />
            </div>
        </div>

        <div
            v-else
            class="editor-wrapper"
        >

        </div>
    </div>
</template>

<style
    scoped
    lang="scss"
>
.info__wrapper {
    height: 100%;
}

.info-header {
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 60px;

    img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
    }

    .app-name {
        color: #000;
        font-weight: 600;
        font-size: 1.6rem;
    }

    * {
        margin-left: 15px;
    }

    .app-menu {
        width: 100%;
        height: 100%;
        display: flex;

        button {
            padding: 0 25px;
            margin: 0;
            height: 100%;
            background-color: transparent;

            &:active,
            &.active {
                background-color: var(--color-text);
                border-bottom: 2px solid var(--c-bg-header);
                color: var(--c-bg-header);
            }
        }
    }
}

.app-holder {
    display: flex;
    height: 100%;

    .app-wrapper {
        width: 100%;
        
        .settings-holder {
            padding: 30px;

            :deep(.input),
            :deep(.select) {
                height: 30px;
            }
        }

        :deep(textarea) {
            resize: none;

            &::-webkit-scrollbar-thumb {
                border-radius: 8px;
                background-color: #383838;
            }

            &::-webkit-scrollbar {
                width: 7px;
                height: 7px;
                border-radius: 8px;
            }

            &::-webkit-scrollbar-track {
                background-color: #676767;
                border-radius: 8px;
            }
        }

        :deep(input):not(input[type=file]),
        :deep(select),
        :deep(textarea) {
            border-radius: 8px;
            border: 1px solid transparent;
            outline: 2px solid transparent;
            padding: 6px;

            &:hover {
                border-radius: 8px;
                border: 1px solid #0db4b2;
                outline: 2px solid #0db4b2;
            }

            &:focus-visible {
                border-radius: 8px;
                border: 1px solid #127775;
                outline: 2px solid #127775;
            }
        }
    }

    .group-panel {
        min-width: 200px;
        height: 100%;
        padding: 15px 30px;
        border-right: 1px solid #383838;

        * {
            padding: 8px 10px;
            cursor: pointer;

            &:hover,
            &.active {
                background-color: rgb(183, 183, 183);
                color: black;
                border-radius: 10px;
            }
        }
    }
}

.editor-wrapper {}
</style>