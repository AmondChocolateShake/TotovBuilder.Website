<template>
  <ContainerSummary
    :item="item"
  />
  <ArmorSummary
    v-if="item.armorClass > 0"
    :item="item"
    :show-empty-entries="showEmptyEntries"
  />
  <div v-else-if="showEmptyEntries">
    <div class="armor-placeholder" />
  </div>
  <div
    v-if="item.armorClass === 0 && (item.ergonomicsPercentageModifier !== 0 || showEmptyEntries)"
    class="option-entry"
  >
    <div class="option-value">
      <div
        v-if="item.ergonomicsPercentageModifier !== 0"
        v-tooltip.top="$t('caption.ergonomics')"
      >
        <span :class="StatsUtils.getValueColorClass(item.ergonomicsPercentageModifier)">
          {{ StatsUtils.getDisplayValue(item.ergonomicsPercentageModifier, true, true) }}
        </span>
        <font-awesome-icon
          icon="hand-paper"
          class="icon-after-text"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./VestSummaryComponent.ts" />
<style scoped lang="css" src="./VestSummaryComponent.css" />