
import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
import BuildsList from '../builds-list/BuildsListComponent.vue'
import { IBuildSummary } from '../../models/utils/IBuildSummary'
import Services from '../../services/repository/Services'
import { ExportService } from '../../services/ExportService'
import { BuildService } from '../../services/BuildService'

export default defineComponent({
  components: {
    BuildsList
  },
  props: {
    buildsSummaries: {
      type: Array as PropType<IBuildSummary[]>,
      required: true
    },
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup: (props, { emit }) => {
    const buildsToExportIds = ref<string[]>([])
    const allSelected = computed(() => buildsToExportIds.value.length === props.buildsSummaries.length)

    onMounted(() => document.onkeydown = (e) => onKeyDown(e))

    /**
     * Cancels the export.
     */
    function cancelExport() {
      emit('update:modelValue', false)
    }

    /**
     * Exports the selected builds.
     */
    function confirmExport() {
      const buildService = Services.get(BuildService)
      const buildsToExport = buildsToExportIds.value.map((bti) => buildService.get(bti).value)
      Services.get(ExportService).export(buildsToExport)

      emit('update:modelValue', false)
    }

    /**
     * Reacts to a keyboard event.
     * @param event - Keyboard event.
     */
    function onKeyDown(event: KeyboardEvent) {
      if (!props.modelValue) {
        return
      }

      if (event.key === 'a' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault() // Prevents the browser save action to be triggered
        buildsToExportIds.value = props.buildsSummaries.map(bs => bs.id)
      }
    }

    /**
     * Toggles the selection.
     */
    function toggleSelection() {
      if (allSelected.value) {
        buildsToExportIds.value = []
      } else {
        buildsToExportIds.value = props.buildsSummaries.map(bs => bs.id)
      }
    }

    return {
      allSelected,
      buildsToExportIds,
      cancelExport,
      confirmExport,
      toggleSelection
    }
  }
})