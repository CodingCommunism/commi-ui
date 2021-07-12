import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'CButton',
  template: `
    <button :class="classList" @click="handleClick">
      <slot></slot>
    </button>
  `,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String as PropType<'mini' | 'middle' | 'large'>,
      default: 'middle'
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const { size, disabled } = props;

    const classList = computed(() => {
      const pre = 'commi-button';
      return {
        [`${pre}-${size}`]: true,
        [`${pre}-disabled`]: disabled
      }
    });

    const handleClick = (event: Event) => {
      if (disabled) {
        event.preventDefault();
        return;
      }

      emit('click', event);
    }

    return {
      classList,
      handleClick
    }
  },
});
