export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    lead: Lead;
    billing: Billing;
    communication: Communication;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    companyProfile: CompanyProfile;
    fileStorage: FileStorage;
    inventory: Inventory;
    configuration: Configuration;
    marketplaces: Marketplaces;
    analytics: Analytics;
    discount: Discount;
    application(applicationId: any): PlatformApplicationClient;
}
declare namespace PlatformClient {
    export { TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, KeyValue, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, SubmitButton, PollForAssignment, CustomForm, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, pagesSchema, availableSectionSchema, sectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, AvailablePages, Seo, Sections, Config, Preset, GlobalSchema, ListSchema, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, BlocksProps, PageSections, PageSectionsBlocks, PageSectionsBlocksProps, Predicate, Screen, PredicateUserSchema, Route, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, SendEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, AuthSuccess, SendOtpResponse, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, Mobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, Facebook, Accountkit, Google, ApplicationLegal, ApplicationLegalFAQ, SeoComponent, SeoSchema, CustomMetaTag, Detail, StorefrontAnnouncement, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, announcementSchema, scheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, AnnouncementDataSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, APIError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, CustomBlogSchema, FeatureImage, CustomBlog, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, UnauthenticatedUser, UnauthenticatedApplication, BadRequest, ResourceNotFound, InternalServerError, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, GetActivityStatus, ActivityHistory, FailedOrders, FailOrder, MarketplaceOrder, TotalDiscountsSet, PresentmentMoney, ShopMoney, TotalPriceSet, TotalPriceSetShopMoney, TotalPriceSetPresentmentMoney, TotalTaxSet, TotalTaxSetShopMoney, TotalTaxSetPresentmentMoney, SubtotalPriceSet, SubtotalPriceSetShopMoney, SubtotalPriceSetPresentmentMoney, LineItems, LineItemsArticle, Quantities, NotAvailable, Sellable, OrderCommitted, Damaged, Manufacturer, ArticlePrice, Company, FailOrderDateMeta, MarketplaceIdentifiers, TatacliqLuxury, Dimension, Weight, Store, ArticleMeta, ArticleBrand, LineItemsArticleIdentifier, PriceSet, PriceSetShopMoney, PriceSetPresentmentMoney, TaxLines, TaxLinesPriceSet, TaxLinesPriceSetShopMoney, TaxLinesPriceSetPresentmentMoney, TotalDiscountSet, TotalDiscountSetPresentmentMoney, TotalDiscountSetShopMoney, BillingAddress, TotalShippingPriceSet, TotalShippingPriceSetShopMoney, TotalShippingPriceSetPresentmentMoney, Customer, DefaultAddress, TotalLineItemsPriceSet, TotalLineItemsPriceSetShopMoney, TotalLineItemsPriceSetPresentmentMoney, ShippingAddress, OrderListing, OrderItems, PlatformOrderUserInfo, PlatformDeliveryAddress, Channel, PlatformBreakupValues, PlatformApplication, ArticleAssignment, PlatformShipment, PlatformShipmentStatus, Bags, BagFinancialBreakup, Identifiers, BagCurrStatus, BagItem, BagItemAttributes, BagArticle, ArticleIdentifiers, Set, SetSizeDistribution, Sizes, BagArticleReturnConfig, ShipmentPrices, GstDetails, BagBreakupValues, BagCurrentStatus, BagStateMapper, BagStatus, BagStatusBagStateMapper, BagPrices, ShipmentBreakupValues, DpDetails, ShipmentInvoice, RtoAddress, StoreAddressJson, PlatformFulfillingStore, FulfillingStoreMeta, AdditionalContactDetails, Documents, Gst, ProductReturnConfig, Timing, Opening, Closing, FulfillingStoreStoreAddressJson, Payments, ShipmentGst, PlatformShipmentBrand, Promise, Timestamp, ShipmentTrackingDetails, ShipmentUser, ItemsPayments, Filters, Stages, StagesFilters, Options, NextOrderStatus, BagConfirmed, DpAssigned, ReturnBagDelivered, Placed, DeliveryDone, Pending, BagPacked, PlatformOrderPage, ItemTotal, AppliedFilters, UpdateOrderReprocessResponse, PlatformOrderTrack, GetPingResponse, UpdateShipmentStatusResponse, UpdateShipmentStatusBody, PlatformShipmentTrack, Results, UpdateProcessShipmenstRequestBody, UpdateProcessShipmenstRequestResponse, GetVoiceCallbackResponse, GetClickToCallResponse, ApefaceApiError, GetSearchWordsData, GetSearchWordsDetailResponse, ErrorResponse, SearchKeywordResult, CreateSearchKeyword, DeleteResponse, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, Meta, Guide, ValidateSizeGuide, SuccessResponse, ListSizeGuide, SizeGuideResponse, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, Schedule, UserInfo, CollectionImage, CollectionBadge, CollectionBanner, SeoDetail, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, ProductListingActionPage, ProductListingAction, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, CollectionItemRequest, UpdatedResponse, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, UserInfo1, ProductTemplateExport, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, CategoryMappingValues, CategoryMapping, Media2, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, SingleCategoryResponse, CategoryUpdateResponse, ProductPublish, Trader, TeaserTag, CustomOrder, OrderQuantity, ReturnConfig, ProductCreateUpdate, UserCommon, VerifiedBy, Attributes, ProductPublished, Logo, Brand, Product, PageData, ProductListingResponse, ValidateProduct, BulkJob, UserDetail, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, Items, BulkAssetResponse, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, InventoryResponse, CommonResponse, BulkInventoryGetItems, BulkInventoryGet, Size1, InventoryBulkRequest, InventoryExportRequest, InventoryExportJob, FilerList, InventoryConfig, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, SellerPhoneNumber, ContactDetails, Document, BusinessCountryInfo, GetAddressSerializer, Website, BusinessDetails, GetCompanyProfileSerializerResponse, ReferralInfo, CompanyAddress, BusinessCountryInfo1, CompanyStoreSerializerRequest, DocumentsObj, MetricsSerializer, UserSerializer1, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, GetCompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, ProductReturnConfigSerializer, LocationManagerSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, GetAddressSerializer1, LocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, RewardPointsConfig, Credit, Debit, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPoints, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, ListingPageFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, Instagram, Twitter, Pinterest, GooglePlus, Youtube, LinkedIn, Vimeo, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, Auth, GoogleMap, GoogleMapCredentials, CouponAuthor, PostOrder, PriceRange, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, PaymentCodes, BulkBundleRestriction, Restrictions, CouponSchedule, State, RuleDefinition, Validation, CouponDateMeta, DisplayMetaDict, DisplayMeta, CouponAction, Ownership, Validity, Identifier, Rule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, StoreMapping, AllChannels, MyntraPayload, AmazonPayload, FlipkartPayload, TatacliqPayload, AjioPayload, InventorySyncConfig, StoreMappingPayload, StatusPayload, StatusResp, SyncPayload, SyncResp, MkpResp, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject };
}
/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Page
        
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } [size]
        
         
    */
/**
        @typedef TicketHistoryList
        
        
        @property { Array<TicketHistory> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */
/**
        @typedef CustomFormList
        
        
        @property { Array<CustomForm> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */
/**
        @typedef CreateCustomFormPayload
        
        
        @property { string } slug
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */
/**
        @typedef EditCustomFormPayload
        
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { boolean } [loginRequired]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */
/**
        @typedef EditTicketPayload
        
        
        @property { TicketContent } [content]
        
        @property { string } [category]
        
        @property { string } [source]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { AgentChangePayload } [assignedTo]
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef AgentChangePayload
        
        
        @property { string } agentId
        
         
    */
/**
        @typedef CreateVideoRoomResponse
        
        
        @property { string } uniqueName
        
         
    */
/**
        @typedef CloseVideoRoomResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef CreateVideoRoomPayload
        
        
        @property { string } uniqueName
        
        @property { Array<Object> } [notify]
        
         
    */
/**
        @typedef Filter
        
        
        @property { Array<Priority> } priorities
        
        @property { Array<TicketCategory> } [categories]
        
        @property { Array<Status> } statuses
        
        @property { Array<Object> } assignees
        
         
    */
/**
        @typedef TicketHistoryPayload
        
        
        @property { Object } value
        
        @property { string } type
        
         
    */
/**
        @typedef CustomFormSubmissionPayload
        
        
        @property { Array<KeyValue> } response
        
         
    */
/**
        @typedef KeyValue
        
        
        @property { string } key
        
        @property { string } value
        
         
    */
/**
        @typedef GetTokenForVideoRoomResponse
        
        
        @property { string } accessToken
        
         
    */
/**
        @typedef GetParticipantsInsideVideoRoomResponse
        
        
        @property { Array<Participant> } participants
        
         
    */
/**
        @typedef Participant
        
        
        @property { UserSchema } [user]
        
        @property { string } [identity]
        
        @property { string } [status]
        
         
    */
/**
        @typedef UserSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { Array<PhoneNumber> } [phoneNumbers]
        
        @property { Array<Email> } [emails]
        
        @property { string } [gender]
        
        @property { boolean } [active]
        
        @property { string } [profilePicUrl]
        
        @property { string } [username]
        
        @property { string } [accountType]
        
        @property { string } [uid]
        
        @property { Debug } [debug]
        
        @property { boolean } [hasOldPasswordHash]
        
        @property { string } [id]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef PhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [countryCode]
        
         
    */
/**
        @typedef Email
        
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef Debug
        
        
        @property { string } [source]
        
        @property { string } [platform]
        
         
    */
/**
        @typedef SubmitCustomFormResponse
        
        
        @property { Ticket } ticket
        
         
    */
/**
        @typedef TicketContext
        
        
        @property { string } [applicationId]
        
        @property { string } companyId
        
         
    */
/**
        @typedef CreatedOn
        
        
        @property { string } userAgent
        
         
    */
/**
        @typedef TicketAsset
        
        
        @property { string } [display]
        
        @property { string } value
        
        @property { string } type
        
         
    */
/**
        @typedef TicketContent
        
        
        @property { string } title
        
        @property { string } [description]
        
        @property { Array<TicketAsset> } [attachments]
        
         
    */
/**
        @typedef AddTicketPayload
        
        
        @property { string } status
        
        @property { string } priority
        
        @property { string } category
        
        @property { TicketContent } content
        
         
    */
/**
        @typedef Priority
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */
/**
        @typedef Status
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */
/**
        @typedef TicketCategory
        
        
        @property { string } key
        
        @property { string } display
        
        @property { CustomForm } [form]
        
         
    */
/**
        @typedef SubmitButton
        
        
        @property { string } title
        
        @property { string } titleColor
        
        @property { string } backgroundColor
        
         
    */
/**
        @typedef PollForAssignment
        
        
        @property { number } duration
        
        @property { string } message
        
        @property { string } successMessage
        
        @property { string } failureMessage
        
         
    */
/**
        @typedef CustomForm
        
        
        @property { string } applicationId
        
        @property { string } slug
        
        @property { string } [headerImage]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { boolean } loginRequired
        
        @property { boolean } shouldNotify
        
        @property { string } [successMessage]
        
        @property { SubmitButton } [submitButton]
        
        @property { Array<Object> } inputs
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { PollForAssignment } [pollForAssignment]
        
        @property { string } id
        
         
    */
/**
        @typedef TicketHistory
        
        
        @property { string } type
        
        @property { Object } value
        
        @property { string } ticketId
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { string } id
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */
/**
        @typedef Ticket
        
        
        @property { TicketContext } [context]
        
        @property { CreatedOn } [createdOn]
        
        @property { string } [responseId]
        
        @property { TicketContent } [content]
        
        @property { string } ticketId
        
        @property { TicketCategory } category
        
        @property { string } source
        
        @property { Status } status
        
        @property { Priority } priority
        
        @property { Object } [createdBy]
        
        @property { Object } [assignedTo]
        
        @property { Array<string> } [tags]
        
        @property { Object } [customJson]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */
/**
        @typedef Activity
        
        
        @property { Object } [currentState]
        
        @property { string } [documentId]
        
        @property { Object } [previousState]
        
         
    */
/**
        @typedef ActivityDump
        
        
        @property { Activity } [activity]
        
        @property { CreatedBy } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */
/**
        @typedef AddMediaListRequest
        
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { Array<AddMediaRequest> } [mediaList]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
         
    */
/**
        @typedef AddMediaRequest
        
        
        @property { string } [cloudId]
        
        @property { string } [cloudName]
        
        @property { string } [cloudProvider]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { string } [mediaUrl]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
        @property { Array<string> } [tags]
        
        @property { string } [thumbnailUrl]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ApproveRequest
        
        
        @property { boolean } [approve]
        
        @property { string } [entityType]
        
        @property { string } id
        
        @property { string } [reason]
        
         
    */
/**
        @typedef Attribute
        
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<TagMeta> } [tags]
        
         
    */
/**
        @typedef AttributeObject
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } type
        
        @property { number } value
        
         
    */
/**
        @typedef CreatedBy
        
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { Array<TagMeta> } [tags]
        
         
    */
/**
        @typedef CursorGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef DateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef DeviceMeta
        
        
        @property { string } [appVersion]
        
        @property { string } [platform]
        
         
    */
/**
        @typedef Entity
        
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */
/**
        @typedef EntityRequest
        
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
         
    */
/**
        @typedef FeedbackAttributes
        
        
        @property { Array<Attribute> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef FeedbackError
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { number } [status]
        
         
    */
/**
        @typedef FeedbackState
        
        
        @property { boolean } [active]
        
        @property { boolean } [archive]
        
        @property { string } [media]
        
        @property { boolean } [qna]
        
        @property { boolean } [rating]
        
        @property { boolean } [review]
        
         
    */
/**
        @typedef GetResponse
        
        
        @property { Object } [data]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef GetReviewResponse
        
        
        @property { Array<ReviewFacet> } [facets]
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
        @property { Array<SortMethod> } [sort]
        
         
    */
/**
        @typedef InsertResponse
        
        
        @property { number } [count]
        
         
    */
/**
        @typedef MediaMeta
        
        
        @property { number } [maxCount]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */
/**
        @typedef MediaMetaRequest
        
        
        @property { number } maxCount
        
        @property { number } size
        
         
    */
/**
        @typedef NumberGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PageCursor
        
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { number } size
        
        @property { string } type
        
         
    */
/**
        @typedef PageNumber
        
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Rating
        
        
        @property { Array<Attribute> } [attributes]
        
        @property { Array<string> } [attributesSlugs]
        
        @property { UI } [ui]
        
         
    */
/**
        @typedef RatingRequest
        
        
        @property { Array<string> } attributes
        
        @property { UI } [ui]
        
         
    */
/**
        @typedef ReportAbuseRequest
        
        
        @property { string } [description]
        
        @property { string } entityId
        
        @property { string } entityType
        
         
    */
/**
        @typedef Review
        
        
        @property { string } [description]
        
        @property { string } [header]
        
        @property { MediaMeta } [imageMeta]
        
        @property { string } [title]
        
        @property { MediaMeta } [videoMeta]
        
        @property { boolean } [voteAllowed]
        
         
    */
/**
        @typedef ReviewFacet
        
        
        @property { string } [display]
        
        @property { string } [name]
        
        @property { boolean } [selected]
        
        @property { string } [slug]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ReviewRequest
        
        
        @property { string } description
        
        @property { string } header
        
        @property { MediaMetaRequest } imageMeta
        
        @property { boolean } isVoteAllowed
        
        @property { string } title
        
        @property { MediaMetaRequest } videoMeta
        
         
    */
/**
        @typedef SaveAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } slug
        
         
    */
/**
        @typedef SortMethod
        
        
        @property { string } [name]
        
        @property { boolean } [selected]
        
        @property { string } [type]
        
         
    */
/**
        @typedef TagMeta
        
        
        @property { Array<MediaMeta> } [media]
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Template
        
        
        @property { DateMeta } [dateMeta]
        
        @property { Entity } [entity]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { Rating } [rating]
        
        @property { Review } [review]
        
        @property { FeedbackState } [state]
        
        @property { Array<TagMeta> } [tags]
        
         
    */
/**
        @typedef TemplateGetResponse
        
        
        @property { Array<Template> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef TemplateRequest
        
        
        @property { boolean } active
        
        @property { string } [enableMediaType]
        
        @property { boolean } [enableQna]
        
        @property { boolean } enableRating
        
        @property { boolean } enableReview
        
        @property { EntityRequest } entity
        
        @property { RatingRequest } rating
        
        @property { ReviewRequest } review
        
         
    */
/**
        @typedef TemplateRequestList
        
        
        @property { Array<TemplateRequest> } templateList
        
         
    */
/**
        @typedef UI
        
        
        @property { Array<string> } [feedbackQuestion]
        
        @property { UIIcon } [icon]
        
        @property { Array<string> } [text]
        
        @property { string } [type]
        
         
    */
/**
        @typedef UIIcon
        
        
        @property { string } [active]
        
        @property { string } [inactive]
        
        @property { Array<string> } [selected]
        
         
    */
/**
        @typedef UpdateAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
         
    */
/**
        @typedef UpdateResponse
        
        
        @property { number } [count]
        
         
    */
/**
        @typedef UpdateReviewRequest
        
        
        @property { boolean } [active]
        
        @property { string } [application]
        
        @property { boolean } [approve]
        
        @property { boolean } [archive]
        
        @property { Array<AttributeObject> } [attributesRating]
        
        @property { string } [description]
        
        @property { DeviceMeta } [deviceMeta]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { Array<MediaMeta> } [mediaResource]
        
        @property { number } [rating]
        
        @property { string } [reviewId]
        
        @property { string } [templateId]
        
        @property { string } [title]
        
         
    */
/**
        @typedef UpdateTemplateRequest
        
        
        @property { boolean } active
        
        @property { string } [enableMediaType]
        
        @property { boolean } [enableQna]
        
        @property { boolean } enableRating
        
        @property { boolean } enableReview
        
        @property { EntityRequest } entity
        
        @property { RatingRequest } rating
        
        @property { ReviewRequest } review
        
         
    */
/**
        @typedef UpdateTemplateStatusRequest
        
        
        @property { boolean } [active]
        
        @property { boolean } [archive]
        
         
    */
/**
        @typedef PaginationSchema
        
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { string } [type]
        
        @property { number } [current]
        
         
    */
/**
        @typedef ThemesListingResponseSchema
        
        
        @property { Array<ThemesSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */
/**
        @typedef AddThemeRequestSchema
        
        
        @property { string } [themeId]
        
         
    */
/**
        @typedef UpgradableThemeSchema
        
        
        @property { string } [parentTheme]
        
        @property { string } [appliedTheme]
        
        @property { boolean } [upgrade]
        
         
    */
/**
        @typedef FontsSchema
        
        
        @property { FontsSchemaItems } [items]
        
        @property { string } [kind]
        
         
    */
/**
        @typedef BlitzkriegApiErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef BlitzkriegNotFoundSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef BlitzkriegInternalServerErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef FontsSchemaItems
        
        
        @property { string } [family]
        
        @property { Array<string> } [variants]
        
        @property { Array<string> } [subsets]
        
        @property { string } [version]
        
        @property { string } [lastModified]
        
        @property { FontsSchemaItemsFiles } [files]
        
        @property { string } [category]
        
        @property { string } [kind]
        
         
    */
/**
        @typedef FontsSchemaItemsFiles
        
        
        @property { string } [regular]
        
        @property { string } [italic]
        
        @property { string } [bold]
        
         
    */
/**
        @typedef ThemesSchema
        
        
        @property { string } [application]
        
        @property { boolean } [applied]
        
        @property { boolean } [customized]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [version]
        
        @property { string } [parentThemeVersion]
        
        @property { string } [parentTheme]
        
        @property { Information } [information]
        
        @property { Array<string> } [tags]
        
        @property { Src } [src]
        
        @property { AssetsSchema } [assets]
        
        @property { AvailablePages } [availablePages]
        
        @property { Array<availableSectionSchema> } [availableSections]
        
        @property { Array<sectionSchema> } [sections]
        
        @property { Object } [constants]
        
        @property { Object } [styles]
        
        @property { Config } [config]
        
        @property { Object } [settings]
        
        @property { Font } [font]
        
        @property { string } [id]
        
        @property { number } [v]
        
        @property { Colors } [colors]
        
         
    */
/**
        @typedef pagesSchema
        
        
        @property { string } [text]
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { Sections } [sections]
        
         
    */
/**
        @typedef availableSectionSchema
        
        
        @property { Blocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
         
    */
/**
        @typedef sectionSchema
        
        
        @property { string } [pageKey]
        
        @property { PageSections } [pageSections]
        
         
    */
/**
        @typedef Information
        
        
        @property { Images } [images]
        
        @property { Array<string> } [features]
        
        @property { string } [name]
        
        @property { string } [description]
        
         
    */
/**
        @typedef Images
        
        
        @property { Array<string> } [desktop]
        
        @property { Array<string> } [android]
        
        @property { Array<string> } [ios]
        
        @property { Array<string> } [thumbnail]
        
         
    */
/**
        @typedef Src
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef AssetsSchema
        
        
        @property { UmdJs } [umdJs]
        
        @property { CommonJs } [commonJs]
        
        @property { Css } [css]
        
         
    */
/**
        @typedef UmdJs
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef CommonJs
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef Css
        
        
        @property { string } [link]
        
         
    */
/**
        @typedef AvailablePages
        
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { Seo } [seo]
        
        @property { Object } [props]
        
        @property { Sections } [sections]
        
         
    */
/**
        @typedef Seo
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */
/**
        @typedef Sections
        
        
        @property { string } [attributes]
        
         
    */
/**
        @typedef Config
        
        
        @property { Preset } [preset]
        
        @property { GlobalSchema } [globalSchema]
        
        @property { string } [current]
        
        @property { ListSchema } [list]
        
         
    */
/**
        @typedef Preset
        
        
        @property { sectionSchema } [sections]
        
         
    */
/**
        @typedef GlobalSchema
        
        
        @property { Object } [props]
        
         
    */
/**
        @typedef ListSchema
        
        
        @property { Object } [global]
        
        @property { ConfigPage } [page]
        
        @property { string } [name]
        
         
    */
/**
        @typedef Colors
        
        
        @property { string } [bgColor]
        
        @property { string } [primaryColor]
        
        @property { string } [secondaryColor]
        
        @property { string } [accentColor]
        
        @property { string } [linkColor]
        
        @property { string } [buttonSecondaryColor]
        
         
    */
/**
        @typedef Custom
        
        
        @property { Object } [props]
        
         
    */
/**
        @typedef ConfigPage
        
        
        @property { Object } [settings]
        
        @property { string } [page]
        
         
    */
/**
        @typedef Font
        
        
        @property { string } [family]
        
        @property { Variants } [variants]
        
         
    */
/**
        @typedef Variants
        
        
        @property { Medium } [medium]
        
        @property { SemiBold } [semiBold]
        
        @property { Bold } [bold]
        
        @property { Light } [light]
        
        @property { Regular } [regular]
        
         
    */
/**
        @typedef Medium
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef SemiBold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Bold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Light
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Regular
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */
/**
        @typedef Blocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { BlocksProps } [props]
        
         
    */
/**
        @typedef BlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */
/**
        @typedef PageSections
        
        
        @property { PageSectionsBlocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
        @property { Object } [preset]
        
        @property { Predicate } [predicate]
        
         
    */
/**
        @typedef PageSectionsBlocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { PageSectionsBlocksProps } [props]
        
         
    */
/**
        @typedef PageSectionsBlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Predicate
        
        
        @property { Screen } [screen]
        
        @property { PredicateUserSchema } [user]
        
        @property { Route } [route]
        
         
    */
/**
        @typedef Screen
        
        
        @property { boolean } [mobile]
        
        @property { boolean } [desktop]
        
        @property { boolean } [tablet]
        
         
    */
/**
        @typedef PredicateUserSchema
        
        
        @property { boolean } [authenticated]
        
        @property { boolean } [anonymous]
        
         
    */
/**
        @typedef Route
        
        
        @property { string } [selected]
        
        @property { string } [exactUrl]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef EditEmailRequestSchema
        
        
        @property { string } [email]
        
         
    */
/**
        @typedef SendVerificationLinkMobileRequestSchema
        
        
        @property { boolean } [verified]
        
        @property { boolean } [active]
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */
/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [mobile]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profilePicUrl]
        
        @property { string } [androidHash]
        
        @property { string } [sender]
        
        @property { string } [registerToken]
        
         
    */
/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [registerToken]
        
         
    */
/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [requestId]
        
        @property { string } [registerToken]
        
        @property { string } [otp]
        
         
    */
/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [androidHash]
        
        @property { string } [force]
        
         
    */
/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [oldPassword]
        
        @property { string } [newPassword]
        
         
    */
/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { FormRegisterRequestSchemaPhone } [phone]
        
        @property { string } [registerToken]
        
         
    */
/**
        @typedef TokenRequestBodySchema
        
        
        @property { string } [token]
        
         
    */
/**
        @typedef ForgotPasswordRequestSchema
        
        
        @property { string } [code]
        
        @property { string } [password]
        
         
    */
/**
        @typedef CodeRequestBodySchema
        
        
        @property { string } [code]
        
         
    */
/**
        @typedef SendResetPasswordEmailRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [captchaCode]
        
         
    */
/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [captchaCode]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */
/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [captchaCode]
        
        @property { string } [mobile]
        
         
    */
/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [isSignedIn]
        
        @property { OAuthRequestSchemaOauth2 } [oauth2]
        
        @property { OAuthRequestSchemaProfile } [profile]
        
         
    */
/**
        @typedef AuthSuccess
        
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
        @property { AuthSuccessUser } [user]
        
         
    */
/**
        @typedef SendOtpResponse
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
         
    */
/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [userExists]
        
         
    */
/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */
/**
        @typedef RegisterFormSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef VerifyEmailSuccess
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef HasPasswordSuccess
        
        
        @property { boolean } [result]
        
         
    */
/**
        @typedef LogoutSuccess
        
        
        @property { boolean } [logout]
        
         
    */
/**
        @typedef OtpSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef EmailOtpSuccess
        
        
        @property { string } [resendToken]
        
         
    */
/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */
/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyMobileLink]
        
         
    */
/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyEmailLink]
        
         
    */
/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verifyMobileLink]
        
         
    */
/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verifyEmailLink]
        
         
    */
/**
        @typedef UserSearchResponseSchema
        
        
        @property { Array<UserSchema> } [users]
        
         
    */
/**
        @typedef CustomerListResponseSchema
        
        
        @property { Array<UserSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */
/**
        @typedef UnauthorizedSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnauthenticatedSchema
        
        
        @property { boolean } [authenticated]
        
         
    */
/**
        @typedef NotFoundSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef AuthenticationApiErrorSchema
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef ProfileEditSuccessSchema
        
        
        @property { string } [email]
        
        @property { boolean } [verifyEmailOtp]
        
        @property { boolean } [verifyEmailLink]
        
        @property { boolean } [verifyMobileOtp]
        
        @property { string } [user]
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
         
    */
/**
        @typedef FormRegisterRequestSchemaPhone
        
        
        @property { string } [countryCode]
        
        @property { string } [mobile]
        
         
    */
/**
        @typedef OAuthRequestSchemaOauth2
        
        
        @property { string } [accessToken]
        
        @property { number } [expiry]
        
        @property { string } [refreshToken]
        
         
    */
/**
        @typedef OAuthRequestSchemaProfile
        
        
        @property { string } [lastName]
        
        @property { string } [image]
        
        @property { string } [id]
        
        @property { string } [email]
        
        @property { string } [fullName]
        
        @property { string } [firstName]
        
         
    */
/**
        @typedef AuthSuccessUser
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { AuthSuccessUserDebug } [debug]
        
        @property { boolean } [active]
        
        @property { AuthSuccessUserEmails } [emails]
        
         
    */
/**
        @typedef AuthSuccessUserDebug
        
        
        @property { string } [platform]
        
         
    */
/**
        @typedef AuthSuccessUserEmails
        
        
        @property { string } [email]
        
        @property { boolean } [verified]
        
        @property { boolean } [primary]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef PlatformSchema
        
        
        @property { string } [display]
        
        @property { LookAndFeel } [lookAndFeel]
        
        @property { string } [updatedAt]
        
        @property { boolean } [active]
        
        @property { boolean } [forgotPassword]
        
        @property { Login } [login]
        
        @property { boolean } [skipCaptcha]
        
        @property { string } [name]
        
        @property { MetaSchema } [meta]
        
        @property { string } [id]
        
        @property { Social } [social]
        
        @property { RequiredFields } [requiredFields]
        
        @property { RegisterRequiredFields } [registerRequiredFields]
        
        @property { boolean } [skipLogin]
        
        @property { FlashCard } [flashCard]
        
        @property { string } [subtext]
        
        @property { SocialTokens } [socialTokens]
        
        @property { string } [createdAt]
        
        @property { boolean } [register]
        
         
    */
/**
        @typedef LookAndFeel
        
        
        @property { string } [cardPosition]
        
        @property { string } [backgroundColor]
        
         
    */
/**
        @typedef Login
        
        
        @property { boolean } [password]
        
        @property { boolean } [otp]
        
         
    */
/**
        @typedef MetaSchema
        
        
        @property { boolean } [fyndDefault]
        
         
    */
/**
        @typedef Social
        
        
        @property { boolean } [accountKit]
        
        @property { boolean } [facebook]
        
        @property { boolean } [google]
        
         
    */
/**
        @typedef RequiredFields
        
        
        @property { Email } [email]
        
        @property { Mobile } [mobile]
        
         
    */
/**
        @typedef Mobile
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */
/**
        @typedef RegisterRequiredFields
        
        
        @property { RegisterRequiredFieldsEmail } [email]
        
        @property { RegisterRequiredFieldsMobile } [mobile]
        
         
    */
/**
        @typedef RegisterRequiredFieldsEmail
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */
/**
        @typedef RegisterRequiredFieldsMobile
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */
/**
        @typedef FlashCard
        
        
        @property { string } [text]
        
        @property { string } [textColor]
        
        @property { string } [backgroundColor]
        
         
    */
/**
        @typedef SocialTokens
        
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountKit]
        
        @property { Google } [google]
        
         
    */
/**
        @typedef Facebook
        
        
        @property { string } [appId]
        
         
    */
/**
        @typedef Accountkit
        
        
        @property { string } [appId]
        
         
    */
/**
        @typedef Google
        
        
        @property { string } [appId]
        
         
    */
/**
        @typedef ApplicationLegal
        
        
        @property { string } [application]
        
        @property { string } [tnc]
        
        @property { string } [policy]
        
        @property { string } [shipping]
        
        @property { Array<ApplicationLegalFAQ> } [faq]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */
/**
        @typedef ApplicationLegalFAQ
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */
/**
        @typedef SeoComponent
        
        
        @property { SeoSchema } [seo]
        
         
    */
/**
        @typedef SeoSchema
        
        
        @property { string } [app]
        
        @property { string } [id]
        
        @property { string } [robotsTxt]
        
        @property { boolean } [sitemapEnabled]
        
        @property { Array<Object> } [customMetaTags]
        
        @property { Object } [details]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef CustomMetaTag
        
        
        @property { string } [name]
        
        @property { string } [content]
        
        @property { string } [id]
        
         
    */
/**
        @typedef Detail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */
/**
        @typedef StorefrontAnnouncement
        
        
        @property { AnnouncementSchema } [announcements]
        
        @property { number } [refreshRate]
        
        @property { Array<string> } [refreshPages]
        
         
    */
/**
        @typedef AnnouncementPageSchema
        
        
        @property { string } [pageSlug]
        
        @property { string } [type]
        
         
    */
/**
        @typedef EditorMeta
        
        
        @property { string } [foregroundColor]
        
        @property { string } [backgroundColor]
        
        @property { string } [contentType]
        
        @property { string } [content]
        
         
    */
/**
        @typedef AnnouncementAuthorSchema
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
         
    */
/**
        @typedef AdminAnnouncementSchema
        
        
        @property { string } [id]
        
        @property { Array<string> } [platforms]
        
        @property { string } [title]
        
        @property { string } [announcement]
        
        @property { Array<AnnouncementPageSchema> } [pages]
        
        @property { EditorMeta } [editorMeta]
        
        @property { AnnouncementAuthorSchema } [author]
        
        @property { string } [createdAt]
        
        @property { string } [app]
        
        @property { string } [modifiedAt]
        
        @property { ScheduleSchema } [schedule]
        
         
    */
/**
        @typedef ScheduleSchema
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { Array<Object> } [nextSchedule]
        
         
    */
/**
        @typedef NextSchedule
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef AnnouncementSchema
        
        
        @property { Array<Object> } [pageSlug]
        
         
    */
/**
        @typedef announcementSchema
        
        
        @property { string } [announcement]
        
        @property { scheduleStartSchema } [schedule]
        
         
    */
/**
        @typedef scheduleStartSchema
        
        
        @property { string } [start]
        
         
    */
/**
        @typedef BlogGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ResourceContent
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Asset
        
        
        @property { string } [aspectRatio]
        
        @property { string } [id]
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef Author
        
        
        @property { string } [designation]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */
/**
        @typedef BlogSchema
        
        
        @property { string } [id]
        
        @property { Object } [customJson]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [schedule]
        
        @property { string } [title]
        
        @property { DateMeta } [dateMeta]
        
         
    */
/**
        @typedef SEO
        
        
        @property { string } [description]
        
        @property { SEOImage } [image]
        
        @property { string } [title]
        
         
    */
/**
        @typedef SEOImage
        
        
        @property { string } [url]
        
         
    */
/**
        @typedef BlogRequest
        
        
        @property { string } [application]
        
        @property { Object } [customJson]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [schedule]
        
         
    */
/**
        @typedef GetAnnouncementListSchema
        
        
        @property { Array<AdminAnnouncementSchema> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef CreateAnnouncementSchema
        
        
        @property { string } [message]
        
        @property { AdminAnnouncementSchema } [data]
        
         
    */
/**
        @typedef Navigation
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [orientation]
        
        @property { CreatedBySchema } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [position]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { NavigationReference } [navigation]
        
         
    */
/**
        @typedef LocaleLanguage
        
        
        @property { Language } [hi]
        
        @property { Language } [ar]
        
        @property { Language } [enUs]
        
         
    */
/**
        @typedef Language
        
        
        @property { string } [display]
        
         
    */
/**
        @typedef Action
        
        
        @property { ActionPage } [page]
        
        @property { ActionPage } [popup]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ActionPage
        
        
        @property { Object } [params]
        
        @property { Object } [query]
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */
/**
        @typedef NavigationReference
        
        
        @property { Array<string> } [acl]
        
        @property { Array<string> } [tags]
        
        @property { LocaleLanguage } [localeLanguage]
        
        @property { string } [image]
        
        @property { string } [type]
        
        @property { Action } [action]
        
        @property { boolean } [active]
        
        @property { string } [display]
        
        @property { number } [sortOrder]
        
        @property { NavigationReference } [subNavigation]
        
         
    */
/**
        @typedef LandingPage
        
        
        @property { LandingPageSchema } [data]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef ConfigurationSchema
        
        
        @property { number } [sleepTime]
        
        @property { boolean } [startOnLaunch]
        
        @property { number } [duration]
        
        @property { string } [slideDirection]
        
         
    */
/**
        @typedef SlideshowMedia
        
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [bgColor]
        
        @property { number } [duration]
        
        @property { boolean } [autoDecideDuration]
        
        @property { Action } [action]
        
         
    */
/**
        @typedef Slideshow
        
        
        @property { SlideshowSchema } [data]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef AnnouncementsResponseSchema
        
        
        @property { Object } [announcements]
        
        @property { number } [refreshRate]
        
        @property { Array<string> } [refreshPages]
        
         
    */
/**
        @typedef AnnouncementDataSchema
        
        
        @property { string } [pageSlug]
        
        @property { StorefrontAnnouncement } [announcement]
        
         
    */
/**
        @typedef FaqResponseSchema
        
        
        @property { Array<FAQ> } [faqs]
        
         
    */
/**
        @typedef UpdateHandpickedSchema
        
        
        @property { HandpickedTagSchema } [tag]
        
         
    */
/**
        @typedef HandpickedTagSchema
        
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [subType]
        
        @property { string } [content]
        
         
    */
/**
        @typedef RemoveHandpickedSchema
        
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef CreateTagSchema
        
        
        @property { string } [name]
        
        @property { string } [subType]
        
        @property { string } [id]
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
    */
/**
        @typedef CreateTagRequestSchema
        
        
        @property { Array<CreateTagSchema> } [tags]
        
         
    */
/**
        @typedef APIError
        
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef CategorySchema
        
        
        @property { number } [index]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } [application]
        
         
    */
/**
        @typedef ChildrenSchema
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [id]
        
         
    */
/**
        @typedef CategoryRequestSchema
        
        
        @property { string } [slug]
        
        @property { string } [title]
        
         
    */
/**
        @typedef FAQCategorySchema
        
        
        @property { number } [index]
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { ChildrenSchema } [children]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [iconUrl]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef FaqSchema
        
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [id]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */
/**
        @typedef FAQ
        
        
        @property { string } [slug]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */
/**
        @typedef CreateFaqResponseSchema
        
        
        @property { FaqSchema } [faq]
        
         
    */
/**
        @typedef CreateFaqSchema
        
        
        @property { FAQ } [faq]
        
         
    */
/**
        @typedef GetFaqSchema
        
        
        @property { Array<Object> } [faqs]
        
         
    */
/**
        @typedef UpdateFaqCategoryRequestSchema
        
        
        @property { CategorySchema } [category]
        
         
    */
/**
        @typedef CreateFaqCategoryRequestSchema
        
        
        @property { CategoryRequestSchema } [category]
        
         
    */
/**
        @typedef CreateFaqCategorySchema
        
        
        @property { CategorySchema } [category]
        
         
    */
/**
        @typedef GetFaqCategoriesSchema
        
        
        @property { Array<CategorySchema> } [categories]
        
         
    */
/**
        @typedef GetFaqCategoryBySlugSchema
        
        
        @property { FAQCategorySchema } [category]
        
         
    */
/**
        @typedef LandingPageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef LandingPageSchema
        
        
        @property { string } [slug]
        
        @property { Action } [action]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBySchema } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef DefaultNavigationResponse
        
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef NavigationGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Orientation
        
        
        @property { Array<string> } [portrait]
        
        @property { Array<string> } [landscape]
        
         
    */
/**
        @typedef NavigationSchema
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBySchema } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { Orientation } [orientation]
        
        @property { number } [version]
        
        @property { NavigationReference } [navigation]
        
         
    */
/**
        @typedef NavigationRequest
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { Orientation } [orientation]
        
        @property { NavigationReference } [navigation]
        
         
    */
/**
        @typedef CustomPageSchema
        
        
        @property { string } [id]
        
        @property { string } [platform]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [type]
        
        @property { string } [orientation]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { boolean } [published]
        
        @property { Array<string> } [tags]
        
        @property { Array<ContentSchema> } [content]
        
        @property { CreatedBySchema } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { ScheduleSchema } [schedule]
        
         
    */
/**
        @typedef ContentSchema
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */
/**
        @typedef CustomPage
        
        
        @property { CustomPageSchema } [data]
        
         
    */
/**
        @typedef CustomBlogSchema
        
        
        @property { string } [id]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [readingTime]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { FeatureImage } [featureImage]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { Array<string> } [tags]
        
        @property { ContentSchema } [content]
        
        @property { Author } [author]
        
        @property { ScheduleSchema } [schedule]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef FeatureImage
        
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef CustomBlog
        
        
        @property { CustomBlogSchema } [data]
        
         
    */
/**
        @typedef PageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PageSpec
        
        
        @property { Array<Object> } [specifications]
        
         
    */
/**
        @typedef PageSpecParam
        
        
        @property { string } [key]
        
        @property { boolean } [required]
        
         
    */
/**
        @typedef PageSpecItem
        
        
        @property { string } [pageType]
        
        @property { string } [displayName]
        
        @property { Array<PageSpecParam> } [params]
        
        @property { Array<PageSpecParam> } [query]
        
         
    */
/**
        @typedef PageSchema
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { Array<string> } [componentIds]
        
        @property { Array<PageContent> } [content]
        
        @property { Object } [createdBy]
        
        @property { Object } [dateMeta]
        
        @property { string } [description]
        
        @property { Object } [featureImage]
        
        @property { Array<PageMeta> } [pageMeta]
        
        @property { ScheduleSchema } [schedule]
        
        @property { Object } [customJson]
        
        @property { string } [orientation]
        
        @property { string } [platform]
        
        @property { boolean } [published]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { SEO } [seo]
        
        @property { Object } [visibility]
        
         
    */
/**
        @typedef CreatedBySchema
        
        
        @property { string } [id]
        
         
    */
/**
        @typedef PageContent
        
        
        @property { string } [type]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef PageMeta
        
        
        @property { string } [key]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef PageRequest
        
        
        @property { CronSchedule } [schedule]
        
        @property { string } [application]
        
        @property { Object } [author]
        
        @property { Object } [customJson]
        
        @property { string } [orientation]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { string } [title]
        
         
    */
/**
        @typedef CronSchedule
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
         
    */
/**
        @typedef PagePublishRequest
        
        
        @property { boolean } [publish]
        
         
    */
/**
        @typedef PageMetaSchema
        
        
        @property { Array<Object> } [systemPages]
        
        @property { Array<Object> } [customPages]
        
        @property { string } [applicationId]
        
         
    */
/**
        @typedef SlideshowGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SlideshowSchema
        
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Array<SlideshowMedia> } [media]
        
        @property { boolean } [active]
        
        @property { boolean } [archived]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef SlideshowRequest
        
        
        @property { string } [slug]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { SlideshowMedia } [media]
        
        @property { boolean } [active]
        
         
    */
/**
        @typedef Support
        
        
        @property { boolean } [created]
        
        @property { string } [id]
        
        @property { string } [configType]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { ContactSchema } [contact]
        
         
    */
/**
        @typedef PhoneProperties
        
        
        @property { string } [key]
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */
/**
        @typedef PhoneSchema
        
        
        @property { boolean } [active]
        
        @property { Array<PhoneProperties> } [phone]
        
         
    */
/**
        @typedef EmailProperties
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */
/**
        @typedef EmailSchema
        
        
        @property { boolean } [active]
        
        @property { Array<EmailProperties> } [email]
        
         
    */
/**
        @typedef ContactSchema
        
        
        @property { PhoneSchema } [phone]
        
        @property { EmailSchema } [email]
        
         
    */
/**
        @typedef TagsSchema
        
        
        @property { string } [application]
        
        @property { string } [id]
        
        @property { Array<TagSchema> } [tags]
        
         
    */
/**
        @typedef TagSchema
        
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [subType]
        
        @property { string } [id]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
    */
/**
        @typedef UnauthenticatedUser
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnauthenticatedApplication
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef BadRequest
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef ResourceNotFound
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef InternalServerError
        
        
        @property { string } [message]
        
        @property { string } [code]
        
         
    */
/**
        @typedef PlanRecurring
        
        
        @property { string } [interval]
        
        @property { number } [intervalCount]
        
         
    */
/**
        @typedef Plan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
    */
/**
        @typedef DetailedPlanComponents
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [description]
        
        @property { string } [group]
        
        @property { string } [icon]
        
        @property { Object } [links]
        
        @property { boolean } [enabled]
        
        @property { string } [displayText]
        
         
    */
/**
        @typedef DetailedPlan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { Array<DetailedPlanComponents> } [components]
        
         
    */
/**
        @typedef InvoiceDetailsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef InvoiceDetailsClient
        
        
        @property { Array<string> } [addressLines]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef InvoiceDetailsStatusTrail
        
        
        @property { string } [id]
        
        @property { string } [value]
        
        @property { string } [timestamp]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethodsDataChecks
        
        
        @property { string } [cvcCheck]
        
        @property { string } [addressLine1Check]
        
        @property { string } [addressPostalCodeCheck]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethodsDataNetworks
        
        
        @property { Array<string> } [available]
        
        @property { string } [preferred]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
        
        
        @property { boolean } [supported]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethodsData
        
        
        @property { string } [brand]
        
        @property { string } [last4]
        
        @property { InvoiceDetailsPaymentMethodsDataChecks } [checks]
        
        @property { string } [wallet]
        
        @property { string } [country]
        
        @property { string } [funding]
        
        @property { number } [expYear]
        
        @property { InvoiceDetailsPaymentMethodsDataNetworks } [networks]
        
        @property { number } [expMonth]
        
        @property { string } [fingerprint]
        
        @property { string } [generatedFrom]
        
        @property { InvoiceDetailsPaymentMethodsDataThreeDSecureUsage } [threeDSecureUsage]
        
         
    */
/**
        @typedef InvoiceDetailsPaymentMethods
        
        
        @property { number } [id]
        
        @property { string } [type]
        
        @property { string } [pgPaymentMethodId]
        
        @property { InvoiceDetailsPaymentMethodsData } [data]
        
        @property { boolean } [isDefault]
        
         
    */
/**
        @typedef InvoicePaymentMethod
        
        
        @property { string } [pgPaymentMethodId]
        
         
    */
/**
        @typedef InvoiceDetails
        
        
        @property { InvoiceDetailsPeriod } [period]
        
        @property { InvoiceDetailsClient } [client]
        
        @property { boolean } [autoAdvance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [id]
        
        @property { string } [collectionMethod]
        
        @property { string } [subscriberId]
        
        @property { string } [invoiceUrl]
        
        @property { string } [number]
        
        @property { Object } [pgData]
        
        @property { string } [receiptNumber]
        
        @property { string } [statementDescriptor]
        
        @property { string } [currentStatus]
        
        @property { Array<InvoiceDetailsStatusTrail> } [statusTrail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [nextActionTime]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { string } [hashIdentifier]
        
        @property { InvoicePaymentMethod } [paymentMethod]
        
         
    */
/**
        @typedef InvoiceItemsPlanRecurring
        
        
        @property { string } [interval]
        
        @property { number } [intervalCount]
        
         
    */
/**
        @typedef InvoiceItemsPlan
        
        
        @property { InvoiceItemsPlanRecurring } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
    */
/**
        @typedef InvoiceItemsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef InvoiceItems
        
        
        @property { string } [id]
        
        @property { string } [currency]
        
        @property { InvoiceItemsPlan } [plan]
        
        @property { string } [name]
        
        @property { number } [quantity]
        
        @property { string } [description]
        
        @property { InvoiceItemsPeriod } [period]
        
        @property { number } [unitAmount]
        
        @property { number } [amount]
        
        @property { string } [type]
        
        @property { string } [invoiceId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
    */
/**
        @typedef Invoice
        
        
        @property { InvoiceDetails } [invoice]
        
        @property { Array<InvoiceItems> } [invoiceItems]
        
         
    */
/**
        @typedef InvoicesDataClient
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { Array<string> } [addressLines]
        
         
    */
/**
        @typedef InvoicesDataPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef InvoicesDataPaymentMethod
        
        
        @property { string } [pgPaymentMethodId]
        
         
    */
/**
        @typedef InvoicesData
        
        
        @property { string } [id]
        
        @property { InvoicesDataClient } [client]
        
        @property { boolean } [autoAdvance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [collectionMethod]
        
        @property { string } [subscriberId]
        
        @property { string } [invoiceUrl]
        
        @property { string } [number]
        
        @property { Object } [pgData]
        
        @property { InvoicesDataPeriod } [period]
        
        @property { string } [receiptNumber]
        
        @property { string } [statementDescriptor]
        
        @property { string } [currentStatus]
        
        @property { Array<InvoiceDetailsStatusTrail> } [statusTrail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [nextActionTime]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { string } [hashIdentifier]
        
        @property { InvoicesDataPaymentMethod } [paymentMethod]
        
        @property { Array<InvoiceItems> } [invoiceItems]
        
         
    */
/**
        @typedef Invoices
        
        
        @property { Array<InvoicesData> } [data]
        
        @property { number } [start]
        
        @property { number } [end]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [total]
        
         
    */
/**
        @typedef Phone
        
        
        @property { string } [phoneNumber]
        
        @property { string } [phoneCountryCode]
        
         
    */
/**
        @typedef SubscriptionBillingAddress
        
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [line1]
        
        @property { string } [line2]
        
        @property { string } [postalCode]
        
         
    */
/**
        @typedef SubscriptionCustomer
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billingAddress]
        
        @property { string } [id]
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef SubscriptionCustomerCreate
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billingAddress]
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */
/**
        @typedef SubscriptionCurrentPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef SubscriptionPauseCollection
        
        
        @property { string } [behavior]
        
        @property { string } [resumeAt]
        
         
    */
/**
        @typedef SubscriptionTrial
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */
/**
        @typedef SubscriptionInvoiceSettings
        
        
        @property { boolean } [generation]
        
        @property { boolean } [charging]
        
         
    */
/**
        @typedef Subscription
        
        
        @property { SubscriptionCurrentPeriod } [currentPeriod]
        
        @property { SubscriptionPauseCollection } [pauseCollection]
        
        @property { SubscriptionTrial } [trial]
        
        @property { SubscriptionInvoiceSettings } [invoiceSettings]
        
        @property { boolean } [isActive]
        
        @property { boolean } [cancelAtPeriodEnd]
        
        @property { string } [id]
        
        @property { string } [subscriberId]
        
        @property { string } [planId]
        
        @property { string } [productSuiteId]
        
        @property { Plan } [planData]
        
        @property { string } [currentStatus]
        
        @property { string } [collectionMethod]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { string } [latestInvoice]
        
         
    */
/**
        @typedef SubscriptionStatus
        
        
        @property { boolean } [isEnabled]
        
        @property { Subscription } [subscription]
        
         
    */
/**
        @typedef SubscriptionLimitApplication
        
        
        @property { boolean } [enabled]
        
        @property { number } [hardLimit]
        
        @property { number } [softLimit]
        
         
    */
/**
        @typedef SubscriptionLimitMarketplace
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SubscriptionLimitOtherPlatform
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SubscriptionLimitTeam
        
        
        @property { number } [limit]
        
         
    */
/**
        @typedef SubscriptionLimitProducts
        
        
        @property { boolean } [bulk]
        
        @property { number } [limit]
        
         
    */
/**
        @typedef SubscriptionLimitExtensions
        
        
        @property { boolean } [enabled]
        
        @property { number } [limit]
        
         
    */
/**
        @typedef SubscriptionLimitIntegrations
        
        
        @property { boolean } [enabled]
        
        @property { number } [limit]
        
         
    */
/**
        @typedef SubscriptionLimit
        
        
        @property { SubscriptionLimitApplication } [application]
        
        @property { SubscriptionLimitMarketplace } [marketplace]
        
        @property { SubscriptionLimitOtherPlatform } [otherPlatform]
        
        @property { SubscriptionLimitTeam } [team]
        
        @property { SubscriptionLimitProducts } [products]
        
        @property { SubscriptionLimitExtensions } [extensions]
        
        @property { SubscriptionLimitIntegrations } [integrations]
        
        @property { boolean } [isTrialPlan]
        
         
    */
/**
        @typedef SubscriptionActivateReq
        
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [productSuite]
        
        @property { string } [planId]
        
        @property { string } [paymentMethod]
        
         
    */
/**
        @typedef SubscriptionActivateRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
    */
/**
        @typedef CancelSubscriptionReq
        
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [productSuite]
        
        @property { string } [subscriptionId]
        
         
    */
/**
        @typedef CancelSubscriptionRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
    */
/**
        @typedef StatsImported
        
        
        @property { number } [count]
        
         
    */
/**
        @typedef StatsProcessedEmail
        
        
        @property { number } [success]
        
        @property { number } [failed]
        
        @property { number } [suppressed]
        
         
    */
/**
        @typedef StatsProcessedSms
        
        
        @property { number } [success]
        
        @property { number } [failed]
        
        @property { number } [suppressed]
        
         
    */
/**
        @typedef StatsProcessed
        
        
        @property { StatsProcessedEmail } [email]
        
        @property { StatsProcessedSms } [sms]
        
         
    */
/**
        @typedef Stats
        
        
        @property { string } [id]
        
        @property { any } [imported]
        
        @property { any } [processed]
        
         
    */
/**
        @typedef GetStats
        
        
        @property { Array<Stats> } [items]
        
         
    */
/**
        @typedef CampaignReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
         
    */
/**
        @typedef RecipientHeaders
        
        
        @property { string } [email]
        
         
    */
/**
        @typedef CampaignEmailTemplate
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */
/**
        @typedef CampignEmailProvider
        
        
        @property { string } [id]
        
        @property { string } [fromName]
        
        @property { string } [fromEmail]
        
         
    */
/**
        @typedef CampaignEmail
        
        
        @property { CampaignEmailTemplate } [template]
        
        @property { CampignEmailProvider } [provider]
        
         
    */
/**
        @typedef Campaign
        
        
        @property { RecipientHeaders } [recipientHeaders]
        
        @property { CampaignEmail } [email]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [datasource]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Campaigns
        
        
        @property { Array<Campaign> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef BigqueryHeadersReq
        
        
        @property { string } [query]
        
        @property { string } [type]
        
         
    */
/**
        @typedef BigqueryHeadersResHeaders
        
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */
/**
        @typedef BigqueryHeadersRes
        
        
        @property { Array<BigqueryHeadersResHeaders> } [headers]
        
         
    */
/**
        @typedef GetNRecordsCsvReq
        
        
        @property { string } [url]
        
        @property { boolean } [header]
        
        @property { number } [count]
        
         
    */
/**
        @typedef GetNRecordsCsvResItems
        
        
        @property { string } [phoneNumber]
        
        @property { string } [email]
        
        @property { string } [firstname]
        
        @property { string } [lastname]
        
        @property { string } [orderid]
        
         
    */
/**
        @typedef GetNRecordsCsvRes
        
        
        @property { Array<GetNRecordsCsvResItems> } [items]
        
         
    */
/**
        @typedef AudienceReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
         
    */
/**
        @typedef Audience
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Audiences
        
        
        @property { Array<Audience> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef EmailProviderReqFrom
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { boolean } [isDefault]
        
         
    */
/**
        @typedef EmailProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [apiKey]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
         
    */
/**
        @typedef EmailProvider
        
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [apiKey]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef EmailProviders
        
        
        @property { Array<EmailProvider> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef EmailTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef EmailTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef EmailTemplateKeys
        
        
        @property { string } [to]
        
        @property { string } [cc]
        
        @property { string } [bcc]
        
         
    */
/**
        @typedef EmailTemplateHeaders
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */
/**
        @typedef EmailTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { Array<string> } [staticTo]
        
        @property { Array<string> } [staticCc]
        
        @property { Array<string> } [staticBcc]
        
        @property { string } [replyTo]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */
/**
        @typedef TemplateAndType
        
        
        @property { string } [templateType]
        
        @property { string } [template]
        
         
    */
/**
        @typedef EmailTemplateRes
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<string> } [staticTo]
        
        @property { Array<string> } [staticCc]
        
        @property { Array<string> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { string } [replyTo]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef EmailTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [staticTo]
        
        @property { Array<any> } [staticCc]
        
        @property { Array<any> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [fromName]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SystemEmailTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [staticTo]
        
        @property { Array<any> } [staticCc]
        
        @property { Array<any> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [fromName]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef EmailTemplates
        
        
        @property { Array<EmailTemplate> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SystemEmailTemplates
        
        
        @property { Array<SystemEmailTemplate> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef EventSubscriptionTemplateSms
        
        
        @property { boolean } [subscribed]
        
        @property { string } [template]
        
         
    */
/**
        @typedef EventSubscriptionTemplateEmail
        
        
        @property { boolean } [subscribed]
        
        @property { string } [template]
        
         
    */
/**
        @typedef EventSubscriptionTemplate
        
        
        @property { EventSubscriptionTemplateSms } [sms]
        
        @property { EventSubscriptionTemplateEmail } [email]
        
         
    */
/**
        @typedef EventSubscription
        
        
        @property { EventSubscriptionTemplate } [template]
        
        @property { boolean } [isDefault]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [event]
        
        @property { string } [slug]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef EventSubscriptions
        
        
        @property { Array<EventSubscription> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef TriggerJobResponse
        
        
        @property { number } [status]
        
         
    */
/**
        @typedef TriggerJobRequest
        
        
        @property { string } [jobId]
        
         
    */
/**
        @typedef Job
        
        
        @property { boolean } [completed]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [campaign]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Jobs
        
        
        @property { Array<any> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef JobLog
        
        
        @property { any } [imported]
        
        @property { any } [processed]
        
        @property { string } [id]
        
        @property { string } [job]
        
        @property { string } [campaign]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef JobLogs
        
        
        @property { Array<JobLog> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef LogEmail
        
        
        @property { string } [template]
        
         
    */
/**
        @typedef LogPushnotification
        
        
        @property { Array<string> } [pushtokens]
        
         
    */
/**
        @typedef LogMeta
        
        
        @property { string } [type]
        
        @property { string } [identifier]
        
        @property { string } [key]
        
        @property { string } [offset]
        
        @property { string } [partition]
        
        @property { string } [topic]
        
         
    */
/**
        @typedef Log
        
        
        @property { LogEmail } [email]
        
        @property { LogPushnotification } [pushnotification]
        
        @property { LogMeta } [meta]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [service]
        
        @property { string } [step]
        
        @property { string } [status]
        
        @property { any } [data]
        
        @property { string } [expireAt]
        
        @property { string } [createdAt]
        
         
    */
/**
        @typedef Logs
        
        
        @property { Array<Log> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PushtokenReq
        
        
        @property { string } [action]
        
        @property { string } [bundleIdentifier]
        
        @property { string } [pushToken]
        
        @property { string } [uniqueDeviceId]
        
         
    */
/**
        @typedef PushtokenRes
        
        
        @property { string } [id]
        
        @property { string } [bundleIdentifier]
        
        @property { string } [pushToken]
        
        @property { string } [uniqueDeviceId]
        
        @property { string } [type]
        
        @property { string } [platform]
        
        @property { string } [applicationId]
        
        @property { string } [userId]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [expiredAt]
        
         
    */
/**
        @typedef SmsProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [type]
        
        @property { string } [provider]
        
         
    */
/**
        @typedef SmsProvider
        
        
        @property { number } [rpt]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SmsProviders
        
        
        @property { Array<SmsProvider> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SmsTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef SmsTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef SmsTemplateMessage
        
        
        @property { string } [templateType]
        
        @property { string } [template]
        
         
    */
/**
        @typedef SmsTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */
/**
        @typedef SmsTemplateRes
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SmsTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { string } [priority]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SystemSmsTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef SmsTemplates
        
        
        @property { Array<SmsTemplate> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SystemSmsTemplates
        
        
        @property { Array<SystemSmsTemplate> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Notification
        
        
        @property { string } [title]
        
        @property { string } [body]
        
        @property { string } [subtitle]
        
        @property { string } [icon]
        
        @property { string } [deeplink]
        
        @property { string } [clickAction]
        
         
    */
/**
        @typedef SystemNotificationUser
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */
/**
        @typedef SystemNotificationSettings
        
        
        @property { boolean } [sound]
        
        @property { string } [priority]
        
        @property { string } [timeToLive]
        
         
    */
/**
        @typedef SystemNotification
        
        
        @property { Notification } [notification]
        
        @property { SystemNotificationUser } [user]
        
        @property { SystemNotificationUser } [settings]
        
        @property { string } [id]
        
        @property { string } [group]
        
        @property { string } [createdAt]
        
         
    */
/**
        @typedef SystemNotificationsPage
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
         
    */
/**
        @typedef SystemNotifications
        
        
        @property { Array<SystemNotification> } [items]
        
        @property { number } [lastReadAnchor]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { boolean } created
        
        @property { boolean } success
        
        @property { Array<string> } excludedFields
        
        @property { Array<Object> } [aggregators]
        
        @property { Array<string> } displayFields
        
        @property { string } appId
        
         
    */
/**
        @typedef ErrorCodeDescription
        
        
        @property { boolean } success
        
        @property { string } code
        
        @property { string } description
        
         
    */
/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } merchantSalt
        
        @property { boolean } [isActive]
        
        @property { string } configType
        
        @property { string } key
        
        @property { string } secret
        
         
    */
/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
        @property { boolean } [isActive]
        
        @property { string } appId
        
         
    */
/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { boolean } success
        
        @property { Array<string> } aggregator
        
         
    */
/**
        @typedef ErrorCodeAndDescription
        
        
        @property { string } description
        
        @property { string } code
        
         
    */
/**
        @typedef HttpErrorCodeAndResponse
        
        
        @property { boolean } success
        
        @property { ErrorCodeAndDescription } error
        
         
    */
/**
        @typedef PaymentModeLogo
        
        
        @property { string } large
        
        @property { string } small
        
         
    */
/**
        @typedef PaymentModeList
        
        
        @property { string } aggregatorName
        
        @property { string } [code]
        
        @property { number } [retryCount]
        
        @property { number } [displayPriority]
        
        @property { number } [expMonth]
        
        @property { string } [intentFlow]
        
        @property { boolean } [expired]
        
        @property { string } [displayName]
        
        @property { string } [cardType]
        
        @property { string } [nickname]
        
        @property { string } [cardIsin]
        
        @property { string } [merchantCode]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { string } [cardBrand]
        
        @property { number } [timeout]
        
        @property { string } [cardReference]
        
        @property { string } [name]
        
        @property { string } [cardFingerprint]
        
        @property { string } [cardId]
        
        @property { string } [cardIssuer]
        
        @property { string } [cardName]
        
        @property { number } [expYear]
        
        @property { string } [fyndVpa]
        
        @property { string } [cardNumber]
        
        @property { string } [cardToken]
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { string } [cardBrandImage]
        
         
    */
/**
        @typedef RootPaymentMode
        
        
        @property { string } [aggregatorName]
        
        @property { boolean } [anonymousEnable]
        
        @property { number } displayPriority
        
        @property { boolean } [addCardEnabled]
        
        @property { Array<PaymentModeList> } [list]
        
        @property { string } displayName
        
        @property { string } name
        
         
    */
/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } paymentOption
        
         
    */
/**
        @typedef PaymentOptionsResponse
        
        
        @property { boolean } success
        
        @property { PaymentOptions } paymentOptions
        
         
    */
/**
        @typedef PayoutsResponse
        
        
        @property { boolean } isActive
        
        @property { boolean } isDefault
        
        @property { string } transferType
        
        @property { Object } moreAttributes
        
        @property { Object } uniqueTransferNo
        
        @property { Object } customers
        
        @property { Array<Object> } payoutsAggregators
        
         
    */
/**
        @typedef PayoutRequest
        
        
        @property { boolean } isActive
        
        @property { string } transferType
        
        @property { string } aggregator
        
        @property { Object } users
        
        @property { string } uniqueExternalId
        
        @property { Object } bankDetails
        
         
    */
/**
        @typedef PayoutResponse
        
        
        @property { boolean } isActive
        
        @property { string } transferType
        
        @property { boolean } created
        
        @property { string } aggregator
        
        @property { boolean } success
        
        @property { Object } users
        
        @property { Object } payouts
        
        @property { string } paymentStatus
        
        @property { string } uniqueTransferNo
        
        @property { Object } bankDetails
        
         
    */
/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } isActive
        
        @property { boolean } success
        
        @property { boolean } isDefault
        
         
    */
/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } isActive
        
        @property { boolean } isDefault
        
        @property { string } uniqueExternalId
        
         
    */
/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
        @property { Array<Object> } data
        
         
    */
/**
        @typedef DeleteSubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef SubscriptionConfigResponse
        
        
        @property { Object } config
        
        @property { boolean } success
        
        @property { string } aggregator
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } uniqueExternalId
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { boolean } success
        
        @property { Object } data
        
         
    */
/**
        @typedef GetActivityStatus
        
        
        @property { ActivityHistory } activityHistory
        
         
    */
/**
        @typedef ActivityHistory
        
        
        @property { string } [createdat]
        
        @property { string } [message]
        
        @property { string } [type]
        
        @property { string } [user]
        
         
    */
/**
        @typedef FailedOrders
        
        
        @property { FailOrder } orders
        
         
    */
/**
        @typedef FailOrder
        
        
        @property { string } [updatedAt]
        
        @property { string } [id]
        
        @property { string } [reason]
        
        @property { MarketplaceOrder } [marketplaceOrder]
        
        @property { string } [marketplaceOrderId]
        
        @property { string } [createdAt]
        
        @property { string } [appId]
        
        @property { string } [marketplace]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef MarketplaceOrder
        
        
        @property { string } [orderStatusUrl]
        
        @property { string } [adminGraphqlApiId]
        
        @property { string } [email]
        
        @property { boolean } [test]
        
        @property { string } [note]
        
        @property { string } [totalPrice]
        
        @property { number } [appId]
        
        @property { TotalDiscountsSet } [totalDiscountsSet]
        
        @property { TotalPriceSet } [totalPriceSet]
        
        @property { TotalTaxSet } [totalTaxSet]
        
        @property { string } [gateway]
        
        @property { string } [name]
        
        @property { SubtotalPriceSet } [subtotalPriceSet]
        
        @property { number } [number]
        
        @property { boolean } [buyerAcceptsMarketing]
        
        @property { string } [contactEmail]
        
        @property { string } [token]
        
        @property { string } [sourceName]
        
        @property { Array<any> } [paymentGatewayNames]
        
        @property { string } [presentmentCurrency]
        
        @property { string } [subtotalPrice]
        
        @property { string } [processedAt]
        
        @property { number } [orderNumber]
        
        @property { string } [totalTipReceived]
        
        @property { number } [id]
        
        @property { boolean } [confirmed]
        
        @property { string } [currency]
        
        @property { string } [totalLineItemsPrice]
        
        @property { LineItems } [lineItems]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [totalWeight]
        
        @property { BillingAddress } [billingAddress]
        
        @property { TotalShippingPriceSet } [totalShippingPriceSet]
        
        @property { Customer } [customer]
        
        @property { string } [totalDiscounts]
        
        @property { TotalLineItemsPriceSet } [totalLineItemsPriceSet]
        
        @property { string } [tags]
        
        @property { string } [totalPriceUsd]
        
        @property { number } [userId]
        
        @property { string } [totalTax]
        
        @property { string } [processingMethod]
        
        @property { ShippingAddress } [shippingAddress]
        
        @property { boolean } [taxesIncluded]
        
        @property { string } [financialStatus]
        
         
    */
/**
        @typedef TotalDiscountsSet
        
        
        @property { PresentmentMoney } [presentmentMoney]
        
        @property { ShopMoney } [shopMoney]
        
         
    */
/**
        @typedef PresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef ShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalPriceSet
        
        
        @property { TotalPriceSetShopMoney } [shopMoney]
        
        @property { TotalPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef TotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalTaxSet
        
        
        @property { TotalTaxSetShopMoney } [shopMoney]
        
        @property { TotalTaxSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef TotalTaxSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalTaxSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef SubtotalPriceSet
        
        
        @property { SubtotalPriceSetShopMoney } [shopMoney]
        
        @property { SubtotalPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef SubtotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef SubtotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef LineItems
        
        
        @property { string } [sku]
        
        @property { number } [fulfillableQuantity]
        
        @property { number } [grams]
        
        @property { string } [totalDiscount]
        
        @property { LineItemsArticle } [article]
        
        @property { string } [title]
        
        @property { string } [variantInventoryManagement]
        
        @property { number } [id]
        
        @property { number } [variantId]
        
        @property { string } [variantTitle]
        
        @property { boolean } [productExists]
        
        @property { string } [price]
        
        @property { string } [adminGraphqlApiId]
        
        @property { number } [quantity]
        
        @property { string } [vendor]
        
        @property { string } [fulfillmentService]
        
        @property { boolean } [taxable]
        
        @property { string } [name]
        
        @property { number } [productId]
        
        @property { PriceSet } [priceSet]
        
        @property { TaxLines } [taxLines]
        
        @property { boolean } [requiresShipping]
        
        @property { boolean } [giftCard]
        
        @property { TotalDiscountSet } [totalDiscountSet]
        
         
    */
/**
        @typedef LineItemsArticle
        
        
        @property { Quantities } [quantities]
        
        @property { string } [oldArticleUid]
        
        @property { number } [totalQuantity]
        
        @property { Manufacturer } [manufacturer]
        
        @property { ArticlePrice } [price]
        
        @property { boolean } [trackInventory]
        
        @property { Company } [company]
        
        @property { boolean } [isActive]
        
        @property { FailOrderDateMeta } [dateMeta]
        
        @property { boolean } [fragile]
        
        @property { MarketplaceIdentifiers } [marketplaceIdentifiers]
        
        @property { string } [size]
        
        @property { boolean } [isSet]
        
        @property { Dimension } [dimension]
        
        @property { Weight } [weight]
        
        @property { Store } [store]
        
        @property { ArticleMeta } [meta]
        
        @property { string } [uid]
        
        @property { ArticleBrand } [brand]
        
        @property { number } [itemId]
        
        @property { string } [fyndArticleCode]
        
        @property { string } [id]
        
        @property { LineItemsArticleIdentifier } [identifier]
        
        @property { string } [sellerIdentifier]
        
        @property { string } [fyndItemCode]
        
        @property { string } [countryOfOrigin]
        
         
    */
/**
        @typedef Quantities
        
        
        @property { NotAvailable } [notAvailable]
        
        @property { Sellable } [sellable]
        
        @property { OrderCommitted } [orderCommitted]
        
        @property { Damaged } [damaged]
        
         
    */
/**
        @typedef NotAvailable
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef Sellable
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef OrderCommitted
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef Damaged
        
        
        @property { string } [updatedAt]
        
        @property { number } [count]
        
         
    */
/**
        @typedef Manufacturer
        
        
        @property { boolean } [isDefault]
        
        @property { string } [address]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ArticlePrice
        
        
        @property { number } [marked]
        
        @property { string } [currency]
        
        @property { number } [effective]
        
        @property { number } [transfer]
        
         
    */
/**
        @typedef Company
        
        
        @property { number } [id]
        
        @property { string } [companyType]
        
        @property { string } [businessType]
        
        @property { string } [companyName]
        
        @property { string } [createdOn]
        
        @property { string } [panNo]
        
        @property { boolean } [returnAllowed]
        
        @property { string } [meta]
        
        @property { boolean } [exchangeAllowed]
        
        @property { string } [agreementStartDate]
        
        @property { number } [exchangeWithinDays]
        
        @property { number } [paymentProcesingCharge]
        
        @property { boolean } [fyndAFitAvailable]
        
        @property { string } [modifiedOn]
        
        @property { number } [returnWithinDays]
        
         
    */
/**
        @typedef FailOrderDateMeta
        
        
        @property { string } [addedOnStore]
        
        @property { string } [inventoryUpdatedOn]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef MarketplaceIdentifiers
        
        
        @property { TatacliqLuxury } [tatacliqLuxury]
        
         
    */
/**
        @typedef TatacliqLuxury
        
        
        @property { string } [sku]
        
         
    */
/**
        @typedef Dimension
        
        
        @property { number } [height]
        
        @property { number } [width]
        
        @property { string } [unit]
        
        @property { number } [length]
        
        @property { boolean } [isDefault]
        
         
    */
/**
        @typedef Weight
        
        
        @property { boolean } [isDefault]
        
        @property { string } [unit]
        
        @property { number } [shipping]
        
         
    */
/**
        @typedef Store
        
        
        @property { number } [id]
        
         
    */
/**
        @typedef ArticleMeta
        
        
        @property { string } [service]
        
         
    */
/**
        @typedef ArticleBrand
        
        
        @property { string } [name]
        
        @property { number } [id]
        
         
    */
/**
        @typedef LineItemsArticleIdentifier
        
        
        @property { string } [skuCode]
        
         
    */
/**
        @typedef PriceSet
        
        
        @property { PriceSetShopMoney } [shopMoney]
        
        @property { PriceSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef PriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef PriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TaxLines
        
        
        @property { string } [title]
        
        @property { string } [price]
        
        @property { number } [rate]
        
        @property { TaxLinesPriceSet } [priceSet]
        
         
    */
/**
        @typedef TaxLinesPriceSet
        
        
        @property { TaxLinesPriceSetShopMoney } [shopMoney]
        
        @property { TaxLinesPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef TaxLinesPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TaxLinesPriceSetPresentmentMoney
        
        
        @property { string } [currencyCode]
        
        @property { string } [amount]
        
         
    */
/**
        @typedef TotalDiscountSet
        
        
        @property { TotalDiscountSetPresentmentMoney } [presentmentMoney]
        
        @property { TotalDiscountSetShopMoney } [shopMoney]
        
         
    */
/**
        @typedef TotalDiscountSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalDiscountSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef BillingAddress
        
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [zip]
        
        @property { string } [lastName]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [provinceCode]
        
        @property { string } [phone]
        
        @property { string } [company]
        
        @property { number } [latitude]
        
        @property { string } [name]
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
        @property { string } [firstName]
        
        @property { string } [province]
        
         
    */
/**
        @typedef TotalShippingPriceSet
        
        
        @property { TotalShippingPriceSetShopMoney } [shopMoney]
        
        @property { TotalShippingPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef TotalShippingPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalShippingPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef Customer
        
        
        @property { string } [createdAt]
        
        @property { number } [id]
        
        @property { string } [lastName]
        
        @property { string } [state]
        
        @property { number } [lastOrderId]
        
        @property { string } [note]
        
        @property { boolean } [verifiedEmail]
        
        @property { string } [phone]
        
        @property { boolean } [acceptsMarketing]
        
        @property { string } [firstName]
        
        @property { string } [tags]
        
        @property { string } [lastOrderName]
        
        @property { number } [ordersCount]
        
        @property { string } [totalSpent]
        
        @property { boolean } [taxExempt]
        
        @property { string } [currency]
        
        @property { string } [acceptsMarketingUpdatedAt]
        
        @property { string } [email]
        
        @property { string } [updatedAt]
        
        @property { string } [adminGraphqlApiId]
        
        @property { DefaultAddress } [defaultAddress]
        
         
    */
/**
        @typedef DefaultAddress
        
        
        @property { string } [lastName]
        
        @property { string } [name]
        
        @property { string } [provinceCode]
        
        @property { string } [countryCode]
        
        @property { boolean } [isDefault]
        
        @property { number } [id]
        
        @property { number } [customerId]
        
        @property { string } [firstName]
        
        @property { string } [address1]
        
        @property { string } [phone]
        
        @property { string } [countryName]
        
        @property { string } [company]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [province]
        
        @property { string } [country]
        
        @property { string } [zip]
        
         
    */
/**
        @typedef TotalLineItemsPriceSet
        
        
        @property { TotalLineItemsPriceSetShopMoney } [shopMoney]
        
        @property { TotalLineItemsPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */
/**
        @typedef TotalLineItemsPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef TotalLineItemsPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */
/**
        @typedef ShippingAddress
        
        
        @property { string } [address1]
        
        @property { string } [zip]
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
        @property { string } [lastName]
        
        @property { number } [latitude]
        
        @property { string } [provinceCode]
        
        @property { string } [firstName]
        
        @property { string } [phone]
        
        @property { string } [province]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [company]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OrderListing
        
        
        @property { Array<OrderItems> } items
        
        @property { Filters } filters
        
        @property { NextOrderStatus } nextOrderStatus
        
        @property { PlatformOrderPage } page
        
        @property { AppliedFilters } appliedFilters
        
         
    */
/**
        @typedef OrderItems
        
        
        @property { PlatformOrderUserInfo } [user]
        
        @property { PlatformDeliveryAddress } [deliveryAddress]
        
        @property { Channel } [channel]
        
        @property { PlatformBreakupValues } [breakupValues]
        
        @property { string } [id]
        
        @property { PlatformApplication } [application]
        
        @property { PlatformShipment } [shipments]
        
        @property { string } [createdAt]
        
        @property { number } [totalShipmentsInOrder]
        
        @property { ItemsPayments } [payments]
        
         
    */
/**
        @typedef PlatformOrderUserInfo
        
        
        @property { string } [mobile]
        
        @property { string } [firstName]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [lastName]
        
        @property { boolean } [isAnonymousUser]
        
        @property { number } [uid]
        
        @property { string } [avisUserId]
        
         
    */
/**
        @typedef PlatformDeliveryAddress
        
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { number } [latitude]
        
        @property { string } [updatedAt]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [createdAt]
        
        @property { string } [name]
        
        @property { string } [address]
        
        @property { string } [phone]
        
        @property { number } [longitude]
        
        @property { string } [addressType]
        
        @property { string } [email]
        
        @property { string } [pincode]
        
        @property { string } [address2]
        
        @property { string } [contactPerson]
        
        @property { string } [addressCategory]
        
         
    */
/**
        @typedef Channel
        
        
        @property { string } [name]
        
        @property { string } [logo]
        
         
    */
/**
        @typedef PlatformBreakupValues
        
        
        @property { string } [display]
        
        @property { number } [value]
        
        @property { string } [name]
        
         
    */
/**
        @typedef PlatformApplication
        
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { boolean } [postOrderReassignment]
        
        @property { string } [id]
        
        @property { string } [description]
        
        @property { boolean } [dpAssignment]
        
        @property { ArticleAssignment } [articleAssignment]
        
        @property { boolean } [forceReassignment]
        
        @property { string } [token]
        
        @property { string } [secret]
        
         
    */
/**
        @typedef ArticleAssignment
        
        
        @property { string } [strategy]
        
        @property { string } [level]
        
         
    */
/**
        @typedef PlatformShipment
        
        
        @property { PlatformShipmentStatus } [status]
        
        @property { Bags } [bags]
        
        @property { ShipmentPrices } [prices]
        
        @property { ShipmentBreakupValues } [breakupValues]
        
        @property { string } [id]
        
        @property { DpDetails } [dpDetails]
        
        @property { ShipmentInvoice } [invoice]
        
        @property { PlatformFulfillingStore } [fulfillingStore]
        
        @property { Payments } [payments]
        
        @property { ShipmentGst } [gst]
        
        @property { Company } [company]
        
        @property { PlatformShipmentBrand } [brand]
        
        @property { Object } [coupon]
        
        @property { string } [orderSource]
        
        @property { boolean } [isNotFyndSource]
        
        @property { string } [comment]
        
        @property { Promise } [promise]
        
        @property { ShipmentTrackingDetails } [trackingDetails]
        
        @property { boolean } [isFyndCoupon]
        
        @property { string } [orderType]
        
        @property { ShipmentUser } [user]
        
         
    */
/**
        @typedef PlatformShipmentStatus
        
        
        @property { number } [id]
        
        @property { Array<number> } [bagList]
        
        @property { string } [createdAt]
        
        @property { string } [status]
        
        @property { string } [name]
        
        @property { number } [progress]
        
        @property { string } [shipmentId]
        
        @property { string } [currentShipmentStatus]
        
        @property { string } [colorCode]
        
         
    */
/**
        @typedef Bags
        
        
        @property { Array<BagFinancialBreakup> } [financialBreakup]
        
        @property { BagCurrStatus } [status]
        
        @property { BagItem } [item]
        
        @property { BagArticle } [article]
        
        @property { number } [id]
        
        @property { BagPrices } [prices]
        
        @property { GstDetails } [gstDetails]
        
        @property { BagBreakupValues } [breakupValues]
        
        @property { number } [updateTime]
        
        @property { BagCurrentStatus } [currentStatus]
        
        @property { BagStatus } [bagStatus]
        
         
    */
/**
        @typedef BagFinancialBreakup
        
        
        @property { number } [valueOfGood]
        
        @property { string } [hsnCode]
        
        @property { number } [priceEffective]
        
        @property { number } [codCharges]
        
        @property { string } [gstFee]
        
        @property { number } [fyndCredits]
        
        @property { number } [refundAmount]
        
        @property { number } [cashbackApplied]
        
        @property { number } [transferPrice]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [couponValue]
        
        @property { number } [amountPaid]
        
        @property { number } [gstTaxPercentage]
        
        @property { string } [size]
        
        @property { number } [totalUnits]
        
        @property { number } [discount]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [cashback]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { string } [gstTag]
        
        @property { number } [deliveryCharge]
        
        @property { number } [refundCredit]
        
        @property { number } [priceMarked]
        
        @property { Identifiers } [identifiers]
        
        @property { string } [itemName]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [brandCalculatedAmount]
        
         
    */
/**
        @typedef Identifiers
        
        
        @property { string } [ean]
        
         
    */
/**
        @typedef BagCurrStatus
        
        
        @property { boolean } [enableTracking]
        
        @property { boolean } [isCustomerReturnAllowed]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isReturnable]
        
        @property { boolean } [canBeCancelled]
        
         
    */
/**
        @typedef BagItem
        
        
        @property { number } [id]
        
        @property { string } [size]
        
        @property { string } [slugKey]
        
        @property { boolean } [canReturn]
        
        @property { number } [brandId]
        
        @property { Array<string> } [l2Category]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { boolean } [canCancel]
        
        @property { BagItemAttributes } [attributes]
        
        @property { string } [l3CategoryName]
        
        @property { number } [l3Category]
        
        @property { Array<string> } [l1Category]
        
        @property { Array<string> } [image]
        
        @property { string } [brand]
        
        @property { string } [lastUpdatedAt]
        
         
    */
/**
        @typedef BagItemAttributes
        
        
        @property { string } [itemCode]
        
        @property { string } [brandName]
        
        @property { string } [countryOfOrigin]
        
         
    */
/**
        @typedef BagArticle
        
        
        @property { ArticleIdentifiers } [identifiers]
        
        @property { boolean } [espModified]
        
        @property { boolean } [isSet]
        
        @property { string } [size]
        
        @property { string } [code]
        
        @property { Set } [set]
        
        @property { string } [sellerIdentifier]
        
        @property { BagArticleReturnConfig } [returnConfig]
        
        @property { string } [id]
        
        @property { string } [uid]
        
        @property { Object } [childDetails]
        
         
    */
/**
        @typedef ArticleIdentifiers
        
        
        @property { string } [ean]
        
         
    */
/**
        @typedef Set
        
        
        @property { number } [quantity]
        
        @property { SetSizeDistribution } [sizeDistribution]
        
         
    */
/**
        @typedef SetSizeDistribution
        
        
        @property { Sizes } [sizes]
        
         
    */
/**
        @typedef Sizes
        
        
        @property { string } [size]
        
        @property { number } [pieces]
        
         
    */
/**
        @typedef BagArticleReturnConfig
        
        
        @property { number } [time]
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
         
    */
/**
        @typedef ShipmentPrices
        
        
        @property { number } [refundAmount]
        
        @property { number } [cashbackApplied]
        
        @property { number } [transferPrice]
        
        @property { number } [couponValue]
        
        @property { number } [amountPaid]
        
        @property { number } [deliveryCharge]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [codCharges]
        
        @property { number } [refundCredit]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [gstTaxPercentage]
        
        @property { number } [priceMarked]
        
        @property { number } [priceEffective]
        
        @property { number } [discount]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [fyndCredits]
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [cashback]
        
        @property { number } [valueOfGood]
        
         
    */
/**
        @typedef GstDetails
        
        
        @property { number } [brandCalculatedAmount]
        
        @property { string } [gstFee]
        
        @property { string } [gstTag]
        
        @property { string } [hsnCode]
        
        @property { number } [valueOfGood]
        
        @property { number } [gstTaxPercentage]
        
        @property { boolean } [isDefaultHsnCode]
        
         
    */
/**
        @typedef BagBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */
/**
        @typedef BagCurrentStatus
        
        
        @property { string } [updatedAt]
        
        @property { BagStateMapper } [bagStateMapper]
        
        @property { string } [status]
        
        @property { string } [stateType]
        
         
    */
/**
        @typedef BagStateMapper
        
        
        @property { string } [appStateName]
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [name]
        
        @property { string } [appDisplayName]
        
         
    */
/**
        @typedef BagStatus
        
        
        @property { string } [status]
        
        @property { string } [stateType]
        
        @property { string } [updatedAt]
        
        @property { BagStatusBagStateMapper } [bagStateMapper]
        
         
    */
/**
        @typedef BagStatusBagStateMapper
        
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [name]
        
        @property { string } [appDisplayName]
        
        @property { string } [appStateName]
        
         
    */
/**
        @typedef BagPrices
        
        
        @property { number } [cashback]
        
        @property { number } [refundCredit]
        
        @property { number } [couponValue]
        
        @property { number } [deliveryCharge]
        
        @property { number } [fyndCredits]
        
        @property { number } [priceMarked]
        
        @property { number } [cashbackApplied]
        
        @property { number } [valueOfGood]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [amountPaid]
        
        @property { number } [codCharges]
        
        @property { number } [priceEffective]
        
        @property { number } [refundAmount]
        
        @property { number } [discount]
        
         
    */
/**
        @typedef ShipmentBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */
/**
        @typedef DpDetails
        
        
        @property { string } [gstTag]
        
         
    */
/**
        @typedef ShipmentInvoice
        
        
        @property { string } [paymentType]
        
        @property { string } [updatedDate]
        
        @property { string } [invoiceUrl]
        
        @property { string } [labelUrl]
        
        @property { string } [paymentMode]
        
        @property { number } [amountToCollect]
        
        @property { RtoAddress } [rtoAddress]
        
         
    */
/**
        @typedef RtoAddress
        
        
        @property { string } [name]
        
        @property { number } [id]
        
        @property { string } [phone]
        
        @property { string } [locationType]
        
        @property { StoreAddressJson } [storeAddressJson]
        
        @property { string } [code]
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { number } [companyId]
        
        @property { string } [contactPerson]
        
        @property { string } [state]
        
        @property { string } [storeEmail]
        
        @property { string } [address2]
        
         
    */
/**
        @typedef StoreAddressJson
        
        
        @property { string } [country]
        
        @property { number } [latitude]
        
        @property { string } [updatedAt]
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [createdAt]
        
        @property { string } [contactPerson]
        
        @property { string } [addressCategory]
        
        @property { string } [version]
        
        @property { string } [landmark]
        
         
    */
/**
        @typedef PlatformFulfillingStore
        
        
        @property { number } [packagingMaterialCount]
        
        @property { string } [locationType]
        
        @property { string } [code]
        
        @property { string } [city]
        
        @property { FulfillingStoreMeta } [meta]
        
        @property { string } [name]
        
        @property { boolean } [isActive]
        
        @property { string } [address1]
        
        @property { string } [storeEmail]
        
        @property { boolean } [isArchived]
        
        @property { string } [state]
        
        @property { string } [address2]
        
        @property { string } [contactPerson]
        
        @property { string } [phone]
        
        @property { boolean } [isEnabledForRecon]
        
        @property { string } [fulfillmentChannel]
        
        @property { string } [createdAt]
        
        @property { number } [id]
        
        @property { string } [pincode]
        
        @property { Array<string> } [brandStoreTags]
        
        @property { number } [companyId]
        
        @property { FulfillingStoreStoreAddressJson } [storeAddressJson]
        
        @property { string } [updatedAt]
        
        @property { string } [loginUsername]
        
        @property { string } [country]
        
         
    */
/**
        @typedef FulfillingStoreMeta
        
        
        @property { AdditionalContactDetails } [additionalContactDetails]
        
        @property { Documents } [documents]
        
        @property { string } [gstNumber]
        
        @property { string } [displayName]
        
        @property { ProductReturnConfig } [productReturnConfig]
        
        @property { boolean } [allowDpAssignmentFromFynd]
        
        @property { string } [stage]
        
        @property { Timing } [timing]
        
         
    */
/**
        @typedef AdditionalContactDetails
        
        
        @property { Array<string> } [number]
        
         
    */
/**
        @typedef Documents
        
        
        @property { Gst } [gst]
        
         
    */
/**
        @typedef Gst
        
        
        @property { string } [legalName]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { boolean } [verified]
        
         
    */
/**
        @typedef ProductReturnConfig
        
        
        @property { boolean } [onSameStore]
        
         
    */
/**
        @typedef Timing
        
        
        @property { Opening } [opening]
        
        @property { string } [weekday]
        
        @property { boolean } [open]
        
        @property { Closing } [closing]
        
         
    */
/**
        @typedef Opening
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */
/**
        @typedef Closing
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef FulfillingStoreStoreAddressJson
        
        
        @property { string } [address2]
        
        @property { string } [area]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [state]
        
        @property { string } [contactPerson]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { string } [version]
        
        @property { string } [createdAt]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [landmark]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [updatedAt]
        
        @property { string } [addressCategory]
        
         
    */
/**
        @typedef Payments
        
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [logo]
        
        @property { string } [source]
        
        @property { string } [sourceNickname]
        
        @property { number } [displayPriority]
        
        @property { number } [id]
        
        @property { string } [mode]
        
        @property { string } [paymentIdentifier]
        
         
    */
/**
        @typedef ShipmentGst
        
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [valueOfGood]
        
        @property { number } [gstFee]
        
         
    */
/**
        @typedef PlatformShipmentBrand
        
        
        @property { boolean } [creditNoteAllowed]
        
        @property { string } [brandName]
        
        @property { string } [modifiedOn]
        
        @property { number } [id]
        
        @property { boolean } [isVirtualInvoice]
        
        @property { string } [createdOn]
        
        @property { string } [logo]
        
         
    */
/**
        @typedef Promise
        
        
        @property { Timestamp } [timestamp]
        
         
    */
/**
        @typedef Timestamp
        
        
        @property { string } [min]
        
        @property { string } [max]
        
         
    */
/**
        @typedef ShipmentTrackingDetails
        
        
        @property { string } [status]
        
        @property { string } [time]
        
        @property { boolean } [isPassed]
        
        @property { boolean } [isCurrent]
        
         
    */
/**
        @typedef ShipmentUser
        
        
        @property { string } [email]
        
        @property { number } [id]
        
        @property { string } [firstName]
        
        @property { string } [mobile]
        
        @property { string } [gender]
        
        @property { string } [lastName]
        
        @property { boolean } [isAnonymousUser]
        
        @property { string } [mongoUserId]
        
         
    */
/**
        @typedef ItemsPayments
        
        
        @property { number } [displayPriority]
        
        @property { number } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [logo]
        
        @property { string } [paymentIdentifier]
        
        @property { string } [sourceNickname]
        
        @property { string } [mode]
        
        @property { string } [source]
        
         
    */
/**
        @typedef Filters
        
        
        @property { Stages } [stages]
        
         
    */
/**
        @typedef Stages
        
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { boolean } [isDefault]
        
        @property { StagesFilters } [filters]
        
         
    */
/**
        @typedef StagesFilters
        
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { string } [type]
        
        @property { Options } [options]
        
         
    */
/**
        @typedef Options
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef NextOrderStatus
        
        
        @property { BagConfirmed } [bagConfirmed]
        
        @property { DpAssigned } [dpAssigned]
        
        @property { ReturnBagDelivered } [returnBagDelivered]
        
        @property { Placed } [placed]
        
        @property { DeliveryDone } [deliveryDone]
        
        @property { Pending } [pending]
        
        @property { BagPacked } [bagPacked]
        
         
    */
/**
        @typedef BagConfirmed
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef DpAssigned
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef ReturnBagDelivered
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Placed
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef DeliveryDone
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Pending
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef BagPacked
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */
/**
        @typedef PlatformOrderPage
        
        
        @property { string } [next]
        
        @property { string } [previous]
        
        @property { string } [type]
        
        @property { number } [size]
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { ItemTotal } [itemTotal]
        
         
    */
/**
        @typedef ItemTotal
        
        
        @property { number } [new]
        
        @property { number } [processing]
        
        @property { number } [returns]
        
        @property { number } [all]
        
         
    */
/**
        @typedef AppliedFilters
        
        
        @property { string } [stage]
        
        @property { Array<string> } [stores]
        
        @property { string } [fromDate]
        
        @property { string } [toDate]
        
         
    */
/**
        @typedef UpdateOrderReprocessResponse
        
        
        @property { string } status
        
         
    */
/**
        @typedef PlatformOrderTrack
        
        
        @property { boolean } success
        
        @property { string } requestId
        
        @property { string } message
        
        @property { string } mobile
        
        @property { string } countryCode
        
        @property { number } resendTimer
        
        @property { string } [resendToken]
        
         
    */
/**
        @typedef GetPingResponse
        
        
        @property { string } ping
        
         
    */
/**
        @typedef UpdateShipmentStatusResponse
        
        
        @property { Object } shipments
        
        @property { Array<any> } [errorShipments]
        
         
    */
/**
        @typedef UpdateShipmentStatusBody
        
        
        @property { Object } shipments
        
        @property { boolean } forceTransition
        
        @property { boolean } task
        
         
    */
/**
        @typedef PlatformShipmentTrack
        
        
        @property { Results } results
        
         
    */
/**
        @typedef Results
        
        
        @property { string } [awb]
        
        @property { string } [updatedAt]
        
        @property { string } [lastLocationRecievedAt]
        
        @property { string } [reason]
        
        @property { string } [shipmentType]
        
        @property { string } [status]
        
        @property { string } [updatedTime]
        
        @property { string } [accountName]
        
         
    */
/**
        @typedef UpdateProcessShipmenstRequestBody
        
        
        @property { Array<string> } shipmentIds
        
        @property { string } expectedStatus
        
         
    */
/**
        @typedef UpdateProcessShipmenstRequestResponse
        
        
        @property { boolean } success
        
        @property { string } message
        
         
    */
/**
        @typedef GetVoiceCallbackResponse
        
        
        @property { string } message
        
         
    */
/**
        @typedef GetClickToCallResponse
        
        
        @property { string } message
        
         
    */
/**
        @typedef ApefaceApiError
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef GetSearchWordsData
        
        
        @property { Array<string> } [words]
        
        @property { Object } [result]
        
        @property { string } [uid]
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { GetSearchWordsData } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ErrorResponse
        
        
        @property { string } [message]
        
        @property { Object } [meta]
        
        @property { string } [code]
        
        @property { number } [status]
        
         
    */
/**
        @typedef SearchKeywordResult
        
        
        @property { string } sortOn
        
        @property { Object } query
        
         
    */
/**
        @typedef CreateSearchKeyword
        
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [words]
        
        @property { SearchKeywordResult } result
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef GetSearchWordsResponse
        
        
        @property { Array<GetSearchWordsData> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef GetAutocompleteWordsData
        
        
        @property { Array<string> } [words]
        
        @property { Array<Object> } [results]
        
        @property { string } [uid]
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AutocompletePageAction
        
        
        @property { string } [url]
        
        @property { Object } [params]
        
        @property { Object } query
        
        @property { string } type
        
         
    */
/**
        @typedef AutocompleteAction
        
        
        @property { string } [type]
        
        @property { AutocompletePageAction } [page]
        
         
    */
/**
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
         
    */
/**
        @typedef AutocompleteResult
        
        
        @property { Object } [customJson]
        
        @property { AutocompleteAction } [action]
        
        @property { string } [display]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { Array<string> } [words]
        
        @property { boolean } [isActive]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { Array<string> } [words]
        
        @property { Array<Object> } [results]
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef ProductBundleItem
        
        
        @property { number } productUid
        
        @property { boolean } [autoSelect]
        
        @property { number } maxQuantity
        
        @property { boolean } [allowRemove]
        
        @property { boolean } [autoAddToCart]
        
        @property { number } minQuantity
        
         
    */
/**
        @typedef ProductBundleRequest
        
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { Array<string> } [pageVisibility]
        
        @property { Object } [createdBy]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } slug
        
        @property { string } [logo]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { Object } [modifiedBy]
        
        @property { string } choice
        
         
    */
/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { number } [companyId]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { Array<string> } [pageVisibility]
        
        @property { Object } [createdBy]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } slug
        
        @property { string } [logo]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [id]
        
        @property { Object } [modifiedBy]
        
        @property { string } choice
        
         
    */
/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Size
        
        
        @property { string } [value]
        
        @property { boolean } [isAvailable]
        
        @property { string } [display]
        
        @property { number } [quantity]
        
         
    */
/**
        @typedef Price
        
        
        @property { number } [minMarked]
        
        @property { number } [maxMarked]
        
        @property { number } [maxEffective]
        
        @property { string } [currency]
        
        @property { number } [minEffective]
        
         
    */
/**
        @typedef LimitedProductData
        
        
        @property { Object } [identifier]
        
        @property { string } [name]
        
        @property { string } [countryOfOrigin]
        
        @property { Array<string> } [sizes]
        
        @property { Array<string> } [images]
        
        @property { string } [slug]
        
        @property { Object } [attributes]
        
        @property { string } [shortDescription]
        
        @property { number } [uid]
        
        @property { string } [itemCode]
        
        @property { Object } [price]
        
        @property { number } [quantity]
        
         
    */
/**
        @typedef GetProducts
        
        
        @property { number } [productUid]
        
        @property { Array<Size> } [sizes]
        
        @property { boolean } [autoSelect]
        
        @property { number } [maxQuantity]
        
        @property { boolean } [allowRemove]
        
        @property { boolean } [autoAddToCart]
        
        @property { Price } [price]
        
        @property { number } [minQuantity]
        
        @property { LimitedProductData } [productDetails]
        
         
    */
/**
        @typedef GetProductBundleResponse
        
        
        @property { number } [companyId]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { Array<string> } [pageVisibility]
        
        @property { Array<GetProducts> } [products]
        
        @property { string } [slug]
        
        @property { string } [logo]
        
        @property { string } [choice]
        
         
    */
/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { Array<string> } [pageVisibility]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } slug
        
        @property { string } [logo]
        
        @property { string } [modifiedOn]
        
        @property { Object } [modifiedBy]
        
        @property { string } choice
        
         
    */
/**
        @typedef Meta
        
        
        @property { Array<Object> } [values]
        
        @property { string } [unit]
        
        @property { Object } [headers]
        
         
    */
/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */
/**
        @typedef ValidateSizeGuide
        
        
        @property { string } [subtitle]
        
        @property { number } [companyId]
        
        @property { string } [tag]
        
        @property { string } name
        
        @property { Object } [modifiedBy]
        
        @property { boolean } [active]
        
        @property { Guide } [guide]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [id]
        
        @property { string } [description]
        
        @property { string } title
        
        @property { Object } [createdBy]
        
        @property { number } [brandId]
        
        @property { string } [image]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { number } [uid]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef ListSizeGuide
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef SizeGuideResponse
        
        
        @property { number } [companyId]
        
        @property { string } [subtitle]
        
        @property { string } [tag]
        
        @property { string } [name]
        
        @property { Object } [modifiedBy]
        
        @property { boolean } [active]
        
        @property { Object } [guide]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [id]
        
        @property { string } [title]
        
        @property { Object } [createdBy]
        
        @property { number } [brandId]
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [detail]
        
        @property { Object } [similar]
        
        @property { Object } [compare]
        
        @property { Object } [variant]
        
         
    */
/**
        @typedef MetaDataListingSortMetaResponse
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */
/**
        @typedef MetaDataListingSortResponse
        
        
        @property { Array<MetaDataListingSortMetaResponse> } [data]
        
         
    */
/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { string } [key]
        
        @property { Array<string> } [filterTypes]
        
        @property { string } [display]
        
        @property { Array<Object> } [units]
        
         
    */
/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
    */
/**
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingSortResponse } sort
        
        @property { MetaDataListingFilterResponse } filter
        
         
    */
/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { MetaDataListingResponse } [listing]
        
         
    */
/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { boolean } isActive
        
        @property { string } [name]
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { number } priority
        
         
    */
/**
        @typedef ConfigurationListingSort
        
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
        @property { string } defaultKey
        
         
    */
/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [start]
        
        @property { number } [end]
        
         
    */
/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Array<ConfigurationBucketPoints> } [bucketPoints]
        
        @property { string } [condition]
        
        @property { string } [value]
        
        @property { string } [sort]
        
        @property { Object } [map]
        
         
    */
/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } type
        
        @property { boolean } isActive
        
        @property { ConfigurationListingFilterValue } [valueConfig]
        
        @property { string } [name]
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { number } priority
        
         
    */
/**
        @typedef ConfigurationListingFilter
        
        
        @property { Array<ConfigurationListingFilterConfig> } [attributeConfig]
        
        @property { boolean } allowSingle
        
         
    */
/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingSort } sort
        
        @property { ConfigurationListingFilter } filter
        
         
    */
/**
        @typedef ProductSize
        
        
        @property { number } max
        
        @property { number } min
        
         
    */
/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } [subtitle]
        
        @property { boolean } isActive
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { ProductSize } [size]
        
        @property { string } [title]
        
        @property { number } priority
        
         
    */
/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { string } key
        
        @property { string } [logo]
        
        @property { ProductSize } size
        
        @property { string } displayType
        
        @property { number } priority
        
         
    */
/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProduct
        
        
        @property { ConfigurationProductSimilar } similar
        
        @property { ConfigurationProductVariant } variant
        
         
    */
/**
        @typedef AppConfiguration
        
        
        @property { string } [configId]
        
        @property { ConfigurationListing } [listing]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } appId
        
        @property { string } configType
        
         
    */
/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } [configId]
        
        @property { ConfigurationListing } [listing]
        
        @property { string } [id]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } appId
        
        @property { string } configType
        
         
    */
/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { AppCatalogConfiguration } [data]
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [sort]
        
        @property { Object } [filter]
        
         
    */
/**
        @typedef EntityConfiguration
        
        
        @property { string } [configId]
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { string } [id]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { string } appId
        
        @property { string } configType
        
         
    */
/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { EntityConfiguration } [data]
        
         
    */
/**
        @typedef ProductSortOn
        
        
        @property { string } [value]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ProductFiltersKey
        
        
        @property { string } [kind]
        
        @property { string } display
        
        @property { string } name
        
        @property { string } [logo]
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { number } [selectedMin]
        
        @property { boolean } isSelected
        
        @property { number } [max]
        
        @property { number } [min]
        
        @property { string } value
        
        @property { string } [queryFormat]
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { string } [displayFormat]
        
        @property { string } display
        
        @property { number } [selectedMax]
        
        @property { number } [count]
        
         
    */
/**
        @typedef ProductFilters
        
        
        @property { ProductFiltersKey } key
        
        @property { Array<ProductFiltersValue> } values
        
         
    */
/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Array<ProductFilters> } [filters]
        
         
    */
/**
        @typedef Schedule
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { number } [duration]
        
        @property { string } [end]
        
         
    */
/**
        @typedef UserInfo
        
        
        @property { string } [email]
        
        @property { string } [uid]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef CollectionImage
        
        
        @property { string } url
        
        @property { string } aspectRatio
        
         
    */
/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */
/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } portrait
        
        @property { CollectionImage } landscape
        
         
    */
/**
        @typedef SeoDetail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */
/**
        @typedef CreateCollection
        
        
        @property { string } name
        
        @property { Array<string> } [tags]
        
        @property { Schedule } [schedule]
        
        @property { string } [description]
        
        @property { Object } [localeLanguage]
        
        @property { UserInfo } [createdBy]
        
        @property { Object } [customJson]
        
        @property { boolean } [allowSort]
        
        @property { string } slug
        
        @property { CollectionImage } logo
        
        @property { CollectionBadge } [badge]
        
        @property { CollectionBanner } banners
        
        @property { UserInfo } [modifiedBy]
        
        @property { string } appId
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } type
        
        @property { SeoDetail } [seo]
        
        @property { Object } [meta]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowFacets]
        
        @property { string } [sortOn]
        
        @property { Object } [query]
        
        @property { boolean } [published]
        
         
    */
/**
        @typedef BannerImage
        
        
        @property { string } [url]
        
        @property { string } [aspectRatio]
        
         
    */
/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [portrait]
        
        @property { BannerImage } [landscape]
        
         
    */
/**
        @typedef CollectionCreateResponse
        
        
        @property { string } [type]
        
        @property { Object } [meta]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [allowSort]
        
        @property { string } [name]
        
        @property { boolean } [allowFacets]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [slug]
        
        @property { BannerImage } [logo]
        
        @property { Object } [schedule]
        
        @property { Object } [badge]
        
        @property { string } [description]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [query]
        
        @property { Object } [cron]
        
        @property { string } [appId]
        
         
    */
/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [display]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [display]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterType> } [type]
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
         
    */
/**
        @typedef Media1
        
        
        @property { string } [type]
        
        @property { string } url
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef ProductListingActionPage
        
        
        @property { string } [type]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef ProductListingAction
        
        
        @property { string } [type]
        
        @property { ProductListingActionPage } [page]
        
         
    */
/**
        @typedef GetCollectionDetailNest
        
        
        @property { string } [name]
        
        @property { Object } [schedule]
        
        @property { string } [description]
        
        @property { string } [uid]
        
        @property { Object } [cron]
        
        @property { boolean } [allowSort]
        
        @property { string } [slug]
        
        @property { Media1 } [logo]
        
        @property { Object } [badge]
        
        @property { ImageUrls } [banners]
        
        @property { string } [appId]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [type]
        
        @property { Object } [meta]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [allowFacets]
        
        @property { ProductListingAction } [action]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef GetCollectionListingResponse
        
        
        @property { CollectionListingFilter } [filters]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { string } [type]
        
        @property { Object } [meta]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [allowSort]
        
        @property { string } [name]
        
        @property { boolean } [allowFacets]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [slug]
        
        @property { Media1 } [logo]
        
        @property { Object } [schedule]
        
        @property { Object } [badge]
        
        @property { string } [description]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [query]
        
        @property { Object } [cron]
        
        @property { string } [appId]
        
         
    */
/**
        @typedef CollectionItemRequest
        
        
        @property { number } pageNo
        
        @property { number } pageSize
        
         
    */
/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef Price1
        
        
        @property { number } [max]
        
        @property { string } [currencySymbol]
        
        @property { string } [currencyCode]
        
        @property { number } [min]
        
         
    */
/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [effective]
        
        @property { Price1 } [marked]
        
         
    */
/**
        @typedef ProductListingDetail
        
        
        @property { string } [name]
        
        @property { Object } [attributes]
        
        @property { string } [imageNature]
        
        @property { string } [description]
        
        @property { number } [uid]
        
        @property { Array<string> } [tryouts]
        
        @property { string } slug
        
        @property { Array<Media1> } [medias]
        
        @property { string } [color]
        
        @property { string } [discount]
        
        @property { number } [rating]
        
        @property { Object } [teaserTag]
        
        @property { Array<string> } [highlights]
        
        @property { number } [ratingCount]
        
        @property { string } [type]
        
        @property { Array<string> } [similars]
        
        @property { boolean } [hasVariant]
        
        @property { string } [productOnlineDate]
        
        @property { boolean } [sellable]
        
        @property { string } [itemType]
        
        @property { Object } [promoMeta]
        
        @property { string } [shortDescription]
        
        @property { ProductListingPrice } [price]
        
         
    */
/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [articleFreshness]
        
        @property { string } [name]
        
        @property { number } [availableArticles]
        
        @property { number } [totalSizes]
        
        @property { number } [totalArticles]
        
        @property { number } [availableSizes]
        
         
    */
/**
        @typedef CatalogInsightItem
        
        
        @property { number } [sellableCount]
        
        @property { number } [outOfStockCount]
        
        @property { number } [count]
        
         
    */
/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightBrand } [brandDistribution]
        
        @property { CatalogInsightItem } [item]
        
         
    */
/**
        @typedef CrossSellingData
        
        
        @property { number } [products]
        
        @property { number } [articles]
        
         
    */
/**
        @typedef CrossSellingResponse
        
        
        @property { CrossSellingData } [data]
        
        @property { CatalogInsightBrand } [brandDistribution]
        
         
    */
/**
        @typedef OptInPostRequest
        
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
        @property { string } optLevel
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef CompanyOptIn
        
        
        @property { number } companyId
        
        @property { Object } [modifiedBy]
        
        @property { string } platform
        
        @property { boolean } enabled
        
        @property { Array<number> } brandIds
        
        @property { Array<number> } storeIds
        
        @property { number } modifiedOn
        
        @property { string } optLevel
        
        @property { number } createdOn
        
        @property { Object } [createdBy]
        
         
    */
/**
        @typedef GetOptInPlatform
        
        
        @property { Array<CompanyOptIn> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [companyType]
        
        @property { number } [uid]
        
        @property { string } [businessType]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [companyId]
        
        @property { string } [brandName]
        
        @property { number } [brandId]
        
        @property { number } [totalArticle]
        
         
    */
/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Array<CompanyBrandDetail> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef OptinCompanyMetrics
        
        
        @property { number } [store]
        
        @property { string } [company]
        
        @property { number } [brand]
        
         
    */
/**
        @typedef StoreDetail
        
        
        @property { number } [companyId]
        
        @property { string } [name]
        
        @property { string } [storeType]
        
        @property { string } [displayName]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [storeCode]
        
        @property { Array<Object> } [additionalContacts]
        
        @property { number } [uid]
        
        @property { Array<Object> } [documents]
        
        @property { Object } [timing]
        
         
    */
/**
        @typedef OptinStoreDetails
        
        
        @property { Array<StoreDetail> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AttributeMasterMandatoryDetails
        
        
        @property { Array<string> } [l3Keys]
        
         
    */
/**
        @typedef AttributeMasterMeta
        
        
        @property { boolean } [enriched]
        
        @property { AttributeMasterMandatoryDetails } mandatoryDetails
        
         
    */
/**
        @typedef AttributeMasterDetails
        
        
        @property { string } displayType
        
         
    */
/**
        @typedef AttributeSchemaRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */
/**
        @typedef AttributeMaster
        
        
        @property { string } type
        
        @property { AttributeSchemaRange } [range]
        
        @property { Array<string> } [enum]
        
        @property { boolean } [mandatory]
        
        @property { string } [format]
        
        @property { boolean } [multi]
        
         
    */
/**
        @typedef AttributeMasterFilter
        
        
        @property { boolean } indexing
        
        @property { Array<string> } [dependsOn]
        
        @property { number } [priority]
        
         
    */
/**
        @typedef GenderDetail
        
        
        @property { AttributeMasterMeta } [meta]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [departments]
        
        @property { string } [logo]
        
        @property { string } [id]
        
        @property { boolean } [enabledForEndConsumer]
        
        @property { AttributeMasterDetails } [details]
        
        @property { string } [description]
        
        @property { AttributeMaster } [schema]
        
        @property { AttributeMasterFilter } [filters]
        
        @property { boolean } [isNested]
        
         
    */
/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PTErrorResponse
        
        
        @property { Object } [meta]
        
        @property { string } [code]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { number } [status]
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [contact]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef GetDepartment
        
        
        @property { boolean } [isActive]
        
        @property { number } [priorityOrder]
        
        @property { string } [name]
        
        @property { UserSerializer } [createdBy]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { number } [pageNo]
        
        @property { number } [pageSize]
        
        @property { string } [slug]
        
        @property { string } [itemType]
        
        @property { string } [logo]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { number } [uid]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [search]
        
         
    */
/**
        @typedef DepartmentsResponse
        
        
        @property { Array<GetDepartment> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef DepartmentErrorResponse
        
        
        @property { Object } [meta]
        
        @property { string } [code]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { number } [status]
        
         
    */
/**
        @typedef ProductTemplate
        
        
        @property { boolean } [isActive]
        
        @property { string } [tag]
        
        @property { string } [name]
        
        @property { boolean } isPhysical
        
        @property { Object } [modifiedBy]
        
        @property { string } slug
        
        @property { Array<string> } [attributes]
        
        @property { Array<string> } [departments]
        
        @property { string } [logo]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
        @property { Array<string> } [categories]
        
        @property { boolean } [isArchived]
        
        @property { string } [description]
        
        @property { Object } [createdBy]
        
         
    */
/**
        @typedef TemplatesResponse
        
        
        @property { ProductTemplate } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Properties
        
        
        @property { Object } [name]
        
        @property { Object } [tags]
        
        @property { Object } [categorySlug]
        
        @property { Object } [productPublish]
        
        @property { Object } [description]
        
        @property { Object } [countryOfOrigin]
        
        @property { Object } [productGroupTag]
        
        @property { Object } [traderType]
        
        @property { Object } [slug]
        
        @property { Object } [command]
        
        @property { Object } [trader]
        
        @property { Object } [teaserTag]
        
        @property { Object } [isDependent]
        
        @property { Object } [currency]
        
        @property { Object } [highlights]
        
        @property { Object } [noOfBoxes]
        
        @property { Object } [customOrder]
        
        @property { Object } [media]
        
        @property { Object } [isActive]
        
        @property { Object } [sizes]
        
        @property { Object } [sizeGuide]
        
        @property { Object } [multiSize]
        
        @property { Object } [itemType]
        
        @property { Object } [variants]
        
        @property { Object } [moq]
        
        @property { Object } [shortDescription]
        
        @property { Object } [brandUid]
        
        @property { Object } [itemCode]
        
        @property { Object } [hsnCode]
        
        @property { Object } [returnConfig]
        
         
    */
/**
        @typedef GlobalValidation
        
        
        @property { string } [type]
        
        @property { Object } [definitions]
        
        @property { Properties } [properties]
        
        @property { Array<string> } [required]
        
        @property { string } [description]
        
        @property { string } [title]
        
         
    */
/**
        @typedef TemplateValidationData
        
        
        @property { GlobalValidation } [globalValidation]
        
        @property { Object } [templateValidation]
        
         
    */
/**
        @typedef TemplateDetails
        
        
        @property { boolean } [isActive]
        
        @property { string } [tag]
        
        @property { string } [name]
        
        @property { boolean } isPhysical
        
        @property { string } slug
        
        @property { Array<string> } [attributes]
        
        @property { Array<string> } [departments]
        
        @property { string } [logo]
        
        @property { Array<string> } [categories]
        
        @property { boolean } [isArchived]
        
        @property { string } [description]
        
        @property { string } [id]
        
         
    */
/**
        @typedef TemplatesValidationResponse
        
        
        @property { TemplateValidationData } [data]
        
        @property { TemplateDetails } [templateDetails]
        
         
    */
/**
        @typedef InventoryValidationResponse
        
        
        @property { string } [message]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef HSNData
        
        
        @property { Array<string> } [hsnCode]
        
        @property { Array<string> } [countryOfOrigin]
        
         
    */
/**
        @typedef HSNCodesResponse
        
        
        @property { string } [message]
        
        @property { HSNData } [data]
        
         
    */
/**
        @typedef UserInfo1
        
        
        @property { string } [email]
        
        @property { string } [uid]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef ProductTemplateExport
        
        
        @property { number } sellerId
        
        @property { Object } [data]
        
        @property { string } [url]
        
        @property { Array<string> } templateTags
        
        @property { string } triggerOn
        
        @property { string } [completedOn]
        
        @property { string } taskId
        
        @property { string } [status]
        
        @property { UserInfo1 } [createdBy]
        
         
    */
/**
        @typedef ProductDownloadsResponse
        
        
        @property { Array<ProductTemplateExport> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ProductConfigurationDownloads
        
        
        @property { Array<Object> } [data]
        
        @property { boolean } [multivalue]
        
         
    */
/**
        @typedef Hierarchy
        
        
        @property { number } l1
        
        @property { number } l2
        
        @property { number } department
        
         
    */
/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalogId]
        
         
    */
/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [ajio]
        
        @property { CategoryMappingValues } [facebook]
        
        @property { CategoryMappingValues } [google]
        
         
    */
/**
        @typedef Media2
        
        
        @property { string } portrait
        
        @property { string } landscape
        
        @property { string } logo
        
         
    */
/**
        @typedef CategoryRequestBody
        
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { Array<string> } [tryouts]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [slug]
        
        @property { Array<number> } departments
        
        @property { number } [priority]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Media2 } [media]
        
        @property { number } level
        
         
    */
/**
        @typedef CategoryCreateResponse
        
        
        @property { string } [message]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef Category
        
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { Array<string> } [tryouts]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { Array<string> } [synonyms]
        
        @property { Object } [createdBy]
        
        @property { Object } [modifiedBy]
        
        @property { string } [slug]
        
        @property { Array<number> } departments
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [id]
        
        @property { number } [priority]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { number } [uid]
        
        @property { Media2 } [media]
        
        @property { number } level
        
         
    */
/**
        @typedef CategoryResponse
        
        
        @property { Array<Category> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SingleCategoryResponse
        
        
        @property { Array<Category> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef ProductPublish
        
        
        @property { boolean } [isSet]
        
        @property { string } [productOnlineDate]
        
         
    */
/**
        @typedef Trader
        
        
        @property { string } address
        
        @property { string } name
        
         
    */
/**
        @typedef TeaserTag
        
        
        @property { string } [url]
        
        @property { string } [tag]
        
         
    */
/**
        @typedef CustomOrder
        
        
        @property { boolean } [isCustomOrder]
        
        @property { number } [manufacturingTime]
        
        @property { string } [manufacturingTimeUnit]
        
         
    */
/**
        @typedef OrderQuantity
        
        
        @property { number } [maximum]
        
        @property { boolean } [isSet]
        
        @property { number } [minimum]
        
         
    */
/**
        @typedef ReturnConfig
        
        
        @property { boolean } [returnable]
        
        @property { number } [time]
        
        @property { string } [unit]
        
         
    */
/**
        @typedef ProductCreateUpdate
        
        
        @property { number } companyId
        
        @property { boolean } [isSet]
        
        @property { string } name
        
        @property { Array<string> } [tags]
        
        @property { string } categorySlug
        
        @property { ProductPublish } [productPublish]
        
        @property { string } [description]
        
        @property { number } [uid]
        
        @property { string } [changeRequestId]
        
        @property { string } countryOfOrigin
        
        @property { string } templateTag
        
        @property { Object } [customJson]
        
        @property { Array<string> } [productGroupTag]
        
        @property { string } [traderType]
        
        @property { string } slug
        
        @property { string } [requester]
        
        @property { Trader } [trader]
        
        @property { TeaserTag } [teaserTag]
        
        @property { boolean } [isDependent]
        
        @property { string } currency
        
        @property { Array<string> } [highlights]
        
        @property { number } [noOfBoxes]
        
        @property { CustomOrder } [customOrder]
        
        @property { Array<Media1> } [media]
        
        @property { boolean } [isActive]
        
        @property { string } [sizeGuide]
        
        @property { boolean } [multiSize]
        
        @property { string } itemType
        
        @property { Array<number> } departments
        
        @property { Object } [variants]
        
        @property { OrderQuantity } [moq]
        
        @property { string } [shortDescription]
        
        @property { number } brandUid
        
        @property { string } itemCode
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } hsnCode
        
        @property { ReturnConfig } [returnConfig]
        
         
    */
/**
        @typedef UserCommon
        
        
        @property { number } [companyId]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef VerifiedBy
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef Attributes
        
        
        @property { string } [sleeveLength]
        
        @property { string } [primaryMaterial]
        
        @property { string } [imageNature]
        
        @property { string } [stage]
        
        @property { UserCommon } [createdBy]
        
        @property { string } [essential]
        
        @property { string } [primaryColor]
        
        @property { Array<string> } [gender]
        
        @property { string } [pattern]
        
        @property { UserCommon } [modifiedBy]
        
        @property { string } [material]
        
        @property { string } [color]
        
        @property { string } [modifiedOn]
        
        @property { string } [metaNature]
        
        @property { string } [verifiedOn]
        
        @property { string } [neckType]
        
        @property { Array<string> } [l3Mapping]
        
        @property { string } [createdOn]
        
        @property { string } [productFit]
        
        @property { boolean } [isImageLessProduct]
        
        @property { VerifiedBy } [verifiedBy]
        
         
    */
/**
        @typedef ProductPublished
        
        
        @property { boolean } [isSet]
        
        @property { number } [productOnlineDate]
        
         
    */
/**
        @typedef Logo
        
        
        @property { number } [aspectRatioF]
        
        @property { string } [url]
        
        @property { string } [secureUrl]
        
        @property { string } [aspectRatio]
        
         
    */
/**
        @typedef Brand
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { Logo } [logo]
        
         
    */
/**
        @typedef Product
        
        
        @property { number } [companyId]
        
        @property { boolean } [isSet]
        
        @property { string } [name]
        
        @property { string } [categorySlug]
        
        @property { Array<string> } [images]
        
        @property { Attributes } [attributes]
        
        @property { ProductPublished } [productPublish]
        
        @property { string } [description]
        
        @property { number } [uid]
        
        @property { string } [countryOfOrigin]
        
        @property { string } [templateTag]
        
        @property { Brand } [brand]
        
        @property { string } [slug]
        
        @property { string } [id]
        
        @property { boolean } [isDependent]
        
        @property { string } [currency]
        
        @property { string } [highlights]
        
        @property { Array<string> } [media]
        
        @property { boolean } [isActive]
        
        @property { string } [itemCode]
        
        @property { string } [sizeGuide]
        
        @property { Array<Object> } [sizes]
        
        @property { string } [itemType]
        
        @property { boolean } [multiSize]
        
        @property { Array<number> } [departments]
        
        @property { Array<string> } [allSizes]
        
        @property { string } [hsnCode]
        
         
    */
/**
        @typedef PageData
        
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
        @property { string } [current]
        
         
    */
/**
        @typedef ProductListingResponse
        
        
        @property { Array<Product> } [items]
        
        @property { PageData } [page]
        
         
    */
/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */
/**
        @typedef BulkJob
        
        
        @property { number } companyId
        
        @property { boolean } [isActive]
        
        @property { number } [succeed]
        
        @property { string } [customTemplateTag]
        
        @property { UserInfo1 } [createdBy]
        
        @property { number } [failed]
        
        @property { Array<Object> } [cancelledRecords]
        
        @property { Array<Object> } [failedRecords]
        
        @property { string } [trackingUrl]
        
        @property { number } total
        
        @property { number } [cancelled]
        
        @property { string } [modifiedOn]
        
        @property { string } createdOn
        
        @property { string } [stage]
        
        @property { string } [filePath]
        
        @property { UserInfo1 } [modifiedBy]
        
        @property { string } [templateTag]
        
         
    */
/**
        @typedef UserDetail
        
        
        @property { string } [userId]
        
        @property { string } [fullName]
        
        @property { string } [username]
        
         
    */
/**
        @typedef ProductBulkRequest
        
        
        @property { number } [companyId]
        
        @property { boolean } [isActive]
        
        @property { number } [succeed]
        
        @property { number } [failed]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { Array<string> } [failedRecords]
        
        @property { UserDetail } [modifiedBy]
        
        @property { number } [total]
        
        @property { number } [cancelled]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { ProductTemplate } [template]
        
        @property { string } [stage]
        
        @property { string } [filePath]
        
        @property { UserDetail } [createdBy]
        
        @property { string } [templateTag]
        
         
    */
/**
        @typedef ProductBulkRequestList
        
        
        @property { ProductBulkRequest } [items]
        
        @property { PageData } [page]
        
         
    */
/**
        @typedef BulkProductRequest
        
        
        @property { number } companyId
        
        @property { string } batchId
        
        @property { Array<Object> } data
        
        @property { string } templateTag
        
         
    */
/**
        @typedef NestedTags
        
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef ProductTagsViewResponse
        
        
        @property { NestedTags } [items]
        
         
    */
/**
        @typedef ProductBulkAssets
        
        
        @property { number } [companyId]
        
        @property { string } url
        
        @property { Object } user
        
         
    */
/**
        @typedef Items
        
        
        @property { number } [companyId]
        
        @property { number } [succeed]
        
        @property { boolean } [isActive]
        
        @property { UserCommon } [modifiedBy]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { number } [failed]
        
        @property { Array<string> } [failedRecords]
        
        @property { string } [trackingUrl]
        
        @property { number } [total]
        
        @property { number } [cancelled]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { number } [retry]
        
        @property { string } [stage]
        
        @property { string } [filePath]
        
        @property { string } [id]
        
        @property { UserCommon } [createdBy]
        
         
    */
/**
        @typedef BulkAssetResponse
        
        
        @property { Array<Items> } [items]
        
        @property { PageData } [page]
        
         
    */
/**
        @typedef GTIN
        
        
        @property { string } gtinType
        
        @property { boolean } [primary]
        
        @property { string } gtinValue
        
         
    */
/**
        @typedef SetSize
        
        
        @property { number } pieces
        
        @property { string } size
        
         
    */
/**
        @typedef SizeDistribution
        
        
        @property { Array<SetSize> } sizes
        
         
    */
/**
        @typedef InventorySet
        
        
        @property { SizeDistribution } sizeDistribution
        
        @property { number } [quantity]
        
         
    */
/**
        @typedef InvSize
        
        
        @property { boolean } [isSet]
        
        @property { number } priceEffective
        
        @property { number } [itemWidth]
        
        @property { number } [priceTransfer]
        
        @property { number } [itemWeight]
        
        @property { Array<GTIN> } identifiers
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { string } currency
        
        @property { string } storeCode
        
        @property { string } size
        
        @property { InventorySet } [set]
        
        @property { number } [itemHeight]
        
        @property { number } price
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { number } [itemLength]
        
        @property { number } quantity
        
         
    */
/**
        @typedef ItemQuery
        
        
        @property { number } [uid]
        
        @property { number } [brandUid]
        
        @property { string } [itemCode]
        
         
    */
/**
        @typedef InventoryRequest
        
        
        @property { number } companyId
        
        @property { Array<InvSize> } sizes
        
        @property { ItemQuery } item
        
         
    */
/**
        @typedef InventoryResponse
        
        
        @property { string } [inventoryUpdatedOn]
        
        @property { number } [priceEffective]
        
        @property { Object } [identifiers]
        
        @property { number } [priceTransfer]
        
        @property { number } [itemId]
        
        @property { string } [uid]
        
        @property { number } [sellerIdentifier]
        
        @property { string } [currency]
        
        @property { number } [sellableQuantity]
        
        @property { string } [size]
        
        @property { number } [price]
        
        @property { Object } [store]
        
        @property { number } [quantity]
        
         
    */
/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */
/**
        @typedef BulkInventoryGetItems
        
        
        @property { number } [companyId]
        
        @property { boolean } [isActive]
        
        @property { number } [succeed]
        
        @property { number } [failed]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { Array<string> } [failedRecords]
        
        @property { Object } [modifiedBy]
        
        @property { number } [cancelled]
        
        @property { number } [total]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [stage]
        
        @property { string } [filePath]
        
        @property { string } [id]
        
        @property { Object } [createdBy]
        
         
    */
/**
        @typedef BulkInventoryGet
        
        
        @property { Array<BulkInventoryGetItems> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Size1
        
        
        @property { boolean } [isSet]
        
        @property { number } priceEffective
        
        @property { number } [itemWidth]
        
        @property { number } [priceTransfer]
        
        @property { number } [itemWeight]
        
        @property { Array<Object> } [identifiers]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { string } sellerIdentifier
        
        @property { string } currency
        
        @property { string } storeCode
        
        @property { string } [size]
        
        @property { InventorySet } [set]
        
        @property { number } [itemHeight]
        
        @property { number } price
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { number } [itemLength]
        
        @property { number } quantity
        
         
    */
/**
        @typedef InventoryBulkRequest
        
        
        @property { number } companyId
        
        @property { Array<Size1> } sizes
        
        @property { string } batchId
        
        @property { Object } [user]
        
         
    */
/**
        @typedef InventoryExportRequest
        
        
        @property { string } [type]
        
        @property { Array<number> } [store]
        
        @property { Array<number> } [brand]
        
         
    */
/**
        @typedef InventoryExportJob
        
        
        @property { number } sellerId
        
        @property { string } [url]
        
        @property { string } [triggerOn]
        
        @property { string } [completedOn]
        
        @property { string } taskId
        
        @property { string } [status]
        
        @property { Object } [requestParams]
        
         
    */
/**
        @typedef FilerList
        
        
        @property { string } [value]
        
        @property { string } [display]
        
         
    */
/**
        @typedef InventoryConfig
        
        
        @property { Array<FilerList> } [data]
        
        @property { boolean } [multivalues]
        
         
    */
/**
        @typedef HsnUpsert
        
        
        @property { number } companyId
        
        @property { number } [threshold2]
        
        @property { boolean } taxOnMrp
        
        @property { boolean } isActive
        
        @property { string } hs2Code
        
        @property { number } [tax2]
        
        @property { number } threshold1
        
        @property { boolean } [taxOnEsp]
        
        @property { number } tax1
        
        @property { string } hsnCode
        
         
    */
/**
        @typedef HsnCodesObject
        
        
        @property { number } [companyId]
        
        @property { number } [threshold2]
        
        @property { boolean } [taxOnMrp]
        
        @property { boolean } [isActive]
        
        @property { string } [hs2Code]
        
        @property { number } [tax2]
        
        @property { number } [threshold1]
        
        @property { number } [uid]
        
        @property { boolean } [taxOnEsp]
        
        @property { number } [tax1]
        
        @property { string } [hsnCode]
        
         
    */
/**
        @typedef HsnCode
        
        
        @property { HsnCodesObject } [data]
        
         
    */
/**
        @typedef PageResponse
        
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
        @property { string } [current]
        
         
    */
/**
        @typedef HsnCodesListingResponse
        
        
        @property { Array<HsnCodesObject> } [items]
        
        @property { PageResponse } [page]
        
         
    */
/**
        @typedef BulkHsnUpsert
        
        
        @property { Array<HsnUpsert> } data
        
         
    */
/**
        @typedef BulkHsnResponse
        
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef SellerPhoneNumber
        
        
        @property { number } countryCode
        
        @property { string } number
        
         
    */
/**
        @typedef ContactDetails
        
        
        @property { Array<string> } [emails]
        
        @property { Array<SellerPhoneNumber> } [phone]
        
         
    */
/**
        @typedef Document
        
        
        @property { string } legalName
        
        @property { string } value
        
        @property { string } type
        
        @property { boolean } [verified]
        
        @property { string } [url]
        
         
    */
/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */
/**
        @typedef GetAddressSerializer
        
        
        @property { string } [state]
        
        @property { string } [address2]
        
        @property { string } [addressType]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { number } [latitude]
        
        @property { string } [address1]
        
        @property { string } [landmark]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef Website
        
        
        @property { string } [url]
        
         
    */
/**
        @typedef BusinessDetails
        
        
        @property { Website } [website]
        
         
    */
/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { number } uid
        
        @property { string } [verifiedOn]
        
        @property { boolean } [franchiseEnabled]
        
        @property { ContactDetails } [contactDetails]
        
        @property { string } [modifiedOn]
        
        @property { Array<Document> } [documents]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [stage]
        
        @property { string } [createdOn]
        
        @property { string } [businessInfo]
        
        @property { string } companyType
        
        @property { string } businessType
        
        @property { UserSerializer } [modifiedBy]
        
        @property { Object } [warnings]
        
        @property { BusinessCountryInfo } [businessCountryInfo]
        
        @property { string } [name]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { Array<string> } [notificationEmails]
        
        @property { BusinessDetails } [businessDetails]
        
        @property { UserSerializer } [createdBy]
        
         
    */
/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */
/**
        @typedef CompanyAddress
        
        
        @property { string } state
        
        @property { string } [address2]
        
        @property { number } longitude
        
        @property { string } city
        
        @property { number } latitude
        
        @property { string } address1
        
        @property { string } [landmark]
        
        @property { string } country
        
        @property { number } pincode
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */
/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { string } name
        
        @property { Object } [warnings]
        
        @property { number } [uid]
        
        @property { ReferralInfo } [referralInfo]
        
        @property { string } [businessInfo]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<string> } [notificationEmails]
        
        @property { CompanyAddress } address
        
        @property { BusinessCountryInfo1 } businessCountryInfo
        
        @property { Array<number> } brands
        
        @property { Document } document
        
        @property { string } businessType
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [pending]
        
        @property { number } [verified]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [product]
        
        @property { string } [stage]
        
        @property { DocumentsObj } [brand]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { DocumentsObj } [store]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [userId]
        
        @property { string } [contact]
        
        @property { string } [username]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [portrait]
        
        @property { string } [landscape]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } name
        
        @property { string } [slugKey]
        
        @property { string } [stage]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [createdOn]
        
        @property { number } [uid]
        
        @property { string } [verifiedOn]
        
        @property { string } [logo]
        
        @property { Object } [warnings]
        
        @property { string } [modifiedOn]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { Object } [customJson]
        
        @property { Object } [localeLanguage]
        
        @property { string } [description]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } [rejectReason]
        
        @property { BrandBannerSerializer } [banner]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { string } name
        
        @property { Array<string> } [synonyms]
        
        @property { string } [brandTier]
        
        @property { string } logo
        
        @property { number } [uid]
        
        @property { Object } [customJson]
        
        @property { Object } [localeLanguage]
        
        @property { string } [description]
        
        @property { number } [companyId]
        
        @property { BrandBannerSerializer } [banner]
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [name]
        
        @property { string } [stage]
        
        @property { string } [createdOn]
        
        @property { number } [uid]
        
        @property { string } [verifiedOn]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [modifiedOn]
        
        @property { string } [companyType]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [rejectReason]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [businessType]
        
         
    */
/**
        @typedef CompanyBrandSerializer
        
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { GetBrandResponseSerializer } [brand]
        
        @property { string } [stage]
        
        @property { Object } [warnings]
        
        @property { string } [createdOn]
        
        @property { number } [uid]
        
        @property { string } [verifiedOn]
        
        @property { GetCompanySerializer } [company]
        
        @property { string } [modifiedOn]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } [rejectReason]
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandSerializer> } [items]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { Array<number> } brands
        
        @property { number } company
        
        @property { number } [uid]
        
         
    */
/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { number } [storeUid]
        
        @property { boolean } [onSameStore]
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { SellerPhoneNumber } mobileNo
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */
/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [password]
        
        @property { string } [username]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eInvoice]
        
        @property { InvoiceCredSerializer } [eWaybill]
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */
/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef LocationDayWiseSerializer
        
        
        @property { LocationTimingSerializer } [opening]
        
        @property { LocationTimingSerializer } [closing]
        
        @property { string } weekday
        
        @property { boolean } open
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { number } [uid]
        
        @property { string } [verifiedOn]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } [modifiedOn]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Array<Document> } [documents]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } displayName
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { string } [stage]
        
        @property { string } [createdOn]
        
        @property { string } phoneNumber
        
        @property { string } code
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { Object } [warnings]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { GetAddressSerializer } address
        
        @property { string } [storeType]
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
        @property { string } name
        
        @property { Array<string> } [notificationEmails]
        
        @property { GetCompanySerializer } [company]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef LocationListSerializer
        
        
        @property { Page } [page]
        
        @property { Array<GetLocationSerializer> } [items]
        
         
    */
/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [state]
        
        @property { string } [address2]
        
        @property { string } [addressType]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { number } [latitude]
        
        @property { string } [address1]
        
        @property { string } [landmark]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef LocationSerializer
        
        
        @property { string } name
        
        @property { string } [stage]
        
        @property { Object } [warnings]
        
        @property { number } [uid]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { Array<string> } [notificationEmails]
        
        @property { number } company
        
        @property { Array<Document> } [documents]
        
        @property { GetAddressSerializer1 } address
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Object } [customJson]
        
        @property { string } [storeType]
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
        @property { string } code
        
        @property { string } displayName
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
         
    */
/**
        @typedef FailedResponse
        
        
        @property { string } message
        
         
    */
/**
        @typedef CDN
        
        
        @property { string } url
        
         
    */
/**
        @typedef Upload
        
        
        @property { number } expiry
        
        @property { string } url
        
         
    */
/**
        @typedef StartResponse
        
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
         
    */
/**
        @typedef StartRequest
        
        
        @property { string } fileName
        
        @property { string } contentType
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
         
    */
/**
        @typedef CompleteResponse
        
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
    */
/**
        @typedef Opts
        
        
        @property { number } [attempts]
        
        @property { number } [timestamp]
        
        @property { number } [delay]
        
         
    */
/**
        @typedef CopyFileTask
        
        
        @property { string } id
        
        @property { string } name
        
        @property { BulkRequest } data
        
        @property { Opts } opts
        
        @property { number } progress
        
        @property { number } delay
        
        @property { number } timestamp
        
        @property { number } attemptsMade
        
        @property { Array<string> } [stacktrace]
        
        @property { number } finishedOn
        
        @property { number } processedOn
        
         
    */
/**
        @typedef BulkResponse
        
        
        @property { string } trackingUrl
        
        @property { CopyFileTask } task
        
         
    */
/**
        @typedef ReqConfiguration
        
        
        @property { number } [concurrency]
        
         
    */
/**
        @typedef Destination
        
        
        @property { string } namespace
        
        @property { string } rewrite
        
        @property { string } [basepath]
        
         
    */
/**
        @typedef BulkRequest
        
        
        @property { Array<string> } urls
        
        @property { Destination } destination
        
        @property { ReqConfiguration } [configuration]
        
         
    */
/**
        @typedef Urls
        
        
        @property { string } url
        
        @property { string } signedUrl
        
        @property { number } expiry
        
         
    */
/**
        @typedef SignUrlResponse
        
        
        @property { Array<Urls> } urls
        
         
    */
/**
        @typedef SignUrlRequest
        
        
        @property { number } expiry
        
        @property { Array<string> } urls
        
         
    */
/**
        @typedef DbRecord
        
        
        @property { boolean } success
        
        @property { Array<string> } tags
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } [operation]
        
        @property { string } namespace
        
        @property { string } contentType
        
        @property { string } filePath
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
    */
/**
        @typedef BrowseResponse
        
        
        @property { Array<DbRecord> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef RedirectDevice
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */
/**
        @typedef WebRedirect
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */
/**
        @typedef Redirects
        
        
        @property { RedirectDevice } [ios]
        
        @property { RedirectDevice } [android]
        
        @property { WebRedirect } [web]
        
        @property { boolean } [forceWeb]
        
         
    */
/**
        @typedef CampaignShortLink
        
        
        @property { string } [source]
        
        @property { string } [medium]
        
         
    */
/**
        @typedef Attribution
        
        
        @property { string } [campaignCookieExpiry]
        
         
    */
/**
        @typedef SocialMediaTags
        
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { string } [image]
        
         
    */
/**
        @typedef ShortLinkReq
        
        
        @property { string } title
        
        @property { string } url
        
        @property { string } [hash]
        
        @property { boolean } [active]
        
        @property { string } [expireAt]
        
        @property { boolean } [enableTracking]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [socialMediaTags]
        
        @property { number } [count]
        
         
    */
/**
        @typedef UrlInfo
        
        
        @property { string } [original]
        
        @property { string } [short]
        
        @property { string } [hash]
        
         
    */
/**
        @typedef ShortLinkRes
        
        
        @property { string } [title]
        
        @property { UrlInfo } [url]
        
        @property { string } [createdBy]
        
        @property { boolean } [appRedirect]
        
        @property { string } [fallback]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { boolean } [enableTracking]
        
        @property { string } [expireAt]
        
        @property { string } [application]
        
        @property { string } [userId]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [socialMediaTags]
        
        @property { number } [count]
        
         
    */
/**
        @typedef ShortLinkList
        
        
        @property { Array<ShortLinkRes> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ErrorRes
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef DataTresholdDTO
        
        
        @property { number } [minPrice]
        
        @property { number } [safeStock]
        
        @property { number } [periodThreshold]
        
        @property { string } [periodThresholdType]
        
        @property { Array<GenericDTO> } [periodTypeList]
        
         
    */
/**
        @typedef GenericDTO
        
        
        @property { string } [text]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef JobConfigDTO
        
        
        @property { string } integration
        
        @property { Object } [integrationData]
        
        @property { string } [companyName]
        
        @property { number } companyId
        
        @property { TaskDTO } [taskDetails]
        
        @property { DataTresholdDTO } [thresholdDetails]
        
        @property { string } [jobCode]
        
        @property { string } [alias]
        
         
    */
/**
        @typedef TaskDTO
        
        
        @property { number } [type]
        
        @property { Array<GenericDTO> } [groupList]
        
         
    */
/**
        @typedef ResponseEnvelopeString
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { string } [items]
        
        @property { string } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AWSS3config
        
        
        @property { string } [bucket]
        
        @property { string } [region]
        
        @property { string } [dir]
        
        @property { string } [accessKey]
        
        @property { string } [secretKey]
        
        @property { string } [localFilePath]
        
        @property { string } [archivePath]
        
        @property { boolean } [archive]
        
        @property { boolean } [delete]
        
        @property { boolean } [unzip]
        
        @property { string } [zipFormat]
        
        @property { string } [fileRegex]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */
/**
        @typedef ArchiveConfig
        
        
        @property { boolean } [delete]
        
        @property { boolean } [archive]
        
        @property { string } [archiveDir]
        
         
    */
/**
        @typedef Audit
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef CatalogMasterConfig
        
        
        @property { string } [sourceSlug]
        
         
    */
/**
        @typedef CompanyConfig
        
        
        @property { number } [companyId]
        
        @property { Array<number> } [excludeSteps]
        
        @property { Array<string> } [hiddenClosetKeys]
        
        @property { Object } [openTags]
        
        @property { Array<string> } [taxIdentifiers]
        
        @property { number } [deleteQuantityThreshold]
        
         
    */
/**
        @typedef DBConfig
        
        
        @property { string } [vendor]
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [dbname]
        
        @property { string } [query]
        
        @property { boolean } [procedure]
        
        @property { string } [driverClass]
        
        @property { string } [jdbcUrl]
        
        @property { Object } [optionalProperties]
        
         
    */
/**
        @typedef DBConnectionProfile
        
        
        @property { string } [inventory]
        
         
    */
/**
        @typedef DBParamConfig
        
        
        @property { Object } [params]
        
         
    */
/**
        @typedef DefaultHeadersDTO
        
        
        @property { PropBeanDTO } [store]
        
        @property { PropBeanDTO } [intfArticleId]
        
        @property { PropBeanDTO } [priceEffective]
        
        @property { PropBeanDTO } [quantity]
        
         
    */
/**
        @typedef DocMappingConfig
        
        
        @property { Object } [properties]
        
        @property { number } [junkDataThresholdCount]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { string } [unwindField]
        
        @property { DefaultHeadersDTO } [defaultHeaders]
        
         
    */
/**
        @typedef EmailConfig
        
        
        @property { string } [recepient]
        
        @property { string } [host]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { boolean } [readFromContent]
        
        @property { boolean } [filterBasedOnRecepients]
        
        @property { string } [pcol]
        
        @property { string } [subjectLineRegex]
        
        @property { string } [senderAddress]
        
        @property { string } [localDir]
        
        @property { Array<string> } [folderNameHierarchies]
        
        @property { string } [attachmentRegex]
        
        @property { string } [bodyContentRegex]
        
        @property { boolean } [passwordProtected]
        
        @property { string } [zipFormat]
        
        @property { boolean } [attachmentMandate]
        
        @property { boolean } [filterFilesAfterExtraction]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllUnreadMails]
        
        @property { string } [contentType]
        
        @property { boolean } [downloadableLink]
        
        @property { Object } [properties]
        
         
    */
/**
        @typedef FTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [localDir]
        
        @property { string } [remoteDir]
        
        @property { string } [zipFileRegex]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { boolean } [readAllFiles]
        
         
    */
/**
        @typedef FileConfig
        
        
        @property { string } [delimiter]
        
        @property { string } [charset]
        
        @property { Object } [properties]
        
        @property { boolean } [fileHasHeader]
        
        @property { number } [headerIndex]
        
        @property { Array<string> } [headerArray]
        
        @property { number } [dataStartIndex]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { number } [junkDataThresholdCount]
        
        @property { string } [fileType]
        
        @property { boolean } [lineValidityCheck]
        
        @property { Array<string> } [sheetNames]
        
        @property { boolean } [readAllSheets]
        
        @property { string } [quoteChar]
        
        @property { string } [escapeChar]
        
        @property { DefaultHeadersDTO } [defaultHeaders]
        
         
    */
/**
        @typedef GoogleSpreadSheetConfig
        
        
        @property { string } [range]
        
        @property { string } [sheetId]
        
        @property { string } [clientSecretLocation]
        
        @property { string } [credStorageDirectory]
        
        @property { string } [localDir]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */
/**
        @typedef HttpConfig
        
        
        @property { string } [hosturl]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { Object } [requestParams]
        
        @property { string } [httpMethod]
        
        @property { string } [requestPayload]
        
        @property { string } [localPath]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */
/**
        @typedef JobConfig
        
        
        @property { number } [id]
        
        @property { string } [jobCode]
        
        @property { string } [taskType]
        
        @property { number } [syncDelay]
        
        @property { string } [cronExpression]
        
        @property { StoreFilter } [storeFilter]
        
        @property { ProcessConfig } [processConfig]
        
        @property { Array<StoreConfig> } [storeConfig]
        
        @property { Object } [properties]
        
        @property { boolean } [immediateFirstRun]
        
        @property { boolean } [disable]
        
        @property { Array<string> } [dependentJobCodes]
        
        @property { Array<CompanyConfig> } [companyConfig]
        
        @property { Array<number> } [companyIds]
        
        @property { Array<string> } [taxIdentifiers]
        
        @property { string } [priority]
        
        @property { number } [periodThreshold]
        
        @property { string } [periodThresholdType]
        
        @property { DBConnectionProfile } [dbConnectionProfile]
        
        @property { Object } [params]
        
        @property { Object } [openTags]
        
        @property { number } [deleteQuantityThreshold]
        
        @property { CatalogMasterConfig } [catalogMasterConfig]
        
        @property { Array<string> } [aggregatorTypes]
        
        @property { string } [integrationType]
        
        @property { number } [minPrice]
        
        @property { Audit } [audit]
        
        @property { number } [version]
        
        @property { string } [alias]
        
         
    */
/**
        @typedef JobConfigRawDTO
        
        
        @property { string } integration
        
        @property { string } companyName
        
        @property { number } companyId
        
        @property { JobConfig } [data]
        
         
    */
/**
        @typedef JsonDocConfig
        
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
         
    */
/**
        @typedef LocalFileConfig
        
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [localDir]
        
        @property { string } [workingDir]
        
        @property { boolean } [unzip]
        
        @property { string } [zipFileRegex]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllFiles]
        
         
    */
/**
        @typedef MongoDocConfig
        
        
        @property { string } [collectionName]
        
        @property { Object } [findQuery]
        
        @property { Object } [projectionQuery]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { Array<Object> } [aggregatePipeline]
        
        @property { boolean } [skipSave]
        
         
    */
/**
        @typedef OAuthConfig
        
        
        @property { number } [limit]
        
        @property { number } [pages]
        
        @property { number } [interval]
        
        @property { string } [consumerKey]
        
        @property { string } [consumerSecret]
        
        @property { string } [token]
        
        @property { string } [tokenSecret]
        
        @property { string } [restUrl]
        
        @property { string } [restBaseUrl]
        
        @property { string } [functionName]
        
         
    */
/**
        @typedef ProcessConfig
        
        
        @property { DBConfig } [dbConfig]
        
        @property { DBParamConfig } [dbParamConfig]
        
        @property { SFTPConfig } [sftpConfig]
        
        @property { AWSS3config } [awsS3Config]
        
        @property { MongoDocConfig } [mongoDocConfig]
        
        @property { FTPConfig } [ftpConfig]
        
        @property { EmailConfig } [emailConfig]
        
        @property { FileConfig } [fileConfig]
        
        @property { JsonDocConfig } [jsonDocConfig]
        
        @property { DocMappingConfig } [docMappingConfig]
        
        @property { TaskStepConfig } [taskStepConfig]
        
        @property { HttpConfig } [httpConfig]
        
        @property { LocalFileConfig } [localFileConfig]
        
        @property { OAuthConfig } [oauthConfig]
        
        @property { GoogleSpreadSheetConfig } [googleSpreadsheetConfig]
        
         
    */
/**
        @typedef PropBeanConfig
        
        
        @property { boolean } [required]
        
        @property { Object } [mapping]
        
        @property { boolean } [optional]
        
        @property { Send } [send]
        
        @property { Array<Object> } [validations]
        
        @property { Array<string> } [values]
        
        @property { boolean } [include]
        
        @property { string } [sourceField]
        
        @property { Array<string> } [sourceFields]
        
        @property { string } [destinationField]
        
        @property { string } [dataType]
        
        @property { Object } [defaultValue]
        
        @property { Object } [constValue]
        
        @property { string } [concatStr]
        
        @property { string } [functionName]
        
        @property { string } [transformerName]
        
        @property { string } [allParamFunctionName]
        
        @property { string } [subSeparator]
        
        @property { string } [indexField]
        
        @property { boolean } [ignoreIfNotExists]
        
        @property { string } [identifierType]
        
        @property { Object } [projectionQuery]
        
        @property { boolean } [enrichFromMaster]
        
         
    */
/**
        @typedef PropBeanDTO
        
        
        @property { boolean } [required]
        
        @property { boolean } [optional]
        
        @property { boolean } [include]
        
        @property { string } [sourceField]
        
        @property { Array<string> } [sourceFields]
        
        @property { string } [destinationField]
        
        @property { string } [dataType]
        
        @property { Object } [defaultValue]
        
        @property { Object } [constValue]
        
        @property { string } [concatStr]
        
        @property { string } [functionName]
        
        @property { string } [transformerName]
        
        @property { string } [allParamFunctionName]
        
        @property { string } [subSeparator]
        
        @property { string } [indexField]
        
        @property { boolean } [ignoreIfNotExists]
        
        @property { string } [identifierType]
        
        @property { Object } [projectionQuery]
        
        @property { boolean } [enrichFromMaster]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigRawDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigRawDTO> } [items]
        
        @property { Array<JobConfigRawDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SFTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [privateKeyPath]
        
        @property { boolean } [strictHostKeyChecking]
        
        @property { string } [localDir]
        
        @property { string } [remoteDir]
        
        @property { boolean } [passwordProtected]
        
        @property { string } [zipFileRegex]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllFiles]
        
         
    */
/**
        @typedef Send
        
        
        @property { boolean } [raw]
        
        @property { boolean } [processed]
        
         
    */
/**
        @typedef StoreConfig
        
        
        @property { string } [jobCode]
        
        @property { string } [storeid]
        
        @property { string } [storeAlias]
        
        @property { string } [storeFileRegex]
        
        @property { string } [storeFileName]
        
        @property { ProcessConfig } [processConfig]
        
        @property { Object } [properties]
        
         
    */
/**
        @typedef StoreFilter
        
        
        @property { Array<string> } [includeTags]
        
        @property { Array<string> } [excludeTags]
        
        @property { Object } [query]
        
         
    */
/**
        @typedef TaskConfig
        
        
        @property { string } [name]
        
        @property { number } [taskConfigId]
        
        @property { Array<TaskParam> } [taskParams]
        
         
    */
/**
        @typedef TaskParam
        
        
        @property { string } [name]
        
        @property { Object } [value]
        
         
    */
/**
        @typedef TaskStepConfig
        
        
        @property { Array<TaskConfig> } [taskConfigs]
        
        @property { Array<number> } [taskConfigIds]
        
        @property { Array<number> } [taskConfigGroupIds]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigDTO> } [items]
        
        @property { Array<JobConfigDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ResponseEnvelopeJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { JobConfigDTO } [items]
        
        @property { JobConfigDTO } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef JobConfigListDTO
        
        
        @property { string } [code]
        
        @property { string } [alias]
        
        @property { string } [modifiedBy]
        
        @property { string } [createdBy]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { boolean } [active]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ResponseEnvelopeListJobConfigListDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigListDTO> } [items]
        
        @property { Array<JobConfigListDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ApplicationInventory
        
        
        @property { AppInventoryConfig } [inventory]
        
        @property { AuthenticationConfig } [authentication]
        
        @property { ArticleAssignmentConfig } [articleAssignment]
        
        @property { RewardPointsConfig } [rewardPoints]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { AppOrderConfig } [order]
        
        @property { AppLogisticsConfig } [logistics]
        
        @property { string } [business]
        
        @property { boolean } [commsEnabled]
        
        @property { Array<string> } [platforms]
        
        @property { string } [id]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { string } [app]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [modifiedBy]
        
         
    */
/**
        @typedef AppInventoryConfig
        
        
        @property { InventoryBrand } [brand]
        
        @property { InventoryStore } [store]
        
        @property { InventoryCategory } [category]
        
        @property { InventoryPrice } [price]
        
        @property { InventoryDiscount } [discount]
        
        @property { boolean } [outOfStock]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<any> } [excludeCategory]
        
        @property { Array<string> } [image]
        
        @property { Array<any> } [companyStore]
        
         
    */
/**
        @typedef InventoryBrand
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [brands]
        
         
    */
/**
        @typedef InventoryStore
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [stores]
        
        @property { AppStoreRules } [rules]
        
         
    */
/**
        @typedef AppStoreRules
        
        
        @property { Array<number> } [companies]
        
        @property { Array<any> } [brands]
        
         
    */
/**
        @typedef InventoryCategory
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [categories]
        
         
    */
/**
        @typedef InventoryPrice
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef InventoryDiscount
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef AuthenticationConfig
        
        
        @property { boolean } [required]
        
        @property { string } [provider]
        
         
    */
/**
        @typedef ArticleAssignmentConfig
        
        
        @property { ArticleAssignmentRules } [rules]
        
        @property { boolean } [postOrderReassignment]
        
        @property { Array<any> } [enforcedStores]
        
         
    */
/**
        @typedef ArticleAssignmentRules
        
        
        @property { StorePriority } [storePriority]
        
         
    */
/**
        @typedef StorePriority
        
        
        @property { boolean } [enabled]
        
        @property { Array<any> } [storetypeOrder]
        
         
    */
/**
        @typedef RewardPointsConfig
        
        
        @property { Credit } [credit]
        
        @property { Debit } [debit]
        
         
    */
/**
        @typedef Credit
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef Debit
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [autoApply]
        
        @property { string } [strategyChannel]
        
         
    */
/**
        @typedef AppCartConfig
        
        
        @property { DeliveryCharges } [deliveryCharges]
        
        @property { boolean } [enabled]
        
        @property { number } [maxCartItems]
        
        @property { number } [minCartValue]
        
        @property { boolean } [bulkCoupons]
        
         
    */
/**
        @typedef DeliveryCharges
        
        
        @property { boolean } [enabled]
        
        @property { Charges } [charges]
        
         
    */
/**
        @typedef Charges
        
        
        @property { number } [threshold]
        
        @property { number } [charges]
        
         
    */
/**
        @typedef AppPaymentConfig
        
        
        @property { CallbackUrl } [callbackUrl]
        
        @property { Methods } [methods]
        
        @property { PaymentSelectionLock } [paymentSelectionLock]
        
        @property { string } [modeOfPayment]
        
        @property { string } [source]
        
        @property { boolean } [enabled]
        
        @property { number } [codAmountLimit]
        
        @property { number } [codCharges]
        
         
    */
/**
        @typedef CallbackUrl
        
        
        @property { string } [app]
        
        @property { string } [web]
        
         
    */
/**
        @typedef Methods
        
        
        @property { PaymentModeConfig } [pl]
        
        @property { PaymentModeConfig } [card]
        
        @property { PaymentModeConfig } [nb]
        
        @property { PaymentModeConfig } [wl]
        
        @property { PaymentModeConfig } [ps]
        
        @property { PaymentModeConfig } [upi]
        
        @property { PaymentModeConfig } [qr]
        
        @property { PaymentModeConfig } [cod]
        
        @property { PaymentModeConfig } [pp]
        
        @property { PaymentModeConfig } [jp]
        
        @property { PaymentModeConfig } [pac]
        
        @property { PaymentModeConfig } [fc]
        
        @property { PaymentModeConfig } [jiopp]
        
        @property { PaymentModeConfig } [stripepg]
        
        @property { PaymentModeConfig } [juspaypg]
        
        @property { PaymentModeConfig } [payubizpg]
        
        @property { PaymentModeConfig } [payumoneypg]
        
        @property { PaymentModeConfig } [rupifipg]
        
        @property { PaymentModeConfig } [simpl]
        
         
    */
/**
        @typedef PaymentModeConfig
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef PaymentSelectionLock
        
        
        @property { boolean } [enabled]
        
        @property { string } [defaultOptions]
        
        @property { string } [paymentIdentifier]
        
         
    */
/**
        @typedef AppOrderConfig
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [forceReassignment]
        
         
    */
/**
        @typedef AppLogisticsConfig
        
        
        @property { boolean } [logisticsBySeller]
        
        @property { boolean } [serviceabilityCheck]
        
        @property { boolean } [sameDayDelivery]
        
        @property { boolean } [dpAssignment]
        
         
    */
/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [autoApply]
        
         
    */
/**
        @typedef AppInventoryPartialUpdate
        
        
        @property { RewardPointsConfig } [rewardPoints]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { boolean } [commsEnabled]
        
         
    */
/**
        @typedef BrandCompanyInfo
        
        
        @property { string } [companyName]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef CompanyByBrandsRequest
        
        
        @property { number } brands
        
        @property { string } [searchText]
        
         
    */
/**
        @typedef CompanyByBrandsResponse
        
        
        @property { Array<BrandCompanyInfo> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef StoreByBrandsRequest
        
        
        @property { number } [companyId]
        
        @property { number } brands
        
        @property { string } [searchText]
        
         
    */
/**
        @typedef StoreByBrandsResponse
        
        
        @property { Array<BrandStoreInfo> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef BrandStoreInfo
        
        
        @property { string } [storeName]
        
        @property { number } [storeId]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { OptedStoreAddress } [storeAddress]
        
        @property { OptedCompany } [company]
        
         
    */
/**
        @typedef CompanyBrandInfo
        
        
        @property { string } [name]
        
        @property { number } [value]
        
        @property { string } [brandLogoUrl]
        
        @property { string } [brandBannerUrl]
        
        @property { string } [brandBannerPortraitUrl]
        
         
    */
/**
        @typedef BrandsByCompanyResponse
        
        
        @property { CompanyBrandInfo } [brands]
        
         
    */
/**
        @typedef CreateApplicationRequest
        
        
        @property { App } [app]
        
        @property { AppInventory } [configuration]
        
        @property { AppDomain } [domain]
        
         
    */
/**
        @typedef CreateAppResponse
        
        
        @property { Application } [app]
        
        @property { ApplicationInventory } [configuration]
        
         
    */
/**
        @typedef ApplicationsResponse
        
        
        @property { Array<Application> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef MobileAppConfiguration
        
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [appName]
        
        @property { LandingImage } [landingImage]
        
        @property { SplashImage } [splashImage]
        
        @property { string } [application]
        
        @property { string } [platformType]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { string } [packageName]
        
         
    */
/**
        @typedef LandingImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef SplashImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef MobileAppConfigRequest
        
        
        @property { string } [appName]
        
        @property { LandingImage } [landingImage]
        
        @property { SplashImage } [splashImage]
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef BuildVersionHistory
        
        
        @property { BuildVersion } [versions]
        
        @property { string } [latestAvailableVersionName]
        
         
    */
/**
        @typedef BuildVersion
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [platformType]
        
        @property { string } [buildStatus]
        
        @property { string } [versionName]
        
        @property { number } [versionCode]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef AppSupportedCurrency
        
        
        @property { string } [id]
        
        @property { Array<string> } [supportedCurrency]
        
        @property { string } [application]
        
        @property { DefaultCurrency } [defaultCurrency]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef DefaultCurrency
        
        
        @property { string } [ref]
        
        @property { string } [code]
        
         
    */
/**
        @typedef CurrencyConfig
        
        
        @property { string } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [decimalDigits]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef DomainAdd
        
        
        @property { string } [name]
        
         
    */
/**
        @typedef DomainAddRequest
        
        
        @property { DomainAdd } [domain]
        
         
    */
/**
        @typedef DomainsResponse
        
        
        @property { Array<Domain> } [domains]
        
         
    */
/**
        @typedef UpdateDomain
        
        
        @property { string } [id]
        
         
    */
/**
        @typedef UpdateDomainTypeRequest
        
        
        @property { UpdateDomain } [domain]
        
        @property { string } [action]
        
         
    */
/**
        @typedef DomainStatusRequest
        
        
        @property { string } [domainUrl]
        
         
    */
/**
        @typedef DomainStatus
        
        
        @property { string } [display]
        
        @property { boolean } [status]
        
         
    */
/**
        @typedef DomainStatusResponse
        
        
        @property { boolean } [connected]
        
        @property { Array<DomainStatus> } [status]
        
         
    */
/**
        @typedef DomainSuggestionsRequest
        
        
        @property { string } [domainUrl]
        
        @property { boolean } [custom]
        
         
    */
/**
        @typedef DomainSuggestion
        
        
        @property { string } name
        
        @property { boolean } [unsupported]
        
        @property { boolean } isAvailable
        
        @property { number } [price]
        
        @property { string } [currency]
        
         
    */
/**
        @typedef DomainSuggestionsResponse
        
        
        @property { Array<DomainSuggestion> } [domains]
        
         
    */
/**
        @typedef GetIntegrationsOptInsResponse
        
        
        @property { IntegrationOptIn } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef IntegrationOptIn
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [descriptionHtml]
        
        @property { string } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Validators
        
        
        @property { CompanyValidator } [company]
        
        @property { StoreValidator } [store]
        
        @property { InventoryValidator } [inventory]
        
        @property { OrderValidator } [order]
        
         
    */
/**
        @typedef CompanyValidator
        
        
        @property { JsonSchema } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */
/**
        @typedef JsonSchema
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [tooltip]
        
         
    */
/**
        @typedef StoreValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */
/**
        @typedef InventoryValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */
/**
        @typedef OrderValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */
/**
        @typedef IntegrationMeta
        
        
        @property { boolean } [isPublic]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Integration
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [descriptionHtml]
        
        @property { Object } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [v]
        
         
    */
/**
        @typedef IntegrationConfigResponse
        
        
        @property { IntegrationLevel } [items]
        
         
    */
/**
        @typedef IntegrationLevel
        
        
        @property { boolean } [opted]
        
        @property { Array<Object> } [permissions]
        
        @property { Array<Object> } [lastPatch]
        
        @property { string } [id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { Array<any> } [meta]
        
        @property { string } [token]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef OptedStoreIntegration
        
        
        @property { boolean } [otherOpted]
        
        @property { IntegrationOptIn } [otherIntegration]
        
        @property { OtherEntity } [otherEntity]
        
         
    */
/**
        @typedef OtherEntity
        
        
        @property { boolean } [opted]
        
        @property { Array<string> } [permissions]
        
        @property { LastPatch } [lastPatch]
        
        @property { string } [id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { OtherEntityData } [data]
        
        @property { Array<Object> } [meta]
        
        @property { string } [token]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef LastPatch
        
        
        @property { string } [op]
        
        @property { string } [path]
        
        @property { string } [value]
        
         
    */
/**
        @typedef OtherEntityData
        
        
        @property { string } [articleIdentifier]
        
         
    */
/**
        @typedef App
        
        
        @property { string } [companyId]
        
        @property { string } [channelType]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [name]
        
        @property { string } [desc]
        
         
    */
/**
        @typedef AppInventory
        
        
        @property { InventoryBrandRule } [brand]
        
        @property { InventoryStoreRule } [store]
        
        @property { Array<string> } [image]
        
        @property { boolean } [franchiseEnabled]
        
        @property { boolean } [outOfStock]
        
        @property { InventoryPaymentConfig } [payment]
        
        @property { InventoryArticleAssignment } [articleAssignment]
        
         
    */
/**
        @typedef AppDomain
        
        
        @property { string } [name]
        
         
    */
/**
        @typedef CompaniesResponse
        
        
        @property { AppInventoryCompanies } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AppInventoryCompanies
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [companyType]
        
         
    */
/**
        @typedef StoresResponse
        
        
        @property { AppInventoryStores } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AppInventoryStores
        
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef FilterOrderingStoreRequest
        
        
        @property { boolean } [allStores]
        
        @property { Array<number> } [deployedStores]
        
        @property { string } [q]
        
         
    */
/**
        @typedef DeploymentMeta
        
        
        @property { Array<number> } [deployedStores]
        
        @property { boolean } [allStores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { number } [v]
        
         
    */
/**
        @typedef OrderingStoreConfig
        
        
        @property { DeploymentMeta } [deploymentMeta]
        
         
    */
/**
        @typedef OtherSellerCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OtherSellerApplication
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [domain]
        
        @property { OtherSellerCompany } [company]
        
        @property { string } [optType]
        
         
    */
/**
        @typedef OtherSellerApplications
        
        
        @property { Array<OtherSellerApplication> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef OptedApplicationResponse
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [domain]
        
        @property { OptedCompany } [company]
        
        @property { OptedInventory } [optedInventory]
        
        @property { OptOutInventory } [optOutInventory]
        
         
    */
/**
        @typedef OptedCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OptedInventory
        
        
        @property { OptType } [optType]
        
        @property { any } [items]
        
         
    */
/**
        @typedef OptType
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */
/**
        @typedef OptedStore
        
        
        @property { string } [name]
        
        @property { string } [storeCode]
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef OptOutInventory
        
        
        @property { Array<number> } store
        
        @property { Array<number> } company
        
         
    */
/**
        @typedef ProductDetailFeature
        
        
        @property { Array<string> } [similar]
        
        @property { boolean } [sellerSelection]
        
        @property { boolean } [updateProductMeta]
        
        @property { boolean } [requestProduct]
        
         
    */
/**
        @typedef LaunchPage
        
        
        @property { string } [pageType]
        
        @property { string } [params]
        
        @property { string } [query]
        
         
    */
/**
        @typedef LandingPageFeature
        
        
        @property { LaunchPage } [launchPage]
        
        @property { boolean } [continueAsGuest]
        
        @property { string } [loginBtnText]
        
        @property { boolean } [showDomainTextbox]
        
        @property { boolean } [showRegisterBtn]
        
         
    */
/**
        @typedef RegistrationPageFeature
        
        
        @property { boolean } [askStoreAddress]
        
         
    */
/**
        @typedef AppFeature
        
        
        @property { ProductDetailFeature } [productDetail]
        
        @property { LandingPageFeature } [landingPage]
        
        @property { RegistrationPageFeature } [registrationPage]
        
        @property { HomePageFeature } [homePage]
        
        @property { CommonFeature } [common]
        
        @property { CartFeature } [cart]
        
        @property { QrFeature } [qr]
        
        @property { PcrFeature } [pcr]
        
        @property { OrderFeature } [order]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef HomePageFeature
        
        
        @property { boolean } [orderProcessing]
        
         
    */
/**
        @typedef CommonFeature
        
        
        @property { CommunicationOptinDialogFeature } [communicationOptinDialog]
        
        @property { DeploymentStoreSelectionFeature } [deploymentStoreSelection]
        
        @property { ListingPriceFeature } [listingPrice]
        
        @property { ListingPageFeature } [listingPage]
        
        @property { CurrencyFeature } [currency]
        
        @property { RevenueEngineFeature } [revenueEngine]
        
        @property { FeedbackFeature } [feedback]
        
        @property { CompareProductsFeature } [compareProducts]
        
         
    */
/**
        @typedef CommunicationOptinDialogFeature
        
        
        @property { boolean } [visibility]
        
         
    */
/**
        @typedef DeploymentStoreSelectionFeature
        
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ListingPriceFeature
        
        
        @property { string } [value]
        
        @property { string } [sort]
        
         
    */
/**
        @typedef ListingPageFeature
        
        
        @property { string } [sortOn]
        
         
    */
/**
        @typedef CurrencyFeature
        
        
        @property { Array<string> } [value]
        
        @property { string } [type]
        
        @property { string } [defaultCurrency]
        
         
    */
/**
        @typedef RevenueEngineFeature
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef FeedbackFeature
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef CompareProductsFeature
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef CartFeature
        
        
        @property { boolean } [gstInput]
        
        @property { boolean } [staffSelection]
        
        @property { boolean } [placingForCustomer]
        
        @property { boolean } [googleMap]
        
         
    */
/**
        @typedef QrFeature
        
        
        @property { boolean } [application]
        
        @property { boolean } [products]
        
        @property { boolean } [collections]
        
         
    */
/**
        @typedef PcrFeature
        
        
        @property { boolean } [staffSelection]
        
         
    */
/**
        @typedef OrderFeature
        
        
        @property { boolean } [buyAgain]
        
         
    */
/**
        @typedef AppFeatureRequest
        
        
        @property { AppFeature } [feature]
        
         
    */
/**
        @typedef AppFeatureResponse
        
        
        @property { AppFeature } [feature]
        
         
    */
/**
        @typedef Currency
        
        
        @property { string } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [decimalDigits]
        
        @property { string } [symbol]
        
         
    */
/**
        @typedef Domain
        
        
        @property { boolean } [verified]
        
        @property { boolean } [isPrimary]
        
        @property { boolean } [isDefault]
        
        @property { boolean } [isShortlink]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */
/**
        @typedef ApplicationWebsite
        
        
        @property { boolean } [enabled]
        
        @property { string } [basepath]
        
         
    */
/**
        @typedef ApplicationCors
        
        
        @property { Array<string> } [domains]
        
         
    */
/**
        @typedef ApplicationAuth
        
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef ApplicationRedirections
        
        
        @property { string } [from]
        
        @property { string } [redirectTo]
        
        @property { string } [type]
        
         
    */
/**
        @typedef ApplicationMeta
        
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */
/**
        @typedef SecureUrl
        
        
        @property { string } [secureUrl]
        
         
    */
/**
        @typedef Application
        
        
        @property { ApplicationWebsite } [website]
        
        @property { ApplicationCors } [cors]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [description]
        
        @property { string } [channelType]
        
        @property { number } [cacheTtl]
        
        @property { boolean } [isInternal]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { number } [companyId]
        
        @property { string } [token]
        
        @property { Array<ApplicationRedirections> } [redirections]
        
        @property { Array<ApplicationMeta> } [meta]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { SecureUrl } [banner]
        
        @property { SecureUrl } [logo]
        
        @property { SecureUrl } [favicon]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [appType]
        
        @property { SecureUrl } [mobileLogo]
        
        @property { Domain } [domain]
        
         
    */
/**
        @typedef NotFound
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef UnhandledError
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef InvalidPayloadRequest
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef SuccessMessageResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef InventoryBrandRule
        
        
        @property { string } [criteria]
        
        @property { Array<number> } [brands]
        
         
    */
/**
        @typedef StoreCriteriaRule
        
        
        @property { Array<number> } [companies]
        
        @property { Array<number> } [brands]
        
         
    */
/**
        @typedef InventoryStoreRule
        
        
        @property { string } [criteria]
        
        @property { Array<StoreCriteriaRule> } [rules]
        
        @property { Array<number> } [stores]
        
         
    */
/**
        @typedef InventoryPaymentConfig
        
        
        @property { string } [modeOfPayment]
        
        @property { string } [source]
        
         
    */
/**
        @typedef StorePriorityRule
        
        
        @property { boolean } [enabled]
        
        @property { Array<string> } [storetypeOrder]
        
         
    */
/**
        @typedef ArticleAssignmentRule
        
        
        @property { StorePriorityRule } [storePriority]
        
         
    */
/**
        @typedef InventoryArticleAssignment
        
        
        @property { boolean } [postOrderReassignment]
        
        @property { Array<number> } [enforcedStores]
        
        @property { ArticleAssignmentRule } [rules]
        
         
    */
/**
        @typedef CompanyAboutAddress
        
        
        @property { number } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [addressType]
        
         
    */
/**
        @typedef UserEmail
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
         
    */
/**
        @typedef UserPhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { number } [countryCode]
        
        @property { string } [phone]
        
         
    */
/**
        @typedef ApplicationInformation
        
        
        @property { InformationAddress } [address]
        
        @property { InformationSupport } [support]
        
        @property { SocialLinks } [socialLinks]
        
        @property { Links } [links]
        
        @property { string } [copyrightText]
        
        @property { string } [id]
        
        @property { BusinessHighlights } [businessHighlights]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef InformationAddress
        
        
        @property { string } [loc]
        
        @property { Array<string> } [addressLine]
        
        @property { InformationPhone } [phone]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
         
    */
/**
        @typedef InformationPhone
        
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */
/**
        @typedef InformationSupport
        
        
        @property { Array<string> } [phone]
        
        @property { Array<string> } [email]
        
        @property { string } [timing]
        
         
    */
/**
        @typedef SocialLinks
        
        
        @property { Facebook } [facebook]
        
        @property { Instagram } [instagram]
        
        @property { Twitter } [twitter]
        
        @property { Pinterest } [pinterest]
        
        @property { GooglePlus } [googlePlus]
        
        @property { Youtube } [youtube]
        
        @property { LinkedIn } [linkedIn]
        
        @property { Vimeo } [vimeo]
        
        @property { BlogLink } [blogLink]
        
         
    */
/**
        @typedef Instagram
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Twitter
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Pinterest
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef GooglePlus
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Youtube
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef LinkedIn
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Vimeo
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef BlogLink
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */
/**
        @typedef Links
        
        
        @property { string } [title]
        
        @property { string } [link]
        
         
    */
/**
        @typedef BusinessHighlights
        
        
        @property { string } [id]
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [subTitle]
        
         
    */
/**
        @typedef ApplicationDetail
        
        
        @property { string } name
        
        @property { string } description
        
        @property { SecureUrl } logo
        
        @property { SecureUrl } mobileLogo
        
        @property { SecureUrl } favicon
        
        @property { SecureUrl } banner
        
        @property { Domain } [domain]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [id]
        
         
    */
/**
        @typedef CurrenciesResponse
        
        
        @property { Array<Currency> } [items]
        
         
    */
/**
        @typedef StoreLatLong
        
        
        @property { string } [type]
        
        @property { Array<number> } [coordinates]
        
         
    */
/**
        @typedef OptedStoreAddress
        
        
        @property { string } [state]
        
        @property { string } [address1]
        
        @property { StoreLatLong } [latLong]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
         
    */
/**
        @typedef OrderingStore
        
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [id]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { number } [pincode]
        
        @property { string } [code]
        
         
    */
/**
        @typedef OrderingStores
        
        
        @property { Page } [page]
        
        @property { Array<OrderingStore> } [items]
        
        @property { Array<number> } [deployedStores]
        
        @property { boolean } [allStores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { number } [v]
        
         
    */
/**
        @typedef TokenResponse
        
        
        @property { Tokens } [tokens]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */
/**
        @typedef Tokens
        
        
        @property { Firebase } [firebase]
        
        @property { Moengage } [moengage]
        
        @property { Segment } [segment]
        
        @property { Gtm } [gtm]
        
        @property { Freshchat } [freshchat]
        
        @property { Safetynet } [safetynet]
        
        @property { FyndRewards } [fyndRewards]
        
        @property { Auth } [auth]
        
        @property { GoogleMap } [googleMap]
        
         
    */
/**
        @typedef Firebase
        
        
        @property { Credentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef Credentials
        
        
        @property { Ios } [ios]
        
        @property { Android } [android]
        
        @property { string } [projectId]
        
        @property { string } [gcmSenderId]
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef Ios
        
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef Android
        
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef Moengage
        
        
        @property { MoengageCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef MoengageCredentials
        
        
        @property { string } [appId]
        
         
    */
/**
        @typedef Segment
        
        
        @property { SegmentCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SegmentCredentials
        
        
        @property { string } [writeKey]
        
         
    */
/**
        @typedef Gtm
        
        
        @property { GtmCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef GtmCredentials
        
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef Freshchat
        
        
        @property { FreshchatCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef FreshchatCredentials
        
        
        @property { string } [appId]
        
        @property { string } [appKey]
        
        @property { string } [webToken]
        
         
    */
/**
        @typedef Safetynet
        
        
        @property { SafetynetCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */
/**
        @typedef SafetynetCredentials
        
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef FyndRewards
        
        
        @property { FyndRewardsCredentials } [credentials]
        
         
    */
/**
        @typedef FyndRewardsCredentials
        
        
        @property { string } [publicKey]
        
         
    */
/**
        @typedef Auth
        
        
        @property { Google } [google]
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountkit]
        
         
    */
/**
        @typedef GoogleMap
        
        
        @property { GoogleMapCredentials } [credentials]
        
         
    */
/**
        @typedef GoogleMapCredentials
        
        
        @property { string } [apiKey]
        
         
    */
/**
        @typedef CouponAuthor
        
        
        @property { string } [modifiedBy]
        
        @property { string } [createdBy]
        
         
    */
/**
        @typedef PostOrder
        
        
        @property { boolean } [returnAllowed]
        
        @property { boolean } [cancellationAllowed]
        
         
    */
/**
        @typedef PriceRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */
/**
        @typedef UsesRemaining
        
        
        @property { number } [user]
        
        @property { number } [app]
        
        @property { number } [total]
        
         
    */
/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [remaining]
        
        @property { UsesRemaining } [maximum]
        
         
    */
/**
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */
/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [codes]
        
        @property { Array<string> } [types]
        
        @property { PaymentAllowValue } [uses]
        
        @property { Array<string> } [networks]
        
         
    */
/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [card]
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [nb]
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [qr]
        
         
    */
/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multiStoreAllowed
        
         
    */
/**
        @typedef Restrictions
        
        
        @property { PostOrder } [postOrder]
        
        @property { PriceRange } [priceRange]
        
        @property { UsesRestriction } [uses]
        
        @property { PaymentCodes } [payments]
        
        @property { Array<number> } [orderingStores]
        
        @property { Array<string> } [platforms]
        
        @property { BulkBundleRestriction } [bulkBundle]
        
        @property { boolean } [couponAllowed]
        
         
    */
/**
        @typedef CouponSchedule
        
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { Array<Object> } [nextSchedule]
        
        @property { number } [duration]
        
        @property { string } [cron]
        
         
    */
/**
        @typedef State
        
        
        @property { boolean } [isDisplay]
        
        @property { boolean } [isArchived]
        
        @property { boolean } [isPublic]
        
         
    */
/**
        @typedef RuleDefinition
        
        
        @property { boolean } [isExact]
        
        @property { string } type
        
        @property { string } applicableOn
        
        @property { boolean } [autoApply]
        
        @property { string } calculateOn
        
        @property { Array<string> } [scope]
        
        @property { string } [currencyCode]
        
        @property { string } valueType
        
         
    */
/**
        @typedef Validation
        
        
        @property { boolean } [anonymous]
        
        @property { string } [userRegisteredAfter]
        
        @property { Array<string> } [appId]
        
         
    */
/**
        @typedef CouponDateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef DisplayMetaDict
        
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
         
    */
/**
        @typedef DisplayMeta
        
        
        @property { DisplayMetaDict } [auto]
        
        @property { DisplayMetaDict } [apply]
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
        @property { string } [description]
        
        @property { DisplayMetaDict } [remove]
        
         
    */
/**
        @typedef CouponAction
        
        
        @property { string } [actionDate]
        
        @property { string } [txnMode]
        
         
    */
/**
        @typedef Ownership
        
        
        @property { string } payableBy
        
        @property { string } payableCategory
        
         
    */
/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */
/**
        @typedef Identifier
        
        
        @property { Array<string> } [userId]
        
        @property { Array<number> } [categoryId]
        
        @property { Array<number> } [brandId]
        
        @property { Array<number> } [companyId]
        
        @property { Array<string> } [collectionId]
        
        @property { Array<number> } [itemId]
        
        @property { Array<number> } [storeId]
        
        @property { Array<string> } [articleId]
        
         
    */
/**
        @typedef Rule
        
        
        @property { number } [max]
        
        @property { number } [value]
        
        @property { number } [key]
        
        @property { number } [discountQty]
        
        @property { number } [min]
        
         
    */
/**
        @typedef CouponAdd
        
        
        @property { CouponAuthor } [author]
        
        @property { Restrictions } [restrictions]
        
        @property { CouponSchedule } [schedule]
        
        @property { State } [state]
        
        @property { RuleDefinition } ruleDefinition
        
        @property { Validation } [validation]
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponAction } [action]
        
        @property { string } typeSlug
        
        @property { Ownership } ownership
        
        @property { Array<string> } [tags]
        
        @property { Validity } validity
        
        @property { string } code
        
        @property { Identifier } identifiers
        
        @property { Array<Rule> } rule
        
         
    */
/**
        @typedef CouponsResponse
        
        
        @property { Page } [page]
        
        @property { CouponAdd } [items]
        
         
    */
/**
        @typedef SuccessMessage
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef OperationErrorResponse
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */
/**
        @typedef CouponUpdate
        
        
        @property { CouponAuthor } [author]
        
        @property { Restrictions } [restrictions]
        
        @property { CouponSchedule } [schedule]
        
        @property { State } [state]
        
        @property { RuleDefinition } ruleDefinition
        
        @property { Validation } [validation]
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponAction } [action]
        
        @property { string } typeSlug
        
        @property { Ownership } ownership
        
        @property { Array<string> } [tags]
        
        @property { Validity } validity
        
        @property { string } code
        
        @property { Identifier } identifiers
        
        @property { Array<Rule> } rule
        
         
    */
/**
        @typedef CouponPartialUpdate
        
        
        @property { CouponSchedule } [schedule]
        
        @property { boolean } [archive]
        
         
    */
/**
        @typedef StoreMapping
        
        
        @property { string } [enabled]
        
        @property { string } [marketplaceStoreId]
        
        @property { number } [storeId]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef AllChannels
        
        
        @property { boolean } [mkpName]
        
         
    */
/**
        @typedef MyntraPayload
        
        
        @property { string } [merchantId]
        
        @property { string } [secretKey]
        
         
    */
/**
        @typedef AmazonPayload
        
        
        @property { string } [sellerId]
        
        @property { string } [mwsAuthToken]
        
         
    */
/**
        @typedef FlipkartPayload
        
        
        @property { string } [code]
        
         
    */
/**
        @typedef TatacliqPayload
        
        
        @property { string } [userName]
        
        @property { string } [password]
        
        @property { string } [merchantId]
        
         
    */
/**
        @typedef AjioPayload
        
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [clientIp]
        
         
    */
/**
        @typedef InventorySyncConfig
        
        
        @property { boolean } [inventory]
        
        @property { boolean } [price]
        
         
    */
/**
        @typedef StoreMappingPayload
        
        
        @property { boolean } [storeMappingEnabled]
        
        @property { Array<StoreMapping> } [storeMapping]
        
         
    */
/**
        @typedef StatusPayload
        
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef StatusResp
        
        
        @property { boolean } [isActive]
        
         
    */
/**
        @typedef SyncPayload
        
        
        @property { string } [modifiedSince]
        
         
    */
/**
        @typedef SyncResp
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef MkpResp
        
        
        @property { string } [marketplace]
        
        @property { number } [worker]
        
        @property { string } [workerAssigned]
        
        @property { boolean } [isActive]
        
        @property { boolean } [storeMappingEnabled]
        
        @property { number } [companyId]
        
        @property { Object } [configuration]
        
        @property { Array<StoreMapping> } [storeMapping]
        
         
    */
/**
        @typedef AppUser
        
        
        @property { string } [id]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { string } [blockReason]
        
        @property { string } [updatedAt]
        
        @property { string } [updatedBy]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef E
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { number } [status]
        
         
    */
/**
        @typedef Giveaway
        
        
        @property { string } [id]
        
        @property { Schedule } [schedule]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { RewardsAudience } [audience]
        
        @property { Asset } [bannerImage]
        
        @property { string } [createdAt]
        
        @property { string } [description]
        
        @property { RewardsRule } [rule]
        
        @property { string } [title]
        
        @property { string } [updatedAt]
        
         
    */
/**
        @typedef GiveawayResponse
        
        
        @property { Array<Giveaway> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef HistoryPretty
        
        
        @property { string } [id]
        
        @property { string } [applicationId]
        
        @property { boolean } [claimed]
        
        @property { string } [createdAt]
        
        @property { string } [expiresOn]
        
        @property { number } [points]
        
        @property { number } [remainingPoints]
        
        @property { string } [text1]
        
        @property { string } [text2]
        
        @property { string } [text3]
        
        @property { string } [txnName]
        
        @property { string } [updatedAt]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef HistoryRes
        
        
        @property { Array<HistoryPretty> } [items]
        
        @property { Page } [page]
        
        @property { number } [points]
        
         
    */
/**
        @typedef Offer
        
        
        @property { Schedule } [schedule]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { Asset } [bannerImage]
        
        @property { string } [createdAt]
        
        @property { string } [name]
        
        @property { Object } [rule]
        
        @property { ShareMessages } [share]
        
        @property { string } [subText]
        
        @property { string } [text]
        
        @property { string } [type]
        
        @property { string } [updatedAt]
        
        @property { string } [updatedBy]
        
        @property { string } [url]
        
         
    */
/**
        @typedef Points
        
        
        @property { number } [available]
        
         
    */
/**
        @typedef Referral
        
        
        @property { string } [code]
        
         
    */
/**
        @typedef RewardUser
        
        
        @property { string } [id]
        
        @property { boolean } [active]
        
        @property { string } [createdAt]
        
        @property { Referral } [referral]
        
        @property { number } [uid]
        
        @property { string } [updatedAt]
        
        @property { string } [userBlockReason]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef RewardsAudience
        
        
        @property { string } [headerUserId]
        
        @property { string } [id]
        
         
    */
/**
        @typedef RewardsRule
        
        
        @property { number } [amount]
        
         
    */
/**
        @typedef ShareMessages
        
        
        @property { string } [email]
        
        @property { string } [facebook]
        
        @property { string } [fallback]
        
        @property { string } [message]
        
        @property { string } [messenger]
        
        @property { string } [sms]
        
        @property { string } [text]
        
        @property { string } [twitter]
        
        @property { string } [whatsapp]
        
         
    */
/**
        @typedef UserRes
        
        
        @property { Points } [points]
        
        @property { RewardUser } [user]
        
         
    */
/**
        @typedef StatGroup
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
         
    */
/**
        @typedef StatsGroups
        
        
        @property { Array<StatGroup> } [groups]
        
         
    */
/**
        @typedef StatsGroupComponent
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [filters]
        
         
    */
/**
        @typedef StatsGroupComponents
        
        
        @property { string } [title]
        
        @property { Array<StatsGroupComponent> } [components]
        
         
    */
/**
        @typedef StatsRes
        
        
        @property { string } [key]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [data]
        
         
    */
/**
        @typedef ReceivedAt
        
        
        @property { string } [value]
        
         
    */
/**
        @typedef AbandonCartsDetail
        
        
        @property { string } [propertiesCartId]
        
        @property { string } [contextTraitsFirstName]
        
        @property { string } [contextTraitsLastName]
        
        @property { string } [contextTraitsPhoneNumber]
        
        @property { string } [contextTraitsEmail]
        
        @property { string } [contextAppApplicationId]
        
        @property { string } [propertiesBreakupValuesRawTotal]
        
        @property { ReceivedAt } [receivedAt]
        
         
    */
/**
        @typedef AbandonCartsList
        
        
        @property { Array<AbandonCartsDetail> } [items]
        
        @property { string } [cartTotal]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef AbandonCartDetail
        
        
        @property { string } [id]
        
        @property { string } [userId]
        
        @property { string } [cartValue]
        
        @property { Array<Object> } [articles]
        
        @property { Object } [breakup]
        
        @property { Object } [address]
        
         
    */
/**
        @typedef ExportJobReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startTime]
        
        @property { string } [endTime]
        
        @property { string } [eventType]
        
        @property { string } [traceId]
        
         
    */
/**
        @typedef ExportJobRes
        
        
        @property { string } [status]
        
        @property { string } [jobId]
        
         
    */
/**
        @typedef ExportJobStatusRes
        
        
        @property { string } [status]
        
        @property { string } [jobId]
        
        @property { string } [downloadUrl]
        
         
    */
/**
        @typedef GetLogsListReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startDate]
        
        @property { string } [companyId]
        
        @property { string } [endDate]
        
         
    */
/**
        @typedef MkpLogsResp
        
        
        @property { string } [startTimeIso]
        
        @property { string } [endTimeIso]
        
        @property { string } [eventType]
        
        @property { string } [traceId]
        
        @property { string } [count]
        
        @property { string } [status]
        
         
    */
/**
        @typedef GetLogsListRes
        
        
        @property { Array<MkpLogsResp> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef SearchLogReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startDate]
        
        @property { string } [companyId]
        
        @property { string } [endDate]
        
        @property { string } [identifier]
        
        @property { string } [identifierValue]
        
         
    */
/**
        @typedef LogInfo
        
        
        @property { string } [id]
        
        @property { string } [status]
        
        @property { string } [eventType]
        
        @property { string } [marketplaceName]
        
        @property { string } [event]
        
        @property { string } [traceId]
        
        @property { number } [companyId]
        
        @property { number } [brandId]
        
        @property { string } [storeCode]
        
        @property { number } [storeId]
        
        @property { number } [itemId]
        
        @property { string } [articleId]
        
        @property { string } [sellerIdentifier]
        
         
    */
/**
        @typedef SearchLogRes
        
        
        @property { Array<LogInfo> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef ValidityObject
        
        
        @property { string } start
        
        @property { string } end
        
         
    */
/**
        @typedef CreateUpdateDiscount
        
        
        @property { string } name
        
        @property { number } companyId
        
        @property { boolean } isActive
        
        @property { Array<string> } appIds
        
        @property { string } jobType
        
        @property { string } discountType
        
        @property { string } discountLevel
        
        @property { number } [value]
        
        @property { string } [filePath]
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
        @property { ValidityObject } validity
        
         
    */
/**
        @typedef DiscountJob
        
        
        @property { string } id
        
        @property { string } name
        
        @property { number } companyId
        
        @property { boolean } isActive
        
        @property { Array<string> } [appIds]
        
        @property { string } [jobType]
        
        @property { string } [discountType]
        
        @property { string } [discountLevel]
        
        @property { number } [value]
        
        @property { string } [filePath]
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
        @property { ValidityObject } validity
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
        @property { UserDetails } createdBy
        
        @property { UserDetails } modifiedBy
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef ListOrCalender
        
        
        @property { Array<DiscountJob> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef FileJobResponse
        
        
        @property { string } stage
        
        @property { number } total
        
        @property { number } failed
        
        @property { number } companyId
        
        @property { Object } [body]
        
        @property { string } type
        
        @property { string } fileType
        
         
    */
/**
        @typedef DownloadFileJob
        
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
         
    */
/**
        @typedef CancelJobResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef UserDetails
        
        
        @property { string } username
        
        @property { string } userId
        
         
    */
/**
        @typedef BadRequestObject
        
        
        @property { string } message
        
         
    */
declare class Lead {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * @description: Gets the list of company level tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getTickets({ items, filters, q, status, priority, category, pageNo, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * @description: Gets the list of company level tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getTicketsPaginator({ items, filters, q, status, priority, category, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Creates a company level ticket
     * @description: Creates a company level ticket
     * @param {Object} arg - arg object.
     * @param {AddTicketPayload} arg.body
     **/
    createTicket({ body }?: {
        body: AddTicketPayload;
    }): any;
    /**
      *
      * @summary: Retreives ticket details of a company level ticket with ticket ID
      * @description: Retreives ticket details of a company level ticket
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
      
      **/
    getTicket({ ticketId }?: {
        ticketId: string;
    }): any;
    /**
     *
     * @summary: Edits ticket details of a company level ticket
     * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     **/
    editTicket({ ticketId, body }?: {
        ticketId: string;
        body: EditTicketPayload;
    }): any;
    /**
     *
     * @summary: Create history for specific company level ticket
     * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     **/
    createHistory({ ticketId, body }?: {
        ticketId: string;
        body: TicketHistoryPayload;
    }): any;
    /**
      *
      * @summary: Gets history list for specific company level ticket
      * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
      
      **/
    getTicketHistory({ ticketId }?: {
        ticketId: string;
    }): any;
}
declare class Billing {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get invoices
      * @description: Get invoices.
      * @param {Object} arg - arg object.
      
      **/
    getInvoices({}?: any): any;
    /**
      *
      * @summary: Get invoice by id
      * @description: Get invoice by id.
      * @param {Object} arg - arg object.
      * @param {string} arg.invoiceId - Invoice id
      
      **/
    getInvoiceById({ invoiceId }?: {
        invoiceId: string;
    }): any;
    /**
      *
      * @summary: Get subscription customer detail
      * @description: Get subscription customer detail.
      * @param {Object} arg - arg object.
      
      **/
    getCustomerDetail({}?: any): any;
    /**
     *
     * @summary: Upsert subscription customer detail
     * @description: Upsert subscription customer detail.
     * @param {Object} arg - arg object.
     * @param {SubscriptionCustomerCreate} arg.body
     **/
    upsertCustomerDetail({ body }?: {
        body: SubscriptionCustomerCreate;
    }): any;
    /**
      *
      * @summary: Get current subscription detail
      * @description: If subscription is active then it will return is_enabled true and return subscription object. If subscription is not active then is_enabled false and message.
  
      * @param {Object} arg - arg object.
      
      **/
    getSubscription({}?: any): any;
    /**
      *
      * @summary: Get subscription subscription limits
      * @description: Get subscription subscription limits.
      * @param {Object} arg - arg object.
      
      **/
    getFeatureLimitConfig({}?: any): any;
    /**
     *
     * @summary: Activate subscription
     * @description: It will activate subscription plan for customer
     * @param {Object} arg - arg object.
     * @param {SubscriptionActivateReq} arg.body
     **/
    activateSubscriptionPlan({ body }?: {
        body: SubscriptionActivateReq;
    }): any;
    /**
     *
     * @summary: Cancel subscription
     * @description: It will cancel current active subscription.
     * @param {Object} arg - arg object.
     * @param {CancelSubscriptionReq} arg.body
     **/
    cancelSubscriptionPlan({ body }?: {
        body: CancelSubscriptionReq;
    }): any;
}
declare class Communication {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get system notifications
      * @description: Get system notifications
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] -
      * @param {number} [arg.pageSize] -
      
      **/
    getSystemNotifications({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get system notifications
      * @description: Get system notifications
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] -
      
      **/
    getSystemNotificationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
}
declare class Payment {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get All Payouts
      * @description: Get All Payouts
      * @param {Object} arg - arg object.
      * @param {string} [arg.uniqueExternalId] - Fetch payouts using unique external id
      
      **/
    getAllPayouts({ uniqueExternalId }?: {
        uniqueExternalId?: string;
    }): any;
    /**
     *
     * @summary: Save Payout
     * @description: Save Payout
     * @param {Object} arg - arg object.
     * @param {PayoutRequest} arg.body
     **/
    savePayout({ body }?: {
        body: PayoutRequest;
    }): any;
    /**
     *
     * @summary: Update Payout
     * @description: Update Payout
     * @param {Object} arg - arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {PayoutRequest} arg.body
     **/
    updatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: PayoutRequest;
    }): any;
    /**
     *
     * @summary: Partial Update Payout
     * @description: Partial Update Payout
     * @param {Object} arg - arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {UpdatePayoutRequest} arg.body
     **/
    activateAndDectivatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: UpdatePayoutRequest;
    }): any;
    /**
      *
      * @summary: Delete Payout
      * @description: Delete Payout
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueTransferNo - Unique transfer id
      
      **/
    deletePayout({ uniqueTransferNo }?: {
        uniqueTransferNo: string;
    }): any;
    /**
      *
      * @summary: List Subscription Payment Method
      * @description: Get all  Subscription  Payment Method
      * @param {Object} arg - arg object.
      
      **/
    getSubscriptionPaymentMethod({}?: any): any;
    /**
      *
      * @summary: Delete Subscription Payment Method
      * @description: Uses this api to Delete Subscription Payment Method
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueExternalId -
      * @param {string} arg.paymentMethodId -
      
      **/
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId }?: {
        uniqueExternalId: string;
        paymentMethodId: string;
    }): any;
    /**
      *
      * @summary: List Subscription Config
      * @description: Get all  Subscription Config details
      * @param {Object} arg - arg object.
      
      **/
    getSubscriptionConfig({}?: any): any;
    /**
     *
     * @summary: Save Subscription Setup Intent
     * @description: Uses this api to Save Subscription Setup Intent
     * @param {Object} arg - arg object.
     * @param {SaveSubscriptionSetupIntentRequest} arg.body
     **/
    saveSubscriptionSetupIntent({ body }?: {
        body: SaveSubscriptionSetupIntentRequest;
    }): any;
}
declare class Order {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Update status of Shipment
     * @description: Update Shipment Status
     * @param {Object} arg - arg object.
     * @param {UpdateShipmentStatusBody} arg.body
     **/
    shipmentStatusUpdate({ body }?: {
        body: UpdateShipmentStatusBody;
    }): any;
    /**
      *
      * @summary: Get Activity Status
      * @description: Get Activity Status
      * @param {Object} arg - arg object.
      * @param {string} arg.bagId - Bag Id
      
      **/
    activityStatus({ bagId }?: {
        bagId: string;
    }): any;
    /**
     *
     * @summary: Update Store Process-Shipment
     * @description: Update Store Process-Shipment
     * @param {Object} arg - arg object.
     * @param {UpdateProcessShipmenstRequestBody} arg.body
     **/
    storeProcessShipmentUpdate({ body }?: {
        body: UpdateProcessShipmenstRequestBody;
    }): any;
    /**
      *
      * @summary: Get Orders for company based on Company Id
      * @description: Get Orders
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageNo] - Current page number
      * @param {string} [arg.pageSize] - Page limit
      * @param {string} [arg.fromDate] - From Date
      * @param {string} [arg.toDate] - To Date
      * @param {string} [arg.q] - Keyword for Search
      * @param {string} [arg.stage] - Specefic Order Stage
      * @param {string} [arg.salesChannels] - Selected Sales Channel
      * @param {string} [arg.orderId] - Order Id
      * @param {string} [arg.stores] - Selected Stores
      * @param {string} [arg.status] - Status of order
      * @param {boolean} [arg.shortenUrls] - Shorten URL option
      * @param {string} [arg.filterType] - Filters
      
      **/
    getOrdersByCompanyId({ pageNo, pageSize, fromDate, toDate, q, stage, salesChannels, orderId, stores, status, shortenUrls, filterType, }?: {
        pageNo?: string;
        pageSize?: string;
        fromDate?: string;
        toDate?: string;
        q?: string;
        stage?: string;
        salesChannels?: string;
        orderId?: string;
        stores?: string;
        status?: string;
        shortenUrls?: boolean;
        filterType?: string;
    }): any;
    /**
      *
      * @summary: Get Ping
      * @description: Get Ping
      * @param {Object} arg - arg object.
      
      **/
    getPing({}?: any): any;
    /**
      *
      * @summary: Get Voice Callback
      * @description: Voice Callback
      * @param {Object} arg - arg object.
      
      **/
    voiceCallback({}?: any): any;
    /**
      *
      * @summary: Get Voice Click to Call
      * @description: Voice Click to Call
      * @param {Object} arg - arg object.
      * @param {string} arg.caller - Caller contact number
      * @param {string} arg.receiver - Receiver contact number
      
      **/
    voiceClickToCall({ caller, receiver }?: {
        caller: string;
        receiver: string;
    }): any;
}
declare class Catalog {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Create Product Bundle
     * @description: Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id
     * @param {Object} arg - arg object.
     * @param {ProductBundleRequest} arg.body
     **/
    createProductBundle({ body }?: {
        body: ProductBundleRequest;
    }): any;
    /**
      *
      * @summary: List all Product Bundles
      * @description: Get all product bundles for a particular company
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - A search string that is searched with product bundle name.
      
      **/
    getProductBundle({ q }?: {
        q?: string;
    }): any;
    /**
      *
      * @summary: Get a particular Product Bundle details
      * @description: Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
      
      **/
    getProductBundleDetail({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update a Product Bundle
     * @description: Update a Product Bundle by its id. On successful request, returns the updated product bundle
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
     * @param {ProductBundleUpdateRequest} arg.body
     **/
    updateProductBundle({ id, body }?: {
        id: string;
        body: ProductBundleUpdateRequest;
    }): any;
    /**
     *
     * @summary: Create a size guide.
     * @description: This API allows to create a size guide associated to a brand.
     * @param {Object} arg - arg object.
     * @param {ValidateSizeGuide} arg.body
     **/
    createSizeGuide({ body }?: {
        body: ValidateSizeGuide;
    }): any;
    /**
      *
      * @summary: Get list of size guides
      * @description: This API allows to view all the size guides associated to the seller.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.active] - filter size guide on basis of active, in-active
      * @param {string} [arg.q] - Query that is to be searched.
      * @param {string} [arg.tag] - to filter size guide on basis of tag.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getSizeGuides({ active, q, tag, pageNo, pageSize }?: {
        active?: boolean;
        q?: string;
        tag?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get a single size guide.
      * @description: This API helps to get data associated to a size guide.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Id of the size guide to be viewed.
      
      **/
    getSizeGuide({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Edit a size guide.
     * @description: This API allows to edit a size guide.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Mongo id of the size guide to be edited
     * @param {ValidateSizeGuide} arg.body
     **/
    updateSizeGuide({ id, body }?: {
        id: string;
        body: ValidateSizeGuide;
    }): any;
    /**
      *
      * @summary: Analytics data of catalog and inventory that are being cross-selled.
      * @description: Analytics data of catalog and inventory that are being cross-selled.
      * @param {Object} arg - arg object.
      * @param {string} arg.sellerAppId - Id of the seller application which is serving the invetory/catalog of the company
      
      **/
    getSellerInsights({ sellerAppId }?: {
        sellerAppId: string;
    }): any;
    /**
     *
     * @summary: Create/Update opt-in infomation.
     * @description: Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`
     * @param {Object} arg - arg object.
     * @param {string} arg.marketplace - The marketplace for which the detail needs to be retrieved.
     * @param {OptInPostRequest} arg.body
     **/
    createMarketplaceOptin({ marketplace, body }?: {
        marketplace: string;
        body: OptInPostRequest;
    }): any;
    /**
      *
      * @summary: Get opt-in infomation.
      * @description: Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`
      * @param {Object} arg - arg object.
      
      **/
    getMarketplaceOptinDetail({}?: any): any;
    /**
      *
      * @summary: Get the Company details.
      * @description: Get the details of the company associated with the given company_id passed.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyDetail({}?: any): any;
    /**
      *
      * @summary: Get the Company Brand details of Optin.
      * @description: Get the details of the Brands associated with the given company_id passed.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.isActive] - The is_active status for the optin id.
      * @param {boolean} [arg.q] - The search value to filter the list.
      * @param {number} [arg.pageNo] - The number of page for the company id.
      * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
      * @param {string} [arg.marketplace] - The marketplace platform associated with the company id.
      
      **/
    getCompanyBrandDetail({ isActive, q, pageNo, pageSize, marketplace }?: {
        isActive?: boolean;
        q?: boolean;
        pageNo?: number;
        pageSize?: number;
        marketplace?: string;
    }): any;
    /**
      *
      * @summary: Get the Company metrics
      * @description: Get the Company metrics associated with the company ID passed.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyMetrics({}?: any): any;
    /**
      *
      * @summary: Get the Store details.
      * @description: Get the details of the store associated with the company ID passed.
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search related the store for the company id.
      * @param {number} [arg.pageNo] - The number of page for the company id.
      * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
      
      **/
    getStoreDetail({ q, pageNo, pageSize }?: {
        q?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get gender attribute details
      * @description: This API allows to view the gender attribute details.
      * @param {Object} arg - arg object.
      * @param {string} arg.department - department for which you want to view the genders
      
      **/
    getGenderAttribute({ department }?: {
        department: string;
    }): any;
    /**
      *
      * @summary: List Department specifiec product categories
      * @description: Allows you to list all product categories values for the departments specified
      * @param {Object} arg - arg object.
      * @param {string} arg.departments - A `department` is name of a departments whose category needs to be listed. Can specify multiple departments.
      * @param {string} arg.itemType - An `item_type` is the type of item, it can be `set`, `standard`, `digital`, etc.
      
      **/
    listProductTemplateCategories({ departments, itemType }?: {
        departments: string;
        itemType: string;
    }): any;
    /**
      *
      * @summary: List all Departments
      * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param {string} [arg.name] - Can search departments by passing name.
      * @param {string} [arg.search] - Can search departments by passing name of the department in search parameter.
      * @param {boolean} [arg.isActive] - Can query for departments based on whether they are active or inactive.
      
      **/
    listDepartmentsData({ pageNo, pageSize, name, search, isActive }?: {
        pageNo?: number;
        pageSize?: number;
        name?: string;
        search?: string;
        isActive?: boolean;
    }): any;
    /**
      *
      * @summary: Get specific departments details by passing in unique id of the department
      * @description: Allows you to get department data, by uid
      * @param {Object} arg - arg object.
      * @param {string} arg.uid - A `uid` is a unique identifier of a department.
      
      **/
    getDepartmentData({ uid }?: {
        uid: string;
    }): any;
    /**
      *
      * @summary: List all Templates
      * @description: Allows you to list all product templates, also can filter by department
      * @param {Object} arg - arg object.
      * @param {string} arg.departments - A `departments` is the name of a particular department.
      
      **/
    listProductTemplate({ departments }?: {
        departments: string;
    }): any;
    /**
      *
      * @summary: Validate Product Template Schema
      * @description: Allows you to list all product templates validation values for all the fields present in the database
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
      
      **/
    validateProductTemplate({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Download Product Template View
      * @description: Allows you to download product template data
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
      
      **/
    downloadProductTemplateViews({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Download Product Template View
      * @description: Allows you to download product template data
      * @param {Object} arg - arg object.
      * @param {string} arg.itemType - An `item_type` defines the type of item.
      
      **/
    downloadProductTemplateView({ itemType }?: {
        itemType: string;
    }): any;
    /**
      *
      * @summary: Validate Product Template Schema
      * @description: Allows you to list all product templates validation values for all the fields present in the database
      * @param {Object} arg - arg object.
      * @param {string} arg.itemType - An `item_type` defines the type of item. The default value is standard.
      
      **/
    validateProductTemplateSchema({ itemType }?: {
        itemType: string;
    }): any;
    /**
      *
      * @summary: List HSN Codes
      * @description: Allows you to list all hsn Codes
      * @param {Object} arg - arg object.
      
      **/
    listHSNCodes({}?: any): any;
    /**
      *
      * @summary: Allows you to list all product templates export list details
      * @description: Can view details including trigger data, task id , etc.
      * @param {Object} arg - arg object.
      
      **/
    listProductTemplateExportDetails({}?: any): any;
    /**
      *
      * @summary: Allows you to list all values for Templates, Brands or Type
      * @description: The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same
      * @param {Object} arg - arg object.
      * @param {string} arg.filter - A `filter` is the unique identifier of the type of value required.
      
      **/
    listTemplateBrandTypeValues({ filter }?: {
        filter: string;
    }): any;
    /**
     *
     * @summary: Create product categories
     * @description: This API lets user create product categories
     * @param {Object} arg - arg object.
     * @param {CategoryRequestBody} arg.body
     **/
    createCategories({ body }?: {
        body: CategoryRequestBody;
    }): any;
    /**
      *
      * @summary: Get product categories list
      * @description: This API gets meta associated to product categories.
      * @param {Object} arg - arg object.
      * @param {string} [arg.level] - Get category for multiple levels
      * @param {string} [arg.departments] - Get category for multiple departments filtered
      * @param {string} [arg.q] - Get multiple categories filtered by search string
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    listCategories({ level, departments, q, pageNo, pageSize }?: {
        level?: string;
        departments?: string;
        q?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get product category by uid
      * @description: This API gets meta associated to product categories.
      * @param {Object} arg - arg object.
      * @param {string} arg.uid - Category unique id
      
      **/
    getCategoryData({ uid }?: {
        uid: string;
    }): any;
    /**
     *
     * @summary: Update product categories
     * @description: Update a product category using this apu
     * @param {Object} arg - arg object.
     * @param {string} arg.uid - Category unique id
     * @param {CategoryRequestBody} arg.body
     **/
    updateCategory({ uid, body }?: {
        uid: string;
        body: CategoryRequestBody;
    }): any;
    /**
     *
     * @summary: Create a product.
     * @description: This API allows to create product.
     * @param {Object} arg - arg object.
     * @param {ProductCreateUpdate} arg.body
     **/
    createProduct({ body }?: {
        body: ProductCreateUpdate;
    }): any;
    /**
      *
      * @summary: Get product list
      * @description: This API gets meta associated to products.
      * @param {Object} arg - arg object.
      * @param {number} [arg.brandIds] - Get multiple products filtered by brand Ids
      * @param {number} [arg.categoryIds] - Get multiple products filtered by category Ids
      * @param {string} [arg.search] - Get multiple products filtered by search string
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getProducts({ brandIds, categoryIds, search, pageNo, pageSize }?: {
        brandIds?: number;
        categoryIds?: number;
        search?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get a single product.
      * @description: This API helps to get data associated to a particular product.
      * @param {Object} arg - arg object.
      * @param {string} [arg.itemCode] - Item code of the product.
      * @param {number} arg.itemId - Item Id of the product.
      * @param {number} [arg.brandUid] - Brand Id of the product.
      * @param {number} [arg.uid] - Id of the product.
      
      **/
    getProduct({ itemId, itemCode, brandUid, uid }?: {
        itemCode?: string;
        itemId: number;
        brandUid?: number;
        uid?: number;
    }): any;
    /**
     *
     * @summary: Edit a product.
     * @description: This API allows to edit product.
     * @param {Object} arg - arg object.
     * @param {number} arg.itemId - Id of the product to be updated.
     * @param {ProductCreateUpdate} arg.body
     **/
    editProduct({ itemId, body }?: {
        itemId: number;
        body: ProductCreateUpdate;
    }): any;
    /**
      *
      * @summary: Delete a product.
      * @description: This API allows to delete product.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Id of the product to be updated.
      
      **/
    deleteProduct({ itemId }?: {
        itemId: number;
    }): any;
    /**
      *
      * @summary: Validate product/size data
      * @description: This API validates product data.
      * @param {Object} arg - arg object.
      
      **/
    getProductValidation({}?: any): any;
    /**
      *
      * @summary: Get a single product size.
      * @description: This API helps to get data associated to a particular product size.
      * @param {Object} arg - arg object.
      * @param {string} [arg.itemCode] - Item code of the product size.
      * @param {number} arg.itemId - Item Id of the product size.
      * @param {number} [arg.brandUid] - Brand Id of the product size.
      * @param {number} [arg.uid] - Id of the product size.
      
      **/
    getProductSize({ itemId, itemCode, brandUid, uid }?: {
        itemCode?: string;
        itemId: number;
        brandUid?: number;
        uid?: number;
    }): any;
    /**
     *
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job.
     * @param {Object} arg - arg object.
     * @param {BulkJob} arg.body
     **/
    updateProductAssetsInBulk({ body }?: {
        body: BulkJob;
    }): any;
    /**
      *
      * @summary: Get a list of all bulk product upload jobs.
      * @description: This API helps to get bulk product upload jobs data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductBulkUploadHistory({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     * @param {Object} arg - arg object.
     * @param {string} arg.batchId - Batch Id in which assets to be uploaded.
     * @param {BulkProductRequest} arg.body
     **/
    createProductsInBulk({ batchId, body }?: {
        batchId: string;
        body: BulkProductRequest;
    }): any;
    /**
      *
      * @summary: Delete Bulk product job.
      * @description: This API allows to delete bulk product job associated with company.
      * @param {Object} arg - arg object.
      * @param {number} arg.batchId - Batch Id of the bulk product job to be deleted.
      
      **/
    deleteProductBulkJob({ batchId }?: {
        batchId: number;
    }): any;
    /**
      *
      * @summary: Get a list of all tags associated with company.
      * @description: This API helps to get tags data associated to a particular copmpany.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyTags({}?: any): any;
    /**
     *
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job.
     * @param {Object} arg - arg object.
     * @param {ProductBulkAssets} arg.body
     **/
    createProductAssetsInBulk({ body }?: {
        body: ProductBulkAssets;
    }): any;
    /**
      *
      * @summary: Get a list of all bulk asset jobs.
      * @description: This API helps to get bulk asset jobs data associated to a particular company.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductAssetsInBulk({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Delete a Size associated with product.
      * @description: This API allows to delete size associated with product.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Item Id of the product associated with size to be deleted.
      * @param {number} arg.size - size to be deleted.
      
      **/
    deleteSize({ itemId, size }?: {
        itemId: number;
        size: number;
    }): any;
    /**
     *
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     * @param {Object} arg - arg object.
     * @param {number} arg.itemId - Item code of the product of which size is to be get.
     * @param {string} arg.size - Size in which inventory is to be added.
     * @param {InventoryRequest} arg.body
     **/
    addInventory({ itemId, size, body }?: {
        itemId: number;
        size: string;
        body: InventoryRequest;
    }): any;
    /**
      *
      * @summary: Get Inventory for company
      * @description: This API allows get Inventory data for particular company grouped by size and store.
      * @param {Object} arg - arg object.
      * @param {string} arg.itemId - Item code of the product of which size is to be get.
      * @param {string} arg.size - Size of which inventory is to get.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getInventory({ itemId, size, pageNo, pageSize }?: {
        itemId: string;
        size: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Delete a Inventory.
      * @description: This API allows to delete inventory of a particular product for particular company.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Id of the product associated with Inventory to be deleted.
      * @param {number} arg.locationId - Location ID of store of which inventory is to be deleted.
      
      **/
    deleteInventory({ itemId, locationId }?: {
        itemId: number;
        locationId: number;
    }): any;
    /**
     *
     * @summary: Create a Bulk Inventory upload Job.
     * @description: This API helps to create a bulk Inventory upload job.
     * @param {Object} arg - arg object.
     * @param {BulkJob} arg.body
     **/
    createBulkInventoryJob({ body }?: {
        body: BulkJob;
    }): any;
    /**
      *
      * @summary: Get a list of all bulk Inventory upload jobs.
      * @description: This API helps to get bulk Inventory upload jobs data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getInventoryBulkUploadHistory({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     * @param {Object} arg - arg object.
     * @param {InventoryBulkRequest} arg.body
     **/
    createBulkInventory({ body }?: {
        body: InventoryBulkRequest;
    }): any;
    /**
      *
      * @summary: Delete Bulk Inventory job.
      * @description: This API allows to delete bulk Inventory job associated with company.
      * @param {Object} arg - arg object.
      
      **/
    deleteBulkInventoryJob({}?: any): any;
    /**
     *
     * @summary: Create a Inventory export Job.
     * @description: This API helps to create a Inventory export job.
     * @param {Object} arg - arg object.
     * @param {InventoryExportRequest} arg.body
     **/
    createInventoryExportJob({ body }?: {
        body: InventoryExportRequest;
    }): any;
    /**
      *
      * @summary: Get Inventory export history.
      * @description: This API helps to get Inventory export history.
      * @param {Object} arg - arg object.
      
      **/
    getInventoryExport({}?: any): any;
    /**
      *
      * @summary: Get List of different filters for inventory export
      * @description: This API allows get List of different filters like brand, store, and type for inventory export.
      * @param {Object} arg - arg object.
      * @param {string} [arg.filterType] - filter type from any one of ['brand', 'store', 'type']
      
      **/
    exportInventoryConfig({ filterType }?: {
        filterType?: string;
    }): any;
    /**
     *
     * @summary: Create Hsn Code.
     * @description: Create Hsn Code.
     * @param {Object} arg - arg object.
     * @param {HsnUpsert} arg.body
     **/
    createHsnCode({ body }?: {
        body: HsnUpsert;
    }): any;
    /**
      *
      * @summary: Hsn Code List.
      * @description: Hsn Code List.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - page no
      * @param {number} [arg.pageSize] - page size
      * @param {string} [arg.q] - search using hsn code.
      
      **/
    getAllHsnCodes({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): any;
    /**
      *
      * @summary: Fetch Hsn Code.
      * @description: Fetch Hsn Code.
      * @param {Object} arg - arg object.
      * @param {number} arg.uid - uid
      
      **/
    getHsnCode({ uid }?: {
        uid: number;
    }): any;
    /**
     *
     * @summary: Update Hsn Code.
     * @description: Update Hsn Code.
     * @param {Object} arg - arg object.
     * @param {number} arg.uid - uid
     * @param {HsnUpsert} arg.body
     **/
    updateHsnCode({ uid, body }?: {
        uid: number;
        body: HsnUpsert;
    }): any;
    /**
     *
     * @summary: Bulk Create or Update Hsn Code.
     * @description: Bulk Create or Update Hsn Code.
     * @param {Object} arg - arg object.
     * @param {BulkHsnUpsert} arg.body
     **/
    bulkHsnCode({ body }?: {
        body: BulkHsnUpsert;
    }): any;
}
declare class CompanyProfile {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get company profile
      * @description: This API allows to view the company profile of the seller account.
      * @param {Object} arg - arg object.
      
      **/
    cbsOnboardGet({}?: any): any;
    /**
     *
     * @summary: Edit company profile
     * @description: This API allows to edit the company profile of the seller account.
     * @param {Object} arg - arg object.
     * @param {CompanyStoreSerializerRequest} arg.body
     **/
    updateCompany({ body }?: {
        body: CompanyStoreSerializerRequest;
    }): any;
    /**
      *
      * @summary: Get company metrics
      * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyMetrics({}?: any): any;
    /**
      *
      * @summary: Get a single brand.
      * @description: This API helps to get data associated to a particular brand.
      * @param {Object} arg - arg object.
      * @param {string} arg.brandId - Id of the brand to be viewed.
      
      **/
    getBrand({ brandId }?: {
        brandId: string;
    }): any;
    /**
     *
     * @summary: Edit a brand.
     * @description: This API allows to edit meta of a brand.
     * @param {Object} arg - arg object.
     * @param {string} arg.brandId - Id of the brand to be viewed.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     **/
    editBrand({ brandId, body }?: {
        brandId: string;
        body: CreateUpdateBrandRequestSerializer;
    }): any;
    /**
     *
     * @summary: Create a Brand.
     * @description: This API allows to create a brand associated to a company.
     * @param {Object} arg - arg object.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     **/
    createBrand({ body }?: {
        body: CreateUpdateBrandRequestSerializer;
    }): any;
    /**
      *
      * @summary: Get brands associated to a company
      * @description: This API helps to get view brands associated to a particular company.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getBrands({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get brands associated to a company
      * @description: This API helps to get view brands associated to a particular company.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getBrandsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create a company brand mapping.
     * @description: This API allows to create a company brand mapping, for a already existing brand in the system.
     * @param {Object} arg - arg object.
     * @param {CompanyBrandPostRequestSerializer} arg.body
     **/
    createCompanyBrandMapping({ body }?: {
        body: CompanyBrandPostRequestSerializer;
    }): any;
    /**
      *
      * @summary: Get list of locations
      * @description: This API allows to view all the locations asscoiated to a company.
      * @param {Object} arg - arg object.
      * @param {string} [arg.storeType] - Helps to sort the location list on the basis of location type.
      * @param {string} [arg.q] - Query that is to be searched.
      * @param {string} [arg.stage] - to filter companies on basis of verified or unverified companies.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getLocations({ storeType, q, stage, pageNo, pageSize }?: {
        storeType?: string;
        q?: string;
        stage?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get list of locations
      * @description: This API allows to view all the locations asscoiated to a company.
      * @param {Object} arg - arg object.
      * @param {string} [arg.storeType] - Helps to sort the location list on the basis of location type.
      * @param {string} [arg.q] - Query that is to be searched.
      * @param {string} [arg.stage] - to filter companies on basis of verified or unverified companies.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getLocationsPaginator({ storeType, q, stage, pageSize }?: {
        storeType?: string;
        q?: string;
        stage?: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create a location asscoiated to a company.
     * @description: This API allows to create a location associated to a company.
     * @param {Object} arg - arg object.
     * @param {LocationSerializer} arg.body
     **/
    createLocation({ body }?: {
        body: LocationSerializer;
    }): any;
    /**
      *
      * @summary: Get details of a specific location.
      * @description: This API helps to get data associated to a specific location.
      * @param {Object} arg - arg object.
      * @param {string} arg.locationId - Id of the location which you want to view.
      
      **/
    getLocationDetail({ locationId }?: {
        locationId: string;
    }): any;
    /**
     *
     * @summary: Edit a location asscoiated to a company.
     * @description: This API allows to edit a location associated to a company.
     * @param {Object} arg - arg object.
     * @param {string} arg.locationId - Id of the location which you want to edit.
     * @param {LocationSerializer} arg.body
     **/
    updateLocation({ locationId, body }?: {
        locationId: string;
        body: LocationSerializer;
    }): any;
}
declare class FileStorage {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `startUpload`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `completeUpload` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartRequest} arg.body
      **/
    startUpload({ namespace, body }?: {
        namespace: string;
        body: StartRequest;
    }): any;
    /**
      *
      * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `startUpload`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `completeUpload` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartResponse} arg.body
      **/
    completeUpload({ namespace, body }?: {
        namespace: string;
        body: StartResponse;
    }): any;
    /**
     *
     * @summary: Explain here
     * @description: Describe here
     * @param {Object} arg - arg object.
     * @param {SignUrlRequest} arg.body
     **/
    getSignUrls({ body }?: {
        body: SignUrlRequest;
    }): any;
    /**
     *
     * @summary: Copy Files
     * @description: Copy Files
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.sync] - sync
     * @param {BulkRequest} arg.body
     **/
    copyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {number} [arg.pageNo] - page no
      
      **/
    browse({ namespace, pageNo }?: {
        namespace: string;
        pageNo?: number;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      
      **/
    browsePaginator({ namespace }?: {
        namespace: string;
    }): Paginator;
    /**
      *
      * @summary: Proxy
      * @description: Proxy
      * @param {Object} arg - arg object.
      * @param {string} arg.url - url
      
      **/
    proxy({ url }?: {
        url: string;
    }): any;
}
declare class Inventory {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get Job Configs For A Company
      * @description: REST Endpoint that returns all job configs for a company
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Page Number
      * @param {number} [arg.pageSize] - Page Size
      
      **/
    getJobsByCompany({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Updates An Existing Job Config
     * @description: REST Endpoint that updates a job config
     * @param {Object} arg - arg object.
     * @param {string} [arg.xUserData] -
     * @param {JobConfigDTO} arg.body
     **/
    updateJob({ body, xUserData }?: {
        xUserData?: string;
        body: JobConfigDTO;
    }): any;
    /**
     *
     * @summary: Creates A New Job Config
     * @description: REST Endpoint that creates a new job config
     * @param {Object} arg - arg object.
     * @param {string} [arg.xUserData] -
     * @param {JobConfigDTO} arg.body
     **/
    createJob({ body, xUserData }?: {
        xUserData?: string;
        body: JobConfigDTO;
    }): any;
    /**
      *
      * @summary: Get Job Configs By Company And Integration
      * @description: REST Endpoint that returns all job configs by company And integration
      * @param {Object} arg - arg object.
      * @param {string} arg.integrationId - Integration Id
      * @param {number} [arg.pageNo] - Page Number
      * @param {number} [arg.pageSize] - Page Size
      
      **/
    getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get Job Configs Defaults
      * @description: REST Endpoint that returns default fields job configs by company And integration
      * @param {Object} arg - arg object.
      
      **/
    getJobConfigDefaults({}?: any): any;
    /**
      *
      * @summary: Get Job Config By Code
      * @description: REST Endpoint that returns job config by code
      * @param {Object} arg - arg object.
      * @param {string} arg.code - Job Code
      
      **/
    getJobByCode({ code }?: {
        code: string;
    }): any;
    /**
      *
      * @summary: Get Job Codes By Company And Integration
      * @description: REST Endpoint that returns all job codes by company And integration
      * @param {Object} arg - arg object.
      * @param {string} arg.integrationId - Integration Id
      * @param {number} [arg.pageNo] - Page Number
      * @param {number} [arg.pageSize] - Page Size
      
      **/
    getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize }?: {
        integrationId: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
}
declare class Configuration {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Create application
     * @description: Create new application
     * @param {Object} arg - arg object.
     * @param {CreateApplicationRequest} arg.body
     **/
    createApplication({ body }?: {
        body: CreateApplicationRequest;
    }): any;
    /**
      *
      * @summary: Get list of application under company
      * @description: Get list of application under company
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] -
      * @param {number} [arg.pageSize] -
      * @param {string} [arg.q] - Url encoded object used as mongodb query
      
      **/
    getApplications({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): any;
    /**
      *
      * @summary: Get list of application under company
      * @description: Get list of application under company
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] -
      * @param {string} [arg.q] - Url encoded object used as mongodb query
      
      **/
    getApplicationsPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
      *
      * @summary: Get all currencies
      * @description: Get all currencies
      * @param {Object} arg - arg object.
      
      **/
    getCurrencies({}?: any): any;
    /**
     *
     * @summary: Check domain availibility before linking to application
     * @description: Check domain availibility before linking to application. Also sends domain suggestions with similar to queried domain. \ Custom domain search is currently powered by GoDaddy provider.
     * @param {Object} arg - arg object.
     * @param {DomainSuggestionsRequest} arg.body
     **/
    getDomainAvailibility({ body }?: {
        body: DomainSuggestionsRequest;
    }): any;
    /**
      *
      * @summary: Get integration data
      * @description: Get integration data
      * @param {Object} arg - arg object.
      * @param {number} arg.id - Integration id
      
      **/
    getIntegrationById({ id }?: {
        id: number;
    }): any;
    /**
      *
      * @summary: Get all available integration opt-ins
      * @description: Get all available integration opt-ins
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAvailableOptIns({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get all available integration opt-ins
      * @description: Get all available integration opt-ins
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getAvailableOptInsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get company/store level integration opt-ins
      * @description: Get company/store level integration opt-ins
      * @param {Object} arg - arg object.
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getSelectedOptIns({ level, uid, pageNo, pageSize }?: {
        level: string;
        uid: number;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get company/store level integration opt-ins
      * @description: Get company/store level integration opt-ins
      * @param {Object} arg - arg object.
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getSelectedOptInsPaginator({ level, uid, pageSize }?: {
        level: string;
        uid: number;
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get integration level config
      * @description: Get integration level config
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      
      **/
    getIntegrationLevelConfig({ id, level }?: {
        id: string;
        level: string;
    }): any;
    /**
      *
      * @summary: Get level data for integration
      * @description: Get level data for integration
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      
      **/
    getIntegrationByLevelId({ id, level, uid }?: {
        id: string;
        level: string;
        uid: number;
    }): any;
    /**
      *
      * @summary: Check store has active integration
      * @description: API checks if a store is already opted in any other integrations
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Integration id
      * @param {string} arg.level - Integration level
      * @param {number} arg.uid - Integration level uid
      
      **/
    getLevelActiveIntegrations({ id, level, uid }?: {
        id: string;
        level: string;
        uid: number;
    }): any;
    /**
      *
      * @summary: Get brands by company
      * @description: Get brands by company
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - Search text for brand name
      
      **/
    getBrandsByCompany({ q }?: {
        q?: string;
    }): any;
    /**
     *
     * @summary: Get company by brand uids
     * @description: Get company by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {CompanyByBrandsRequest} arg.body
     **/
    getCompanyByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: CompanyByBrandsRequest;
    }): any;
    /**
     *
     * @summary: Get company by brand uids
     * @description: Get company by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageSize] - Current request items count
     * @param {CompanyByBrandsRequest} arg.body
     **/
    getCompanyByBrandsPaginator({ pageSize, body }?: {
        pageSize?: number;
        body: CompanyByBrandsRequest;
    }): Paginator;
    /**
     *
     * @summary: Get stores by brand uids
     * @description: Get stores by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageNo] - Current page no
     * @param {number} [arg.pageSize] - Current request items count
     * @param {StoreByBrandsRequest} arg.body
     **/
    getStoreByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: StoreByBrandsRequest;
    }): any;
    /**
     *
     * @summary: Get stores by brand uids
     * @description: Get stores by brand uids
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageSize] - Current request items count
     * @param {StoreByBrandsRequest} arg.body
     **/
    getStoreByBrandsPaginator({ pageSize, body }?: {
        pageSize?: number;
        body: StoreByBrandsRequest;
    }): Paginator;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller applications who has opted current company as inventory
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Current page no
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getOtherSellerApplications({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller applications who has opted current company as inventory
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Current request items count
      
      **/
    getOtherSellerApplicationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
      *
      * @summary: Get other seller applications
      * @description: Get other seller application
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Application Id
      
      **/
    getOtherSellerApplicationById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Opt out company or store from other seller application
     * @description: Opt out company or store from other seller application
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Application Id
     * @param {OptOutInventory} arg.body
     **/
    optOutFromApplication({ id, body }?: {
        id: string;
        body: OptOutInventory;
    }): any;
}
declare class Marketplaces {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get available marketplace channels
      * @description: Get available marketplace channels
      * @param {Object} arg - arg object.
      
      **/
    getAvailableChannels({}?: any): any;
    /**
      *
      * @summary: Get all registered marketplace channels for a seller
      * @description: Get all registered marketplace channels for a seller
      * @param {Object} arg - arg object.
      
      **/
    getChannels({}?: any): any;
    /**
      *
      * @summary: Get registered marketplace channel credential configuration for a seller
      * @description: Get registered marketplace channel credentials configuration for a seller
      * @param {Object} arg - arg object.
      * @param {string} arg.channel - Name of marketplace channel
      
      **/
    getChannel({ channel }?: {
        channel: string;
    }): any;
    /**
     *
     * @summary: Create Myntra marketplace channel for a seller
     * @description: Create Myntra marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {MyntraPayload} arg.body
     **/
    registerMyntraChannel({ body }?: {
        body: MyntraPayload;
    }): any;
    /**
     *
     * @summary: Update Myntra marketplace channel credentials for a seller
     * @description: Update Myntra marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {MyntraPayload} arg.body
     **/
    updateMyntraChannelCredentials({ body }?: {
        body: MyntraPayload;
    }): any;
    /**
     *
     * @summary: Create Amazon marketplace channel for a seller
     * @description: Create Amazon marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {AmazonPayload} arg.body
     **/
    registerAmazonChannel({ body }?: {
        body: AmazonPayload;
    }): any;
    /**
     *
     * @summary: Update Amazon marketplace channel credentials for a seller
     * @description: Update Amazon marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {AmazonPayload} arg.body
     **/
    updateAmazonChannelCredentials({ body }?: {
        body: AmazonPayload;
    }): any;
    /**
     *
     * @summary: Create Flipkart / Flipkart Assured marketplace channel for a seller
     * @description: Create Flipkart / Flipkart Assured marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.flipkartChannel - Name of marketplace channel
     * @param {FlipkartPayload} arg.body
     **/
    registerFlipkartChannel({ flipkartChannel, body }?: {
        flipkartChannel: string;
        body: FlipkartPayload;
    }): any;
    /**
     *
     * @summary: Update Flipkart / Flipkart Assured marketplace channel credentials for a seller
     * @description: Update Flipkart / Flipkart Assured marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.flipkartChannel - Name of marketplace channel
     * @param {FlipkartPayload} arg.body
     **/
    updateFlipkartChannelCredentials({ flipkartChannel, body }?: {
        flipkartChannel: string;
        body: FlipkartPayload;
    }): any;
    /**
     *
     * @summary: Create Tatacliq / Tatacliq Luxury marketplace channel for a seller
     * @description: Create Tatacliq / Tatacliq Luxury marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.tatacliqChannel - Name of marketplace channel
     * @param {TatacliqPayload} arg.body
     **/
    registerTatacliqChannel({ tatacliqChannel, body }?: {
        tatacliqChannel: string;
        body: TatacliqPayload;
    }): any;
    /**
     *
     * @summary: Update Tatacliq / Tatacliq Luxury Assured marketplace channel credentials for a seller
     * @description: Update Tatacliq / Tatacliq Luxury marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.tatacliqChannel - Name of marketplace channel
     * @param {TatacliqPayload} arg.body
     **/
    updateTatacliqChannelCredentials({ tatacliqChannel, body }?: {
        tatacliqChannel: string;
        body: TatacliqPayload;
    }): any;
    /**
     *
     * @summary: Create Ajio marketplace channel for a seller
     * @description: Create Ajio marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {AjioPayload} arg.body
     **/
    registerAjioChannel({ body }?: {
        body: AjioPayload;
    }): any;
    /**
     *
     * @summary: Update Ajio marketplace channel credentials for a seller
     * @description: Update Ajio marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {AjioPayload} arg.body
     **/
    updateAjioChannelCredentials({ body }?: {
        body: AjioPayload;
    }): any;
    /**
     *
     * @summary: Update inventory sync configuration of marketplace channel for a seller
     * @description: Update inventory sync configuration of marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.channel - Name of marketplace channel
     * @param {string} [arg.validateCred] - Validate marketplace cred while saving inventory config
     * @param {InventorySyncConfig} arg.body
     **/
    updateChannelInventorySyncConfig({ channel, body, validateCred }?: {
        channel: string;
        validateCred?: string;
        body: InventorySyncConfig;
    }): any;
    /**
      *
      * @summary: Get marketplace channel location config for a seller
      * @description: Get marketplace channel location config for a seller
      * @param {Object} arg - arg object.
      * @param {string} arg.channel - Name of marketplace channel
      
      **/
    getChannelLocationConfig({ channel }?: {
        channel: string;
    }): any;
    /**
     *
     * @summary: update marketplace channel location config for a seller
     * @description: update marketplace channel location config for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.channel - Name of marketplace channel
     * @param {StoreMappingPayload} arg.body
     **/
    updateChannelLocationConfig({ channel, body }?: {
        channel: string;
        body: StoreMappingPayload;
    }): any;
    /**
      *
      * @summary: Get marketplace channel active status for a seller
      * @description: Get marketplace channel active status for a seller
      * @param {Object} arg - arg object.
      * @param {string} arg.channel - Name of marketplace channel
      
      **/
    getChannelStatus({ channel }?: {
        channel: string;
    }): any;
    /**
     *
     * @summary: Update marketplace channel active status for a seller
     * @description: Update marketplace channel active status for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.channel - Name of marketplace channel
     * @param {StatusPayload} arg.body
     **/
    updateChannelStatus({ channel, body }?: {
        channel: string;
        body: StatusPayload;
    }): any;
    /**
     *
     * @summary: Trigger marketplace channel inventory updates for a seller
     * @description: Trigger marketplace channel inventory updates for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.channel - Name of marketplace channel
     * @param {string} arg.updateType - Inventory update type
     * @param {SyncPayload} arg.body
     **/
    triggerChannelInventoryUpdates({ channel, updateType, body }?: {
        channel: string;
        updateType: string;
        body: SyncPayload;
    }): any;
}
declare class Analytics {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Create data export job in required format
     * @description: Create data export job in required format
     * @param {Object} arg - arg object.
     * @param {string} arg.exportType - Export type / format
     * @param {ExportJobReq} arg.body
     **/
    createExportJob({ exportType, body }?: {
        exportType: string;
        body: ExportJobReq;
    }): any;
    /**
      *
      * @summary: Get data export job status
      * @description: Get data export job status
      * @param {Object} arg - arg object.
      * @param {string} arg.exportType - Export type / format
      * @param {string} arg.jobId - Export job id
      
      **/
    getExportJobStatus({ exportType, jobId }?: {
        exportType: string;
        jobId: string;
    }): any;
    /**
     *
     * @summary: Get logs list
     * @description: Get logs list
     * @param {Object} arg - arg object.
     * @param {string} arg.logType - Log type
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @param {GetLogsListReq} arg.body
     **/
    getLogsList({ logType, body, pageNo, pageSize }?: {
        logType: string;
        pageNo?: number;
        pageSize?: number;
        body: GetLogsListReq;
    }): any;
    /**
     *
     * @summary: Get logs list
     * @description: Get logs list
     * @param {Object} arg - arg object.
     * @param {string} arg.logType - Log type
     * @param {number} [arg.pageSize] - Current page size
     * @param {GetLogsListReq} arg.body
     **/
    getLogsListPaginator({ logType, pageSize, body }?: {
        logType: string;
        pageSize?: number;
        body: GetLogsListReq;
    }): Paginator;
    /**
     *
     * @summary: Search logs
     * @description: Search logs
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageNo] - Current page number
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} arg.logType - Log type
     * @param {SearchLogReq} arg.body
     **/
    searchLogs({ logType, body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        logType: string;
        body: SearchLogReq;
    }): any;
    /**
     *
     * @summary: Search logs
     * @description: Search logs
     * @param {Object} arg - arg object.
     * @param {number} [arg.pageSize] - Current page size
     * @param {string} arg.logType - Log type
     * @param {SearchLogReq} arg.body
     **/
    searchLogsPaginator({ pageSize, logType, body }?: {
        pageSize?: number;
        logType: string;
        body: SearchLogReq;
    }): Paginator;
}
declare class Discount {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Fetch discount list.
      * @description: Fetch discount list.
      * @param {Object} arg - arg object.
      * @param {string} [arg.view] - listing or calender.  Default is listing.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a discount.
      * @param {number} [arg.pageNo] - page number. Default is 1.
      * @param {number} [arg.pageSize] - page size. Default is 12.
      * @param {boolean} [arg.archived] - archived. Default is false.
      * @param {number} [arg.month] - month. Default is current month.
      * @param {number} [arg.year] - year. Default is current year.
      * @param {string} [arg.type] - basic or custom.
      * @param {Array<string>} [arg.appIds] - application ids.
      
      **/
    getDiscounts({ view, q, pageNo, pageSize, archived, month, year, type, appIds, }?: {
        view?: string;
        q?: string;
        pageNo?: number;
        pageSize?: number;
        archived?: boolean;
        month?: number;
        year?: number;
        type?: string;
        appIds?: Array<string>;
    }): any;
    /**
     *
     * @summary: Create Discount.
     * @description: Create Discount.
     * @param {Object} arg - arg object.
     * @param {CreateUpdateDiscount} arg.body
     **/
    createDiscount({ body }?: {
        body: CreateUpdateDiscount;
    }): any;
    /**
      *
      * @summary: Fetch discount.
      * @description: Fetch discount.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - unique id.
      
      **/
    getDiscount({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Create Discount.
     * @description: Create Discount.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - id
     * @param {CreateUpdateDiscount} arg.body
     **/
    updateDiscount({ id, body }?: {
        id: string;
        body: CreateUpdateDiscount;
    }): any;
    /**
     *
     * @summary: Validate File.
     * @description: Validate File.
     * @param {Object} arg - arg object.
     * @param {string} [arg.discount] - discount
     * @param {DiscountJob} arg.body
     **/
    validateDiscountFile({ body, discount }?: {
        discount?: string;
        body: DiscountJob;
    }): any;
    /**
     *
     * @summary: Validate File.
     * @description: Validate File.
     * @param {Object} arg - arg object.
     * @param {string} arg.type - type
     * @param {DownloadFileJob} arg.body
     **/
    downloadDiscountFile({ type, body }?: {
        type: string;
        body: DownloadFileJob;
    }): any;
    /**
      *
      * @summary: Validate File Job.
      * @description: Validate File Job.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - id
      
      **/
    getValidationJob({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Cancel Validation Job.
      * @description: Cancel Validation Job.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - id
      
      **/
    cancelValidationJob({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Download File Job.
      * @description: Download File Job.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - id
      
      **/
    getDownloadJob({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Cancel Download Job.
      * @description: Cancel Download Job.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - id
      
      **/
    cancelDownloadJob({ id }?: {
        id: string;
    }): any;
}
import PlatformApplicationClient = require("./PlatformApplicationClient");
type TicketList = {
    items?: Array<Ticket>;
    filters?: Filter;
    page?: Page;
};
type Page = {
    itemTotal?: number;
    nextId?: string;
    hasPrevious?: boolean;
    hasNext?: boolean;
    current?: number;
    type: string;
    size?: number;
};
type TicketHistoryList = {
    docs?: Array<TicketHistory>;
    limit?: number;
    page?: number;
    pages?: number;
    total?: number;
};
type CustomFormList = {
    docs?: Array<CustomForm>;
    limit?: number;
    page?: number;
    pages?: number;
    total?: number;
};
type CreateCustomFormPayload = {
    slug: string;
    title: string;
    inputs: Array<any>;
    description?: string;
    headerImage?: string;
    shouldNotify?: boolean;
    successMessage?: string;
    pollForAssignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: Array<any>;
    description?: string;
    headerImage?: string;
    shouldNotify?: boolean;
    loginRequired?: boolean;
    successMessage?: string;
    pollForAssignment?: PollForAssignment;
};
type EditTicketPayload = {
    content?: TicketContent;
    category?: string;
    source?: string;
    status?: string;
    priority?: string;
    assignedTo?: AgentChangePayload;
    tags?: Array<string>;
};
type AgentChangePayload = {
    agentId: string;
};
type CreateVideoRoomResponse = {
    uniqueName: string;
};
type CloseVideoRoomResponse = {
    success: boolean;
};
type CreateVideoRoomPayload = {
    uniqueName: string;
    notify?: Array<any>;
};
type Filter = {
    priorities: Array<Priority>;
    categories?: Array<TicketCategory>;
    statuses: Array<Status>;
    assignees: Array<any>;
};
type TicketHistoryPayload = {
    value: any;
    type: string;
};
type CustomFormSubmissionPayload = {
    response: Array<KeyValue>;
};
type KeyValue = {
    key: string;
    value: string;
};
type GetTokenForVideoRoomResponse = {
    accessToken: string;
};
type GetParticipantsInsideVideoRoomResponse = {
    participants: Array<Participant>;
};
type Participant = {
    user?: UserSchema;
    identity?: string;
    status?: string;
};
type UserSchema = {
    firstName?: string;
    lastName?: string;
    phoneNumbers?: Array<PhoneNumber>;
    emails?: Array<Email>;
    gender?: string;
    active?: boolean;
    profilePicUrl?: string;
    username?: string;
    accountType?: string;
    uid?: string;
    debug?: Debug;
    hasOldPasswordHash?: boolean;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
};
type PhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    countryCode?: number;
};
type Email = {
    primary?: boolean;
    verified?: boolean;
    email?: string;
    active?: boolean;
};
type Debug = {
    source?: string;
    platform?: string;
};
type SubmitCustomFormResponse = {
    ticket: Ticket;
};
type TicketContext = {
    applicationId?: string;
    companyId: string;
};
type CreatedOn = {
    userAgent: string;
};
type TicketAsset = {
    display?: string;
    value: string;
    type: string;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: Array<TicketAsset>;
};
type AddTicketPayload = {
    status: string;
    priority: string;
    category: string;
    content: TicketContent;
};
type Priority = {
    key: string;
    display: string;
    color: string;
};
type Status = {
    key: string;
    display: string;
    color: string;
};
type TicketCategory = {
    key: string;
    display: string;
    form?: CustomForm;
};
type SubmitButton = {
    title: string;
    titleColor: string;
    backgroundColor: string;
};
type PollForAssignment = {
    duration: number;
    message: string;
    successMessage: string;
    failureMessage: string;
};
type CustomForm = {
    applicationId: string;
    slug: string;
    headerImage?: string;
    title: string;
    description?: string;
    loginRequired: boolean;
    shouldNotify: boolean;
    successMessage?: string;
    submitButton?: SubmitButton;
    inputs: Array<any>;
    createdOn?: CreatedOn;
    createdBy?: any;
    pollForAssignment?: PollForAssignment;
    id: string;
};
type TicketHistory = {
    type: string;
    value: any;
    ticketId: string;
    createdOn?: CreatedOn;
    createdBy?: any;
    id: string;
    updatedAt?: string;
    createdAt?: string;
};
type Ticket = {
    context?: TicketContext;
    createdOn?: CreatedOn;
    responseId?: string;
    content?: TicketContent;
    ticketId: string;
    category: TicketCategory;
    source: string;
    status: Status;
    priority: Priority;
    createdBy?: any;
    assignedTo?: any;
    tags?: Array<string>;
    customJson?: any;
    id?: string;
    updatedAt?: string;
    createdAt?: string;
};
type Activity = {
    currentState?: any;
    documentId?: string;
    previousState?: any;
};
type ActivityDump = {
    activity?: Activity;
    createdBy?: CreatedBy;
    dateMeta?: DateMeta;
    id?: string;
    type?: string;
};
type AddMediaListRequest = {
    entityId?: string;
    entityType?: string;
    mediaList?: Array<AddMediaRequest>;
    refId?: string;
    refType?: string;
};
type AddMediaRequest = {
    cloudId?: string;
    cloudName?: string;
    cloudProvider?: string;
    entityId?: string;
    entityType?: string;
    mediaUrl?: string;
    refId?: string;
    refType?: string;
    tags?: Array<string>;
    thumbnailUrl?: string;
    type?: string;
};
type ApproveRequest = {
    approve?: boolean;
    entityType?: string;
    id: string;
    reason?: string;
};
type Attribute = {
    dateMeta?: DateMeta;
    description?: string;
    id?: string;
    name?: string;
    slug?: string;
    tags?: Array<TagMeta>;
};
type AttributeObject = {
    description?: string;
    name: string;
    slug?: string;
    title?: string;
    type: string;
    value: number;
};
type CreatedBy = {
    id?: string;
    name?: string;
    tags?: Array<TagMeta>;
};
type CursorGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type DateMeta = {
    createdOn?: string;
    modifiedOn?: string;
};
type DeviceMeta = {
    appVersion?: string;
    platform?: string;
};
type Entity = {
    id?: string;
    type?: string;
};
type EntityRequest = {
    entityId?: string;
    entityType?: string;
};
type FeedbackAttributes = {
    items?: Array<Attribute>;
    page?: Page;
};
type FeedbackError = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    requestId?: string;
    stackTrace?: string;
    status?: number;
};
type FeedbackState = {
    active?: boolean;
    archive?: boolean;
    media?: string;
    qna?: boolean;
    rating?: boolean;
    review?: boolean;
};
type GetResponse = {
    data?: any;
    page?: Page;
};
type GetReviewResponse = {
    facets?: Array<ReviewFacet>;
    items?: Array<any>;
    page?: Page;
    sort?: Array<SortMethod>;
};
type InsertResponse = {
    count?: number;
};
type MediaMeta = {
    maxCount?: number;
    size?: number;
    type?: string;
};
type MediaMetaRequest = {
    maxCount: number;
    size: number;
};
type NumberGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type PageCursor = {
    current?: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
    itemTotal?: number;
    nextId?: string;
    size: number;
    type: string;
};
type PageNumber = {
    current?: number;
    hasNext?: boolean;
    itemTotal?: number;
    size?: number;
    type?: string;
};
type Rating = {
    attributes?: Array<Attribute>;
    attributesSlugs?: Array<string>;
    ui?: UI;
};
type RatingRequest = {
    attributes: Array<string>;
    ui?: UI;
};
type ReportAbuseRequest = {
    description?: string;
    entityId: string;
    entityType: string;
};
type Review = {
    description?: string;
    header?: string;
    imageMeta?: MediaMeta;
    title?: string;
    videoMeta?: MediaMeta;
    voteAllowed?: boolean;
};
type ReviewFacet = {
    display?: string;
    name?: string;
    selected?: boolean;
    slug?: string;
    type?: string;
};
type ReviewRequest = {
    description: string;
    header: string;
    imageMeta: MediaMetaRequest;
    isVoteAllowed: boolean;
    title: string;
    videoMeta: MediaMetaRequest;
};
type SaveAttributeRequest = {
    description?: string;
    name: string;
    slug: string;
};
type SortMethod = {
    name?: string;
    selected?: boolean;
    type?: string;
};
type TagMeta = {
    media?: Array<MediaMeta>;
    name?: string;
    type?: string;
};
type Template = {
    dateMeta?: DateMeta;
    entity?: Entity;
    id?: string;
    name?: string;
    rating?: Rating;
    review?: Review;
    state?: FeedbackState;
    tags?: Array<TagMeta>;
};
type TemplateGetResponse = {
    items?: Array<Template>;
    page?: Page;
};
type TemplateRequest = {
    active: boolean;
    enableMediaType?: string;
    enableQna?: boolean;
    enableRating: boolean;
    enableReview: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type TemplateRequestList = {
    templateList: Array<TemplateRequest>;
};
type UI = {
    feedbackQuestion?: Array<string>;
    icon?: UIIcon;
    text?: Array<string>;
    type?: string;
};
type UIIcon = {
    active?: string;
    inactive?: string;
    selected?: Array<string>;
};
type UpdateAttributeRequest = {
    description?: string;
    name: string;
    slug?: string;
};
type UpdateResponse = {
    count?: number;
};
type UpdateReviewRequest = {
    active?: boolean;
    application?: string;
    approve?: boolean;
    archive?: boolean;
    attributesRating?: Array<AttributeObject>;
    description?: string;
    deviceMeta?: DeviceMeta;
    entityId?: string;
    entityType?: string;
    mediaResource?: Array<MediaMeta>;
    rating?: number;
    reviewId?: string;
    templateId?: string;
    title?: string;
};
type UpdateTemplateRequest = {
    active: boolean;
    enableMediaType?: string;
    enableQna?: boolean;
    enableRating: boolean;
    enableReview: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type UpdateTemplateStatusRequest = {
    active?: boolean;
    archive?: boolean;
};
type PaginationSchema = {
    size?: number;
    itemTotal?: number;
    hasNext?: boolean;
    type?: string;
    current?: number;
};
type ThemesListingResponseSchema = {
    items?: Array<ThemesSchema>;
    page?: PaginationSchema;
};
type AddThemeRequestSchema = {
    themeId?: string;
};
type UpgradableThemeSchema = {
    parentTheme?: string;
    appliedTheme?: string;
    upgrade?: boolean;
};
type FontsSchema = {
    items?: FontsSchemaItems;
    kind?: string;
};
type BlitzkriegApiErrorSchema = {
    message?: string;
};
type BlitzkriegNotFoundSchema = {
    message?: string;
};
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
type FontsSchemaItems = {
    family?: string;
    variants?: Array<string>;
    subsets?: Array<string>;
    version?: string;
    lastModified?: string;
    files?: FontsSchemaItemsFiles;
    category?: string;
    kind?: string;
};
type FontsSchemaItemsFiles = {
    regular?: string;
    italic?: string;
    bold?: string;
};
type ThemesSchema = {
    application?: string;
    applied?: boolean;
    customized?: boolean;
    published?: boolean;
    archived?: boolean;
    createdAt?: string;
    updatedAt?: string;
    version?: string;
    parentThemeVersion?: string;
    parentTheme?: string;
    information?: Information;
    tags?: Array<string>;
    src?: Src;
    assets?: AssetsSchema;
    availablePages?: AvailablePages;
    availableSections?: Array<availableSectionSchema>;
    sections?: Array<sectionSchema>;
    constants?: any;
    styles?: any;
    config?: Config;
    settings?: any;
    font?: Font;
    id?: string;
    v?: number;
    colors?: Colors;
};
type pagesSchema = {
    text?: string;
    path?: string;
    type?: string;
    value?: string;
    sections?: Sections;
};
type availableSectionSchema = {
    blocks?: Blocks;
    name?: string;
    label?: string;
    props?: any;
};
type sectionSchema = {
    pageKey?: string;
    pageSections?: PageSections;
};
type Information = {
    images?: Images;
    features?: Array<string>;
    name?: string;
    description?: string;
};
type Images = {
    desktop?: Array<string>;
    android?: Array<string>;
    ios?: Array<string>;
    thumbnail?: Array<string>;
};
type Src = {
    link?: string;
};
type AssetsSchema = {
    umdJs?: UmdJs;
    commonJs?: CommonJs;
    css?: Css;
};
type UmdJs = {
    link?: string;
};
type CommonJs = {
    link?: string;
};
type Css = {
    link?: string;
};
type AvailablePages = {
    path?: string;
    type?: string;
    text?: string;
    value?: string;
    seo?: Seo;
    props?: any;
    sections?: Sections;
};
type Seo = {
    title?: string;
    description?: string;
};
type Sections = {
    attributes?: string;
};
type Config = {
    preset?: Preset;
    globalSchema?: GlobalSchema;
    current?: string;
    list?: ListSchema;
};
type Preset = {
    sections?: sectionSchema;
};
type GlobalSchema = {
    props?: any;
};
type ListSchema = {
    global?: any;
    page?: ConfigPage;
    name?: string;
};
type Colors = {
    bgColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
    linkColor?: string;
    buttonSecondaryColor?: string;
};
type Custom = {
    props?: any;
};
type ConfigPage = {
    settings?: any;
    page?: string;
};
type Font = {
    family?: string;
    variants?: Variants;
};
type Variants = {
    medium?: Medium;
    semiBold?: SemiBold;
    bold?: Bold;
    light?: Light;
    regular?: Regular;
};
type Medium = {
    name?: string;
    file?: string;
};
type SemiBold = {
    name?: string;
    file?: string;
};
type Bold = {
    name?: string;
    file?: string;
};
type Light = {
    name?: string;
    file?: string;
};
type Regular = {
    name?: string;
    file?: string;
};
type Blocks = {
    type?: string;
    name?: string;
    props?: BlocksProps;
};
type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type PageSections = {
    blocks?: PageSectionsBlocks;
    name?: string;
    label?: string;
    props?: any;
    preset?: any;
    predicate?: Predicate;
};
type PageSectionsBlocks = {
    type?: string;
    name?: string;
    props?: PageSectionsBlocksProps;
};
type PageSectionsBlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type Predicate = {
    screen?: Screen;
    user?: PredicateUserSchema;
    route?: Route;
};
type Screen = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
type PredicateUserSchema = {
    authenticated?: boolean;
    anonymous?: boolean;
};
type Route = {
    selected?: string;
    exactUrl?: string;
    query?: any;
};
type EditEmailRequestSchema = {
    email?: string;
};
type SendVerificationLinkMobileRequestSchema = {
    verified?: boolean;
    active?: boolean;
    countryCode?: string;
    phone?: string;
    primary?: boolean;
};
type EditMobileRequestSchema = {
    countryCode?: string;
    phone?: string;
};
type EditProfileRequestSchema = {
    firstName?: string;
    lastName?: string;
    mobile?: string;
    email?: string;
    gender?: string;
    dob?: string;
    profilePicUrl?: string;
    androidHash?: string;
    sender?: string;
    registerToken?: string;
};
type SendEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    token?: string;
    registerToken?: string;
};
type VerifyOtpRequestSchema = {
    requestId?: string;
    registerToken?: string;
    otp?: string;
};
type SendMobileOtpRequestSchema = {
    mobile?: string;
    countryCode?: string;
    action?: string;
    token?: string;
    androidHash?: string;
    force?: string;
};
type UpdatePasswordRequestSchema = {
    oldPassword?: string;
    newPassword?: string;
};
type FormRegisterRequestSchema = {
    firstName?: string;
    lastName?: string;
    gender?: string;
    email?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    registerToken?: string;
};
type TokenRequestBodySchema = {
    token?: string;
};
type ForgotPasswordRequestSchema = {
    code?: string;
    password?: string;
};
type CodeRequestBodySchema = {
    code?: string;
};
type SendResetPasswordEmailRequestSchema = {
    email?: string;
    captchaCode?: string;
};
type PasswordLoginRequestSchema = {
    captchaCode?: string;
    password?: string;
    username?: string;
};
type SendOtpRequestSchema = {
    countryCode?: string;
    captchaCode?: string;
    mobile?: string;
};
type OAuthRequestSchema = {
    isSignedIn?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
type AuthSuccess = {
    registerToken?: string;
    userExists?: boolean;
    user?: AuthSuccessUser;
};
type SendOtpResponse = {
    resendTimer?: number;
    resendToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
};
type LoginSuccess = {
    user?: UserSchema;
};
type VerifyOtpSuccess = {
    user?: UserSchema;
    userExists?: boolean;
};
type ResetPasswordSuccess = {
    status?: string;
};
type RegisterFormSuccess = {
    resendTimer?: number;
    resendToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
};
type VerifyEmailSuccess = {
    message?: string;
};
type HasPasswordSuccess = {
    result?: boolean;
};
type LogoutSuccess = {
    logout?: boolean;
};
type OtpSuccess = {
    resendTimer?: number;
    resendToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
};
type EmailOtpSuccess = {
    resendToken?: string;
};
type SessionListSuccess = {
    sessions?: Array<string>;
};
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verifyMobileLink?: boolean;
};
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verifyEmailLink?: boolean;
};
type SendMobileVerifyLinkSuccess = {
    verifyMobileLink?: boolean;
};
type SendEmailVerifyLinkSuccess = {
    verifyEmailLink?: boolean;
};
type UserSearchResponseSchema = {
    users?: Array<UserSchema>;
};
type CustomerListResponseSchema = {
    items?: Array<UserSchema>;
    page?: PaginationSchema;
};
type UnauthorizedSchema = {
    message?: string;
};
type UnauthenticatedSchema = {
    authenticated?: boolean;
};
type NotFoundSchema = {
    message?: string;
};
type AuthenticationApiErrorSchema = {
    message?: string;
};
type ProfileEditSuccessSchema = {
    email?: string;
    verifyEmailOtp?: boolean;
    verifyEmailLink?: boolean;
    verifyMobileOtp?: boolean;
    user?: string;
    registerToken?: string;
    userExists?: boolean;
};
type FormRegisterRequestSchemaPhone = {
    countryCode?: string;
    mobile?: string;
};
type OAuthRequestSchemaOauth2 = {
    accessToken?: string;
    expiry?: number;
    refreshToken?: string;
};
type OAuthRequestSchemaProfile = {
    lastName?: string;
    image?: string;
    id?: string;
    email?: string;
    fullName?: string;
    firstName?: string;
};
type AuthSuccessUser = {
    firstName?: string;
    lastName?: string;
    debug?: AuthSuccessUserDebug;
    active?: boolean;
    emails?: AuthSuccessUserEmails;
};
type AuthSuccessUserDebug = {
    platform?: string;
};
type AuthSuccessUserEmails = {
    email?: string;
    verified?: boolean;
    primary?: boolean;
    active?: boolean;
};
type PlatformSchema = {
    display?: string;
    lookAndFeel?: LookAndFeel;
    updatedAt?: string;
    active?: boolean;
    forgotPassword?: boolean;
    login?: Login;
    skipCaptcha?: boolean;
    name?: string;
    meta?: MetaSchema;
    id?: string;
    social?: Social;
    requiredFields?: RequiredFields;
    registerRequiredFields?: RegisterRequiredFields;
    skipLogin?: boolean;
    flashCard?: FlashCard;
    subtext?: string;
    socialTokens?: SocialTokens;
    createdAt?: string;
    register?: boolean;
};
type LookAndFeel = {
    cardPosition?: string;
    backgroundColor?: string;
};
type Login = {
    password?: boolean;
    otp?: boolean;
};
type MetaSchema = {
    fyndDefault?: boolean;
};
type Social = {
    accountKit?: boolean;
    facebook?: boolean;
    google?: boolean;
};
type RequiredFields = {
    email?: Email;
    mobile?: Mobile;
};
type Mobile = {
    isRequired?: boolean;
    level?: string;
};
type RegisterRequiredFields = {
    email?: RegisterRequiredFieldsEmail;
    mobile?: RegisterRequiredFieldsMobile;
};
type RegisterRequiredFieldsEmail = {
    isRequired?: boolean;
    level?: string;
};
type RegisterRequiredFieldsMobile = {
    isRequired?: boolean;
    level?: string;
};
type FlashCard = {
    text?: string;
    textColor?: string;
    backgroundColor?: string;
};
type SocialTokens = {
    facebook?: Facebook;
    accountKit?: Accountkit;
    google?: Google;
};
type Facebook = {
    appId?: string;
};
type Accountkit = {
    appId?: string;
};
type Google = {
    appId?: string;
};
type ApplicationLegal = {
    application?: string;
    tnc?: string;
    policy?: string;
    shipping?: string;
    faq?: Array<ApplicationLegalFAQ>;
    id?: string;
    updatedAt?: string;
    createdAt?: string;
};
type ApplicationLegalFAQ = {
    question?: string;
    answer?: string;
};
type SeoComponent = {
    seo?: SeoSchema;
};
type SeoSchema = {
    app?: string;
    id?: string;
    robotsTxt?: string;
    sitemapEnabled?: boolean;
    customMetaTags?: Array<any>;
    details?: any;
    createdAt?: string;
    updatedAt?: string;
};
type CustomMetaTag = {
    name?: string;
    content?: string;
    id?: string;
};
type Detail = {
    title?: string;
    description?: string;
};
type StorefrontAnnouncement = {
    announcements?: AnnouncementSchema;
    refreshRate?: number;
    refreshPages?: Array<string>;
};
type AnnouncementPageSchema = {
    pageSlug?: string;
    type?: string;
};
type EditorMeta = {
    foregroundColor?: string;
    backgroundColor?: string;
    contentType?: string;
    content?: string;
};
type AnnouncementAuthorSchema = {
    createdBy?: string;
    modifiedBy?: string;
};
type AdminAnnouncementSchema = {
    id?: string;
    platforms?: Array<string>;
    title?: string;
    announcement?: string;
    pages?: Array<AnnouncementPageSchema>;
    editorMeta?: EditorMeta;
    author?: AnnouncementAuthorSchema;
    createdAt?: string;
    app?: string;
    modifiedAt?: string;
    schedule?: ScheduleSchema;
};
type ScheduleSchema = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    nextSchedule?: Array<any>;
};
type NextSchedule = {
    start?: string;
    end?: string;
};
type AnnouncementSchema = {
    pageSlug?: Array<any>;
};
type announcementSchema = {
    announcement?: string;
    schedule?: scheduleStartSchema;
};
type scheduleStartSchema = {
    start?: string;
};
type BlogGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type ResourceContent = {
    type?: string;
    value?: string;
};
type Asset = {
    aspectRatio?: string;
    id?: string;
    secureUrl?: string;
};
type Author = {
    designation?: string;
    id?: string;
    name?: string;
};
type BlogSchema = {
    id?: string;
    customJson?: any;
    application?: string;
    archived?: boolean;
    author?: any;
    content?: Array<ResourceContent>;
    featureImage?: any;
    published?: boolean;
    readingTime?: string;
    slug?: string;
    tags?: Array<string>;
    seo?: SEO;
    schedule?: CronSchedule;
    title?: string;
    dateMeta?: DateMeta;
};
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
};
type SEOImage = {
    url?: string;
};
type BlogRequest = {
    application?: string;
    customJson?: any;
    author?: any;
    content?: Array<ResourceContent>;
    featureImage?: any;
    published?: boolean;
    readingTime?: string;
    slug?: string;
    tags?: Array<string>;
    title?: string;
    seo?: SEO;
    schedule?: CronSchedule;
};
type GetAnnouncementListSchema = {
    items?: Array<AdminAnnouncementSchema>;
    page?: Page;
};
type CreateAnnouncementSchema = {
    message?: string;
    data?: AdminAnnouncementSchema;
};
type Navigation = {
    name?: string;
    slug?: string;
    orientation?: string;
    createdBy?: CreatedBySchema;
    dateMeta?: DateMeta;
    id?: string;
    position?: string;
    application?: string;
    platform?: string;
    navigation?: NavigationReference;
};
type LocaleLanguage = {
    hi?: Language;
    ar?: Language;
    enUs?: Language;
};
type Language = {
    display?: string;
};
type Action = {
    page?: ActionPage;
    popup?: ActionPage;
    type?: string;
};
type ActionPage = {
    params?: any;
    query?: any;
    url?: string;
    type?: string;
};
type NavigationReference = {
    acl?: Array<string>;
    tags?: Array<string>;
    localeLanguage?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sortOrder?: number;
    subNavigation?: NavigationReference;
};
type LandingPage = {
    data?: LandingPageSchema;
    success?: boolean;
};
type ConfigurationSchema = {
    sleepTime?: number;
    startOnLaunch?: boolean;
    duration?: number;
    slideDirection?: string;
};
type SlideshowMedia = {
    type?: string;
    url?: string;
    bgColor?: string;
    duration?: number;
    autoDecideDuration?: boolean;
    action?: Action;
};
type Slideshow = {
    data?: SlideshowSchema;
    success?: boolean;
};
type AnnouncementsResponseSchema = {
    announcements?: any;
    refreshRate?: number;
    refreshPages?: Array<string>;
};
type AnnouncementDataSchema = {
    pageSlug?: string;
    announcement?: StorefrontAnnouncement;
};
type FaqResponseSchema = {
    faqs?: Array<FAQ>;
};
type UpdateHandpickedSchema = {
    tag?: HandpickedTagSchema;
};
type HandpickedTagSchema = {
    position?: string;
    attributes?: any;
    name?: string;
    url?: string;
    type?: string;
    subType?: string;
    content?: string;
};
type RemoveHandpickedSchema = {
    tags?: Array<string>;
};
type CreateTagSchema = {
    name?: string;
    subType?: string;
    id?: string;
    type?: string;
    url?: string;
    position?: string;
    attributes?: any;
    content?: string;
};
type CreateTagRequestSchema = {
    tags?: Array<CreateTagSchema>;
};
type APIError = {
    message?: string;
    status?: number;
    code?: string;
    exception?: string;
    info?: string;
    requestId?: string;
    stackTrace?: string;
    meta?: any;
};
type CategorySchema = {
    index?: number;
    id?: string;
    slug?: string;
    title?: string;
    application?: string;
};
type ChildrenSchema = {
    question?: string;
    answer?: string;
    slug?: string;
    application?: string;
    id?: string;
};
type CategoryRequestSchema = {
    slug?: string;
    title?: string;
};
type FAQCategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: ChildrenSchema;
    id?: string;
    slug?: string;
    application?: string;
    iconUrl?: string;
    customJson?: any;
};
type FaqSchema = {
    slug?: string;
    application?: string;
    id?: string;
    question?: string;
    answer?: string;
};
type FAQ = {
    slug?: string;
    question?: string;
    answer?: string;
};
type CreateFaqResponseSchema = {
    faq?: FaqSchema;
};
type CreateFaqSchema = {
    faq?: FAQ;
};
type GetFaqSchema = {
    faqs?: Array<any>;
};
type UpdateFaqCategoryRequestSchema = {
    category?: CategorySchema;
};
type CreateFaqCategoryRequestSchema = {
    category?: CategoryRequestSchema;
};
type CreateFaqCategorySchema = {
    category?: CategorySchema;
};
type GetFaqCategoriesSchema = {
    categories?: Array<CategorySchema>;
};
type GetFaqCategoryBySlugSchema = {
    category?: FAQCategorySchema;
};
type LandingPageGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type LandingPageSchema = {
    slug?: string;
    action?: Action;
    platform?: Array<string>;
    createdBy?: CreatedBySchema;
    dateMeta?: DateMeta;
    id?: string;
    application?: string;
    archived?: boolean;
    customJson?: any;
};
type DefaultNavigationResponse = {
    items?: Array<any>;
};
type NavigationGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type Orientation = {
    portrait?: Array<string>;
    landscape?: Array<string>;
};
type NavigationSchema = {
    id?: string;
    application?: string;
    archived?: boolean;
    name?: string;
    slug?: string;
    platform?: Array<string>;
    createdBy?: CreatedBySchema;
    dateMeta?: DateMeta;
    orientation?: Orientation;
    version?: number;
    navigation?: NavigationReference;
};
type NavigationRequest = {
    name?: string;
    slug?: string;
    platform?: Array<string>;
    orientation?: Orientation;
    navigation?: NavigationReference;
};
type CustomPageSchema = {
    id?: string;
    platform?: string;
    title?: string;
    slug?: string;
    type?: string;
    orientation?: string;
    application?: string;
    description?: string;
    published?: boolean;
    tags?: Array<string>;
    content?: Array<ContentSchema>;
    createdBy?: CreatedBySchema;
    dateMeta?: DateMeta;
    schedule?: ScheduleSchema;
};
type ContentSchema = {
    type?: string;
    value?: string;
};
type CustomPage = {
    data?: CustomPageSchema;
};
type CustomBlogSchema = {
    id?: string;
    title?: string;
    slug?: string;
    readingTime?: string;
    application?: string;
    description?: string;
    featureImage?: FeatureImage;
    published?: boolean;
    archived?: boolean;
    tags?: Array<string>;
    content?: ContentSchema;
    author?: Author;
    schedule?: ScheduleSchema;
    createdAt?: string;
    updatedAt?: string;
    customJson?: any;
};
type FeatureImage = {
    secureUrl?: string;
};
type CustomBlog = {
    data?: CustomBlogSchema;
};
type PageGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type PageSpec = {
    specifications?: Array<any>;
};
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
type PageSpecItem = {
    pageType?: string;
    displayName?: string;
    params?: Array<PageSpecParam>;
    query?: Array<PageSpecParam>;
};
type PageSchema = {
    id?: string;
    application?: string;
    componentIds?: Array<string>;
    content?: Array<PageContent>;
    createdBy?: any;
    dateMeta?: any;
    description?: string;
    featureImage?: any;
    pageMeta?: Array<PageMeta>;
    schedule?: ScheduleSchema;
    customJson?: any;
    orientation?: string;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: Array<string>;
    title?: string;
    type?: string;
    seo?: SEO;
    visibility?: any;
};
type CreatedBySchema = {
    id?: string;
};
type PageContent = {
    type?: string;
    value?: any;
};
type PageMeta = {
    key?: string;
    value?: any;
};
type PageRequest = {
    schedule?: CronSchedule;
    application?: string;
    author?: any;
    customJson?: any;
    orientation?: string;
    content?: Array<ResourceContent>;
    featureImage?: any;
    published?: boolean;
    readingTime?: string;
    slug?: string;
    tags?: Array<string>;
    seo?: SEO;
    title?: string;
};
type CronSchedule = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
};
type PagePublishRequest = {
    publish?: boolean;
};
type PageMetaSchema = {
    systemPages?: Array<any>;
    customPages?: Array<any>;
    applicationId?: string;
};
type SlideshowGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type SlideshowSchema = {
    id?: string;
    slug?: string;
    dateMeta?: DateMeta;
    application?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: Array<SlideshowMedia>;
    active?: boolean;
    archived?: boolean;
    customJson?: any;
};
type SlideshowRequest = {
    slug?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia;
    active?: boolean;
};
type Support = {
    created?: boolean;
    id?: string;
    configType?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    contact?: ContactSchema;
};
type PhoneProperties = {
    key?: string;
    code?: string;
    number?: string;
};
type PhoneSchema = {
    active?: boolean;
    phone?: Array<PhoneProperties>;
};
type EmailProperties = {
    key?: string;
    value?: string;
};
type EmailSchema = {
    active?: boolean;
    email?: Array<EmailProperties>;
};
type ContactSchema = {
    phone?: PhoneSchema;
    email?: EmailSchema;
};
type TagsSchema = {
    application?: string;
    id?: string;
    tags?: Array<TagSchema>;
};
type TagSchema = {
    name?: string;
    url?: string;
    type?: string;
    subType?: string;
    id?: string;
    position?: string;
    attributes?: any;
    content?: string;
};
type UnauthenticatedUser = {
    message?: string;
};
type UnauthenticatedApplication = {
    message?: string;
};
type BadRequest = {
    message?: string;
};
type ResourceNotFound = {
    message?: string;
};
type InternalServerError = {
    message?: string;
    code?: string;
};
type PlanRecurring = {
    interval?: string;
    intervalCount?: number;
};
type Plan = {
    recurring?: PlanRecurring;
    isTrialPlan?: boolean;
    planGroup?: string;
    tagLines?: Array<string>;
    currency?: string;
    isActive?: boolean;
    isVisible?: boolean;
    trialPeriod?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    id?: string;
    name?: string;
    description?: string;
    amount?: number;
    productSuiteId?: string;
    createdAt?: string;
    modifiedAt?: string;
};
type DetailedPlanComponents = {
    name?: string;
    slug?: string;
    description?: string;
    group?: string;
    icon?: string;
    links?: any;
    enabled?: boolean;
    displayText?: string;
};
type DetailedPlan = {
    recurring?: PlanRecurring;
    isTrialPlan?: boolean;
    planGroup?: string;
    tagLines?: Array<string>;
    currency?: string;
    isActive?: boolean;
    isVisible?: boolean;
    trialPeriod?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    id?: string;
    name?: string;
    description?: string;
    amount?: number;
    productSuiteId?: string;
    createdAt?: string;
    modifiedAt?: string;
    components?: Array<DetailedPlanComponents>;
};
type InvoiceDetailsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceDetailsClient = {
    addressLines?: Array<string>;
    name?: string;
    email?: string;
    phone?: string;
};
type InvoiceDetailsStatusTrail = {
    id?: string;
    value?: string;
    timestamp?: string;
};
type InvoiceDetailsPaymentMethodsDataChecks = {
    cvcCheck?: string;
    addressLine1Check?: string;
    addressPostalCodeCheck?: string;
};
type InvoiceDetailsPaymentMethodsDataNetworks = {
    available?: Array<string>;
    preferred?: string;
};
type InvoiceDetailsPaymentMethodsDataThreeDSecureUsage = {
    supported?: boolean;
};
type InvoiceDetailsPaymentMethodsData = {
    brand?: string;
    last4?: string;
    checks?: InvoiceDetailsPaymentMethodsDataChecks;
    wallet?: string;
    country?: string;
    funding?: string;
    expYear?: number;
    networks?: InvoiceDetailsPaymentMethodsDataNetworks;
    expMonth?: number;
    fingerprint?: string;
    generatedFrom?: string;
    threeDSecureUsage?: InvoiceDetailsPaymentMethodsDataThreeDSecureUsage;
};
type InvoiceDetailsPaymentMethods = {
    id?: number;
    type?: string;
    pgPaymentMethodId?: string;
    data?: InvoiceDetailsPaymentMethodsData;
    isDefault?: boolean;
};
type InvoicePaymentMethod = {
    pgPaymentMethodId?: string;
};
type InvoiceDetails = {
    period?: InvoiceDetailsPeriod;
    client?: InvoiceDetailsClient;
    autoAdvance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    id?: string;
    collectionMethod?: string;
    subscriberId?: string;
    invoiceUrl?: string;
    number?: string;
    pgData?: any;
    receiptNumber?: string;
    statementDescriptor?: string;
    currentStatus?: string;
    statusTrail?: Array<InvoiceDetailsStatusTrail>;
    subtotal?: number;
    total?: number;
    subscription?: string;
    nextActionTime?: string;
    createdAt?: string;
    modifiedAt?: string;
    hashIdentifier?: string;
    paymentMethod?: InvoicePaymentMethod;
};
type InvoiceItemsPlanRecurring = {
    interval?: string;
    intervalCount?: number;
};
type InvoiceItemsPlan = {
    recurring?: InvoiceItemsPlanRecurring;
    isTrialPlan?: boolean;
    planGroup?: string;
    tagLines?: Array<string>;
    currency?: string;
    isActive?: boolean;
    isVisible?: boolean;
    trialPeriod?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    id?: string;
    name?: string;
    description?: string;
    amount?: number;
    productSuiteId?: string;
    createdAt?: string;
    modifiedAt?: string;
};
type InvoiceItemsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceItems = {
    id?: string;
    currency?: string;
    plan?: InvoiceItemsPlan;
    name?: string;
    quantity?: number;
    description?: string;
    period?: InvoiceItemsPeriod;
    unitAmount?: number;
    amount?: number;
    type?: string;
    invoiceId?: string;
    createdAt?: string;
    modifiedAt?: string;
};
type Invoice = {
    invoice?: InvoiceDetails;
    invoiceItems?: Array<InvoiceItems>;
};
type InvoicesDataClient = {
    name?: string;
    email?: string;
    phone?: string;
    addressLines?: Array<string>;
};
type InvoicesDataPeriod = {
    start?: string;
    end?: string;
};
type InvoicesDataPaymentMethod = {
    pgPaymentMethodId?: string;
};
type InvoicesData = {
    id?: string;
    client?: InvoicesDataClient;
    autoAdvance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    collectionMethod?: string;
    subscriberId?: string;
    invoiceUrl?: string;
    number?: string;
    pgData?: any;
    period?: InvoicesDataPeriod;
    receiptNumber?: string;
    statementDescriptor?: string;
    currentStatus?: string;
    statusTrail?: Array<InvoiceDetailsStatusTrail>;
    subtotal?: number;
    total?: number;
    subscription?: string;
    nextActionTime?: string;
    createdAt?: string;
    modifiedAt?: string;
    hashIdentifier?: string;
    paymentMethod?: InvoicesDataPaymentMethod;
    invoiceItems?: Array<InvoiceItems>;
};
type Invoices = {
    data?: Array<InvoicesData>;
    start?: number;
    end?: number;
    limit?: number;
    page?: number;
    total?: number;
};
type Phone = {
    phoneNumber?: string;
    phoneCountryCode?: string;
};
type SubscriptionBillingAddress = {
    country?: string;
    state?: string;
    city?: string;
    line1?: string;
    line2?: string;
    postalCode?: string;
};
type SubscriptionCustomer = {
    phone?: Phone;
    billingAddress?: SubscriptionBillingAddress;
    id?: string;
    uniqueId?: string;
    type?: string;
    name?: string;
    email?: string;
    createdAt?: string;
    modifiedAt?: string;
    data?: any;
};
type SubscriptionCustomerCreate = {
    phone?: Phone;
    billingAddress?: SubscriptionBillingAddress;
    uniqueId?: string;
    type?: string;
    name?: string;
    email?: string;
};
type SubscriptionCurrentPeriod = {
    start?: string;
    end?: string;
};
type SubscriptionPauseCollection = {
    behavior?: string;
    resumeAt?: string;
};
type SubscriptionTrial = {
    start?: string;
    end?: string;
};
type SubscriptionInvoiceSettings = {
    generation?: boolean;
    charging?: boolean;
};
type Subscription = {
    currentPeriod?: SubscriptionCurrentPeriod;
    pauseCollection?: SubscriptionPauseCollection;
    trial?: SubscriptionTrial;
    invoiceSettings?: SubscriptionInvoiceSettings;
    isActive?: boolean;
    cancelAtPeriodEnd?: boolean;
    id?: string;
    subscriberId?: string;
    planId?: string;
    productSuiteId?: string;
    planData?: Plan;
    currentStatus?: string;
    collectionMethod?: string;
    createdAt?: string;
    modifiedAt?: string;
    latestInvoice?: string;
};
type SubscriptionStatus = {
    isEnabled?: boolean;
    subscription?: Subscription;
};
type SubscriptionLimitApplication = {
    enabled?: boolean;
    hardLimit?: number;
    softLimit?: number;
};
type SubscriptionLimitMarketplace = {
    enabled?: boolean;
};
type SubscriptionLimitOtherPlatform = {
    enabled?: boolean;
};
type SubscriptionLimitTeam = {
    limit?: number;
};
type SubscriptionLimitProducts = {
    bulk?: boolean;
    limit?: number;
};
type SubscriptionLimitExtensions = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimitIntegrations = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimit = {
    application?: SubscriptionLimitApplication;
    marketplace?: SubscriptionLimitMarketplace;
    otherPlatform?: SubscriptionLimitOtherPlatform;
    team?: SubscriptionLimitTeam;
    products?: SubscriptionLimitProducts;
    extensions?: SubscriptionLimitExtensions;
    integrations?: SubscriptionLimitIntegrations;
    isTrialPlan?: boolean;
};
type SubscriptionActivateReq = {
    uniqueId?: string;
    type?: string;
    productSuite?: string;
    planId?: string;
    paymentMethod?: string;
};
type SubscriptionActivateRes = {
    success?: boolean;
    data?: Subscription;
};
type CancelSubscriptionReq = {
    uniqueId?: string;
    type?: string;
    productSuite?: string;
    subscriptionId?: string;
};
type CancelSubscriptionRes = {
    success?: boolean;
    data?: Subscription;
};
type StatsImported = {
    count?: number;
};
type StatsProcessedEmail = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessedSms = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessed = {
    email?: StatsProcessedEmail;
    sms?: StatsProcessedSms;
};
type Stats = {
    id?: string;
    imported?: any;
    processed?: any;
};
type GetStats = {
    items?: Array<Stats>;
};
type CampaignReq = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    isActive?: boolean;
    name?: string;
    fileUrl?: string;
    type?: string;
    recordsCount?: number;
    application?: string;
};
type RecipientHeaders = {
    email?: string;
};
type CampaignEmailTemplate = {
    key?: string;
    value?: string;
};
type CampignEmailProvider = {
    id?: string;
    fromName?: string;
    fromEmail?: string;
};
type CampaignEmail = {
    template?: CampaignEmailTemplate;
    provider?: CampignEmailProvider;
};
type Campaign = {
    recipientHeaders?: RecipientHeaders;
    email?: CampaignEmail;
    description?: string;
    tags?: Array<any>;
    isActive?: boolean;
    id?: string;
    datasource?: string;
    type?: string;
    name?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type Campaigns = {
    items?: Array<Campaign>;
    page?: Page;
};
type BigqueryHeadersReq = {
    query?: string;
    type?: string;
};
type BigqueryHeadersResHeaders = {
    name?: string;
    type?: string;
};
type BigqueryHeadersRes = {
    headers?: Array<BigqueryHeadersResHeaders>;
};
type GetNRecordsCsvReq = {
    url?: string;
    header?: boolean;
    count?: number;
};
type GetNRecordsCsvResItems = {
    phoneNumber?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    orderid?: string;
};
type GetNRecordsCsvRes = {
    items?: Array<GetNRecordsCsvResItems>;
};
type AudienceReq = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    isActive?: boolean;
    name?: string;
    fileUrl?: string;
    type?: string;
    recordsCount?: number;
    application?: string;
};
type Audience = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    isActive?: boolean;
    id?: string;
    name?: string;
    fileUrl?: string;
    type?: string;
    recordsCount?: number;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type Audiences = {
    items?: Array<Audience>;
    page?: Page;
};
type EmailProviderReqFrom = {
    name?: string;
    email?: string;
    isDefault?: boolean;
};
type EmailProviderReq = {
    name?: string;
    description?: string;
    apiKey?: string;
    type?: string;
    provider?: string;
    from?: Array<EmailProviderReqFrom>;
};
type EmailProvider = {
    type?: string;
    provider?: string;
    from?: Array<EmailProviderReqFrom>;
    id?: string;
    name?: string;
    description?: string;
    apiKey?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type EmailProviders = {
    items?: Array<EmailProvider>;
    page?: Page;
};
type EmailTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateKeys = {
    to?: string;
    cc?: string;
    bcc?: string;
};
type EmailTemplateHeaders = {
    key?: string;
    value?: string;
};
type EmailTemplateReq = {
    name?: string;
    description?: string;
    keys?: EmailTemplateKeys;
    from?: string;
    staticTo?: Array<string>;
    staticCc?: Array<string>;
    staticBcc?: Array<string>;
    replyTo?: string;
    headers?: Array<EmailTemplateHeaders>;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: Array<any>;
    priority?: string;
};
type TemplateAndType = {
    templateType?: string;
    template?: string;
};
type EmailTemplateRes = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    staticTo?: Array<string>;
    staticCc?: Array<string>;
    staticBcc?: Array<string>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    name?: string;
    keys?: EmailTemplateKeys;
    from?: string;
    replyTo?: string;
    headers?: Array<EmailTemplateHeaders>;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: Array<any>;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type EmailTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    staticTo?: Array<any>;
    staticCc?: Array<any>;
    staticBcc?: Array<any>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    from?: string;
    fromName?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: Array<any>;
    attachments?: Array<any>;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type SystemEmailTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    staticTo?: Array<any>;
    staticCc?: Array<any>;
    staticBcc?: Array<any>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    from?: string;
    fromName?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: Array<any>;
    attachments?: Array<any>;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type EmailTemplates = {
    items?: Array<EmailTemplate>;
    page?: Page;
};
type SystemEmailTemplates = {
    items?: Array<SystemEmailTemplate>;
    page?: Page;
};
type EventSubscriptionTemplateSms = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplateEmail = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplate = {
    sms?: EventSubscriptionTemplateSms;
    email?: EventSubscriptionTemplateEmail;
};
type EventSubscription = {
    template?: EventSubscriptionTemplate;
    isDefault?: boolean;
    id?: string;
    application?: string;
    event?: string;
    slug?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type EventSubscriptions = {
    items?: Array<EventSubscription>;
    page?: Page;
};
type TriggerJobResponse = {
    status?: number;
};
type TriggerJobRequest = {
    jobId?: string;
};
type Job = {
    completed?: boolean;
    isActive?: boolean;
    id?: string;
    campaign?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type Jobs = {
    items?: Array<any>;
    page?: Page;
};
type JobLog = {
    imported?: any;
    processed?: any;
    id?: string;
    job?: string;
    campaign?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type JobLogs = {
    items?: Array<JobLog>;
    page?: Page;
};
type LogEmail = {
    template?: string;
};
type LogPushnotification = {
    pushtokens?: Array<string>;
};
type LogMeta = {
    type?: string;
    identifier?: string;
    key?: string;
    offset?: string;
    partition?: string;
    topic?: string;
};
type Log = {
    email?: LogEmail;
    pushnotification?: LogPushnotification;
    meta?: LogMeta;
    id?: string;
    application?: string;
    service?: string;
    step?: string;
    status?: string;
    data?: any;
    expireAt?: string;
    createdAt?: string;
};
type Logs = {
    items?: Array<Log>;
    page?: Page;
};
type PushtokenReq = {
    action?: string;
    bundleIdentifier?: string;
    pushToken?: string;
    uniqueDeviceId?: string;
};
type PushtokenRes = {
    id?: string;
    bundleIdentifier?: string;
    pushToken?: string;
    uniqueDeviceId?: string;
    type?: string;
    platform?: string;
    applicationId?: string;
    userId?: string;
    createdAt?: string;
    updatedAt?: string;
    expiredAt?: string;
};
type SmsProviderReq = {
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    type?: string;
    provider?: string;
};
type SmsProvider = {
    rpt?: number;
    type?: string;
    provider?: string;
    id?: string;
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type SmsProviders = {
    items?: Array<SmsProvider>;
    page?: Page;
};
type SmsTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateMessage = {
    templateType?: string;
    template?: string;
};
type SmsTemplateReq = {
    name?: string;
    description?: string;
    message?: SmsTemplateMessage;
    templateVariables?: any;
    attachments?: Array<any>;
    priority?: string;
};
type SmsTemplateRes = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    name?: string;
    message?: SmsTemplateMessage;
    templateVariables?: any;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type SmsTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    priority?: string;
    tags?: Array<any>;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    templateVariables?: any;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type SystemSmsTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    templateVariables?: any;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type SmsTemplates = {
    items?: Array<SmsTemplate>;
    page?: Page;
};
type SystemSmsTemplates = {
    items?: Array<SystemSmsTemplate>;
    page?: Page;
};
type Notification = {
    title?: string;
    body?: string;
    subtitle?: string;
    icon?: string;
    deeplink?: string;
    clickAction?: string;
};
type SystemNotificationUser = {
    type?: string;
    value?: string;
};
type SystemNotificationSettings = {
    sound?: boolean;
    priority?: string;
    timeToLive?: string;
};
type SystemNotification = {
    notification?: Notification;
    user?: SystemNotificationUser;
    settings?: SystemNotificationUser;
    id?: string;
    group?: string;
    createdAt?: string;
};
type SystemNotificationsPage = {
    type?: string;
    current?: number;
    size?: number;
    itemTotal?: number;
    hasNext?: boolean;
};
type SystemNotifications = {
    items?: Array<SystemNotification>;
    lastReadAnchor?: number;
    page?: Page;
};
type PaymentGatewayConfigResponse = {
    created: boolean;
    success: boolean;
    excludedFields: Array<string>;
    aggregators?: Array<any>;
    displayFields: Array<string>;
    appId: string;
};
type ErrorCodeDescription = {
    success: boolean;
    code: string;
    description: string;
};
type PaymentGatewayConfig = {
    merchantSalt: string;
    isActive?: boolean;
    configType: string;
    key: string;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    aggregatorName?: PaymentGatewayConfig;
    isActive?: boolean;
    appId: string;
};
type PaymentGatewayToBeReviewed = {
    success: boolean;
    aggregator: Array<string>;
};
type ErrorCodeAndDescription = {
    description: string;
    code: string;
};
type HttpErrorCodeAndResponse = {
    success: boolean;
    error: ErrorCodeAndDescription;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type PaymentModeList = {
    aggregatorName: string;
    code?: string;
    retryCount?: number;
    displayPriority?: number;
    expMonth?: number;
    intentFlow?: string;
    expired?: boolean;
    displayName?: string;
    cardType?: string;
    nickname?: string;
    cardIsin?: string;
    merchantCode?: string;
    logoUrl?: PaymentModeLogo;
    cardBrand?: string;
    timeout?: number;
    cardReference?: string;
    name?: string;
    cardFingerprint?: string;
    cardId?: string;
    cardIssuer?: string;
    cardName?: string;
    expYear?: number;
    fyndVpa?: string;
    cardNumber?: string;
    cardToken?: string;
    intentAppErrorList?: Array<string>;
    cardBrandImage?: string;
};
type RootPaymentMode = {
    aggregatorName?: string;
    anonymousEnable?: boolean;
    displayPriority: number;
    addCardEnabled?: boolean;
    list?: Array<PaymentModeList>;
    displayName: string;
    name: string;
};
type PaymentOptions = {
    paymentOption: Array<RootPaymentMode>;
};
type PaymentOptionsResponse = {
    success: boolean;
    paymentOptions: PaymentOptions;
};
type PayoutsResponse = {
    isActive: boolean;
    isDefault: boolean;
    transferType: string;
    moreAttributes: any;
    uniqueTransferNo: any;
    customers: any;
    payoutsAggregators: Array<any>;
};
type PayoutRequest = {
    isActive: boolean;
    transferType: string;
    aggregator: string;
    users: any;
    uniqueExternalId: string;
    bankDetails: any;
};
type PayoutResponse = {
    isActive: boolean;
    transferType: string;
    created: boolean;
    aggregator: string;
    success: boolean;
    users: any;
    payouts: any;
    paymentStatus: string;
    uniqueTransferNo: string;
    bankDetails: any;
};
type UpdatePayoutResponse = {
    isActive: boolean;
    success: boolean;
    isDefault: boolean;
};
type UpdatePayoutRequest = {
    isActive: boolean;
    isDefault: boolean;
    uniqueExternalId: string;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    success: boolean;
    data: Array<any>;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    config: any;
    success: boolean;
    aggregator: string;
};
type SaveSubscriptionSetupIntentRequest = {
    uniqueExternalId: string;
};
type SaveSubscriptionSetupIntentResponse = {
    success: boolean;
    data: any;
};
type GetActivityStatus = {
    activityHistory: ActivityHistory;
};
type ActivityHistory = {
    createdat?: string;
    message?: string;
    type?: string;
    user?: string;
};
type FailedOrders = {
    orders: FailOrder;
};
type FailOrder = {
    updatedAt?: string;
    id?: string;
    reason?: string;
    marketplaceOrder?: MarketplaceOrder;
    marketplaceOrderId?: string;
    createdAt?: string;
    appId?: string;
    marketplace?: string;
    companyId?: number;
};
type MarketplaceOrder = {
    orderStatusUrl?: string;
    adminGraphqlApiId?: string;
    email?: string;
    test?: boolean;
    note?: string;
    totalPrice?: string;
    appId?: number;
    totalDiscountsSet?: TotalDiscountsSet;
    totalPriceSet?: TotalPriceSet;
    totalTaxSet?: TotalTaxSet;
    gateway?: string;
    name?: string;
    subtotalPriceSet?: SubtotalPriceSet;
    number?: number;
    buyerAcceptsMarketing?: boolean;
    contactEmail?: string;
    token?: string;
    sourceName?: string;
    paymentGatewayNames?: Array<any>;
    presentmentCurrency?: string;
    subtotalPrice?: string;
    processedAt?: string;
    orderNumber?: number;
    totalTipReceived?: string;
    id?: number;
    confirmed?: boolean;
    currency?: string;
    totalLineItemsPrice?: string;
    lineItems?: LineItems;
    createdAt?: string;
    updatedAt?: string;
    totalWeight?: number;
    billingAddress?: BillingAddress;
    totalShippingPriceSet?: TotalShippingPriceSet;
    customer?: Customer;
    totalDiscounts?: string;
    totalLineItemsPriceSet?: TotalLineItemsPriceSet;
    tags?: string;
    totalPriceUsd?: string;
    userId?: number;
    totalTax?: string;
    processingMethod?: string;
    shippingAddress?: ShippingAddress;
    taxesIncluded?: boolean;
    financialStatus?: string;
};
type TotalDiscountsSet = {
    presentmentMoney?: PresentmentMoney;
    shopMoney?: ShopMoney;
};
type PresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type ShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalPriceSet = {
    shopMoney?: TotalPriceSetShopMoney;
    presentmentMoney?: TotalPriceSetPresentmentMoney;
};
type TotalPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalPriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalTaxSet = {
    shopMoney?: TotalTaxSetShopMoney;
    presentmentMoney?: TotalTaxSetPresentmentMoney;
};
type TotalTaxSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalTaxSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type SubtotalPriceSet = {
    shopMoney?: SubtotalPriceSetShopMoney;
    presentmentMoney?: SubtotalPriceSetPresentmentMoney;
};
type SubtotalPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type SubtotalPriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type LineItems = {
    sku?: string;
    fulfillableQuantity?: number;
    grams?: number;
    totalDiscount?: string;
    article?: LineItemsArticle;
    title?: string;
    variantInventoryManagement?: string;
    id?: number;
    variantId?: number;
    variantTitle?: string;
    productExists?: boolean;
    price?: string;
    adminGraphqlApiId?: string;
    quantity?: number;
    vendor?: string;
    fulfillmentService?: string;
    taxable?: boolean;
    name?: string;
    productId?: number;
    priceSet?: PriceSet;
    taxLines?: TaxLines;
    requiresShipping?: boolean;
    giftCard?: boolean;
    totalDiscountSet?: TotalDiscountSet;
};
type LineItemsArticle = {
    quantities?: Quantities;
    oldArticleUid?: string;
    totalQuantity?: number;
    manufacturer?: Manufacturer;
    price?: ArticlePrice;
    trackInventory?: boolean;
    company?: Company;
    isActive?: boolean;
    dateMeta?: FailOrderDateMeta;
    fragile?: boolean;
    marketplaceIdentifiers?: MarketplaceIdentifiers;
    size?: string;
    isSet?: boolean;
    dimension?: Dimension;
    weight?: Weight;
    store?: Store;
    meta?: ArticleMeta;
    uid?: string;
    brand?: ArticleBrand;
    itemId?: number;
    fyndArticleCode?: string;
    id?: string;
    identifier?: LineItemsArticleIdentifier;
    sellerIdentifier?: string;
    fyndItemCode?: string;
    countryOfOrigin?: string;
};
type Quantities = {
    notAvailable?: NotAvailable;
    sellable?: Sellable;
    orderCommitted?: OrderCommitted;
    damaged?: Damaged;
};
type NotAvailable = {
    count?: number;
    updatedAt?: string;
};
type Sellable = {
    count?: number;
    updatedAt?: string;
};
type OrderCommitted = {
    count?: number;
    updatedAt?: string;
};
type Damaged = {
    updatedAt?: string;
    count?: number;
};
type Manufacturer = {
    isDefault?: boolean;
    address?: string;
    name?: string;
};
type ArticlePrice = {
    marked?: number;
    currency?: string;
    effective?: number;
    transfer?: number;
};
type Company = {
    id?: number;
    companyType?: string;
    businessType?: string;
    companyName?: string;
    createdOn?: string;
    panNo?: string;
    returnAllowed?: boolean;
    meta?: string;
    exchangeAllowed?: boolean;
    agreementStartDate?: string;
    exchangeWithinDays?: number;
    paymentProcesingCharge?: number;
    fyndAFitAvailable?: boolean;
    modifiedOn?: string;
    returnWithinDays?: number;
};
type FailOrderDateMeta = {
    addedOnStore?: string;
    inventoryUpdatedOn?: string;
    createdOn?: string;
    modifiedOn?: string;
};
type MarketplaceIdentifiers = {
    tatacliqLuxury?: TatacliqLuxury;
};
type TatacliqLuxury = {
    sku?: string;
};
type Dimension = {
    height?: number;
    width?: number;
    unit?: string;
    length?: number;
    isDefault?: boolean;
};
type Weight = {
    isDefault?: boolean;
    unit?: string;
    shipping?: number;
};
type Store = {
    id?: number;
};
type ArticleMeta = {
    service?: string;
};
type ArticleBrand = {
    name?: string;
    id?: number;
};
type LineItemsArticleIdentifier = {
    skuCode?: string;
};
type PriceSet = {
    shopMoney?: PriceSetShopMoney;
    presentmentMoney?: PriceSetPresentmentMoney;
};
type PriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type PriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type TaxLines = {
    title?: string;
    price?: string;
    rate?: number;
    priceSet?: TaxLinesPriceSet;
};
type TaxLinesPriceSet = {
    shopMoney?: TaxLinesPriceSetShopMoney;
    presentmentMoney?: TaxLinesPriceSetPresentmentMoney;
};
type TaxLinesPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TaxLinesPriceSetPresentmentMoney = {
    currencyCode?: string;
    amount?: string;
};
type TotalDiscountSet = {
    presentmentMoney?: TotalDiscountSetPresentmentMoney;
    shopMoney?: TotalDiscountSetShopMoney;
};
type TotalDiscountSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalDiscountSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type BillingAddress = {
    address1?: string;
    city?: string;
    zip?: string;
    lastName?: string;
    address2?: string;
    longitude?: number;
    provinceCode?: string;
    phone?: string;
    company?: string;
    latitude?: number;
    name?: string;
    country?: string;
    countryCode?: string;
    firstName?: string;
    province?: string;
};
type TotalShippingPriceSet = {
    shopMoney?: TotalShippingPriceSetShopMoney;
    presentmentMoney?: TotalShippingPriceSetPresentmentMoney;
};
type TotalShippingPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalShippingPriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type Customer = {
    createdAt?: string;
    id?: number;
    lastName?: string;
    state?: string;
    lastOrderId?: number;
    note?: string;
    verifiedEmail?: boolean;
    phone?: string;
    acceptsMarketing?: boolean;
    firstName?: string;
    tags?: string;
    lastOrderName?: string;
    ordersCount?: number;
    totalSpent?: string;
    taxExempt?: boolean;
    currency?: string;
    acceptsMarketingUpdatedAt?: string;
    email?: string;
    updatedAt?: string;
    adminGraphqlApiId?: string;
    defaultAddress?: DefaultAddress;
};
type DefaultAddress = {
    lastName?: string;
    name?: string;
    provinceCode?: string;
    countryCode?: string;
    isDefault?: boolean;
    id?: number;
    customerId?: number;
    firstName?: string;
    address1?: string;
    phone?: string;
    countryName?: string;
    company?: string;
    address2?: string;
    city?: string;
    province?: string;
    country?: string;
    zip?: string;
};
type TotalLineItemsPriceSet = {
    shopMoney?: TotalLineItemsPriceSetShopMoney;
    presentmentMoney?: TotalLineItemsPriceSetPresentmentMoney;
};
type TotalLineItemsPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalLineItemsPriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type ShippingAddress = {
    address1?: string;
    zip?: string;
    address2?: string;
    countryCode?: string;
    country?: string;
    lastName?: string;
    latitude?: number;
    provinceCode?: string;
    firstName?: string;
    phone?: string;
    province?: string;
    longitude?: number;
    city?: string;
    company?: string;
    name?: string;
};
type OrderListing = {
    items: Array<OrderItems>;
    filters: Filters;
    nextOrderStatus: NextOrderStatus;
    page: PlatformOrderPage;
    appliedFilters: AppliedFilters;
};
type OrderItems = {
    user?: PlatformOrderUserInfo;
    deliveryAddress?: PlatformDeliveryAddress;
    channel?: Channel;
    breakupValues?: PlatformBreakupValues;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipment;
    createdAt?: string;
    totalShipmentsInOrder?: number;
    payments?: ItemsPayments;
};
type PlatformOrderUserInfo = {
    mobile?: string;
    firstName?: string;
    gender?: string;
    email?: string;
    lastName?: string;
    isAnonymousUser?: boolean;
    uid?: number;
    avisUserId?: string;
};
type PlatformDeliveryAddress = {
    area?: string;
    state?: string;
    country?: string;
    version?: string;
    address1?: string;
    latitude?: number;
    updatedAt?: string;
    city?: string;
    landmark?: string;
    createdAt?: string;
    name?: string;
    address?: string;
    phone?: string;
    longitude?: number;
    addressType?: string;
    email?: string;
    pincode?: string;
    address2?: string;
    contactPerson?: string;
    addressCategory?: string;
};
type Channel = {
    name?: string;
    logo?: string;
};
type PlatformBreakupValues = {
    display?: string;
    value?: number;
    name?: string;
};
type PlatformApplication = {
    name?: string;
    owner?: string;
    postOrderReassignment?: boolean;
    id?: string;
    description?: string;
    dpAssignment?: boolean;
    articleAssignment?: ArticleAssignment;
    forceReassignment?: boolean;
    token?: string;
    secret?: string;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type PlatformShipment = {
    status?: PlatformShipmentStatus;
    bags?: Bags;
    prices?: ShipmentPrices;
    breakupValues?: ShipmentBreakupValues;
    id?: string;
    dpDetails?: DpDetails;
    invoice?: ShipmentInvoice;
    fulfillingStore?: PlatformFulfillingStore;
    payments?: Payments;
    gst?: ShipmentGst;
    company?: Company;
    brand?: PlatformShipmentBrand;
    coupon?: any;
    orderSource?: string;
    isNotFyndSource?: boolean;
    comment?: string;
    promise?: Promise;
    trackingDetails?: ShipmentTrackingDetails;
    isFyndCoupon?: boolean;
    orderType?: string;
    user?: ShipmentUser;
};
type PlatformShipmentStatus = {
    id?: number;
    bagList?: Array<number>;
    createdAt?: string;
    status?: string;
    name?: string;
    progress?: number;
    shipmentId?: string;
    currentShipmentStatus?: string;
    colorCode?: string;
};
type Bags = {
    financialBreakup?: Array<BagFinancialBreakup>;
    status?: BagCurrStatus;
    item?: BagItem;
    article?: BagArticle;
    id?: number;
    prices?: BagPrices;
    gstDetails?: GstDetails;
    breakupValues?: BagBreakupValues;
    updateTime?: number;
    currentStatus?: BagCurrentStatus;
    bagStatus?: BagStatus;
};
type BagFinancialBreakup = {
    valueOfGood?: number;
    hsnCode?: string;
    priceEffective?: number;
    codCharges?: number;
    gstFee?: string;
    fyndCredits?: number;
    refundAmount?: number;
    cashbackApplied?: number;
    transferPrice?: number;
    amountPaidRoundoff?: number;
    couponValue?: number;
    amountPaid?: number;
    gstTaxPercentage?: number;
    size?: string;
    totalUnits?: number;
    discount?: number;
    couponEffectiveDiscount?: number;
    cashback?: number;
    promotionEffectiveDiscount?: number;
    gstTag?: string;
    deliveryCharge?: number;
    refundCredit?: number;
    priceMarked?: number;
    identifiers?: Identifiers;
    itemName?: string;
    addedToFyndCash?: boolean;
    brandCalculatedAmount?: number;
};
type Identifiers = {
    ean?: string;
};
type BagCurrStatus = {
    enableTracking?: boolean;
    isCustomerReturnAllowed?: boolean;
    isActive?: boolean;
    isReturnable?: boolean;
    canBeCancelled?: boolean;
};
type BagItem = {
    id?: number;
    size?: string;
    slugKey?: string;
    canReturn?: boolean;
    brandId?: number;
    l2Category?: Array<string>;
    name?: string;
    code?: string;
    canCancel?: boolean;
    attributes?: BagItemAttributes;
    l3CategoryName?: string;
    l3Category?: number;
    l1Category?: Array<string>;
    image?: Array<string>;
    brand?: string;
    lastUpdatedAt?: string;
};
type BagItemAttributes = {
    itemCode?: string;
    brandName?: string;
    countryOfOrigin?: string;
};
type BagArticle = {
    identifiers?: ArticleIdentifiers;
    espModified?: boolean;
    isSet?: boolean;
    size?: string;
    code?: string;
    set?: Set;
    sellerIdentifier?: string;
    returnConfig?: BagArticleReturnConfig;
    id?: string;
    uid?: string;
    childDetails?: any;
};
type ArticleIdentifiers = {
    ean?: string;
};
type Set = {
    quantity?: number;
    sizeDistribution?: SetSizeDistribution;
};
type SetSizeDistribution = {
    sizes?: Sizes;
};
type Sizes = {
    size?: string;
    pieces?: number;
};
type BagArticleReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type ShipmentPrices = {
    refundAmount?: number;
    cashbackApplied?: number;
    transferPrice?: number;
    couponValue?: number;
    amountPaid?: number;
    deliveryCharge?: number;
    couponEffectiveDiscount?: number;
    codCharges?: number;
    refundCredit?: number;
    addedToFyndCash?: boolean;
    gstTaxPercentage?: number;
    priceMarked?: number;
    priceEffective?: number;
    discount?: number;
    promotionEffectiveDiscount?: number;
    amountPaidRoundoff?: number;
    fyndCredits?: number;
    brandCalculatedAmount?: number;
    cashback?: number;
    valueOfGood?: number;
};
type GstDetails = {
    brandCalculatedAmount?: number;
    gstFee?: string;
    gstTag?: string;
    hsnCode?: string;
    valueOfGood?: number;
    gstTaxPercentage?: number;
    isDefaultHsnCode?: boolean;
};
type BagBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type BagCurrentStatus = {
    updatedAt?: string;
    bagStateMapper?: BagStateMapper;
    status?: string;
    stateType?: string;
};
type BagStateMapper = {
    appStateName?: string;
    isActive?: boolean;
    displayName?: string;
    name?: string;
    appDisplayName?: string;
};
type BagStatus = {
    status?: string;
    stateType?: string;
    updatedAt?: string;
    bagStateMapper?: BagStatusBagStateMapper;
};
type BagStatusBagStateMapper = {
    isActive?: boolean;
    displayName?: string;
    name?: string;
    appDisplayName?: string;
    appStateName?: string;
};
type BagPrices = {
    cashback?: number;
    refundCredit?: number;
    couponValue?: number;
    deliveryCharge?: number;
    fyndCredits?: number;
    priceMarked?: number;
    cashbackApplied?: number;
    valueOfGood?: number;
    amountPaidRoundoff?: number;
    amountPaid?: number;
    codCharges?: number;
    priceEffective?: number;
    refundAmount?: number;
    discount?: number;
};
type ShipmentBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type DpDetails = {
    gstTag?: string;
};
type ShipmentInvoice = {
    paymentType?: string;
    updatedDate?: string;
    invoiceUrl?: string;
    labelUrl?: string;
    paymentMode?: string;
    amountToCollect?: number;
    rtoAddress?: RtoAddress;
};
type RtoAddress = {
    name?: string;
    id?: number;
    phone?: string;
    locationType?: string;
    storeAddressJson?: StoreAddressJson;
    code?: string;
    address1?: string;
    city?: string;
    country?: string;
    pincode?: string;
    companyId?: number;
    contactPerson?: string;
    state?: string;
    storeEmail?: string;
    address2?: string;
};
type StoreAddressJson = {
    country?: string;
    latitude?: number;
    updatedAt?: string;
    area?: string;
    state?: string;
    addressType?: string;
    city?: string;
    pincode?: string;
    address1?: string;
    address2?: string;
    longitude?: number;
    email?: string;
    phone?: string;
    createdAt?: string;
    contactPerson?: string;
    addressCategory?: string;
    version?: string;
    landmark?: string;
};
type PlatformFulfillingStore = {
    packagingMaterialCount?: number;
    locationType?: string;
    code?: string;
    city?: string;
    meta?: FulfillingStoreMeta;
    name?: string;
    isActive?: boolean;
    address1?: string;
    storeEmail?: string;
    isArchived?: boolean;
    state?: string;
    address2?: string;
    contactPerson?: string;
    phone?: string;
    isEnabledForRecon?: boolean;
    fulfillmentChannel?: string;
    createdAt?: string;
    id?: number;
    pincode?: string;
    brandStoreTags?: Array<string>;
    companyId?: number;
    storeAddressJson?: FulfillingStoreStoreAddressJson;
    updatedAt?: string;
    loginUsername?: string;
    country?: string;
};
type FulfillingStoreMeta = {
    additionalContactDetails?: AdditionalContactDetails;
    documents?: Documents;
    gstNumber?: string;
    displayName?: string;
    productReturnConfig?: ProductReturnConfig;
    allowDpAssignmentFromFynd?: boolean;
    stage?: string;
    timing?: Timing;
};
type AdditionalContactDetails = {
    number?: Array<string>;
};
type Documents = {
    gst?: Gst;
};
type Gst = {
    legalName?: string;
    type?: string;
    value?: string;
    verified?: boolean;
};
type ProductReturnConfig = {
    onSameStore?: boolean;
};
type Timing = {
    opening?: Opening;
    weekday?: string;
    open?: boolean;
    closing?: Closing;
};
type Opening = {
    minute?: number;
    hour?: number;
};
type Closing = {
    hour?: number;
    minute?: number;
};
type FulfillingStoreStoreAddressJson = {
    address2?: string;
    area?: string;
    email?: string;
    phone?: string;
    state?: string;
    contactPerson?: string;
    country?: string;
    pincode?: string;
    version?: string;
    createdAt?: string;
    addressType?: string;
    city?: string;
    address1?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    updatedAt?: string;
    addressCategory?: string;
};
type Payments = {
    isActive?: boolean;
    displayName?: string;
    logo?: string;
    source?: string;
    sourceNickname?: string;
    displayPriority?: number;
    id?: number;
    mode?: string;
    paymentIdentifier?: string;
};
type ShipmentGst = {
    brandCalculatedAmount?: number;
    valueOfGood?: number;
    gstFee?: number;
};
type PlatformShipmentBrand = {
    creditNoteAllowed?: boolean;
    brandName?: string;
    modifiedOn?: string;
    id?: number;
    isVirtualInvoice?: boolean;
    createdOn?: string;
    logo?: string;
};
type Promise = {
    timestamp?: Timestamp;
};
type Timestamp = {
    min?: string;
    max?: string;
};
type ShipmentTrackingDetails = {
    status?: string;
    time?: string;
    isPassed?: boolean;
    isCurrent?: boolean;
};
type ShipmentUser = {
    email?: string;
    id?: number;
    firstName?: string;
    mobile?: string;
    gender?: string;
    lastName?: string;
    isAnonymousUser?: boolean;
    mongoUserId?: string;
};
type ItemsPayments = {
    displayPriority?: number;
    id?: number;
    isActive?: boolean;
    displayName?: string;
    logo?: string;
    paymentIdentifier?: string;
    sourceNickname?: string;
    mode?: string;
    source?: string;
};
type Filters = {
    stages?: Stages;
};
type Stages = {
    text?: string;
    value?: string;
    isDefault?: boolean;
    filters?: StagesFilters;
};
type StagesFilters = {
    text?: string;
    value?: string;
    type?: string;
    options?: Options;
};
type Options = {
    text?: string;
    value?: string;
};
type NextOrderStatus = {
    bagConfirmed?: BagConfirmed;
    dpAssigned?: DpAssigned;
    returnBagDelivered?: ReturnBagDelivered;
    placed?: Placed;
    deliveryDone?: DeliveryDone;
    pending?: Pending;
    bagPacked?: BagPacked;
};
type BagConfirmed = {
    text?: string;
    value?: string;
};
type DpAssigned = {
    text?: string;
    value?: string;
};
type ReturnBagDelivered = {
    text?: string;
    value?: string;
};
type Placed = {
    text?: string;
    value?: string;
};
type DeliveryDone = {
    text?: string;
    value?: string;
};
type Pending = {
    text?: string;
    value?: string;
};
type BagPacked = {
    text?: string;
    value?: string;
};
type PlatformOrderPage = {
    next?: string;
    previous?: string;
    type?: string;
    size?: number;
    current?: number;
    hasNext?: boolean;
    itemTotal?: ItemTotal;
};
type ItemTotal = {
    new?: number;
    processing?: number;
    returns?: number;
    all?: number;
};
type AppliedFilters = {
    stage?: string;
    stores?: Array<string>;
    fromDate?: string;
    toDate?: string;
};
type UpdateOrderReprocessResponse = {
    status: string;
};
type PlatformOrderTrack = {
    success: boolean;
    requestId: string;
    message: string;
    mobile: string;
    countryCode: string;
    resendTimer: number;
    resendToken?: string;
};
type GetPingResponse = {
    ping: string;
};
type UpdateShipmentStatusResponse = {
    shipments: any;
    errorShipments?: Array<any>;
};
type UpdateShipmentStatusBody = {
    shipments: any;
    forceTransition: boolean;
    task: boolean;
};
type PlatformShipmentTrack = {
    results: Results;
};
type Results = {
    awb?: string;
    updatedAt?: string;
    lastLocationRecievedAt?: string;
    reason?: string;
    shipmentType?: string;
    status?: string;
    updatedTime?: string;
    accountName?: string;
};
type UpdateProcessShipmenstRequestBody = {
    shipmentIds: Array<string>;
    expectedStatus: string;
};
type UpdateProcessShipmenstRequestResponse = {
    success: boolean;
    message: string;
};
type GetVoiceCallbackResponse = {
    message: string;
};
type GetClickToCallResponse = {
    message: string;
};
type ApefaceApiError = {
    message?: string;
};
type GetSearchWordsData = {
    words?: Array<string>;
    result?: any;
    uid?: string;
    appId?: string;
    customJson?: any;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type ErrorResponse = {
    message?: string;
    meta?: any;
    code?: string;
    status?: number;
};
type SearchKeywordResult = {
    sortOn: string;
    query: any;
};
type CreateSearchKeyword = {
    isActive?: boolean;
    words?: Array<string>;
    result: SearchKeywordResult;
    appId?: string;
    customJson?: any;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsResponse = {
    items?: Array<GetSearchWordsData>;
    page?: Page;
};
type GetAutocompleteWordsData = {
    words?: Array<string>;
    results?: Array<any>;
    uid?: string;
    appId?: string;
    customJson?: any;
};
type GetAutocompleteWordsResponse = {
    items?: Array<GetAutocompleteWordsData>;
    page?: Page;
};
type AutocompletePageAction = {
    url?: string;
    params?: any;
    query: any;
    type: string;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type Media = {
    type?: string;
    url?: string;
};
type AutocompleteResult = {
    customJson?: any;
    action?: AutocompleteAction;
    display?: string;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    words?: Array<string>;
    isActive?: boolean;
    results?: Array<AutocompleteResult>;
    appId?: string;
    customJson?: any;
};
type CreateAutocompleteWordsResponse = {
    words?: Array<string>;
    results?: Array<any>;
    appId?: string;
    customJson?: any;
};
type ProductBundleItem = {
    productUid: number;
    autoSelect?: boolean;
    maxQuantity: number;
    allowRemove?: boolean;
    autoAddToCart?: boolean;
    minQuantity: number;
};
type ProductBundleRequest = {
    meta?: any;
    sameStoreAssignment?: boolean;
    isActive: boolean;
    name: string;
    pageVisibility?: Array<string>;
    createdBy?: any;
    products: Array<ProductBundleItem>;
    slug: string;
    logo?: string;
    modifiedOn?: string;
    createdOn?: string;
    modifiedBy?: any;
    choice: string;
};
type GetProductBundleCreateResponse = {
    companyId?: number;
    meta?: any;
    sameStoreAssignment?: boolean;
    isActive: boolean;
    name: string;
    pageVisibility?: Array<string>;
    createdBy?: any;
    products: Array<ProductBundleItem>;
    slug: string;
    logo?: string;
    modifiedOn?: string;
    createdOn?: string;
    id?: string;
    modifiedBy?: any;
    choice: string;
};
type GetProductBundleListingResponse = {
    items?: Array<GetProductBundleCreateResponse>;
    page?: Page;
};
type Size = {
    value?: string;
    isAvailable?: boolean;
    display?: string;
    quantity?: number;
};
type Price = {
    minMarked?: number;
    maxMarked?: number;
    maxEffective?: number;
    currency?: string;
    minEffective?: number;
};
type LimitedProductData = {
    identifier?: any;
    name?: string;
    countryOfOrigin?: string;
    sizes?: Array<string>;
    images?: Array<string>;
    slug?: string;
    attributes?: any;
    shortDescription?: string;
    uid?: number;
    itemCode?: string;
    price?: any;
    quantity?: number;
};
type GetProducts = {
    productUid?: number;
    sizes?: Array<Size>;
    autoSelect?: boolean;
    maxQuantity?: number;
    allowRemove?: boolean;
    autoAddToCart?: boolean;
    price?: Price;
    minQuantity?: number;
    productDetails?: LimitedProductData;
};
type GetProductBundleResponse = {
    companyId?: number;
    meta?: any;
    sameStoreAssignment?: boolean;
    isActive?: boolean;
    name?: string;
    pageVisibility?: Array<string>;
    products?: Array<GetProducts>;
    slug?: string;
    logo?: string;
    choice?: string;
};
type ProductBundleUpdateRequest = {
    meta?: any;
    sameStoreAssignment?: boolean;
    isActive: boolean;
    name: string;
    pageVisibility?: Array<string>;
    products: Array<ProductBundleItem>;
    slug: string;
    logo?: string;
    modifiedOn?: string;
    modifiedBy?: any;
    choice: string;
};
type Meta = {
    values?: Array<any>;
    unit?: string;
    headers?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    subtitle?: string;
    companyId?: number;
    tag?: string;
    name: string;
    modifiedBy?: any;
    active?: boolean;
    guide?: Guide;
    modifiedOn?: string;
    createdOn?: string;
    id?: string;
    description?: string;
    title: string;
    createdBy?: any;
    brandId?: number;
    image?: string;
};
type SuccessResponse = {
    uid?: number;
    success?: boolean;
};
type ListSizeGuide = {
    items?: Array<any>;
    page?: any;
};
type SizeGuideResponse = {
    companyId?: number;
    subtitle?: string;
    tag?: string;
    name?: string;
    modifiedBy?: any;
    active?: boolean;
    guide?: any;
    modifiedOn?: string;
    createdOn?: string;
    id?: string;
    title?: string;
    createdBy?: any;
    brandId?: number;
};
type GetCatalogConfigurationDetailsProduct = {
    detail?: any;
    similar?: any;
    compare?: any;
    variant?: any;
};
type MetaDataListingSortMetaResponse = {
    key?: string;
    display?: string;
};
type MetaDataListingSortResponse = {
    data?: Array<MetaDataListingSortMetaResponse>;
};
type MetaDataListingFilterMetaResponse = {
    key?: string;
    filterTypes?: Array<string>;
    display?: string;
    units?: Array<any>;
};
type MetaDataListingFilterResponse = {
    data?: Array<MetaDataListingFilterMetaResponse>;
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ConfigurationListingSortConfig = {
    isActive: boolean;
    name?: string;
    key: string;
    logo?: string;
    priority: number;
};
type ConfigurationListingSort = {
    config?: Array<ConfigurationListingSortConfig>;
    defaultKey: string;
};
type ConfigurationBucketPoints = {
    start?: number;
    end?: number;
};
type ConfigurationListingFilterValue = {
    bucketPoints?: Array<ConfigurationBucketPoints>;
    condition?: string;
    value?: string;
    sort?: string;
    map?: any;
};
type ConfigurationListingFilterConfig = {
    type: string;
    isActive: boolean;
    valueConfig?: ConfigurationListingFilterValue;
    name?: string;
    key: string;
    logo?: string;
    priority: number;
};
type ConfigurationListingFilter = {
    attributeConfig?: Array<ConfigurationListingFilterConfig>;
    allowSingle: boolean;
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    subtitle?: string;
    isActive: boolean;
    key: string;
    logo?: string;
    size?: ProductSize;
    title?: string;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: Array<ConfigurationProductConfig>;
};
type ConfigurationProductVariantConfig = {
    isActive: boolean;
    name: string;
    key: string;
    logo?: string;
    size: ProductSize;
    displayType: string;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: Array<ConfigurationProductVariantConfig>;
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppConfiguration = {
    configId?: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    appId: string;
    configType: string;
};
type AppCatalogConfiguration = {
    configId?: string;
    listing?: ConfigurationListing;
    id?: string;
    product?: ConfigurationProduct;
    appId: string;
    configType: string;
};
type GetAppCatalogConfiguration = {
    isDefault?: boolean;
    data?: AppCatalogConfiguration;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    configId?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    appId: string;
    configType: string;
};
type GetAppCatalogEntityConfiguration = {
    isDefault?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    value?: string;
    isSelected?: boolean;
    name?: string;
};
type ProductFiltersKey = {
    kind?: string;
    display: string;
    name: string;
    logo?: string;
};
type ProductFiltersValue = {
    selectedMin?: number;
    isSelected: boolean;
    max?: number;
    min?: number;
    value: string;
    queryFormat?: string;
    currencyCode?: string;
    currencySymbol?: string;
    displayFormat?: string;
    display: string;
    selectedMax?: number;
    count?: number;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: Array<ProductFiltersValue>;
};
type GetCollectionQueryOptionResponse = {
    sortOn?: Array<ProductSortOn>;
    filters?: Array<ProductFilters>;
};
type Schedule = {
    cron?: string;
    start?: string;
    duration?: number;
    end?: string;
};
type UserInfo = {
    email?: string;
    uid?: string;
    userId?: string;
    username?: string;
};
type CollectionImage = {
    url: string;
    aspectRatio: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CreateCollection = {
    name: string;
    tags?: Array<string>;
    schedule?: Schedule;
    description?: string;
    localeLanguage?: any;
    createdBy?: UserInfo;
    customJson?: any;
    allowSort?: boolean;
    slug: string;
    logo: CollectionImage;
    badge?: CollectionBadge;
    banners: CollectionBanner;
    modifiedBy?: UserInfo;
    appId: string;
    visibleFacetsKeys?: Array<string>;
    type: string;
    seo?: SeoDetail;
    meta?: any;
    isActive?: boolean;
    allowFacets?: boolean;
    sortOn?: string;
    query?: any;
    published?: boolean;
};
type BannerImage = {
    url?: string;
    aspectRatio?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionCreateResponse = {
    type?: string;
    meta?: any;
    isActive?: boolean;
    tag?: Array<string>;
    allowSort?: boolean;
    name?: string;
    allowFacets?: boolean;
    visibleFacetsKeys?: Array<string>;
    slug?: string;
    logo?: BannerImage;
    schedule?: any;
    badge?: any;
    description?: string;
    banners?: ImageUrls;
    query?: any;
    cron?: any;
    appId?: string;
};
type CollectionListingFilterType = {
    display?: string;
    isSelected?: boolean;
    name?: string;
};
type CollectionListingFilterTag = {
    display?: string;
    isSelected?: boolean;
    name?: string;
};
type CollectionListingFilter = {
    type?: Array<CollectionListingFilterType>;
    tags?: Array<CollectionListingFilterTag>;
};
type Media1 = {
    type?: string;
    url: string;
    meta?: any;
};
type ProductListingActionPage = {
    type?: string;
    query?: any;
};
type ProductListingAction = {
    type?: string;
    page?: ProductListingActionPage;
};
type GetCollectionDetailNest = {
    name?: string;
    schedule?: any;
    description?: string;
    uid?: string;
    cron?: any;
    allowSort?: boolean;
    slug?: string;
    logo?: Media1;
    badge?: any;
    banners?: ImageUrls;
    appId?: string;
    visibleFacetsKeys?: Array<string>;
    type?: string;
    meta?: any;
    isActive?: boolean;
    tag?: Array<string>;
    allowFacets?: boolean;
    action?: ProductListingAction;
    query?: any;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: Array<GetCollectionDetailNest>;
    page?: Page;
};
type CollectionDetailResponse = {
    type?: string;
    meta?: any;
    isActive?: boolean;
    tag?: Array<string>;
    allowSort?: boolean;
    name?: string;
    allowFacets?: boolean;
    visibleFacetsKeys?: Array<string>;
    slug?: string;
    logo?: Media1;
    schedule?: any;
    badge?: any;
    description?: string;
    banners?: ImageUrls;
    query?: any;
    cron?: any;
    appId?: string;
};
type CollectionItemRequest = {
    pageNo: number;
    pageSize: number;
};
type UpdatedResponse = {
    message?: string;
};
type Price1 = {
    max?: number;
    currencySymbol?: string;
    currencyCode?: string;
    min?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingDetail = {
    name?: string;
    attributes?: any;
    imageNature?: string;
    description?: string;
    uid?: number;
    tryouts?: Array<string>;
    slug: string;
    medias?: Array<Media1>;
    color?: string;
    discount?: string;
    rating?: number;
    teaserTag?: any;
    highlights?: Array<string>;
    ratingCount?: number;
    type?: string;
    similars?: Array<string>;
    hasVariant?: boolean;
    productOnlineDate?: string;
    sellable?: boolean;
    itemType?: string;
    promoMeta?: any;
    shortDescription?: string;
    price?: ProductListingPrice;
};
type GetCollectionItemsResponse = {
    sortOn?: Array<ProductSortOn>;
    filters?: Array<ProductFilters>;
    items?: Array<ProductListingDetail>;
    page?: Page;
};
type CatalogInsightBrand = {
    articleFreshness?: number;
    name?: string;
    availableArticles?: number;
    totalSizes?: number;
    totalArticles?: number;
    availableSizes?: number;
};
type CatalogInsightItem = {
    sellableCount?: number;
    outOfStockCount?: number;
    count?: number;
};
type CatalogInsightResponse = {
    brandDistribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
};
type CrossSellingData = {
    products?: number;
    articles?: number;
};
type CrossSellingResponse = {
    data?: CrossSellingData;
    brandDistribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    brandIds?: Array<number>;
    storeIds?: Array<number>;
    optLevel: string;
    enabled?: boolean;
};
type CompanyOptIn = {
    companyId: number;
    modifiedBy?: any;
    platform: string;
    enabled: boolean;
    brandIds: Array<number>;
    storeIds: Array<number>;
    modifiedOn: number;
    optLevel: string;
    createdOn: number;
    createdBy?: any;
};
type GetOptInPlatform = {
    items: Array<CompanyOptIn>;
    page: Page;
};
type OptinCompanyDetail = {
    companyType?: string;
    uid?: number;
    businessType?: string;
    name?: string;
};
type CompanyBrandDetail = {
    companyId?: number;
    brandName?: string;
    brandId?: number;
    totalArticle?: number;
};
type OptinCompanyBrandDetailsView = {
    items?: Array<CompanyBrandDetail>;
    page?: Page;
};
type OptinCompanyMetrics = {
    store?: number;
    company?: string;
    brand?: number;
};
type StoreDetail = {
    companyId?: number;
    name?: string;
    storeType?: string;
    displayName?: string;
    modifiedOn?: string;
    createdOn?: string;
    storeCode?: string;
    additionalContacts?: Array<any>;
    uid?: number;
    documents?: Array<any>;
    timing?: any;
};
type OptinStoreDetails = {
    items?: Array<StoreDetail>;
    page?: Page;
};
type AttributeMasterMandatoryDetails = {
    l3Keys?: Array<string>;
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatoryDetails: AttributeMasterMandatoryDetails;
};
type AttributeMasterDetails = {
    displayType: string;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    type: string;
    range?: AttributeSchemaRange;
    enum?: Array<string>;
    mandatory?: boolean;
    format?: string;
    multi?: boolean;
};
type AttributeMasterFilter = {
    indexing: boolean;
    dependsOn?: Array<string>;
    priority?: number;
};
type GenderDetail = {
    meta?: AttributeMasterMeta;
    name?: string;
    slug?: string;
    departments?: Array<string>;
    logo?: string;
    id?: string;
    enabledForEndConsumer?: boolean;
    details?: AttributeMasterDetails;
    description?: string;
    schema?: AttributeMaster;
    filters?: AttributeMasterFilter;
    isNested?: boolean;
};
type ProdcutTemplateCategoriesResponse = {
    items?: Array<any>;
    page?: Page;
};
type PTErrorResponse = {
    meta?: any;
    code?: string;
    errors?: any;
    message?: string;
    status?: number;
};
type UserSerializer = {
    contact?: string;
    userId?: string;
    username?: string;
};
type GetDepartment = {
    isActive?: boolean;
    priorityOrder?: number;
    name?: string;
    createdBy?: UserSerializer;
    modifiedBy?: UserSerializer;
    pageNo?: number;
    pageSize?: number;
    slug?: string;
    itemType?: string;
    logo?: string;
    modifiedOn?: string;
    createdOn?: string;
    uid?: number;
    synonyms?: Array<string>;
    search?: string;
};
type DepartmentsResponse = {
    items?: Array<GetDepartment>;
    page?: Page;
};
type DepartmentErrorResponse = {
    meta?: any;
    code?: string;
    errors?: any;
    message?: string;
    status?: number;
};
type ProductTemplate = {
    isActive?: boolean;
    tag?: string;
    name?: string;
    isPhysical: boolean;
    modifiedBy?: any;
    slug: string;
    attributes?: Array<string>;
    departments?: Array<string>;
    logo?: string;
    createdOn?: string;
    modifiedOn?: string;
    categories?: Array<string>;
    isArchived?: boolean;
    description?: string;
    createdBy?: any;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    name?: any;
    tags?: any;
    categorySlug?: any;
    productPublish?: any;
    description?: any;
    countryOfOrigin?: any;
    productGroupTag?: any;
    traderType?: any;
    slug?: any;
    command?: any;
    trader?: any;
    teaserTag?: any;
    isDependent?: any;
    currency?: any;
    highlights?: any;
    noOfBoxes?: any;
    customOrder?: any;
    media?: any;
    isActive?: any;
    sizes?: any;
    sizeGuide?: any;
    multiSize?: any;
    itemType?: any;
    variants?: any;
    moq?: any;
    shortDescription?: any;
    brandUid?: any;
    itemCode?: any;
    hsnCode?: any;
    returnConfig?: any;
};
type GlobalValidation = {
    type?: string;
    definitions?: any;
    properties?: Properties;
    required?: Array<string>;
    description?: string;
    title?: string;
};
type TemplateValidationData = {
    globalValidation?: GlobalValidation;
    templateValidation?: any;
};
type TemplateDetails = {
    isActive?: boolean;
    tag?: string;
    name?: string;
    isPhysical: boolean;
    slug: string;
    attributes?: Array<string>;
    departments?: Array<string>;
    logo?: string;
    categories?: Array<string>;
    isArchived?: boolean;
    description?: string;
    id?: string;
};
type TemplatesValidationResponse = {
    data?: TemplateValidationData;
    templateDetails?: TemplateDetails;
};
type InventoryValidationResponse = {
    message?: string;
    data?: any;
};
type HSNData = {
    hsnCode?: Array<string>;
    countryOfOrigin?: Array<string>;
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type UserInfo1 = {
    email?: string;
    uid?: string;
    userId?: string;
    username?: string;
};
type ProductTemplateExport = {
    sellerId: number;
    data?: any;
    url?: string;
    templateTags: Array<string>;
    triggerOn: string;
    completedOn?: string;
    taskId: string;
    status?: string;
    createdBy?: UserInfo1;
};
type ProductDownloadsResponse = {
    items?: Array<ProductTemplateExport>;
    page?: Page;
};
type ProductConfigurationDownloads = {
    data?: Array<any>;
    multivalue?: boolean;
};
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type CategoryMappingValues = {
    name: string;
    catalogId?: number;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Media2 = {
    portrait: string;
    landscape: string;
    logo: string;
};
type CategoryRequestBody = {
    isActive: boolean;
    name: string;
    tryouts?: Array<string>;
    hierarchy?: Array<Hierarchy>;
    synonyms?: Array<string>;
    slug?: string;
    departments: Array<number>;
    priority?: number;
    marketplaces?: CategoryMapping;
    media?: Media2;
    level: number;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    isActive: boolean;
    name: string;
    tryouts?: Array<string>;
    hierarchy?: Array<Hierarchy>;
    synonyms?: Array<string>;
    createdBy?: any;
    modifiedBy?: any;
    slug?: string;
    departments: Array<number>;
    modifiedOn?: string;
    createdOn?: string;
    id?: string;
    priority?: number;
    marketplaces?: CategoryMapping;
    uid?: number;
    media?: Media2;
    level: number;
};
type CategoryResponse = {
    items?: Array<Category>;
    page?: Page;
};
type SingleCategoryResponse = {
    items?: Array<Category>;
    page?: any;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type ProductPublish = {
    isSet?: boolean;
    productOnlineDate?: string;
};
type Trader = {
    address: string;
    name: string;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type CustomOrder = {
    isCustomOrder?: boolean;
    manufacturingTime?: number;
    manufacturingTimeUnit?: string;
};
type OrderQuantity = {
    maximum?: number;
    isSet?: boolean;
    minimum?: number;
};
type ReturnConfig = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type ProductCreateUpdate = {
    companyId: number;
    isSet?: boolean;
    name: string;
    tags?: Array<string>;
    categorySlug: string;
    productPublish?: ProductPublish;
    description?: string;
    uid?: number;
    changeRequestId?: string;
    countryOfOrigin: string;
    templateTag: string;
    customJson?: any;
    productGroupTag?: Array<string>;
    traderType?: string;
    slug: string;
    requester?: string;
    trader?: Trader;
    teaserTag?: TeaserTag;
    isDependent?: boolean;
    currency: string;
    highlights?: Array<string>;
    noOfBoxes?: number;
    customOrder?: CustomOrder;
    media?: Array<Media1>;
    isActive?: boolean;
    sizeGuide?: string;
    multiSize?: boolean;
    itemType: string;
    departments: Array<number>;
    variants?: any;
    moq?: OrderQuantity;
    shortDescription?: string;
    brandUid: number;
    itemCode: string;
    isImageLessProduct?: boolean;
    hsnCode: string;
    returnConfig?: ReturnConfig;
};
type UserCommon = {
    companyId?: number;
    userId?: string;
    username?: string;
};
type VerifiedBy = {
    userId?: string;
    username?: string;
};
type Attributes = {
    sleeveLength?: string;
    primaryMaterial?: string;
    imageNature?: string;
    stage?: string;
    createdBy?: UserCommon;
    essential?: string;
    primaryColor?: string;
    gender?: Array<string>;
    pattern?: string;
    modifiedBy?: UserCommon;
    material?: string;
    color?: string;
    modifiedOn?: string;
    metaNature?: string;
    verifiedOn?: string;
    neckType?: string;
    l3Mapping?: Array<string>;
    createdOn?: string;
    productFit?: string;
    isImageLessProduct?: boolean;
    verifiedBy?: VerifiedBy;
};
type ProductPublished = {
    isSet?: boolean;
    productOnlineDate?: number;
};
type Logo = {
    aspectRatioF?: number;
    url?: string;
    secureUrl?: string;
    aspectRatio?: string;
};
type Brand = {
    uid?: number;
    name?: string;
    logo?: Logo;
};
type Product = {
    companyId?: number;
    isSet?: boolean;
    name?: string;
    categorySlug?: string;
    images?: Array<string>;
    attributes?: Attributes;
    productPublish?: ProductPublished;
    description?: string;
    uid?: number;
    countryOfOrigin?: string;
    templateTag?: string;
    brand?: Brand;
    slug?: string;
    id?: string;
    isDependent?: boolean;
    currency?: string;
    highlights?: string;
    media?: Array<string>;
    isActive?: boolean;
    itemCode?: string;
    sizeGuide?: string;
    sizes?: Array<any>;
    itemType?: string;
    multiSize?: boolean;
    departments?: Array<number>;
    allSizes?: Array<string>;
    hsnCode?: string;
};
type PageData = {
    hasNext?: boolean;
    itemTotal?: number;
    hasPrevious?: boolean;
    size?: number;
    current?: string;
};
type ProductListingResponse = {
    items?: Array<Product>;
    page?: PageData;
};
type ValidateProduct = {
    valid?: boolean;
};
type BulkJob = {
    companyId: number;
    isActive?: boolean;
    succeed?: number;
    customTemplateTag?: string;
    createdBy?: UserInfo1;
    failed?: number;
    cancelledRecords?: Array<any>;
    failedRecords?: Array<any>;
    trackingUrl?: string;
    total: number;
    cancelled?: number;
    modifiedOn?: string;
    createdOn: string;
    stage?: string;
    filePath?: string;
    modifiedBy?: UserInfo1;
    templateTag?: string;
};
type UserDetail = {
    userId?: string;
    fullName?: string;
    username?: string;
};
type ProductBulkRequest = {
    companyId?: number;
    isActive?: boolean;
    succeed?: number;
    failed?: number;
    cancelledRecords?: Array<string>;
    failedRecords?: Array<string>;
    modifiedBy?: UserDetail;
    total?: number;
    cancelled?: number;
    modifiedOn?: string;
    createdOn?: string;
    template?: ProductTemplate;
    stage?: string;
    filePath?: string;
    createdBy?: UserDetail;
    templateTag?: string;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: PageData;
};
type BulkProductRequest = {
    companyId: number;
    batchId: string;
    data: Array<any>;
    templateTag: string;
};
type NestedTags = {
    tags?: Array<string>;
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    companyId?: number;
    url: string;
    user: any;
};
type Items = {
    companyId?: number;
    succeed?: number;
    isActive?: boolean;
    modifiedBy?: UserCommon;
    cancelledRecords?: Array<string>;
    failed?: number;
    failedRecords?: Array<string>;
    trackingUrl?: string;
    total?: number;
    cancelled?: number;
    modifiedOn?: string;
    createdOn?: string;
    retry?: number;
    stage?: string;
    filePath?: string;
    id?: string;
    createdBy?: UserCommon;
};
type BulkAssetResponse = {
    items?: Array<Items>;
    page?: PageData;
};
type GTIN = {
    gtinType: string;
    primary?: boolean;
    gtinValue: string;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: Array<SetSize>;
};
type InventorySet = {
    sizeDistribution: SizeDistribution;
    quantity?: number;
};
type InvSize = {
    isSet?: boolean;
    priceEffective: number;
    itemWidth?: number;
    priceTransfer?: number;
    itemWeight?: number;
    identifiers: Array<GTIN>;
    itemDimensionsUnitOfMeasure?: string;
    currency: string;
    storeCode: string;
    size: string;
    set?: InventorySet;
    itemHeight?: number;
    price: number;
    itemWeightUnitOfMeasure?: string;
    itemLength?: number;
    quantity: number;
};
type ItemQuery = {
    uid?: number;
    brandUid?: number;
    itemCode?: string;
};
type InventoryRequest = {
    companyId: number;
    sizes: Array<InvSize>;
    item: ItemQuery;
};
type InventoryResponse = {
    inventoryUpdatedOn?: string;
    priceEffective?: number;
    identifiers?: any;
    priceTransfer?: number;
    itemId?: number;
    uid?: string;
    sellerIdentifier?: number;
    currency?: string;
    sellableQuantity?: number;
    size?: string;
    price?: number;
    store?: any;
    quantity?: number;
};
type CommonResponse = {
    success?: string;
};
type BulkInventoryGetItems = {
    companyId?: number;
    isActive?: boolean;
    succeed?: number;
    failed?: number;
    cancelledRecords?: Array<string>;
    failedRecords?: Array<string>;
    modifiedBy?: any;
    cancelled?: number;
    total?: number;
    modifiedOn?: string;
    createdOn?: string;
    stage?: string;
    filePath?: string;
    id?: string;
    createdBy?: any;
};
type BulkInventoryGet = {
    items?: Array<BulkInventoryGetItems>;
    page?: Page;
};
type Size1 = {
    isSet?: boolean;
    priceEffective: number;
    itemWidth?: number;
    priceTransfer?: number;
    itemWeight?: number;
    identifiers?: Array<any>;
    itemDimensionsUnitOfMeasure?: string;
    sellerIdentifier: string;
    currency: string;
    storeCode: string;
    size?: string;
    set?: InventorySet;
    itemHeight?: number;
    price: number;
    itemWeightUnitOfMeasure?: string;
    itemLength?: number;
    quantity: number;
};
type InventoryBulkRequest = {
    companyId: number;
    sizes: Array<Size1>;
    batchId: string;
    user?: any;
};
type InventoryExportRequest = {
    type?: string;
    store?: Array<number>;
    brand?: Array<number>;
};
type InventoryExportJob = {
    sellerId: number;
    url?: string;
    triggerOn?: string;
    completedOn?: string;
    taskId: string;
    status?: string;
    requestParams?: any;
};
type FilerList = {
    value?: string;
    display?: string;
};
type InventoryConfig = {
    data?: Array<FilerList>;
    multivalues?: boolean;
};
type HsnUpsert = {
    companyId: number;
    threshold2?: number;
    taxOnMrp: boolean;
    isActive: boolean;
    hs2Code: string;
    tax2?: number;
    threshold1: number;
    taxOnEsp?: boolean;
    tax1: number;
    hsnCode: string;
};
type HsnCodesObject = {
    companyId?: number;
    threshold2?: number;
    taxOnMrp?: boolean;
    isActive?: boolean;
    hs2Code?: string;
    tax2?: number;
    threshold1?: number;
    uid?: number;
    taxOnEsp?: boolean;
    tax1?: number;
    hsnCode?: string;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    hasNext?: boolean;
    itemTotal?: number;
    hasPrevious?: boolean;
    size?: number;
    current?: string;
};
type HsnCodesListingResponse = {
    items?: Array<HsnCodesObject>;
    page?: PageResponse;
};
type BulkHsnUpsert = {
    data: Array<HsnUpsert>;
};
type BulkHsnResponse = {
    success?: boolean;
};
type SellerPhoneNumber = {
    countryCode: number;
    number: string;
};
type ContactDetails = {
    emails?: Array<string>;
    phone?: Array<SellerPhoneNumber>;
};
type Document = {
    legalName: string;
    value: string;
    type: string;
    verified?: boolean;
    url?: string;
};
type BusinessCountryInfo = {
    countryCode?: string;
    country?: string;
};
type GetAddressSerializer = {
    state?: string;
    address2?: string;
    addressType?: string;
    longitude?: number;
    city?: string;
    latitude?: number;
    address1?: string;
    landmark?: string;
    country?: string;
    pincode?: number;
    countryCode?: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type GetCompanyProfileSerializerResponse = {
    uid: number;
    verifiedOn?: string;
    franchiseEnabled?: boolean;
    contactDetails?: ContactDetails;
    modifiedOn?: string;
    documents?: Array<Document>;
    verifiedBy?: UserSerializer;
    stage?: string;
    createdOn?: string;
    businessInfo?: string;
    companyType: string;
    businessType: string;
    modifiedBy?: UserSerializer;
    warnings?: any;
    businessCountryInfo?: BusinessCountryInfo;
    name?: string;
    addresses?: Array<GetAddressSerializer>;
    notificationEmails?: Array<string>;
    businessDetails?: BusinessDetails;
    createdBy?: UserSerializer;
};
type ReferralInfo = {
    referralCode?: string;
};
type CompanyAddress = {
    state: string;
    address2?: string;
    longitude: number;
    city: string;
    latitude: number;
    address1: string;
    landmark?: string;
    country: string;
    pincode: number;
    countryCode?: string;
};
type BusinessCountryInfo1 = {
    countryCode?: string;
    country?: string;
};
type CompanyStoreSerializerRequest = {
    name: string;
    warnings?: any;
    uid?: number;
    referralInfo?: ReferralInfo;
    businessInfo?: string;
    franchiseEnabled?: boolean;
    notificationEmails?: Array<string>;
    address: CompanyAddress;
    businessCountryInfo: BusinessCountryInfo1;
    brands: Array<number>;
    document: Document;
    businessType: string;
};
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
type MetricsSerializer = {
    product?: DocumentsObj;
    stage?: string;
    brand?: DocumentsObj;
    storeDocuments?: DocumentsObj;
    uid?: number;
    companyDocuments?: DocumentsObj;
    store?: DocumentsObj;
};
type UserSerializer1 = {
    userId?: string;
    contact?: string;
    username?: string;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    modifiedBy?: UserSerializer1;
    name: string;
    slugKey?: string;
    stage?: string;
    synonyms?: Array<string>;
    createdOn?: string;
    uid?: number;
    verifiedOn?: string;
    logo?: string;
    warnings?: any;
    modifiedOn?: string;
    createdBy?: UserSerializer1;
    customJson?: any;
    localeLanguage?: any;
    description?: string;
    verifiedBy?: UserSerializer1;
    rejectReason?: string;
    banner?: BrandBannerSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    name: string;
    synonyms?: Array<string>;
    brandTier?: string;
    logo: string;
    uid?: number;
    customJson?: any;
    localeLanguage?: any;
    description?: string;
    companyId?: number;
    banner?: BrandBannerSerializer;
};
type GetCompanySerializer = {
    modifiedBy?: UserSerializer;
    name?: string;
    stage?: string;
    createdOn?: string;
    uid?: number;
    verifiedOn?: string;
    addresses?: Array<GetAddressSerializer>;
    modifiedOn?: string;
    companyType?: string;
    createdBy?: UserSerializer;
    rejectReason?: string;
    verifiedBy?: UserSerializer;
    businessType?: string;
};
type CompanyBrandSerializer = {
    modifiedBy?: UserSerializer1;
    brand?: GetBrandResponseSerializer;
    stage?: string;
    warnings?: any;
    createdOn?: string;
    uid?: number;
    verifiedOn?: string;
    company?: GetCompanySerializer;
    modifiedOn?: string;
    createdBy?: UserSerializer1;
    verifiedBy?: UserSerializer1;
    rejectReason?: string;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: Array<CompanyBrandSerializer>;
};
type CompanyBrandPostRequestSerializer = {
    brands: Array<number>;
    company: number;
    uid?: number;
};
type ProductReturnConfigSerializer = {
    storeUid?: number;
    onSameStore?: boolean;
};
type LocationManagerSerializer = {
    mobileNo: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type InvoiceCredSerializer = {
    password?: string;
    username?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    eInvoice?: InvoiceCredSerializer;
    eWaybill?: InvoiceCredSerializer;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
};
type GetLocationSerializer = {
    uid?: number;
    verifiedOn?: string;
    productReturnConfig?: ProductReturnConfigSerializer;
    modifiedOn?: string;
    manager?: LocationManagerSerializer;
    documents?: Array<Document>;
    verifiedBy?: UserSerializer1;
    displayName: string;
    gstCredentials?: InvoiceDetailsSerializer;
    stage?: string;
    createdOn?: string;
    phoneNumber: string;
    code: string;
    modifiedBy?: UserSerializer1;
    integrationType?: LocationIntegrationType;
    warnings?: any;
    timing?: Array<LocationDayWiseSerializer>;
    address: GetAddressSerializer;
    storeType?: string;
    contactNumbers?: Array<SellerPhoneNumber>;
    name: string;
    notificationEmails?: Array<string>;
    company?: GetCompanySerializer;
    createdBy?: UserSerializer1;
    customJson?: any;
};
type LocationListSerializer = {
    page?: Page;
    items?: Array<GetLocationSerializer>;
};
type GetAddressSerializer1 = {
    state?: string;
    address2?: string;
    addressType?: string;
    longitude?: number;
    city?: string;
    latitude?: number;
    address1?: string;
    landmark?: string;
    country?: string;
    pincode?: number;
    countryCode?: string;
};
type LocationSerializer = {
    name: string;
    stage?: string;
    warnings?: any;
    uid?: number;
    productReturnConfig?: ProductReturnConfigSerializer;
    timing?: Array<LocationDayWiseSerializer>;
    notificationEmails?: Array<string>;
    company: number;
    documents?: Array<Document>;
    address: GetAddressSerializer1;
    manager?: LocationManagerSerializer;
    customJson?: any;
    storeType?: string;
    contactNumbers?: Array<SellerPhoneNumber>;
    code: string;
    displayName: string;
    gstCredentials?: InvoiceDetailsSerializer;
};
type FailedResponse = {
    message: string;
};
type CDN = {
    url: string;
};
type Upload = {
    expiry: number;
    url: string;
};
type StartResponse = {
    fileName: string;
    filePath: string;
    contentType: string;
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
};
type StartRequest = {
    fileName: string;
    contentType: string;
    size: number;
    tags?: Array<string>;
};
type CompleteResponse = {
    id: string;
    fileName: string;
    filePath: string;
    contentType: string;
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: string;
    tags?: Array<string>;
    createdOn: string;
    modifiedOn: string;
};
type Opts = {
    attempts?: number;
    timestamp?: number;
    delay?: number;
};
type CopyFileTask = {
    id: string;
    name: string;
    data: BulkRequest;
    opts: Opts;
    progress: number;
    delay: number;
    timestamp: number;
    attemptsMade: number;
    stacktrace?: Array<string>;
    finishedOn: number;
    processedOn: number;
};
type BulkResponse = {
    trackingUrl: string;
    task: CopyFileTask;
};
type ReqConfiguration = {
    concurrency?: number;
};
type Destination = {
    namespace: string;
    rewrite: string;
    basepath?: string;
};
type BulkRequest = {
    urls: Array<string>;
    destination: Destination;
    configuration?: ReqConfiguration;
};
type Urls = {
    url: string;
    signedUrl: string;
    expiry: number;
};
type SignUrlResponse = {
    urls: Array<Urls>;
};
type SignUrlRequest = {
    expiry: number;
    urls: Array<string>;
};
type DbRecord = {
    success: boolean;
    tags: Array<string>;
    id: string;
    fileName: string;
    operation?: string;
    namespace: string;
    contentType: string;
    filePath: string;
    upload: Upload;
    cdn: CDN;
    createdOn: string;
    modifiedOn: string;
};
type BrowseResponse = {
    items: Array<DbRecord>;
    page: Page;
};
type RedirectDevice = {
    link?: string;
    type?: string;
};
type WebRedirect = {
    link?: string;
    type?: string;
};
type Redirects = {
    ios?: RedirectDevice;
    android?: RedirectDevice;
    web?: WebRedirect;
    forceWeb?: boolean;
};
type CampaignShortLink = {
    source?: string;
    medium?: string;
};
type Attribution = {
    campaignCookieExpiry?: string;
};
type SocialMediaTags = {
    title?: string;
    description?: string;
    image?: string;
};
type ShortLinkReq = {
    title: string;
    url: string;
    hash?: string;
    active?: boolean;
    expireAt?: string;
    enableTracking?: boolean;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    socialMediaTags?: SocialMediaTags;
    count?: number;
};
type UrlInfo = {
    original?: string;
    short?: string;
    hash?: string;
};
type ShortLinkRes = {
    title?: string;
    url?: UrlInfo;
    createdBy?: string;
    appRedirect?: boolean;
    fallback?: string;
    active?: boolean;
    id?: string;
    enableTracking?: boolean;
    expireAt?: string;
    application?: string;
    userId?: string;
    createdAt?: string;
    updatedAt?: string;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    socialMediaTags?: SocialMediaTags;
    count?: number;
};
type ShortLinkList = {
    items?: Array<ShortLinkRes>;
    page?: Page;
};
type ErrorRes = {
    message?: string;
};
type DataTresholdDTO = {
    minPrice?: number;
    safeStock?: number;
    periodThreshold?: number;
    periodThresholdType?: string;
    periodTypeList?: Array<GenericDTO>;
};
type GenericDTO = {
    text?: string;
    value?: any;
};
type JobConfigDTO = {
    integration: string;
    integrationData?: any;
    companyName?: string;
    companyId: number;
    taskDetails?: TaskDTO;
    thresholdDetails?: DataTresholdDTO;
    jobCode?: string;
    alias?: string;
};
type TaskDTO = {
    type?: number;
    groupList?: Array<GenericDTO>;
};
type ResponseEnvelopeString = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: string;
    payload?: string;
    traceId?: string;
    page?: Page;
};
type AWSS3config = {
    bucket?: string;
    region?: string;
    dir?: string;
    accessKey?: string;
    secretKey?: string;
    localFilePath?: string;
    archivePath?: string;
    archive?: boolean;
    delete?: boolean;
    unzip?: boolean;
    zipFormat?: string;
    fileRegex?: string;
    archiveConfig?: ArchiveConfig;
};
type ArchiveConfig = {
    delete?: boolean;
    archive?: boolean;
    archiveDir?: string;
};
type Audit = {
    createdBy?: string;
    modifiedBy?: string;
    createdOn?: string;
    modifiedOn?: string;
};
type CatalogMasterConfig = {
    sourceSlug?: string;
};
type CompanyConfig = {
    companyId?: number;
    excludeSteps?: Array<number>;
    hiddenClosetKeys?: Array<string>;
    openTags?: any;
    taxIdentifiers?: Array<string>;
    deleteQuantityThreshold?: number;
};
type DBConfig = {
    vendor?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    dbname?: string;
    query?: string;
    procedure?: boolean;
    driverClass?: string;
    jdbcUrl?: string;
    optionalProperties?: any;
};
type DBConnectionProfile = {
    inventory?: string;
};
type DBParamConfig = {
    params?: any;
};
type DefaultHeadersDTO = {
    store?: PropBeanDTO;
    intfArticleId?: PropBeanDTO;
    priceEffective?: PropBeanDTO;
    quantity?: PropBeanDTO;
};
type DocMappingConfig = {
    properties?: any;
    junkDataThresholdCount?: number;
    propBeanConfigs?: Array<PropBeanConfig>;
    unwindField?: string;
    defaultHeaders?: DefaultHeadersDTO;
};
type EmailConfig = {
    recepient?: string;
    host?: string;
    username?: string;
    password?: string;
    unzip?: boolean;
    readFromContent?: boolean;
    filterBasedOnRecepients?: boolean;
    pcol?: string;
    subjectLineRegex?: string;
    senderAddress?: string;
    localDir?: string;
    folderNameHierarchies?: Array<string>;
    attachmentRegex?: string;
    bodyContentRegex?: string;
    passwordProtected?: boolean;
    zipFormat?: string;
    attachmentMandate?: boolean;
    filterFilesAfterExtraction?: boolean;
    archiveConfig?: ArchiveConfig;
    readAllUnreadMails?: boolean;
    contentType?: string;
    downloadableLink?: boolean;
    properties?: any;
};
type FTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    localDir?: string;
    remoteDir?: string;
    zipFileRegex?: string;
    archiveConfig?: ArchiveConfig;
    fileRegex?: string;
    zipFormat?: string;
    readAllFiles?: boolean;
};
type FileConfig = {
    delimiter?: string;
    charset?: string;
    properties?: any;
    fileHasHeader?: boolean;
    headerIndex?: number;
    headerArray?: Array<string>;
    dataStartIndex?: number;
    propBeanConfigs?: Array<PropBeanConfig>;
    junkDataThresholdCount?: number;
    fileType?: string;
    lineValidityCheck?: boolean;
    sheetNames?: Array<string>;
    readAllSheets?: boolean;
    quoteChar?: string;
    escapeChar?: string;
    defaultHeaders?: DefaultHeadersDTO;
};
type GoogleSpreadSheetConfig = {
    range?: string;
    sheetId?: string;
    clientSecretLocation?: string;
    credStorageDirectory?: string;
    localDir?: string;
    archiveConfig?: ArchiveConfig;
};
type HttpConfig = {
    hosturl?: string;
    username?: string;
    password?: string;
    requestParams?: any;
    httpMethod?: string;
    requestPayload?: string;
    localPath?: string;
    archiveConfig?: ArchiveConfig;
};
type JobConfig = {
    id?: number;
    jobCode?: string;
    taskType?: string;
    syncDelay?: number;
    cronExpression?: string;
    storeFilter?: StoreFilter;
    processConfig?: ProcessConfig;
    storeConfig?: Array<StoreConfig>;
    properties?: any;
    immediateFirstRun?: boolean;
    disable?: boolean;
    dependentJobCodes?: Array<string>;
    companyConfig?: Array<CompanyConfig>;
    companyIds?: Array<number>;
    taxIdentifiers?: Array<string>;
    priority?: string;
    periodThreshold?: number;
    periodThresholdType?: string;
    dbConnectionProfile?: DBConnectionProfile;
    params?: any;
    openTags?: any;
    deleteQuantityThreshold?: number;
    catalogMasterConfig?: CatalogMasterConfig;
    aggregatorTypes?: Array<string>;
    integrationType?: string;
    minPrice?: number;
    audit?: Audit;
    version?: number;
    alias?: string;
};
type JobConfigRawDTO = {
    integration: string;
    companyName: string;
    companyId: number;
    data?: JobConfig;
};
type JsonDocConfig = {
    propBeanConfigs?: Array<PropBeanConfig>;
};
type LocalFileConfig = {
    retries?: number;
    interval?: number;
    localDir?: string;
    workingDir?: string;
    unzip?: boolean;
    zipFileRegex?: string;
    fileRegex?: string;
    zipFormat?: string;
    archiveConfig?: ArchiveConfig;
    readAllFiles?: boolean;
};
type MongoDocConfig = {
    collectionName?: string;
    findQuery?: any;
    projectionQuery?: any;
    propBeanConfigs?: Array<PropBeanConfig>;
    aggregatePipeline?: Array<any>;
    skipSave?: boolean;
};
type OAuthConfig = {
    limit?: number;
    pages?: number;
    interval?: number;
    consumerKey?: string;
    consumerSecret?: string;
    token?: string;
    tokenSecret?: string;
    restUrl?: string;
    restBaseUrl?: string;
    functionName?: string;
};
type ProcessConfig = {
    dbConfig?: DBConfig;
    dbParamConfig?: DBParamConfig;
    sftpConfig?: SFTPConfig;
    awsS3Config?: AWSS3config;
    mongoDocConfig?: MongoDocConfig;
    ftpConfig?: FTPConfig;
    emailConfig?: EmailConfig;
    fileConfig?: FileConfig;
    jsonDocConfig?: JsonDocConfig;
    docMappingConfig?: DocMappingConfig;
    taskStepConfig?: TaskStepConfig;
    httpConfig?: HttpConfig;
    localFileConfig?: LocalFileConfig;
    oauthConfig?: OAuthConfig;
    googleSpreadsheetConfig?: GoogleSpreadSheetConfig;
};
type PropBeanConfig = {
    required?: boolean;
    mapping?: any;
    optional?: boolean;
    send?: Send;
    validations?: Array<any>;
    values?: Array<string>;
    include?: boolean;
    sourceField?: string;
    sourceFields?: Array<string>;
    destinationField?: string;
    dataType?: string;
    defaultValue?: any;
    constValue?: any;
    concatStr?: string;
    functionName?: string;
    transformerName?: string;
    allParamFunctionName?: string;
    subSeparator?: string;
    indexField?: string;
    ignoreIfNotExists?: boolean;
    identifierType?: string;
    projectionQuery?: any;
    enrichFromMaster?: boolean;
};
type PropBeanDTO = {
    required?: boolean;
    optional?: boolean;
    include?: boolean;
    sourceField?: string;
    sourceFields?: Array<string>;
    destinationField?: string;
    dataType?: string;
    defaultValue?: any;
    constValue?: any;
    concatStr?: string;
    functionName?: string;
    transformerName?: string;
    allParamFunctionName?: string;
    subSeparator?: string;
    indexField?: string;
    ignoreIfNotExists?: boolean;
    identifierType?: string;
    projectionQuery?: any;
    enrichFromMaster?: boolean;
};
type ResponseEnvelopeListJobConfigRawDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: Array<JobConfigRawDTO>;
    payload?: Array<JobConfigRawDTO>;
    traceId?: string;
    page?: Page;
};
type SFTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    privateKeyPath?: string;
    strictHostKeyChecking?: boolean;
    localDir?: string;
    remoteDir?: string;
    passwordProtected?: boolean;
    zipFileRegex?: string;
    fileRegex?: string;
    zipFormat?: string;
    archiveConfig?: ArchiveConfig;
    readAllFiles?: boolean;
};
type Send = {
    raw?: boolean;
    processed?: boolean;
};
type StoreConfig = {
    jobCode?: string;
    storeid?: string;
    storeAlias?: string;
    storeFileRegex?: string;
    storeFileName?: string;
    processConfig?: ProcessConfig;
    properties?: any;
};
type StoreFilter = {
    includeTags?: Array<string>;
    excludeTags?: Array<string>;
    query?: any;
};
type TaskConfig = {
    name?: string;
    taskConfigId?: number;
    taskParams?: Array<TaskParam>;
};
type TaskParam = {
    name?: string;
    value?: any;
};
type TaskStepConfig = {
    taskConfigs?: Array<TaskConfig>;
    taskConfigIds?: Array<number>;
    taskConfigGroupIds?: Array<number>;
};
type ResponseEnvelopeListJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: Array<JobConfigDTO>;
    payload?: Array<JobConfigDTO>;
    traceId?: string;
    page?: Page;
};
type ResponseEnvelopeJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: JobConfigDTO;
    payload?: JobConfigDTO;
    traceId?: string;
    page?: Page;
};
type JobConfigListDTO = {
    code?: string;
    alias?: string;
    modifiedBy?: string;
    createdBy?: string;
    modifiedOn?: string;
    createdOn?: string;
    active?: boolean;
    type?: string;
};
type ResponseEnvelopeListJobConfigListDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: Array<JobConfigListDTO>;
    payload?: Array<JobConfigListDTO>;
    traceId?: string;
    page?: Page;
};
type ApplicationInventory = {
    inventory?: AppInventoryConfig;
    authentication?: AuthenticationConfig;
    articleAssignment?: ArticleAssignmentConfig;
    rewardPoints?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    order?: AppOrderConfig;
    logistics?: AppLogisticsConfig;
    business?: string;
    commsEnabled?: boolean;
    platforms?: Array<string>;
    id?: string;
    loyaltyPoints?: LoyaltyPoints;
    app?: string;
    createdAt?: string;
    updatedAt?: string;
    modifiedBy?: string;
};
type AppInventoryConfig = {
    brand?: InventoryBrand;
    store?: InventoryStore;
    category?: InventoryCategory;
    price?: InventoryPrice;
    discount?: InventoryDiscount;
    outOfStock?: boolean;
    franchiseEnabled?: boolean;
    excludeCategory?: Array<any>;
    image?: Array<string>;
    companyStore?: Array<any>;
};
type InventoryBrand = {
    criteria?: string;
    brands?: Array<any>;
};
type InventoryStore = {
    criteria?: string;
    stores?: Array<any>;
    rules?: AppStoreRules;
};
type AppStoreRules = {
    companies?: Array<number>;
    brands?: Array<any>;
};
type InventoryCategory = {
    criteria?: string;
    categories?: Array<any>;
};
type InventoryPrice = {
    min?: number;
    max?: number;
};
type InventoryDiscount = {
    min?: number;
    max?: number;
};
type AuthenticationConfig = {
    required?: boolean;
    provider?: string;
};
type ArticleAssignmentConfig = {
    rules?: ArticleAssignmentRules;
    postOrderReassignment?: boolean;
    enforcedStores?: Array<any>;
};
type ArticleAssignmentRules = {
    storePriority?: StorePriority;
};
type StorePriority = {
    enabled?: boolean;
    storetypeOrder?: Array<any>;
};
type RewardPointsConfig = {
    credit?: Credit;
    debit?: Debit;
};
type Credit = {
    enabled?: boolean;
};
type Debit = {
    enabled?: boolean;
    autoApply?: boolean;
    strategyChannel?: string;
};
type AppCartConfig = {
    deliveryCharges?: DeliveryCharges;
    enabled?: boolean;
    maxCartItems?: number;
    minCartValue?: number;
    bulkCoupons?: boolean;
};
type DeliveryCharges = {
    enabled?: boolean;
    charges?: Charges;
};
type Charges = {
    threshold?: number;
    charges?: number;
};
type AppPaymentConfig = {
    callbackUrl?: CallbackUrl;
    methods?: Methods;
    paymentSelectionLock?: PaymentSelectionLock;
    modeOfPayment?: string;
    source?: string;
    enabled?: boolean;
    codAmountLimit?: number;
    codCharges?: number;
};
type CallbackUrl = {
    app?: string;
    web?: string;
};
type Methods = {
    pl?: PaymentModeConfig;
    card?: PaymentModeConfig;
    nb?: PaymentModeConfig;
    wl?: PaymentModeConfig;
    ps?: PaymentModeConfig;
    upi?: PaymentModeConfig;
    qr?: PaymentModeConfig;
    cod?: PaymentModeConfig;
    pp?: PaymentModeConfig;
    jp?: PaymentModeConfig;
    pac?: PaymentModeConfig;
    fc?: PaymentModeConfig;
    jiopp?: PaymentModeConfig;
    stripepg?: PaymentModeConfig;
    juspaypg?: PaymentModeConfig;
    payubizpg?: PaymentModeConfig;
    payumoneypg?: PaymentModeConfig;
    rupifipg?: PaymentModeConfig;
    simpl?: PaymentModeConfig;
};
type PaymentModeConfig = {
    enabled?: boolean;
};
type PaymentSelectionLock = {
    enabled?: boolean;
    defaultOptions?: string;
    paymentIdentifier?: string;
};
type AppOrderConfig = {
    enabled?: boolean;
    forceReassignment?: boolean;
};
type AppLogisticsConfig = {
    logisticsBySeller?: boolean;
    serviceabilityCheck?: boolean;
    sameDayDelivery?: boolean;
    dpAssignment?: boolean;
};
type LoyaltyPoints = {
    enabled?: boolean;
    autoApply?: boolean;
};
type AppInventoryPartialUpdate = {
    rewardPoints?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    loyaltyPoints?: LoyaltyPoints;
    commsEnabled?: boolean;
};
type BrandCompanyInfo = {
    companyName?: string;
    companyId?: number;
};
type CompanyByBrandsRequest = {
    brands: number;
    searchText?: string;
};
type CompanyByBrandsResponse = {
    items?: Array<BrandCompanyInfo>;
    page?: Page;
};
type StoreByBrandsRequest = {
    companyId?: number;
    brands: number;
    searchText?: string;
};
type StoreByBrandsResponse = {
    items?: Array<BrandStoreInfo>;
    page?: Page;
};
type BrandStoreInfo = {
    storeName?: string;
    storeId?: number;
    storeType?: string;
    storeCode?: string;
    storeAddress?: OptedStoreAddress;
    company?: OptedCompany;
};
type CompanyBrandInfo = {
    name?: string;
    value?: number;
    brandLogoUrl?: string;
    brandBannerUrl?: string;
    brandBannerPortraitUrl?: string;
};
type BrandsByCompanyResponse = {
    brands?: CompanyBrandInfo;
};
type CreateApplicationRequest = {
    app?: App;
    configuration?: AppInventory;
    domain?: AppDomain;
};
type CreateAppResponse = {
    app?: Application;
    configuration?: ApplicationInventory;
};
type ApplicationsResponse = {
    items?: Array<Application>;
    page?: Page;
};
type MobileAppConfiguration = {
    isActive?: boolean;
    id?: string;
    appName?: string;
    landingImage?: LandingImage;
    splashImage?: SplashImage;
    application?: string;
    platformType?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
    packageName?: string;
};
type LandingImage = {
    aspectRatio?: string;
    secureUrl?: string;
};
type SplashImage = {
    aspectRatio?: string;
    secureUrl?: string;
};
type MobileAppConfigRequest = {
    appName?: string;
    landingImage?: LandingImage;
    splashImage?: SplashImage;
    isActive?: boolean;
};
type BuildVersionHistory = {
    versions?: BuildVersion;
    latestAvailableVersionName?: string;
};
type BuildVersion = {
    id?: string;
    application?: string;
    platformType?: string;
    buildStatus?: string;
    versionName?: string;
    versionCode?: number;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type AppSupportedCurrency = {
    id?: string;
    supportedCurrency?: Array<string>;
    application?: string;
    defaultCurrency?: DefaultCurrency;
    createdAt?: string;
    updatedAt?: string;
};
type DefaultCurrency = {
    ref?: string;
    code?: string;
};
type CurrencyConfig = {
    id?: string;
    isActive?: boolean;
    name?: string;
    code?: string;
    createdAt?: string;
    updatedAt?: string;
    decimalDigits?: number;
    symbol?: string;
};
type DomainAdd = {
    name?: string;
};
type DomainAddRequest = {
    domain?: DomainAdd;
};
type DomainsResponse = {
    domains?: Array<Domain>;
};
type UpdateDomain = {
    id?: string;
};
type UpdateDomainTypeRequest = {
    domain?: UpdateDomain;
    action?: string;
};
type DomainStatusRequest = {
    domainUrl?: string;
};
type DomainStatus = {
    display?: string;
    status?: boolean;
};
type DomainStatusResponse = {
    connected?: boolean;
    status?: Array<DomainStatus>;
};
type DomainSuggestionsRequest = {
    domainUrl?: string;
    custom?: boolean;
};
type DomainSuggestion = {
    name: string;
    unsupported?: boolean;
    isAvailable: boolean;
    price?: number;
    currency?: string;
};
type DomainSuggestionsResponse = {
    domains?: Array<DomainSuggestion>;
};
type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn;
    page?: Page;
};
type IntegrationOptIn = {
    validators?: Validators;
    description?: string;
    descriptionHtml?: string;
    constants?: string;
    companies?: Array<any>;
    support?: Array<string>;
    id?: string;
    name?: string;
    meta?: IntegrationMeta;
    icon?: string;
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
    token?: string;
    secret?: string;
    v?: number;
};
type Validators = {
    company?: CompanyValidator;
    store?: StoreValidator;
    inventory?: InventoryValidator;
    order?: OrderValidator;
};
type CompanyValidator = {
    jsonSchema?: JsonSchema;
    browserScript?: string;
};
type JsonSchema = {
    display?: string;
    key?: string;
    type?: string;
    tooltip?: string;
};
type StoreValidator = {
    jsonSchema?: Array<JsonSchema>;
    browserScript?: string;
};
type InventoryValidator = {
    jsonSchema?: Array<JsonSchema>;
    browserScript?: string;
};
type OrderValidator = {
    jsonSchema?: Array<JsonSchema>;
    browserScript?: string;
};
type IntegrationMeta = {
    isPublic?: boolean;
    id?: string;
    name?: string;
    value?: string;
};
type Integration = {
    validators?: Validators;
    description?: string;
    descriptionHtml?: string;
    constants?: any;
    companies?: Array<any>;
    support?: Array<string>;
    id?: string;
    name?: string;
    meta?: IntegrationMeta;
    icon?: string;
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
    token?: string;
    secret?: string;
    v?: number;
};
type IntegrationConfigResponse = {
    items?: IntegrationLevel;
};
type IntegrationLevel = {
    opted?: boolean;
    permissions?: Array<any>;
    lastPatch?: Array<any>;
    id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    meta?: Array<any>;
    token?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
    data?: any;
};
type OptedStoreIntegration = {
    otherOpted?: boolean;
    otherIntegration?: IntegrationOptIn;
    otherEntity?: OtherEntity;
};
type OtherEntity = {
    opted?: boolean;
    permissions?: Array<string>;
    lastPatch?: LastPatch;
    id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    data?: OtherEntityData;
    meta?: Array<any>;
    token?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type LastPatch = {
    op?: string;
    path?: string;
    value?: string;
};
type OtherEntityData = {
    articleIdentifier?: string;
};
type App = {
    companyId?: string;
    channelType?: string;
    auth?: ApplicationAuth;
    name?: string;
    desc?: string;
};
type AppInventory = {
    brand?: InventoryBrandRule;
    store?: InventoryStoreRule;
    image?: Array<string>;
    franchiseEnabled?: boolean;
    outOfStock?: boolean;
    payment?: InventoryPaymentConfig;
    articleAssignment?: InventoryArticleAssignment;
};
type AppDomain = {
    name?: string;
};
type CompaniesResponse = {
    items?: AppInventoryCompanies;
    page?: Page;
};
type AppInventoryCompanies = {
    uid?: number;
    name?: string;
    companyType?: string;
};
type StoresResponse = {
    items?: AppInventoryStores;
    page?: Page;
};
type AppInventoryStores = {
    id?: string;
    modifiedOn?: string;
    uid?: number;
    name?: string;
    displayName?: string;
    storeType?: string;
    storeCode?: string;
    companyId?: number;
};
type FilterOrderingStoreRequest = {
    allStores?: boolean;
    deployedStores?: Array<number>;
    q?: string;
};
type DeploymentMeta = {
    deployedStores?: Array<number>;
    allStores?: boolean;
    enabled?: boolean;
    type?: string;
    id?: string;
    app?: string;
    v?: number;
};
type OrderingStoreConfig = {
    deploymentMeta?: DeploymentMeta;
};
type OtherSellerCompany = {
    uid?: number;
    name?: string;
};
type OtherSellerApplication = {
    name?: string;
    description?: string;
    id?: string;
    domain?: string;
    company?: OtherSellerCompany;
    optType?: string;
};
type OtherSellerApplications = {
    items?: Array<OtherSellerApplication>;
    page?: Page;
};
type OptedApplicationResponse = {
    name?: string;
    description?: string;
    id?: string;
    domain?: string;
    company?: OptedCompany;
    optedInventory?: OptedInventory;
    optOutInventory?: OptOutInventory;
};
type OptedCompany = {
    uid?: number;
    name?: string;
};
type OptedInventory = {
    optType?: OptType;
    items?: any;
};
type OptType = {
    key?: string;
    display?: string;
};
type OptedStore = {
    name?: string;
    storeCode?: string;
    id?: string;
    modifiedOn?: string;
    uid?: number;
    address?: OptedStoreAddress;
    displayName?: string;
    storeType?: string;
    companyId?: number;
};
type OptOutInventory = {
    store: Array<number>;
    company: Array<number>;
};
type ProductDetailFeature = {
    similar?: Array<string>;
    sellerSelection?: boolean;
    updateProductMeta?: boolean;
    requestProduct?: boolean;
};
type LaunchPage = {
    pageType?: string;
    params?: string;
    query?: string;
};
type LandingPageFeature = {
    launchPage?: LaunchPage;
    continueAsGuest?: boolean;
    loginBtnText?: string;
    showDomainTextbox?: boolean;
    showRegisterBtn?: boolean;
};
type RegistrationPageFeature = {
    askStoreAddress?: boolean;
};
type AppFeature = {
    productDetail?: ProductDetailFeature;
    landingPage?: LandingPageFeature;
    registrationPage?: RegistrationPageFeature;
    homePage?: HomePageFeature;
    common?: CommonFeature;
    cart?: CartFeature;
    qr?: QrFeature;
    pcr?: PcrFeature;
    order?: OrderFeature;
    id?: string;
    app?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type HomePageFeature = {
    orderProcessing?: boolean;
};
type CommonFeature = {
    communicationOptinDialog?: CommunicationOptinDialogFeature;
    deploymentStoreSelection?: DeploymentStoreSelectionFeature;
    listingPrice?: ListingPriceFeature;
    listingPage?: ListingPageFeature;
    currency?: CurrencyFeature;
    revenueEngine?: RevenueEngineFeature;
    feedback?: FeedbackFeature;
    compareProducts?: CompareProductsFeature;
};
type CommunicationOptinDialogFeature = {
    visibility?: boolean;
};
type DeploymentStoreSelectionFeature = {
    enabled?: boolean;
    type?: string;
};
type ListingPriceFeature = {
    value?: string;
    sort?: string;
};
type ListingPageFeature = {
    sortOn?: string;
};
type CurrencyFeature = {
    value?: Array<string>;
    type?: string;
    defaultCurrency?: string;
};
type RevenueEngineFeature = {
    enabled?: boolean;
};
type FeedbackFeature = {
    enabled?: boolean;
};
type CompareProductsFeature = {
    enabled?: boolean;
};
type CartFeature = {
    gstInput?: boolean;
    staffSelection?: boolean;
    placingForCustomer?: boolean;
    googleMap?: boolean;
};
type QrFeature = {
    application?: boolean;
    products?: boolean;
    collections?: boolean;
};
type PcrFeature = {
    staffSelection?: boolean;
};
type OrderFeature = {
    buyAgain?: boolean;
};
type AppFeatureRequest = {
    feature?: AppFeature;
};
type AppFeatureResponse = {
    feature?: AppFeature;
};
type Currency = {
    id?: string;
    isActive?: boolean;
    name?: string;
    code?: string;
    createdAt?: string;
    updatedAt?: string;
    decimalDigits?: number;
    symbol?: string;
};
type Domain = {
    verified?: boolean;
    isPrimary?: boolean;
    isDefault?: boolean;
    isShortlink?: boolean;
    id?: string;
    name?: string;
};
type ApplicationWebsite = {
    enabled?: boolean;
    basepath?: string;
};
type ApplicationCors = {
    domains?: Array<string>;
};
type ApplicationAuth = {
    enabled?: boolean;
};
type ApplicationRedirections = {
    from?: string;
    redirectTo?: string;
    type?: string;
};
type ApplicationMeta = {
    name?: string;
    value?: string;
};
type SecureUrl = {
    secureUrl?: string;
};
type Application = {
    website?: ApplicationWebsite;
    cors?: ApplicationCors;
    auth?: ApplicationAuth;
    description?: string;
    channelType?: string;
    cacheTtl?: number;
    isInternal?: boolean;
    isActive?: boolean;
    id?: string;
    name?: string;
    owner?: string;
    companyId?: number;
    token?: string;
    redirections?: Array<ApplicationRedirections>;
    meta?: Array<ApplicationMeta>;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Array<Domain>;
    appType?: string;
    mobileLogo?: SecureUrl;
    domain?: Domain;
};
type NotFound = {
    message?: string;
};
type UnhandledError = {
    message?: string;
};
type InvalidPayloadRequest = {
    message?: string;
};
type SuccessMessageResponse = {
    message?: string;
};
type InventoryBrandRule = {
    criteria?: string;
    brands?: Array<number>;
};
type StoreCriteriaRule = {
    companies?: Array<number>;
    brands?: Array<number>;
};
type InventoryStoreRule = {
    criteria?: string;
    rules?: Array<StoreCriteriaRule>;
    stores?: Array<number>;
};
type InventoryPaymentConfig = {
    modeOfPayment?: string;
    source?: string;
};
type StorePriorityRule = {
    enabled?: boolean;
    storetypeOrder?: Array<string>;
};
type ArticleAssignmentRule = {
    storePriority?: StorePriorityRule;
};
type InventoryArticleAssignment = {
    postOrderReassignment?: boolean;
    enforcedStores?: Array<number>;
    rules?: ArticleAssignmentRule;
};
type CompanyAboutAddress = {
    pincode?: number;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    addressType?: string;
};
type UserEmail = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    email?: string;
};
type UserPhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    countryCode?: number;
    phone?: string;
};
type ApplicationInformation = {
    address?: InformationAddress;
    support?: InformationSupport;
    socialLinks?: SocialLinks;
    links?: Links;
    copyrightText?: string;
    id?: string;
    businessHighlights?: BusinessHighlights;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type InformationAddress = {
    loc?: string;
    addressLine?: Array<string>;
    phone?: InformationPhone;
    city?: string;
    country?: string;
    pincode?: number;
};
type InformationPhone = {
    code?: string;
    number?: string;
};
type InformationSupport = {
    phone?: Array<string>;
    email?: Array<string>;
    timing?: string;
};
type SocialLinks = {
    facebook?: Facebook;
    instagram?: Instagram;
    twitter?: Twitter;
    pinterest?: Pinterest;
    googlePlus?: GooglePlus;
    youtube?: Youtube;
    linkedIn?: LinkedIn;
    vimeo?: Vimeo;
    blogLink?: BlogLink;
};
type Instagram = {
    title?: string;
    icon?: string;
    link?: string;
};
type Twitter = {
    title?: string;
    icon?: string;
    link?: string;
};
type Pinterest = {
    title?: string;
    icon?: string;
    link?: string;
};
type GooglePlus = {
    title?: string;
    icon?: string;
    link?: string;
};
type Youtube = {
    title?: string;
    icon?: string;
    link?: string;
};
type LinkedIn = {
    title?: string;
    icon?: string;
    link?: string;
};
type Vimeo = {
    title?: string;
    icon?: string;
    link?: string;
};
type BlogLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type Links = {
    title?: string;
    link?: string;
};
type BusinessHighlights = {
    id?: string;
    title?: string;
    icon?: string;
    subTitle?: string;
};
type ApplicationDetail = {
    name: string;
    description: string;
    logo: SecureUrl;
    mobileLogo: SecureUrl;
    favicon: SecureUrl;
    banner: SecureUrl;
    domain?: Domain;
    domains?: Array<Domain>;
    id?: string;
};
type CurrenciesResponse = {
    items?: Array<Currency>;
};
type StoreLatLong = {
    type?: string;
    coordinates?: Array<number>;
};
type OptedStoreAddress = {
    state?: string;
    address1?: string;
    latLong?: StoreLatLong;
    address2?: string;
    pincode?: number;
    country?: string;
    city?: string;
};
type OrderingStore = {
    address?: OptedStoreAddress;
    id?: string;
    uid?: number;
    name?: string;
    displayName?: string;
    storeType?: string;
    storeCode?: string;
    pincode?: number;
    code?: string;
};
type OrderingStores = {
    page?: Page;
    items?: Array<OrderingStore>;
    deployedStores?: Array<number>;
    allStores?: boolean;
    enabled?: boolean;
    type?: string;
    id?: string;
    app?: string;
    v?: number;
};
type TokenResponse = {
    tokens?: Tokens;
    id?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type Tokens = {
    firebase?: Firebase;
    moengage?: Moengage;
    segment?: Segment;
    gtm?: Gtm;
    freshchat?: Freshchat;
    safetynet?: Safetynet;
    fyndRewards?: FyndRewards;
    auth?: Auth;
    googleMap?: GoogleMap;
};
type Firebase = {
    credentials?: Credentials;
    enabled?: boolean;
};
type Credentials = {
    ios?: Ios;
    android?: Android;
    projectId?: string;
    gcmSenderId?: string;
    applicationId?: string;
    apiKey?: string;
};
type Ios = {
    applicationId?: string;
    apiKey?: string;
};
type Android = {
    applicationId?: string;
    apiKey?: string;
};
type Moengage = {
    credentials?: MoengageCredentials;
    enabled?: boolean;
};
type MoengageCredentials = {
    appId?: string;
};
type Segment = {
    credentials?: SegmentCredentials;
    enabled?: boolean;
};
type SegmentCredentials = {
    writeKey?: string;
};
type Gtm = {
    credentials?: GtmCredentials;
    enabled?: boolean;
};
type GtmCredentials = {
    apiKey?: string;
};
type Freshchat = {
    credentials?: FreshchatCredentials;
    enabled?: boolean;
};
type FreshchatCredentials = {
    appId?: string;
    appKey?: string;
    webToken?: string;
};
type Safetynet = {
    credentials?: SafetynetCredentials;
    enabled?: boolean;
};
type SafetynetCredentials = {
    apiKey?: string;
};
type FyndRewards = {
    credentials?: FyndRewardsCredentials;
};
type FyndRewardsCredentials = {
    publicKey?: string;
};
type Auth = {
    google?: Google;
    facebook?: Facebook;
    accountkit?: Accountkit;
};
type GoogleMap = {
    credentials?: GoogleMapCredentials;
};
type GoogleMapCredentials = {
    apiKey?: string;
};
type CouponAuthor = {
    modifiedBy?: string;
    createdBy?: string;
};
type PostOrder = {
    returnAllowed?: boolean;
    cancellationAllowed?: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type UsesRemaining = {
    user?: number;
    app?: number;
    total?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: Array<string>;
    types?: Array<string>;
    uses?: PaymentAllowValue;
    networks?: Array<string>;
};
type PaymentCodes = {
    card?: PaymentModes;
    upi?: PaymentModes;
    nb?: PaymentModes;
    ps?: PaymentModes;
    pl?: PaymentModes;
    wl?: PaymentModes;
    qr?: PaymentModes;
};
type BulkBundleRestriction = {
    multiStoreAllowed: boolean;
};
type Restrictions = {
    postOrder?: PostOrder;
    priceRange?: PriceRange;
    uses?: UsesRestriction;
    payments?: PaymentCodes;
    orderingStores?: Array<number>;
    platforms?: Array<string>;
    bulkBundle?: BulkBundleRestriction;
    couponAllowed?: boolean;
};
type CouponSchedule = {
    start?: string;
    end?: string;
    nextSchedule?: Array<any>;
    duration?: number;
    cron?: string;
};
type State = {
    isDisplay?: boolean;
    isArchived?: boolean;
    isPublic?: boolean;
};
type RuleDefinition = {
    isExact?: boolean;
    type: string;
    applicableOn: string;
    autoApply?: boolean;
    calculateOn: string;
    scope?: Array<string>;
    currencyCode?: string;
    valueType: string;
};
type Validation = {
    anonymous?: boolean;
    userRegisteredAfter?: string;
    appId?: Array<string>;
};
type CouponDateMeta = {
    createdOn?: string;
    modifiedOn?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    title?: string;
    subtitle?: string;
    description?: string;
    remove?: DisplayMetaDict;
};
type CouponAction = {
    actionDate?: string;
    txnMode?: string;
};
type Ownership = {
    payableBy: string;
    payableCategory: string;
};
type Validity = {
    priority?: number;
};
type Identifier = {
    userId?: Array<string>;
    categoryId?: Array<number>;
    brandId?: Array<number>;
    companyId?: Array<number>;
    collectionId?: Array<string>;
    itemId?: Array<number>;
    storeId?: Array<number>;
    articleId?: Array<string>;
};
type Rule = {
    max?: number;
    value?: number;
    key?: number;
    discountQty?: number;
    min?: number;
};
type CouponAdd = {
    author?: CouponAuthor;
    restrictions?: Restrictions;
    schedule?: CouponSchedule;
    state?: State;
    ruleDefinition: RuleDefinition;
    validation?: Validation;
    dateMeta?: CouponDateMeta;
    displayMeta: DisplayMeta;
    action?: CouponAction;
    typeSlug: string;
    ownership: Ownership;
    tags?: Array<string>;
    validity: Validity;
    code: string;
    identifiers: Identifier;
    rule: Array<Rule>;
};
type CouponsResponse = {
    page?: Page;
    items?: CouponAdd;
};
type SuccessMessage = {
    success?: boolean;
    message?: string;
};
type OperationErrorResponse = {
    success?: boolean;
    message?: string;
};
type CouponUpdate = {
    author?: CouponAuthor;
    restrictions?: Restrictions;
    schedule?: CouponSchedule;
    state?: State;
    ruleDefinition: RuleDefinition;
    validation?: Validation;
    dateMeta?: CouponDateMeta;
    displayMeta: DisplayMeta;
    action?: CouponAction;
    typeSlug: string;
    ownership: Ownership;
    tags?: Array<string>;
    validity: Validity;
    code: string;
    identifiers: Identifier;
    rule: Array<Rule>;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type StoreMapping = {
    enabled?: string;
    marketplaceStoreId?: string;
    storeId?: number;
    meta?: any;
};
type AllChannels = {
    mkpName?: boolean;
};
type MyntraPayload = {
    merchantId?: string;
    secretKey?: string;
};
type AmazonPayload = {
    sellerId?: string;
    mwsAuthToken?: string;
};
type FlipkartPayload = {
    code?: string;
};
type TatacliqPayload = {
    userName?: string;
    password?: string;
    merchantId?: string;
};
type AjioPayload = {
    username?: string;
    password?: string;
    clientIp?: string;
};
type InventorySyncConfig = {
    inventory?: boolean;
    price?: boolean;
};
type StoreMappingPayload = {
    storeMappingEnabled?: boolean;
    storeMapping?: Array<StoreMapping>;
};
type StatusPayload = {
    isActive?: boolean;
};
type StatusResp = {
    isActive?: boolean;
};
type SyncPayload = {
    modifiedSince?: string;
};
type SyncResp = {
    message?: string;
};
type MkpResp = {
    marketplace?: string;
    worker?: number;
    workerAssigned?: string;
    isActive?: boolean;
    storeMappingEnabled?: boolean;
    companyId?: number;
    configuration?: any;
    storeMapping?: Array<StoreMapping>;
};
type AppUser = {
    id?: string;
    active?: boolean;
    applicationId?: string;
    blockReason?: string;
    updatedAt?: string;
    updatedBy?: string;
    userId?: string;
};
type E = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    requestId?: string;
    stackTrace?: string;
    status?: number;
};
type Giveaway = {
    id?: string;
    schedule?: Schedule;
    active?: boolean;
    applicationId?: string;
    audience?: RewardsAudience;
    bannerImage?: Asset;
    createdAt?: string;
    description?: string;
    rule?: RewardsRule;
    title?: string;
    updatedAt?: string;
};
type GiveawayResponse = {
    items?: Array<Giveaway>;
    page?: Page;
};
type HistoryPretty = {
    id?: string;
    applicationId?: string;
    claimed?: boolean;
    createdAt?: string;
    expiresOn?: string;
    points?: number;
    remainingPoints?: number;
    text1?: string;
    text2?: string;
    text3?: string;
    txnName?: string;
    updatedAt?: string;
    userId?: string;
};
type HistoryRes = {
    items?: Array<HistoryPretty>;
    page?: Page;
    points?: number;
};
type Offer = {
    schedule?: Schedule;
    active?: boolean;
    applicationId?: string;
    bannerImage?: Asset;
    createdAt?: string;
    name?: string;
    rule?: any;
    share?: ShareMessages;
    subText?: string;
    text?: string;
    type?: string;
    updatedAt?: string;
    updatedBy?: string;
    url?: string;
};
type Points = {
    available?: number;
};
type Referral = {
    code?: string;
};
type RewardUser = {
    id?: string;
    active?: boolean;
    createdAt?: string;
    referral?: Referral;
    uid?: number;
    updatedAt?: string;
    userBlockReason?: string;
    userId?: string;
};
type RewardsAudience = {
    headerUserId?: string;
    id?: string;
};
type RewardsRule = {
    amount?: number;
};
type ShareMessages = {
    email?: string;
    facebook?: string;
    fallback?: string;
    message?: string;
    messenger?: string;
    sms?: string;
    text?: string;
    twitter?: string;
    whatsapp?: string;
};
type UserRes = {
    points?: Points;
    user?: RewardUser;
};
type StatGroup = {
    key?: string;
    url?: string;
    title?: string;
};
type StatsGroups = {
    groups?: Array<StatGroup>;
};
type StatsGroupComponent = {
    key?: string;
    url?: string;
    title?: string;
    type?: string;
    filters?: any;
};
type StatsGroupComponents = {
    title?: string;
    components?: Array<StatsGroupComponent>;
};
type StatsRes = {
    key?: string;
    title?: string;
    type?: string;
    data?: any;
};
type ReceivedAt = {
    value?: string;
};
type AbandonCartsDetail = {
    propertiesCartId?: string;
    contextTraitsFirstName?: string;
    contextTraitsLastName?: string;
    contextTraitsPhoneNumber?: string;
    contextTraitsEmail?: string;
    contextAppApplicationId?: string;
    propertiesBreakupValuesRawTotal?: string;
    receivedAt?: ReceivedAt;
};
type AbandonCartsList = {
    items?: Array<AbandonCartsDetail>;
    cartTotal?: string;
    page?: Page;
};
type AbandonCartDetail = {
    id?: string;
    userId?: string;
    cartValue?: string;
    articles?: Array<any>;
    breakup?: any;
    address?: any;
};
type ExportJobReq = {
    marketplaceName?: string;
    startTime?: string;
    endTime?: string;
    eventType?: string;
    traceId?: string;
};
type ExportJobRes = {
    status?: string;
    jobId?: string;
};
type ExportJobStatusRes = {
    status?: string;
    jobId?: string;
    downloadUrl?: string;
};
type GetLogsListReq = {
    marketplaceName?: string;
    startDate?: string;
    companyId?: string;
    endDate?: string;
};
type MkpLogsResp = {
    startTimeIso?: string;
    endTimeIso?: string;
    eventType?: string;
    traceId?: string;
    count?: string;
    status?: string;
};
type GetLogsListRes = {
    items?: Array<MkpLogsResp>;
    page?: Page;
};
type SearchLogReq = {
    marketplaceName?: string;
    startDate?: string;
    companyId?: string;
    endDate?: string;
    identifier?: string;
    identifierValue?: string;
};
type LogInfo = {
    id?: string;
    status?: string;
    eventType?: string;
    marketplaceName?: string;
    event?: string;
    traceId?: string;
    companyId?: number;
    brandId?: number;
    storeCode?: string;
    storeId?: number;
    itemId?: number;
    articleId?: string;
    sellerIdentifier?: string;
};
type SearchLogRes = {
    items?: Array<LogInfo>;
    page?: Page;
};
type ValidityObject = {
    start: string;
    end: string;
};
type CreateUpdateDiscount = {
    name: string;
    companyId: number;
    isActive: boolean;
    appIds: Array<string>;
    jobType: string;
    discountType: string;
    discountLevel: string;
    value?: number;
    filePath?: string;
    brandIds?: Array<number>;
    storeIds?: Array<number>;
    validity: ValidityObject;
};
type DiscountJob = {
    id: string;
    name: string;
    companyId: number;
    isActive: boolean;
    appIds?: Array<string>;
    jobType?: string;
    discountType?: string;
    discountLevel?: string;
    value?: number;
    filePath?: string;
    brandIds?: Array<number>;
    storeIds?: Array<number>;
    validity: ValidityObject;
    createdOn: string;
    modifiedOn: string;
    createdBy: UserDetails;
    modifiedBy: UserDetails;
    meta?: any;
};
type ListOrCalender = {
    items: Array<DiscountJob>;
    page: Page;
};
type FileJobResponse = {
    stage: string;
    total: number;
    failed: number;
    companyId: number;
    body?: any;
    type: string;
    fileType: string;
};
type DownloadFileJob = {
    brandIds?: Array<number>;
    storeIds?: Array<number>;
};
type CancelJobResponse = {
    success: boolean;
};
type UserDetails = {
    username: string;
    userId: string;
};
type BadRequestObject = {
    message: string;
};
import Paginator = require("../common/Paginator");
import { InventoryValidator } from "./PlatformModels";
import { OrderValidator } from "./PlatformModels";
