<script
    lang="ts"
    setup
>
import { ref } from 'vue';

const props = defineProps<{ label?: string, name: string, modelValue: boolean, value: string }>();

const emit = defineEmits(['update:modelValue']);

function toggle() {
    emit('update:modelValue', !props.modelValue);
}
</script>

<template>
    <div @click="toggle" class="checkbox">
        <input
            @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
            type="checkbox"
            :name="name"
            :checked="modelValue"
            :value="value"
            hidden
        />
        <div class="custom-checkbox" :class="{ checked: modelValue }"></div>
        <label
            v-if="label"
            :for="name"
        >{{ label }}</label>
    </div>
</template>

<style
    scoped
    lang="scss"
>
.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;

  .custom-checkbox {
    width: 18px;
    height: 18px;
    border: 1px solid #dfdfe0;
    background: #fff;
    border-radius: 2px;
    position: relative;
    transition: all 0.1s ease;

    &.checked {
      background-color: #ffffff;
      border-color: #2C2D2D;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('../components/icons/checked.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 22px;
        opacity: 1;
      }
    }
  }

  label {
    color: #fff;
    font-size: 13px;
    cursor: pointer;
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
}
</style>