<template>
  <div class="option-entry">
    <div class="option-value">
      <OptionHeaderSortButton
        v-model="sortingData"
        caption-resource="caption.chopDamage"
        custom-icon="chop"
        property="chopDamage"
        :sorting-service="sortingService"
      />
    </div>
  </div>
  <div class="option-entry">
    <div class="option-value">
      <OptionHeaderSortButton
        v-model="sortingData"
        caption-resource="caption.stabDamage"
        custom-icon="stab"
        property="stabDamage"
        :sorting-service="sortingService"
      />
    </div>
  </div>
  <div class="option-entry">
    <div class="option-value">
      <OptionHeaderSortButton
        v-model="sortingData"
        caption-resource="caption.hitRadius"
        icon="dot-circle"
        property="hitRadius"
        :sorting-service="sortingService"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./MeleeWeaponOptionHeaderComponent.ts" />
<style scoped lang="css" src="./MeleeWeaponOptionHeaderComponent.css" />