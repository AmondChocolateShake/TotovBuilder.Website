import { IModdable } from './IModdable'

/**
 * Provides the functionalities of a ranged weapon.
 */
export interface IRangedWeapon extends IModdable {
  /**
   * Caliber.
   */
  caliber: string

  /**
   * Ergonomics.
   * Influences amongst other things the weapon sway, the amount of time the weapon can be held aiming
   * and the noise the weapon makes when aiming.
   */
  ergonomics: number

  /**
   * Fire modes.
   */
  fireModes: string[]

  /**
   * Fire rate in bullets per second.
   */
  fireRate: number

  /**
   * Horizontal recoil.
   */
  horizontalRecoil: number

  /**
   * Ergonomics of the whole preset.
   * Undefined if the item is not a preset.
   */
  presetErgonomics: number | undefined

  /**
   * Horizontal recoil of the whole preset.
   * Undefined if the item is not a preset.
   */
  presetHorizontalRecoil: number | undefined

  /**
   * Vertical recoil of the whole preset.
   * Undefined if the item is not a preset.
   */
  presetVerticalRecoil: number | undefined

  /**
   * Vertical recoil.
   */
  verticalRecoil: number
}