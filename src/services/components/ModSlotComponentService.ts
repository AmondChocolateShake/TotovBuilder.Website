import { IItem } from '../../models/item/IItem'
import { ItemService } from '../ItemService'
import { NotificationService, NotificationType } from '../NotificationService'
import Services from '../repository/Services'

/**
 * Represents a service responsible for managing a ModSlotComponent.
 */
export class ModSlotComponentService {
  /**
   * Gets the items accepted as items for a mod slot.
   * @param compatibleItemIds - IDs of the items that are compatible with the mod slot.
   * @returns Accepted items.
   */
  public async getAcceptedItems(compatibleItemIds: string[]): Promise<IItem[]> {
    const itemsResult = await Services.get(ItemService).getItems(compatibleItemIds, true)

    if (!itemsResult.success) {
      Services.get(NotificationService).notify(NotificationType.error, itemsResult.failureMessage)
      return []
    }

    return itemsResult.value
  }

  /**
   * Gets the accepted items category IDs used to detemine the available sort buttons in the item selection dropdown.
   * @param items - Items.
   * @returns Category IDs.
   */
  public getCategoryIds(items: IItem[]): string[] {
    const categoryIds: string[] = []

    for (const acceptedItemCategory of items.map((ai) => ai.categoryId)) {
      /* istanbul ignore else */
      if (categoryIds.findIndex((ci) => ci === acceptedItemCategory) < 0) {
        categoryIds.push(acceptedItemCategory)
      }
    }

    return categoryIds
  }
}