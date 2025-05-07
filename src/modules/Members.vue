<script lang="ts" setup>
import Button from '@/components/Button.vue';
import List from '@/components/List.vue';
import Checkbox from '@/components/Checkbox.vue';
import Form from '@/components/Form.vue';
import { ref } from 'vue';

const members = [
    { icon: '', text: 'Everyone' },
    { icon: '', text: 'Administrators' },
    { icon: '', text: 'root' },
    { icon: '', text: 'Dmitry Tropin' },
]

const isAllChecked = ref(false);
const isEditingChecked = ref(false);
const isExecuteChecked = ref(false);
</script>

<template>
    <div class="app_members_screen">
        <div class="column1">
            <div class="col-head">
                <p>Scenario members</p>
                <Button></Button>
            </div>
            <div class="col-body">
                <List :items="members" />
            </div>
        </div>
        <div class="column2">
            <div class="col-head">
                <p>Rights</p>
                <Button></Button>
            </div>
            <div class="col-body">
                <Form>
                    <Checkbox label="All" name="all" :value="'All'" v-model="isAllChecked" />
                    <Checkbox label="Editing" name="editing" :value="'Editing'" v-model="isEditingChecked" />
                    <Checkbox label="Execute" name="execute" :value="'Execute'" v-model="isExecuteChecked" />
                </Form>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-wrapper {
    margin-top: 0;
}

.app_members_screen {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;


    .col-head {
        border-bottom: 1px solid #383838;
        display: flex;
        padding: 20px;
    }

    .col-body {
        padding: 20px;

        :deep(li) {
            margin-bottom: 10px;
        }

        :deep(.checkbox) {
            margin-bottom: 10px;
        }
    }

    .column1 {
        border-right: 1px solid #383838;
    }
}

.checkbox {
    flex-direction: row;

    * {
        color: #fff;
    }
}
</style>