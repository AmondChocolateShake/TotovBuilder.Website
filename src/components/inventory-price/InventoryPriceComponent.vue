<template>
  <div
    v-if="inventoryPrice.priceWithContentInMainCurrency.valueInMainCurrency > 0"
    class="inventory-price"
  >
    <div class="inventory-price-value">
      <div
        v-tooltip.top="$t('caption.price')"
        :class="'inventory-price-value-list' + (canShowDetails ? ' inventory-price-with-details' : '')"
        @click="(e) => togglePriceDetails(e)"
      >
        <div
          v-for="(price, index) of inventoryPrice.pricesWithContent"
          :key="index"
          class="inventory-price-value-list-price"
        >
          <Price
            :price="price"
            :show-details="false"
            :show-merchant-icon="false"
            :show-tooltip="false"
          />
        </div>
      </div>
      <div :class="missingPriceIconClass">
        <div
          v-if="inventoryPrice.missingPrice"
          v-tooltip.top="$t('message.missingPrice')"
        >
          <font-awesome-icon icon="exclamation-triangle" />
        </div>
      </div>
    </div>
  </div>

  <!-- Price details -->
  <OverlayPanel
    ref="priceDetailPanel"
    :dismissable="true"
    :style="'max-width: 16rem'"
  >
    <div class="inventory-price-details">
      <div>
        <span>{{ $t('caption.equalsTo') }} {{ priceInMainCurrency.toLocaleString() }}</span>
        <font-awesome-icon
          :icon="mainCurrency?.iconName"
          :class="'currency-' + mainCurrency?.name"
        />
      </div>
    </div>
  </OverlayPanel>
</template>

<script lang="ts" src="./InventoryPriceComponent.ts" />
<style scoped lang="css" src="./InventoryPriceComponent.css" />