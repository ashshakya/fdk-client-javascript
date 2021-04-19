export class LeadValidator {
    static getTickets(): any;
    static getTicket(): any;
    static editTicket(): any;
    static createHistory(): any;
    static getTicketHistory(): any;
    static getCustomForm(): any;
    static editCustomForm(): any;
    static getCustomForms(): any;
    static createCustomForm(): any;
    static getTokenForVideoRoom(): any;
    static getVideoParticipants(): any;
    static openVideoRoom(): any;
    static closeVideoRoom(): any;
}
export class FeedbackValidator {
    static getAttributes(): any;
    static getCustomerReviews(): any;
    static updateApprove(): any;
    static getHistory(): any;
    static getApplicationTemplates(): any;
    static createTemplate(): any;
    static getTemplateById(): any;
    static updateTemplate(): any;
    static updateTemplateStatus(): any;
}
export class ThemeValidator {
    static getThemeLibrary(): any;
    static addToThemeLibrary(): any;
    static applyTheme(): any;
    static isUpgradable(): any;
    static upgradeTheme(): any;
    static getPublicThemes(): any;
    static createTheme(): any;
    static getAppliedTheme(): any;
    static getFonts(): any;
    static getThemeById(): any;
    static updateTheme(): any;
    static deleteTheme(): any;
    static getThemeForPreview(): any;
    static publishTheme(): any;
    static unpublishTheme(): any;
    static archiveTheme(): any;
    static unarchiveTheme(): any;
}
export class UserValidator {
    static getCustomers(): any;
    static searchUsers(): any;
    static getPlatformConfig(): any;
    static updatePlatformConfig(): any;
}
export class ContentValidator {
    static getAnnouncementsList(): any;
    static createAnnouncement(): any;
    static getAnnouncementById(): any;
    static updateAnnouncement(): any;
    static updateAnnouncementSchedule(): any;
    static deleteAnnouncement(): any;
    static createBlog(): any;
    static getBlogs(): any;
    static updateBlog(): any;
    static deleteBlog(): any;
    static getComponentById(): any;
    static getFaqCategories(): any;
    static getFaqCategoryBySlugOrId(): any;
    static createFaqCategory(): any;
    static updateFaqCategory(): any;
    static deleteFaqCategory(): any;
    static getFaqsByCategoryIdOrSlug(): any;
    static addFaq(): any;
    static updateFaq(): any;
    static deleteFaq(): any;
    static getFaqByIdOrSlug(): any;
    static getLandingPages(): any;
    static createLandingPage(): any;
    static updateLandingPage(): any;
    static deleteLandingPage(): any;
    static getLegalInformation(): any;
    static updateLegalInformation(): any;
    static getNavigations(): any;
    static createNavigation(): any;
    static getDefaultNavigations(): any;
    static getNavigationBySlug(): any;
    static updateNavigation(): any;
    static deleteNavigation(): any;
    static getPageMeta(): any;
    static getPageSpec(): any;
    static createPage(): any;
    static getPages(): any;
    static createPagePreview(): any;
    static updatePagePreview(): any;
    static updatePage(): any;
    static deletePage(): any;
    static getPageBySlug(): any;
    static getSEOConfiguration(): any;
    static updateSEOConfiguration(): any;
    static getSlideshows(): any;
    static createSlideshow(): any;
    static getSlideshowBySlug(): any;
    static updateSlideshow(): any;
    static deleteSlideshow(): any;
    static getSupportInformation(): any;
    static updateSupportInformation(): any;
    static createInjectableTag(): any;
    static updateInjectableTag(): any;
    static deleteAllInjectableTags(): any;
    static getInjectableTags(): any;
    static addInjectableTag(): any;
    static removeInjectableTag(): any;
    static editInjectableTag(): any;
}
export class CommunicationValidator {
    static getCampaigns(): any;
    static createCampaign(): any;
    static getCampaignById(): any;
    static updateCampaignById(): any;
    static getStatsOfCampaignById(): any;
    static getAudiences(): any;
    static createAudience(): any;
    static getBigqueryHeaders(): any;
    static getAudienceById(): any;
    static updateAudienceById(): any;
    static getNSampleRecordsFromCsv(): any;
    static getEmailProviders(): any;
    static createEmailProvider(): any;
    static getEmailProviderById(): any;
    static updateEmailProviderById(): any;
    static getEmailTemplates(): any;
    static createEmailTemplate(): any;
    static getSystemEmailTemplates(): any;
    static getEmailTemplateById(): any;
    static updateEmailTemplateById(): any;
    static deleteEmailTemplateById(): any;
    static getEventSubscriptions(): any;
    static getJobs(): any;
    static triggerCampaignJob(): any;
    static getJobLogs(): any;
    static getCommunicationLogs(): any;
    static getSmsProviders(): any;
    static createSmsProvider(): any;
    static getSmsProviderById(): any;
    static updateSmsProviderById(): any;
    static getSmsTemplates(): any;
    static createSmsTemplate(): any;
    static getSmsTemplateById(): any;
    static updateSmsTemplateById(): any;
    static deleteSmsTemplateById(): any;
    static getSystemSystemTemplates(): any;
}
export class PaymentValidator {
    static getBrandPaymentGatewayConfig(): any;
    static saveBrandPaymentGatewayConfig(): any;
    static updateBrandPaymentGatewayConfig(): any;
    static getPaymentModeRoutes(): any;
}
export class OrderValidator {
    static trackShipmentPlatform(): any;
    static trackOrder(): any;
    static failedOrders(): any;
    static reprocessOrder(): any;
}
export class CatalogValidator {
    static deleteSearchKeywords(): any;
    static getSearchKeywords(): any;
    static updateSearchKeywords(): any;
    static getAllSearchKeyword(): any;
    static createCustomKeyword(): any;
    static deleteAutocompleteKeyword(): any;
    static getAutocompleteKeywordDetail(): any;
    static updateAutocompleteKeyword(): any;
    static getAutocompleteConfig(): any;
    static createCustomAutocompleteRule(): any;
    static getCatalogConfiguration(): any;
    static getConfigurations(): any;
    static createConfigurationProductListing(): any;
    static getConfigurationByType(): any;
    static createConfigurationByType(): any;
    static getQueryFilters(): any;
    static getAllCollections(): any;
    static createCollection(): any;
    static getCollectionDetail(): any;
    static deleteCollection(): any;
    static updateCollection(): any;
    static getCollectionItems(): any;
    static addCollectionItems(): any;
    static getCatalogInsights(): any;
}
export class FileStorageValidator {
    static appStartUpload(): any;
    static appCompleteUpload(): any;
    static appCopyFiles(): any;
    static appBrowse(): any;
}
export class ShareValidator {
    static createShortLink(): any;
    static getShortLinks(): any;
    static getShortLinkByHash(): any;
    static updateShortLinkById(): any;
}
export class ConfigurationValidator {
    static getBuildConfig(): any;
    static updateBuildConfig(): any;
    static getPreviousVersions(): any;
    static getAppFeatures(): any;
    static updateAppFeatures(): any;
    static getAppBasicDetails(): any;
    static updateAppBasicDetails(): any;
    static getAppContactInfo(): any;
    static updateAppContactInfo(): any;
    static getAppApiTokens(): any;
    static updateAppApiTokens(): any;
    static getAppCompanies(): any;
    static getAppStores(): any;
    static getInventoryConfig(): any;
    static updateInventoryConfig(): any;
    static partiallyUpdateInventoryConfig(): any;
    static getAppCurrencyConfig(): any;
    static updateAppCurrencyConfig(): any;
    static getOrderingStoresByFilter(): any;
    static updateOrderingStoreConfig(): any;
    static getDomains(): any;
    static addDomain(): any;
    static removeDomainById(): any;
    static changeDomainType(): any;
    static getDomainStatus(): any;
    static getApplicationById(): any;
}
export class CartValidator {
    static getCoupons(): any;
    static createCoupon(): any;
    static getCouponById(): any;
    static updateCoupon(): any;
    static updateCouponPartially(): any;
}
export class RewardsValidator {
    static getGiveaways(): any;
    static createGiveaway(): any;
    static getGiveawayByID(): any;
    static updateGiveaway(): any;
    static getOffers(): any;
    static getOfferByName(): any;
    static updateOfferByName(): any;
    static getUserAvailablePoints(): any;
    static updateUserStatus(): any;
    static getUserPointsHistory(): any;
}
export class AnalyticsValidator {
    static getStatiscticsGroups(): any;
    static getStatiscticsGroupComponents(): any;
    static getComponentStatsCSV(): any;
    static getComponentStatsPDF(): any;
    static getComponentStats(): any;
    static getAbandonCartList(): any;
    static getAbandonCartsCSV(): any;
    static getAbandonCartDetail(): any;
}
export class PartnerValidator {
    static addProxyPath(): any;
    static removeProxyPath(): any;
}
