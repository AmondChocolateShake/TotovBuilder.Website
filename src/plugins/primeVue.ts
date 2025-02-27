import { App } from 'vue'

import PrimeVue from 'primevue/config'

import Badge from 'primevue/badge'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import OverlayPanel from 'primevue/overlaypanel'
import Panel from 'primevue/panel'
import Sidebar from 'primevue/sidebar'
import TabPanel from 'primevue/tabpanel'
import TabView from 'primevue/tabview'

import Tooltip from 'primevue/tooltip'

import '../assets/css/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


export function usePrimeVue(app: App<Element>): void {
  app.use(PrimeVue)

  app.component('Badge', Badge)
  app.component('Button', Button)
  app.component('Checkbox', Checkbox)
  app.component('Column', Column)
  app.component('DataTable', DataTable)
  app.component('Dialog', Dialog)
  app.component('Dropdown', Dropdown)
  app.component('InputNumber', InputNumber)
  app.component('InputText', InputText)
  app.component('Message', Message)
  app.component('OverlayPanel', OverlayPanel)
  app.component('Panel', Panel)
  app.component('Sidebar', Sidebar)
  app.component('TabPanel', TabPanel)
  app.component('TabView', TabView)

  app.directive('tooltip', Tooltip)
}