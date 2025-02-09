import { IWebsiteConfiguration } from '../models/configuration/IWebsiteConfiguration'
import Configuration from '../../test-data/configuration.json'
import Services from './repository/Services'
import { ApiService } from './ApiService'
import Result, { FailureType } from '../utils/Result'
import i18n from '../plugins/vueI18n'
import { NotificationService, NotificationType } from './NotificationService'

/**
 * Represents a service responsible for getting the website configuration.
 */
export class WebsiteConfigurationService {
  /**
   * Website configuration.
   */
  public configuration: IWebsiteConfiguration = {
    bugReportUrl: '',
    buildSharingUrl: '',
    buildsSortFieldStorageKey: 'builds_sort_field',
    buildsSortOrderStorageKey: 'builds_sort_order',
    buildStorageKeyPrefix: 'build_',
    cacheDuration: 3600,
    changelogApi: '',
    contactAddress: '',
    discordUrl: '',
    exportFileExtension: '',
    exportFileNamePrefix: '',
    exportWarningShowedStoregeKey: '',
    fetchTimeout: 30,
    githubUrl: '',
    itemCategoriesApi: '',
    itemsApi: '',
    languageStorageKey: 'language',
    globalFilterStorageKey: 'global_filter',
    notificationErrorDuration: 10,
    notificationInformationDuration: 5,
    notificationSuccessDuration: 5,
    notificationWarningDuration: 10,
    presetsApi: '',
    pricesApi: '',
    questsApi: '',
    tarkovValuesApi: '',
    version: '',
    versionStorageKey: ''
  }

  /**
   * Initializes the data used by the service.
   */
  public async initialize(): Promise<void> {
    const websiteConfigurationResult = await this.fetchWebsiteConfiguration()

    if (!websiteConfigurationResult.success) {
      Services.get(NotificationService).notify(NotificationType.error, websiteConfigurationResult.failureMessage, true)

      return
    }

    this.configuration = websiteConfigurationResult.value
  }

  /**
   * Fetches the website configuration.
   * @returns Website configuration.
   */
  private async fetchWebsiteConfiguration(): Promise<Result<IWebsiteConfiguration>> {
    const apiService = Services.get(ApiService)
    const websiteConfigurationResult = await apiService.get<IWebsiteConfiguration>(Configuration.VITE_WEBSITE_CONFIGURATION_API as string)

    if (!websiteConfigurationResult.success) {
      return Result.fail(FailureType.error, 'WebsiteConfigurationService.fetchWebsiteConfiguration()', i18n.t('message.websiteConfigurationNotFetched'))
    }

    return websiteConfigurationResult
  }
}