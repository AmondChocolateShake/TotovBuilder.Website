import { instance, mock, when } from 'ts-mockito'
import { ItemFetcherService } from '../services/ItemFetcherService'
import Services from '../services/repository/Services'
import Result from '../utils/Result'
import ItemCategoriesMock from '../../test-data/item-categories.json'
import ItemsMock from '../../test-data/items.json'
import PresetsMock from '../../test-data/presets.json'
import PricesMock from '../../test-data/prices.json'

export function useItemFetcherServiceMock(): void {
  const itemFetcherServiceMock = mock<ItemFetcherService>()
  when(itemFetcherServiceMock.fetchItemCategories()).thenReturn(Promise.resolve(Result.ok(ItemCategoriesMock)))
  when(itemFetcherServiceMock.fetchItems()).thenReturn(Promise.resolve(Result.ok(ItemsMock)))
  when(itemFetcherServiceMock.fetchPresets()).thenReturn(Promise.resolve(Result.ok(PresetsMock)))
  when(itemFetcherServiceMock.fetchPrices()).thenReturn(Promise.resolve(Result.ok(PricesMock)))

  Services.configure(ItemFetcherService, undefined, instance(itemFetcherServiceMock))
}