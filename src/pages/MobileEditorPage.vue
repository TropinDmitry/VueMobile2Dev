<script
    lang="ts"
    setup
>
import Card from '@/components/Card.vue';
import Button from '@/components/Button.vue';
import Dialog from '@/components/Dialog.vue';
import Form from '@/components/Form.vue';
import Uploader from '@/components/Uploader.vue';
import TextInput from '@/components/TextInput.vue';
import CardInfo from '@/modules/CardInfo.vue';
import SlidePanel from '@/components/SlidePanel.vue';
import { store } from '@/store/useStore';
import { computed, ref, watch } from 'vue';


interface CardItem {
    image?: string,
    shortName?: string,
    name?: string,
    description?: string
}

store.commit('initData');
let cards = computed(() => store.state.cards);

let isAddOpen = ref<boolean>(false);
let isImportOpen = ref<boolean>(false);
let isCardSelected = ref<boolean>(false);

let formData = ref<CardItem>({
    image: null,
    name: '',
    shortName: '',
    description: ''
});

const openAddDialog = () => {
    isAddOpen.value = true;
}

const openImportDialog = () => {
    isImportOpen.value = true;
}

const exportAllPwa = () => {

}

const handleFileUpload = (event: Event) => {
    const file = event.target.files[0];
    console.log(formData.value.image);

    const reader = new FileReader();

    reader.onload = (e) => {
        console.log(e.target.result);
        formData.value.image = e.target.result as string;
    }
    reader.readAsDataURL(file);
}

const createApp = (event: Event) => {
    event.preventDefault();

    store.dispatch('createAppCard', formData.value);
    isAddOpen.value = false;
}

const cancelCreate = () => {
    isAddOpen.value = false;
}

const importFromFile = () => {
    isImportOpen.value = false;
}

const clickedBack = () => {
    isCardSelected.value = false;
}

const selectCard = (cardId: number) => {
    store.commit('setCurrentCard', cardId)

    isCardSelected.value = true;
}

const deleteApp = (card: number) => {
    store.dispatch('deleteApp', card);

}

</script>

<template>
    <div
        v-if="!isCardSelected"
        class="mobile-editor"
    >
        <div class="buttons-panel">
            <Button
                @click="openAddDialog"
                class="add__btn"
            >
                Add PWA
            </Button>
            <Button
                @click="openImportDialog"
                class="add__btn"
            >
                Import PWA
            </Button>
            <Button
                @click="exportAllPwa"
                class="add__btn"
            >
                Export all PWA
            </Button>
        </div>
        <!-- search component -->
        <div class="card-wrapper">
            <transition-group name="fade">
                <Card
                    v-for="card in cards"
                    :key="card.id"
                    :card="card"
                    @click.prevent="selectCard(card.id)"
                    @delete="deleteApp(card.id)"
                />
            </transition-group>
            <Card
                :card="{}"
                @click="openAddDialog"
            />
        </div>
    </div>

    <CardInfo
        v-else
        @backToMain="clickedBack"
    />

    <Teleport to="body">
        <Dialog
            :isOpen="isAddOpen"
            title="Create PWA"
            @close="isAddOpen = false"
            required
        >
            <Form @submit="createApp">
                <Uploader
                    @change="handleFileUpload"
                    @file-uploaded="handleFileUpload"
                    label="Upload Icon"
                    name="icon_file"
                    accept="image/*"
                />

                <TextInput
                    v-model="formData.name"
                    label="The name of your app"
                    name="app_name"
                    required
                />
                <TextInput
                    v-model="formData.shortName"
                    label="Short nae"
                    name="short_name"
                    placeholder="My app"
                    required
                />
                <TextInput
                    v-model="formData.description"
                    label="Description"
                    name="description"
                    placeholder="This app is awesome"
                    required
                />

                <div class="form-btns">
                    <Button
                        type="submit"
                        class="add"
                    >
                        Create
                    </Button>
                    <Button
                        @click.prevent="cancelCreate"
                        class="cancel"
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </Dialog>

        <Dialog
            :isOpen="isImportOpen"
            title="Add new project"
            @close="isImportOpen = false"
        >
            <Form class="import">
                <Uploader
                    name="icon_file"
                    accept="image/*"
                />
            </Form>
            <div class="form-btns">
                <Button
                    @click="importFromFile"
                    class="add"
                >
                    Import from file
                </Button>
            </div>
        </Dialog>
    </Teleport>

</template>

<style scoped lang="scss">
.mobile-editor {
    width: 100%;
    height: 100%;

    .card-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
    }

    .buttons-panel {
        margin: 20px 30px 0 30px;
    }
}

.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-leave-to {
    opacity: 0;
}

.form__wrapper {
    width: 400px;
    margin: 15px 0;

    &.import .uploader {
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed rgb(137, 137, 137);
    }

    div {
        margin-bottom: 10px;

        &:last-child {
            margin: 0;
            margin-top: 10px;
        }

        :deep(input[type=text]) {
            border: 1px solid;
            padding: 6px;

            &:hover {
                border: 1px solid rgb(137, 137, 137);
                outline: 2px solid rgb(137, 137, 137);
            }

            &:focus-visible {
                border: 1px solid #127775;
                outline: 2px solid #127775;
            }
        }
    }
}
</style>