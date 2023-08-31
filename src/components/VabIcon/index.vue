<template>
  <img
    v-if="isExternal"
    class="img-icon"
    :src="icon"
  >
  <svg
    v-else-if="isCustomSvg"
    aria-hidden="true"
    :class="svgClass"
  >
    <use :xlink:href="'#icon-' + icon" />
  </svg>
  <!-- 内置svg雪碧图较大，对性能要求苛刻的用户请勿使用isDefaultSvg属性 -->
  <svg
    v-else-if="isDefaultSvg"
    class="vab-icon"
  >
    <use :xlink:href="remixIconPath + '#ri-' + icon" />
  </svg>
  <i
    v-else
    aria-hidden="true"
    :class="{
      ['ri-' + icon]: true,
    }"
  />
</template>
<script>
  import 'remixicon/fonts/remixicon.css'
  import { isExternal } from '@/utils/validate'
  export default defineComponent({
    name: 'VabIcon',
    props: {
      icon: {
        type: String,
        required: true,
      },
      // 是否使用自定义图标
      isCustomSvg: {
        type: Boolean,
        default: false,
      },
      // 是否使用本地库Remix图标
      isDefaultSvg: {
        type: Boolean,
        default: false,
      },
      className: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const svgClass = computed(() => {
        if (props.className) return `vab-icon ${props.className}`
        else return 'vab-icon'
      })

      return {
        svgClass,
        isExternal: isExternal(props.icon),
        remixIconPath: import.meta.glob(
          'remixicon/fonts/remixicon.symbol.svg',
          { eager: true }
        ),
      }
    },
  })
</script>

<style lang="scss" scoped>
  .img-icon {
    display: inline-block;
    width: 2em;
    height: 2em;
    vertical-align: middle;
  }

  .vab-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 auto;
    overflow: hidden;
    vertical-align: middle;
    fill: currentColor;
  }

  [class*='ri'] {
    display: inline-block;
    font-size: 16px;
    text-align: center;
    vertical-align: -3.5px;
  }
</style>
