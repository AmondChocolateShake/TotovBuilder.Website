import { computed, defineComponent, PropType } from 'vue'
import { IArmor } from '../../../models/item/IArmor'
import StatsUtils from '../../../utils/StatsUtils'

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<IArmor>,
      required: true
    },
    customErgonomicsPercentageModifier: {
      type: Number,
      required: false,
      default: undefined
    },
    showEmptyEntries: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup: (props) => {
    const ergonomicsPercentageModifier = computed(() => props.customErgonomicsPercentageModifier ?? props.item.ergonomicsPercentageModifier)

    return {
      ergonomicsPercentageModifier,
      StatsUtils
    }
  }
})