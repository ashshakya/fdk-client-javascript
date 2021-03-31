const APIClient = require("./PlatformAPIClient");

/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { boolean } created
        
        @property { Array<Object> } [aggregators]
        
        @property { string } appId
        
        @property { boolean } success
        
        @property { Array<string> } displayFields
        
        @property { Array<string> } excludedFields
        
         
    */

/**
        @typedef ErrorCodeDescription
        
        
        @property { string } code
        
        @property { string } description
        
        @property { boolean } success
        
         
    */

/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } merchantSalt
        
        @property { string } key
        
        @property { boolean } [isActive]
        
        @property { string } secret
        
        @property { string } configType
        
         
    */

/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { string } appId
        
        @property { boolean } [isActive]
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
         
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
        
        
        @property { ErrorCodeAndDescription } error
        
        @property { boolean } success
        
         
    */

/**
        @typedef PaymentModeLogo
        
        
        @property { string } large
        
        @property { string } small
        
         
    */

/**
        @typedef PaymentModeList
        
        
        @property { string } [cardIsin]
        
        @property { string } [fyndVpa]
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { string } [cardIssuer]
        
        @property { string } [cardBrand]
        
        @property { string } [cardNumber]
        
        @property { string } [code]
        
        @property { string } [intentFlow]
        
        @property { boolean } [expired]
        
        @property { string } [merchantCode]
        
        @property { string } [nickname]
        
        @property { string } [cardName]
        
        @property { string } aggregatorName
        
        @property { string } [name]
        
        @property { number } [displayPriority]
        
        @property { number } [timeout]
        
        @property { string } [cardToken]
        
        @property { string } [cardFingerprint]
        
        @property { string } [cardReference]
        
        @property { number } [expMonth]
        
        @property { number } [retryCount]
        
        @property { string } [cardBrandImage]
        
        @property { string } [cardId]
        
        @property { string } [cardType]
        
        @property { number } [expYear]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { string } [displayName]
        
         
    */

/**
        @typedef RootPaymentMode
        
        
        @property { boolean } [addCardEnabled]
        
        @property { string } [aggregatorName]
        
        @property { string } name
        
        @property { number } displayPriority
        
        @property { Array<PaymentModeList> } [list]
        
        @property { string } displayName
        
        @property { boolean } [anonymousEnable]
        
         
    */

/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } paymentOption
        
         
    */

/**
        @typedef PaymentOptionsResponse
        
        
        @property { PaymentOptions } paymentOptions
        
        @property { boolean } success
        
         
    */

/**
        @typedef PayoutsResponse
        
        
        @property { Object } uniqueTransferNo
        
        @property { Array<Object> } payoutsAggregators
        
        @property { Object } customers
        
        @property { boolean } isActive
        
        @property { boolean } isDefault
        
        @property { Object } moreAttributes
        
        @property { string } transferType
        
         
    */

/**
        @typedef PayoutRequest
        
        
        @property { Object } bankDetails
        
        @property { string } uniqueExternalId
        
        @property { boolean } isActive
        
        @property { string } aggregator
        
        @property { Object } users
        
        @property { string } transferType
        
         
    */

/**
        @typedef PayoutResponse
        
        
        @property { string } uniqueTransferNo
        
        @property { Object } bankDetails
        
        @property { boolean } created
        
        @property { boolean } isActive
        
        @property { string } aggregator
        
        @property { Object } payouts
        
        @property { Object } users
        
        @property { string } paymentStatus
        
        @property { boolean } success
        
        @property { string } transferType
        
         
    */

/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } isDefault
        
        @property { boolean } isActive
        
        @property { boolean } success
        
         
    */

/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } isDefault
        
        @property { string } uniqueExternalId
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { Array<Object> } data
        
        @property { boolean } success
        
         
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
        
        
        @property { Object } data
        
        @property { boolean } success
        
         
    */

/**
        @typedef UserSerializer
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [contact]
        
         
    */

/**
        @typedef Document
        
        
        @property { string } [url]
        
        @property { string } legalName
        
        @property { string } value
        
        @property { string } type
        
        @property { boolean } [verified]
        
         
    */

/**
        @typedef PhoneNumber
        
        
        @property { number } countryCode
        
        @property { string } number
        
         
    */

/**
        @typedef ContactDetails
        
        
        @property { Array<string> } [emails]
        
        @property { Array<PhoneNumber> } [phone]
        
         
    */

/**
        @typedef GetAddressSerializer
        
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } [state]
        
        @property { number } [pincode]
        
        @property { string } [landmark]
        
        @property { string } [addressType]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [country]
        
         
    */

/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
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
        
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [stage]
        
        @property { string } [businessInfo]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } companyType
        
        @property { number } uid
        
        @property { Array<Document> } [documents]
        
        @property { string } [verifiedOn]
        
        @property { ContactDetails } [contactDetails]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } businessType
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [createdOn]
        
        @property { BusinessCountryInfo } [businessCountryInfo]
        
        @property { Object } [warnings]
        
        @property { string } [name]
        
        @property { Array<string> } [notificationEmails]
        
        @property { BusinessDetails } [businessDetails]
        
        @property { boolean } [franchiseEnabled]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef ErrorResponse
        
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
         
    */

/**
        @typedef CompanyAddress
        
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } state
        
        @property { number } pincode
        
        @property { string } [landmark]
        
        @property { number } latitude
        
        @property { number } longitude
        
        @property { string } city
        
        @property { string } address1
        
        @property { string } country
        
         
    */

/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */

/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */

/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { string } businessType
        
        @property { Object } [warnings]
        
        @property { Array<number> } brands
        
        @property { Document } document
        
        @property { CompanyAddress } address
        
        @property { number } [uid]
        
        @property { string } name
        
        @property { Array<string> } [notificationEmails]
        
        @property { BusinessCountryInfo1 } businessCountryInfo
        
        @property { ReferralInfo } [referralInfo]
        
        @property { string } [businessInfo]
        
        @property { boolean } [franchiseEnabled]
        
         
    */

/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef DocumentsObj
        
        
        @property { number } [verified]
        
        @property { number } [pending]
        
         
    */

/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [store]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [brand]
        
         
    */

/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */

/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { Object } [localeLanguage]
        
        @property { number } [uid]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } [description]
        
        @property { Array<string> } [synonyms]
        
        @property { string } name
        
        @property { number } [companyId]
        
        @property { string } logo
        
        @property { string } [brandTier]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef UserSerializer1
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [contact]
        
         
    */

/**
        @typedef GetBrandResponseSerializer
        
        
        @property { UserSerializer1 } [createdBy]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Object } [warnings]
        
        @property { Object } [localeLanguage]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [rejectReason]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [createdOn]
        
        @property { string } [verifiedOn]
        
        @property { string } [logo]
        
        @property { Object } [customJson]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } [slugKey]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { Array<number> } brands
        
        @property { number } company
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */

/**
        @typedef LocationDayWiseSerializer
        
        
        @property { LocationTimingSerializer } [closing]
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [opening]
        
        @property { boolean } open
        
         
    */

/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } [state]
        
        @property { number } [pincode]
        
        @property { string } [landmark]
        
        @property { string } [addressType]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [country]
        
         
    */

/**
        @typedef LocationManagerSerializer
        
        
        @property { PhoneNumber } mobileNo
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */

/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { boolean } [onSameStore]
        
        @property { number } [storeUid]
        
         
    */

/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [username]
        
        @property { boolean } [enabled]
        
        @property { string } [password]
        
         
    */

/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eWaybill]
        
        @property { InvoiceCredSerializer } [eInvoice]
        
         
    */

/**
        @typedef LocationSerializer
        
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { Object } [warnings]
        
        @property { string } code
        
        @property { number } company
        
        @property { number } [uid]
        
        @property { Array<Document> } [documents]
        
        @property { GetAddressSerializer1 } address
        
        @property { string } [stage]
        
        @property { string } name
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Array<string> } [notificationEmails]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { string } displayName
        
        @property { string } [storeType]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef LocationListSerializer
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef GetCompanySerializer
        
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [businessType]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [stage]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [rejectReason]
        
        @property { string } [createdOn]
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [companyType]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef LocationIntegrationType
        
        
        @property { string } [order]
        
        @property { string } [inventory]
        
         
    */

/**
        @typedef GetLocationSerializer
        
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { GetCompanySerializer } [company]
        
        @property { string } [stage]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } displayName
        
        @property { string } phoneNumber
        
        @property { Object } [customJson]
        
        @property { GetAddressSerializer } address
        
        @property { number } [uid]
        
        @property { Array<Document> } [documents]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } [verifiedOn]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } code
        
        @property { string } [createdOn]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { string } [storeType]
        
        @property { Object } [warnings]
        
        @property { string } name
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Array<string> } [notificationEmails]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { string } [modifiedOn]
        
         
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
        @typedef Page
        
        
        @property { number } current
        
        @property { number } itemTotal
        
        @property { boolean } hasPrevious
        
        @property { boolean } hasNext
        
         
    */

/**
        @typedef Item
        
        
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
        
        
        @property { Array<Item> } items
        
        @property { Page } page
        
         
    */

class Payment {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get All Payouts
    * @description: Get All Payouts
    * @param {Object} arg - arg object.
    * @param {string} [arg.uniqueExternalId] - Fetch payouts using unique external id
    
    **/
  getAllPayouts({ uniqueExternalId } = {}) {
    const queryObj = {};
    queryObj["unique_external_id"] = uniqueExternalId;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save Payout
   * @description: Save Payout
   * @param {Object} arg - arg object.
   * @param {PayoutRequest} arg.body
   **/
  savePayout({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update Payout
   * @description: Update Payout
   * @param {Object} arg - arg object.
   * @param {string} arg.uniqueTransferNo - Unique transfer id
   * @param {PayoutRequest} arg.body
   **/
  updatePayout({ uniqueTransferNo, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Partial Update Payout
   * @description: Partial Update Payout
   * @param {Object} arg - arg object.
   * @param {string} arg.uniqueTransferNo - Unique transfer id
   * @param {UpdatePayoutRequest} arg.body
   **/
  activateAndDectivatePayout({ uniqueTransferNo, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "patch",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete Payout
    * @description: Delete Payout
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueTransferNo - Unique transfer id
    
    **/
  deletePayout({ uniqueTransferNo } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/payouts/${uniqueTransferNo}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List Subscription Payment Method
    * @description: Get all  Subscription  Payment Method
    * @param {Object} arg - arg object.
    
    **/
  getSubscriptionPaymentMethod({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/methods`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete Subscription Payment Method
    * @description: Uses this api to Delete Subscription Payment Method
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueExternalId - 
    * @param {string} arg.paymentMethodId - 
    
    **/
  deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId } = {}) {
    const queryObj = {};
    queryObj["unique_external_id"] = uniqueExternalId;
    queryObj["payment_method_id"] = paymentMethodId;

    return APIClient.execute(
      this.config,
      "delete",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/methods`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List Subscription Config
    * @description: Get all  Subscription Config details
    * @param {Object} arg - arg object.
    
    **/
  getSubscriptionConfig({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/configs`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save Subscription Setup Intent
   * @description: Uses this api to Save Subscription Setup Intent
   * @param {Object} arg - arg object.
   * @param {SaveSubscriptionSetupIntentRequest} arg.body
   **/
  saveSubscriptionSetupIntent({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/subscription/setup/intent`,
      queryObj,
      body
    );
  }
}

class CompanyProfile {
  constructor(config) {
    this.config = config;
  }

  /**
    *
    * @summary: Get company profile
    * @description: This API allows to view the company profile of the seller account.
    * @param {Object} arg - arg object.
    
    **/
  cbsOnboardGet({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edit company profile
   * @description: This API allows to edit the company profile of the seller account.
   * @param {Object} arg - arg object.
   * @param {CompanyStoreSerializerRequest} arg.body
   **/
  updateCompany({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "patch",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get company metrics
    * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
    * @param {Object} arg - arg object.
    
    **/
  getCompanyMetrics({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/metrics`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edit a brand.
   * @description: This API allows to edit meta of a brand.
   * @param {Object} arg - arg object.
   * @param {string} arg.brandId - Id of the brand to be viewed.
   * @param {CreateUpdateBrandRequestSerializer} arg.body
   **/
  editBrand({ brandId, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand/${brandId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a single brand.
    * @description: This API helps to get data associated to a particular brand.
    * @param {Object} arg - arg object.
    * @param {string} arg.brandId - Id of the brand to be viewed.
    
    **/
  getBrand({ brandId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand/${brandId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a Brand.
   * @description: This API allows to create a brand associated to a company.
   * @param {Object} arg - arg object.
   * @param {CreateUpdateBrandRequestSerializer} arg.body
   **/
  createBrand({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/brand`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create a company brand mapping.
   * @description: This API allows to create a company brand mapping, for a already existing brand in the system.
   * @param {Object} arg - arg object.
   * @param {CompanyBrandPostRequestSerializer} arg.body
   **/
  createBrand({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/company-brand`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get brands associated to a company
    * @description: This API helps to get view brands associated to a particular company.
    * @param {Object} arg - arg object.
    
    **/
  getBrands({} = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/company-brand`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create a location asscoiated to a company.
   * @description: This API allows to create a location associated to a company.
   * @param {Object} arg - arg object.
   * @param {LocationSerializer} arg.body
   **/
  createLocation({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location`,
      queryObj,
      body
    );
  }

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
  getLocations({ storeType, q, stage, pageNo, pageSize } = {}) {
    const queryObj = {};
    queryObj["store_type"] = storeType;
    queryObj["q"] = q;
    queryObj["stage"] = stage;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edit a location asscoiated to a company.
   * @description: This API allows to edit a location associated to a company.
   * @param {Object} arg - arg object.
   * @param {string} arg.locationId - Id of the location which you want to edit.
   * @param {LocationSerializer} arg.body
   **/
  updateLocation({ locationId, body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "put",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location/${locationId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get details of a specific location.
    * @description: This API helps to get data associated to a specific location.
    * @param {Object} arg - arg object.
    * @param {string} arg.locationId - Id of the location which you want to view.
    
    **/
  getLocationDetail({ locationId } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/platform/company-profile/v1.0/company/${this.config.companyId}/location/${locationId}`,
      queryObj,
      undefined
    );
  }
}

class Assets {
  constructor(config) {
    this.config = config;
  }

  /**
   *
   * @summary: Copy Files
   * @description: Copy Files
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.sync] - sync
   * @param {BulkRequest} arg.body
   **/
  companyCopyFiles({ body, sync } = {}) {
    const queryObj = {};
    queryObj["sync"] = sync;

    return APIClient.execute(
      this.config,
      "post",
      `/service/application/assets/v1.0/uploads/company/${this.config.companyId}/copy/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Explain here
   * @description: Describe here
   * @param {Object} arg - arg object.
   * @param {SignUrlRequest} arg.body
   **/
  getSignUrls({ body } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "post",
      `/service/application/assets/v1.0/company/${this.config.companyId}/sign-urls/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Browse Files
    * @description: Browse Files
    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    
    **/
  companyBrowse({ namespace } = {}) {
    const queryObj = {};

    return APIClient.execute(
      this.config,
      "get",
      `/service/application/assets/v1.0/company/${this.config.companyId}/namespaces/${namespace}/browse/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Browse Files
    * @description: Browse Files
    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    
    **/
  companyBrowsePaginator({ namespace } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.companyBrowse({
        namespace: namespace,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
    *
    * @summary: Proxy
    * @description: Proxy
    * @param {Object} arg - arg object.
    * @param {string} arg.url - url
    
    **/
  proxy({ url } = {}) {
    const queryObj = {};
    queryObj["url"] = url;

    return APIClient.execute(
      this.config,
      "post",
      `/service/application/assets/v1.0/company/${this.config.companyId}/proxy/`,
      queryObj,
      undefined
    );
  }
}

module.exports = {
  Payment,
  CompanyProfile,
  Assets,
};
