<script
    lang="ts"
    setup
>
import Button from '@/components/Button.vue';
import Uploader from '@/components/Uploader.vue';
import { computed, ref } from 'vue';

let loadedImage = ref('');
let isUploaderShow = computed(() => !loadedImage.value)

//let appIcon = computed(() => store.state.currentCard.image);

const handleFileUpload = (event: Event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
        isUploaderShow.value = false;
        
        loadedImage.value = e.target.result as string;
    }
    reader.readAsDataURL(file);
}
</script>

<template>
    <div class="icons-holder">
        <div class="icon-title-holder">
            <h2>Icon</h2>
            <p>Use this preview mode to preview your maskable PWA icons before adding them to your web app manifest.</p>
        </div>

        <div v-if="!isUploaderShow">
            <div class="column1">
                <div class="icon">
                    <div class="buttons-container">
                        <Button
                            @click="isUploaderShow = true"
                            class="change-btn"
                        >
                            Change Image
                        </Button>
                        <Button class="delete-btn">Delete Image</Button>
                    </div>
                    <img :src="loadedImage" />
                </div>
            </div>

            <div class="column2">

            </div>
        </div>

        <div
            v-else
            class="screen-uploader"
        >
            <Uploader
                name="icon_uploader"
                @change="handleFileUpload"
                accept="image/"
            />
        </div>

    </div>
</template>

<style
    scoped
    lang="scss"
>
.icons-holder {
    width: 100%;
    padding: 30px;
}

.buttons-container {
    display: inline-flex;
    justify-content: center;
    gap: 15px;
    margin: 20px;

    .button {
        font-size: 0.9rem;
        padding: 10px;
        padding-left: 40px;
        border-radius: 10px;
    }

    .change-btn {
        background-image: url('../components/icons/upload-minimalistic-svgrepo-com.svg');
    }

    .delete-btn {
        background-image: url('../components/icons/trash-bin-trash-svgrepo-com.svg');
    }

    .change-btn,
    .delete-btn {
        background-size: 26px;
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: 7px;
    }

}

.screen-uploader {
    width: 512px;
    height: 512px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed var(--color-text);
    margin: 20px auto;
}

.column1 {
    width: fit-content;
}

.icon {
    display: flex;
    flex-direction: column;

    img {
        max-width: 500px;
    }
}
</style>