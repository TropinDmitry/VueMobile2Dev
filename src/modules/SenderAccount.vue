<script
    lang="ts"
    setup
>
import Button from '@/components/Button.vue';
import TextInput from '@/components/TextInput.vue';
import { ref } from 'vue';
import Form from '@/components/Form.vue';


</script>

<template>
    <div class="sender_account_holder">
        <h2>Sender account (Ask for Authorization)</h2>
        <p>Here you will request the authorization of the user to use his account to run and register graph application.
        </p>

        <Form>
            <div class="send-wrapper">
                <TextInput
                    label="Send to user"
                    name="user_mail"
                />
                <Button>Save</Button>
            </div>
        </Form>
    </div>
</template>

<style
    scoped
    lang="scss"
>
.sender_account_holder {
    padding: 30px;

    h2 {
        color: #fff;
    }

    form {
        color: #fff;

        .send-wrapper {
            display: flex;

            .input {
                flex-direction: row;

                :deep(input) {
                    border-radius: 10px;
                }
            }

            button {
                font-size: 0.9rem;
                padding: 10px;
                border-radius: 10px;
                background-color: var(--c-bg-header);
            }
        }
    }
}
</style>