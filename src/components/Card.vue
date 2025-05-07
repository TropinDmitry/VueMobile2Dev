<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

interface CardItem {
    image?: string,
    name?: string,
    description?: string
}

const props = defineProps<{
    card: CardItem
}>();

const toggleOpt = ref(false);

const isEmpty = computed(() => Object.values(props.card).every(item => !item));

onMounted(() => {
    document.addEventListener("click", (e) => {
        if (toggleOpt.value === true) {
            toggleOpt.value = false;
        }
    })
})

onBeforeUnmount(() => {
    document.removeEventListener("click", () => {console.log('delete')});
})
</script>

<template>
    <div v-if="!isEmpty" class="card-item">
        <div>
            <div @click.stop="() => toggleOpt = !toggleOpt" class="options-btn"></div>
            <div v-show="toggleOpt" class="options-wrapper">
                <div @click.stop="" class="exprot-btn">
                    <span>Export</span>
                </div>
                <div @click.stop="$emit('delete')" class="delete-btn">
                    <span>Remove</span>
                </div>
            </div>
            <div class="card-img">
                <img :src="card.image" />
            </div>

            <h3>{{ card.name }}</h3>
            <p>{{ card.description }}</p>
        </div>

    </div>
    <div v-else class="item-new">
        <div class="card-img new">
            <img src="./icons/plus.svg" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.options-btn {
    background-image: url("./icons/opt_btn_icon.svg");
    background-position: center;
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    position: absolute;
    right: 15px;
    top: 15px;
}

.options-wrapper {
    right: 30px;
    top: 40px;
    width: 80px;
    height: auto;
    padding: 10px;
    border-radius: 10px 12px;
    background-color: white;
    position: absolute;
    box-shadow: 2px 2px 10px 3px #ddd;
}

.card-item,
.item-new {
    position: relative;
    cursor: pointer;
    margin: 20px;
}

.card-item {
    p, h3 {
        padding: 2px 12px;
    }
}

.card-img {
    width: 200px;
    height: 200px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: white;

    img {
        max-width: 100%;
    }
}

span {
    color: black;
    font-weight: 600;
}
</style>