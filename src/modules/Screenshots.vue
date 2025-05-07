<script
    lang="ts"
    setup
>
import TextInput from '@/components/TextInput.vue';
import Select from '@/components/Select.vue';
import Uploader from '@/components/Uploader.vue';
import Button from '@/components/Button.vue';
import SlidePanel from '@/components/SlidePanel.vue';
import Form from '@/components/Form.vue';
import { reactive, ref } from 'vue';

let isSlidePanelShow = ref(false);

const formFactorItems = ['', 'Narrow', 'Wide'];
const platformItems = ['VMAD', 'Android', 'ChromeOS', 'Windows', 'MacOS'];

let formData = reactive({
    screen_src: '',
    form_factor: formFactorItems[2],
    platform: platformItems[0],
    mime_type: '',
    label: ''
});


</script>


<template>
    <div class="settings-holder">
        <h2>Settings</h2>
        <p>Add screenshots of your PWA</p>

        <div class="add-screen">
            <div
                @click="isSlidePanelShow = true"
                class="add-screen-img"
            ></div>
        </div>
    </div>

    <SlidePanel
        :isOpen="isSlidePanelShow"
        title="Add screenshot"
        @close="isSlidePanelShow = false"
    >
        <Form>
            <Uploader
                @change=""
                label="File"
                accept="image/"
                name="'screenshot'"
            />
            <TextInput
                label="Src"
                v-model="formData.screen_src"
                name="screen_src"
                placeholder="screen1.jpg"
            />
            <Select
                label="Form factor"
                v-model="formData.form_factor"
                name="form_factor"
                :items="formFactorItems"
            />
            <Select
                label="Platform"
                v-model="formData.platform"
                name="platform"
                :items="platformItems"
            />
            <TextInput
                label="MIME type"
                v-model="formData.mime_type"
                name="mime_type"
            />
            <TextInput
                label="Label"
                v-model="formData.label"
                name="label"
            />

            <Button
                type="submit"
                class="info-btn"
            >Save</Button>
        </Form>
    </SlidePanel>
</template>

<style
    scoped
    lang="scss"
>
.settings-holder {
    display: grid;
    gap: 20px;
    padding: 30px;

    .add-screen {
        width: 220px;
        aspect-ratio: 9 / 21;
        display: flex;
        justify-content: center;
        align-items: center;
        background: gray;
        border-radius: 15px;

        .add-screen-img {
            width: 35px;
            height: 35px;
            background-image: url('../components/icons/plus.svg');
            background-color: var(--color-text);
            background-size: 20px;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 100%;
        }
    }
}

.slide-panel {
    right: 0;
    background-color: rgb(183, 183, 183);
    padding: 20px 30px;
    height: 100%;

    :deep(h2) {
        color: #000;
    }
    
    :deep(.form__wrapper) {
        width: 360px;
        height: 100%;

        > * {
            margin: 10px;
        }

        .button {
            margin-top: 30px;
            padding: 10px 15px;
            border-radius: 8px;
            background-color: #127775;
            color: #fff;

            &:hover {
                background-color: #0db4b2;
            }
        }
    }
}

.close-btn {
    width: 24px;
    height: 24px;
    background-image: url('../components/icons/close-icon.svg');
    background-size: 20px;
    background-repeat: no-repeat;
    background-color: transparent;
    right: 10px;
    top: 15px;
    position: absolute;
}
</style>