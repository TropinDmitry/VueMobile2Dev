<script lang="ts" setup>
import TextInput from '@/components/TextInput.vue';
import TextArea from '@/components/TextArea.vue';
</script>

<template>
    <div class="wrapper">
        <h2>Installation info</h2>

        <TextInput label="Age limit" value="12+" name="age_limit" />
        <TextInput label="Developer" value="Prosuite OOD" name="developer" />
        <TextArea label="Privacy policy"
            :value="'<h2 >Politique de protection de la vie privée</h2>'+'\n\n' + '<p>Date de création: 12 février 2020</p>'"
            name="private_policy" />
        <TextArea label="Legal mentions"
            :value="'<h2 >The site is edited by the company ProSuite OOD</h2>'+'\n'+'<p>Bullstat : 204878015,</p>'"
            name="legal_mentions" />
        <TextArea label="CGU" :value="`<h2 >Conditions générales d'utilisation du site</h2>`+'\n\n'" name="cgu" />

    </div>
</template>

<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 750px;
    padding: 30px;
}

.input {
    max-height: 60px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    :deep(input) {
        width: 400px;
        border-radius: 8px;
        padding: 5px;
    }
}

.textarea {
    max-height: 80px;
    flex-direction: row !important;
    justify-content: space-between;
    margin-bottom: 20px;

    :deep(textarea) {
        width: 400px;
        height: 60px;
        border-radius: 8px;
        padding: 5px;
    }
}
</style>
