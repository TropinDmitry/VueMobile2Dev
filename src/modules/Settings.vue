<script lang="ts" setup>
import TextInput from '@/components/TextInput.vue';
import Select from '@/components/Select.vue';
import { computed, reactive } from 'vue';
import { store } from '@/store/useStore';


interface Settings {
    template: string
    backend: string
    authMode: string
    devMode: string
    appName: string
    shortName: string
    description: string
    display: string
    bgColor: string
    themeColor: string
}

const currentCard = computed(() => store.state.currentCard);

const options = {
    backend: ['', 'Base PWA template', 'CV Automation', 'Demo PWA', 'First Estate PWA'],
    authMode: ['', 'Local', 'Token', 'AppInMail'],
    devMode: ['', 'True', 'False'],
    display: ['', 'Standalone (Recommended)', 'Fullscreen', 'Minimal UI', 'Browser']
}

const settings = reactive<Settings>({
    template: 'Black project',
    backend: options.backend[1],
    authMode: options.authMode[3],
    devMode: options.devMode[2],
    appName: currentCard.value.name,
    shortName: currentCard.value.shortName,
    description: currentCard.value.description,
    display: options.display[1],
    bgColor: '#FFFFFF',
    themeColor: '#FFFFFF'
});

const changeValue = (event: Event) => {
    console.log(event.target.value)
}
</script>


<template>
    <div class="settings-holder">
        <h2>Settings</h2>
        <p>This settings comes with everything you need to create a web app manifest and icons for your
            Progressive
            Web App</p>

        <div class="group1">
            <TextInput 
                :label="'Template'" 
                v-model="settings.template" 
                :name="'template'" 
                class="settings" 
            />
            <Select 
                :label="'Backend'" 
                v-model="settings.backend" 
                :name="'template'" 
                :items="options.backend" 
            />
            <Select 
                :label="'Authorization mode'" 
                v-model="settings.authMode" 
                :name="'Auth_mode'"
                :items="options.authMode" 
            />
            <Select 
                :label="'DEV mode'" 
                v-model="settings.devMode" 
                :name="'dev_mode'" 
                :items="options.devMode" 
            />
        </div>
        
        <div class="group2">
            <TextInput 
                :label="'Name'" 
                v-model="settings.appName" 
                :name="'app_name'" 
                class="settings" 
            />
            <TextInput 
                :label="'Short name'" 
                v-model="settings.shortName" 
                :name="'short_name'" 
                :placeholder="'My name'" 
                class="settings" 
            />
            <TextInput 
                :label="'Description'" 
                v-model="settings.description" 
                :name="'description'" 
                :placeholder="'This app is awesome'" 
                class="settings" 
            />
            <Select 
                @change="changeValue" 
                :label="'Display'" 
                v-model="settings.display" 
                :name="'display'"
                :items="options.display" 
            />
            <TextInput 
                :label="'Background color'" 
                v-model="settings.bgColor" 
                :name="'bg_color'" 
                class="settings" 
            />
            <TextInput 
                :label="'Theme color'" 
                v-model="settings.themeColor" 
                :name="'theme_color'" 
                class="settings" 
            />
        </div>
        
    </div>
</template>

<style scoped lang="scss">
.settings-holder {
    display: grid;
    gap: 20px;

    .group1 {
        border-bottom: 1px solid var(--color-text);
        padding-bottom: 20px;
    }

    .group1, .group2 {
        display: grid;
        gap: 20px;
    }
}
</style>