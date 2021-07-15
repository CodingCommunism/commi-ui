<template>
  <button class="commi-button" :class="classList" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'

export default defineComponent({
  name: 'CButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<'mini' | 'middle' | 'large'>,
      default: 'middle',
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const { size, disabled } = toRefs(props)
    const pre = 'commi-button'

    const classList = computed(() => {
      return {
        [`${pre}-${size.value}`]: true,
        [`${pre}-disabled`]: disabled.value,
      }
    })

    const handleClick = (event: Event) => {
      if (disabled.value) {
        event.preventDefault()
        return
      }

      emit('click', event)
    }

    return {
      classList,
      handleClick,
    }
  },
})
</script>

<style lang="scss">
.commi-button {
  display: inline-block;
  line-height: 1;
  min-height: 40px;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  & + & {
    margin-left: 10px;
  }

  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
</style>
