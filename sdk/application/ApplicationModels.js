const APIClient = require("./APIClient");
const Paginator = require("../common/Paginator");

/**
        @typedef ProductListingActionPage
        
        
        @property { string } [type]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef ProductListingAction
        
        
        @property { ProductListingActionPage } [page]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
         
    */

/**
        @typedef ProductBrand
        
        
        @property { ProductListingAction } [action]
        
        @property { number } [uid]
        
        @property { Media } [logo]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ProductDetailAttribute
        
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef ProductDetailGroupedAttribute
        
        
        @property { string } [title]
        
        @property { Array<ProductDetailAttribute> } [details]
        
         
    */

/**
        @typedef ProductDetail
        
        
        @property { Array<ProductBrand> } [categories]
        
        @property { number } [ratingCount]
        
        @property { Array<ProductDetailGroupedAttribute> } [groupedAttributes]
        
        @property { string } [description]
        
        @property { number } [rating]
        
        @property { string } [productOnlineDate]
        
        @property { number } [uid]
        
        @property { string } slug
        
        @property { Array<string> } [similars]
        
        @property { Array<Media> } [medias]
        
        @property { Array<string> } [tryouts]
        
        @property { string } [imageNature]
        
        @property { string } [name]
        
        @property { Object } [attributes]
        
        @property { ProductBrand } [brand]
        
        @property { string } [teaserTag]
        
        @property { string } [color]
        
        @property { boolean } [hasVariant]
        
        @property { string } [itemType]
        
        @property { string } [shortDescription]
        
        @property { string } [type]
        
        @property { Array<string> } [highlights]
        
         
    */

/**
        @typedef ErrorResponse
        
        
        @property { string } [error]
        
         
    */

/**
        @typedef ProductSizeStores
        
        
        @property { number } [count]
        
         
    */

/**
        @typedef Price
        
        
        @property { string } [currencySymbol]
        
        @property { string } [currencyCode]
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef ProductListingPrice
        
        
        @property { Price } [effective]
        
        @property { Price } [marked]
        
         
    */

/**
        @typedef ProductSize
        
        
        @property { boolean } [isAvailable]
        
        @property { string } [value]
        
        @property { string } [display]
        
        @property { number } [quantity]
        
         
    */

/**
        @typedef ProductSizes
        
        
        @property { string } [discount]
        
        @property { ProductSizeStores } [stores]
        
        @property { ProductListingPrice } [price]
        
        @property { Array<ProductSize> } [sizes]
        
        @property { boolean } [sellable]
        
        @property { Object } [sizeChart]
        
         
    */

/**
        @typedef Seller
        
        
        @property { number } [uid]
        
        @property { number } [count]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ArticleAssignment
        
        
        @property { string } [level]
        
        @property { string } [strategy]
        
         
    */

/**
        @typedef Store
        
        
        @property { number } [uid]
        
        @property { number } [count]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ProductStockPrice
        
        
        @property { number } [effective]
        
        @property { number } [marked]
        
        @property { string } [currency]
        
         
    */

/**
        @typedef ProductSizePriceResponse
        
        
        @property { Seller } [seller]
        
        @property { ArticleAssignment } [articleAssignment]
        
        @property { string } [discount]
        
        @property { Store } [store]
        
        @property { Array<number> } [longLat]
        
        @property { ProductStockPrice } [price]
        
        @property { string } [itemType]
        
        @property { number } [pincode]
        
        @property { string } [specialBadge]
        
        @property { Object } [set]
        
        @property { Array<Object> } [strategyWiseListing]
        
        @property { number } [sellerCount]
        
        @property { ProductStockPrice } [pricePerPrice]
        
        @property { string } [articleId]
        
        @property { number } [quantity]
        
         
    */

/**
        @typedef ProductSizeSellerFilter
        
        
        @property { string } [value]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Page
        
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { string } [type]
        
        @property { number } [size]
        
        @property { boolean } [hasNext]
        
        @property { string } [nextId]
        
        @property { number } [current]
        
         
    */

/**
        @typedef ProductSizeSellersResponse
        
        
        @property { Array<ProductSizeSellerFilter> } [sortOn]
        
        @property { Page } page
        
        @property { Array<ProductSizePriceResponse> } [items]
        
         
    */

/**
        @typedef AttributeDetail
        
        
        @property { string } [key]
        
        @property { string } [description]
        
        @property { string } [display]
        
         
    */

/**
        @typedef ProductsComparisonResponse
        
        
        @property { Array<AttributeDetail> } [attributesMetadata]
        
        @property { Array<ProductDetail> } [items]
        
         
    */

/**
        @typedef ProductCompareResponse
        
        
        @property { Array<AttributeDetail> } [attributesMetadata]
        
        @property { string } [subtitle]
        
        @property { Array<ProductDetail> } [items]
        
        @property { string } [title]
        
         
    */

/**
        @typedef ProductFrequentlyComparedSimilarResponse
        
        
        @property { Array<ProductCompareResponse> } [similars]
        
         
    */

/**
        @typedef ProductSimilarItem
        
        
        @property { string } [subtitle]
        
        @property { Array<ProductDetail> } [items]
        
        @property { string } [title]
        
         
    */

/**
        @typedef SimilarProductByTypeResponse
        
        
        @property { Array<ProductSimilarItem> } [similars]
        
         
    */

/**
        @typedef ProductVariantItemResponse
        
        
        @property { string } [colorName]
        
        @property { string } [value]
        
        @property { Array<Media> } [medias]
        
        @property { string } [color]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { boolean } [isAvailable]
        
        @property { ProductListingAction } [action]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef ProductVariantResponse
        
        
        @property { Array<ProductVariantItemResponse> } [items]
        
        @property { string } [header]
        
        @property { string } [displayType]
        
         
    */

/**
        @typedef ProductVariantsResponse
        
        
        @property { Array<ProductVariantResponse> } [variants]
        
         
    */

/**
        @typedef StoreDetail
        
        
        @property { number } [id]
        
        @property { string } [city]
        
        @property { string } [code]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CompanyDetail
        
        
        @property { number } [id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ProductStockStatusItem
        
        
        @property { Seller } [seller]
        
        @property { Object } [identifier]
        
        @property { StoreDetail } [store]
        
        @property { number } [itemId]
        
        @property { CompanyDetail } [company]
        
        @property { ProductStockPrice } [price]
        
        @property { string } [uid]
        
        @property { string } [size]
        
        @property { number } [quantity]
        
         
    */

/**
        @typedef ProductStockStatusResponse
        
        
        @property { Array<ProductStockStatusItem> } [items]
        
         
    */

/**
        @typedef ProductStockPolling
        
        
        @property { Page } page
        
        @property { Array<ProductStockStatusItem> } [items]
        
         
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
        
        @property { string } [logo]
        
        @property { string } display
        
        @property { string } name
        
         
    */

/**
        @typedef ProductFiltersValue
        
        
        @property { string } value
        
        @property { number } [min]
        
        @property { string } display
        
        @property { string } [queryFormat]
        
        @property { string } [displayFormat]
        
        @property { number } [selectedMin]
        
        @property { number } [selectedMax]
        
        @property { string } [currencyCode]
        
        @property { boolean } isSelected
        
        @property { number } [max]
        
        @property { string } [currencySymbol]
        
        @property { number } [count]
        
         
    */

/**
        @typedef ProductFilters
        
        
        @property { ProductFiltersKey } key
        
        @property { Array<ProductFiltersValue> } values
        
         
    */

/**
        @typedef ProductListingDetail
        
        
        @property { Array<ProductBrand> } [categories]
        
        @property { number } [ratingCount]
        
        @property { Array<ProductDetailGroupedAttribute> } [groupedAttributes]
        
        @property { string } [description]
        
        @property { number } [rating]
        
        @property { string } [productOnlineDate]
        
        @property { string } [discount]
        
        @property { ProductListingPrice } [price]
        
        @property { number } [uid]
        
        @property { string } slug
        
        @property { Array<string> } [similars]
        
        @property { Array<Media> } [medias]
        
        @property { Array<string> } [tryouts]
        
        @property { string } [imageNature]
        
        @property { string } [name]
        
        @property { Object } [attributes]
        
        @property { ProductBrand } [brand]
        
        @property { string } [teaserTag]
        
        @property { string } [color]
        
        @property { boolean } [hasVariant]
        
        @property { string } [itemType]
        
        @property { string } [shortDescription]
        
        @property { string } [type]
        
        @property { Array<string> } [highlights]
        
        @property { boolean } [sellable]
        
         
    */

/**
        @typedef ProductListingResponse
        
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Page } page
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductListingDetail> } [items]
        
         
    */

/**
        @typedef ImageUrls
        
        
        @property { Media } [portrait]
        
        @property { Media } [landscape]
        
         
    */

/**
        @typedef BrandItem
        
        
        @property { string } [discount]
        
        @property { string } [name]
        
        @property { ImageUrls } [banners]
        
        @property { Array<string> } [departments]
        
        @property { number } [uid]
        
        @property { ProductListingAction } [action]
        
        @property { string } [slug]
        
        @property { Media } [logo]
        
         
    */

/**
        @typedef BrandListingResponse
        
        
        @property { Page } page
        
        @property { Array<BrandItem> } [items]
        
         
    */

/**
        @typedef BrandDetailResponse
        
        
        @property { number } [uid]
        
        @property { Media } [logo]
        
        @property { string } [name]
        
        @property { ImageUrls } [banners]
        
         
    */

/**
        @typedef DepartmentIdentifier
        
        
        @property { string } [slug]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CategoryItems
        
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { Array<Object> } [childs]
        
        @property { ProductListingAction } [action]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef DepartmentCategoryTree
        
        
        @property { Array<CategoryItems> } [items]
        
        @property { string } [department]
        
         
    */

/**
        @typedef CategoryListingResponse
        
        
        @property { Array<DepartmentIdentifier> } [departments]
        
        @property { Array<DepartmentCategoryTree> } [data]
        
         
    */

/**
        @typedef CategoryMetaResponse
        
        
        @property { number } [uid]
        
        @property { Media } [logo]
        
        @property { string } [name]
        
        @property { ImageUrls } [banners]
        
         
    */

/**
        @typedef HomeListingResponse
        
        
        @property { Page } page
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { string } [message]
        
         
    */

/**
        @typedef Department
        
        
        @property { number } [priorityOrder]
        
        @property { string } [name]
        
        @property { number } [uid]
        
        @property { string } [slug]
        
        @property { Media } [logo]
        
         
    */

/**
        @typedef DepartmentResponse
        
        
        @property { Array<Department> } [items]
        
         
    */

/**
        @typedef PageQuery
        
        
        @property { Array<string> } [category]
        
        @property { Array<string> } [brand]
        
         
    */

/**
        @typedef AutocompletePage
        
        
        @property { string } [type]
        
        @property { PageQuery } [query]
        
         
    */

/**
        @typedef Action
        
        
        @property { AutocompletePage } [page]
        
        @property { string } [type]
        
         
    */

/**
        @typedef AutocompleteItem
        
        
        @property { Action } [action]
        
        @property { string } [type]
        
        @property { string } [display]
        
        @property { Media } [logo]
        
         
    */

/**
        @typedef AutoCompleteResponse
        
        
        @property { Array<AutocompleteItem> } [items]
        
         
    */

/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [display]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [display]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
        @property { Array<CollectionListingFilterType> } [type]
        
         
    */

/**
        @typedef GetCollectionDetailNest
        
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [description]
        
        @property { Object } [meta]
        
        @property { Media } [logo]
        
        @property { Object } [cron]
        
        @property { boolean } [allowFacets]
        
        @property { Object } [badge]
        
        @property { string } [uid]
        
        @property { string } [slug]
        
        @property { Array<string> } [tag]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { boolean } [isActive]
        
        @property { ProductListingAction } [action]
        
        @property { string } [appId]
        
        @property { boolean } [allowSort]
        
        @property { Object } [schedule]
        
        @property { string } [type]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef GetCollectionListingResponse
        
        
        @property { Page } page
        
        @property { CollectionListingFilter } [filters]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
         
    */

/**
        @typedef CollectionDetailResponse
        
        
        @property { Object } [cron]
        
        @property { boolean } [allowFacets]
        
        @property { boolean } [allowSort]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [badge]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { Object } [schedule]
        
        @property { string } [description]
        
        @property { Object } [query]
        
        @property { string } [type]
        
        @property { boolean } [isActive]
        
        @property { string } [appId]
        
        @property { string } [slug]
        
        @property { Array<string> } [tag]
        
        @property { Object } [meta]
        
        @property { Media } [logo]
        
         
    */

/**
        @typedef GetFollowListingResponse
        
        
        @property { Page } page
        
        @property { Array<Object> } items
        
         
    */

/**
        @typedef FollowPostResponse
        
        
        @property { string } id
        
        @property { string } message
        
         
    */

/**
        @typedef FollowerCountResponse
        
        
        @property { number } [count]
        
         
    */

/**
        @typedef FollowIdsData
        
        
        @property { Array<number> } [products]
        
        @property { Array<number> } [brands]
        
        @property { Array<number> } [collections]
        
         
    */

/**
        @typedef FollowIdsResponse
        
        
        @property { FollowIdsData } [data]
        
         
    */

/**
        @typedef LatLong
        
        
        @property { Array<number> } [coordinates]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Store1
        
        
        @property { string } [storeCode]
        
        @property { string } [address]
        
        @property { string } [state]
        
        @property { number } [pincode]
        
        @property { string } [name]
        
        @property { string } [country]
        
        @property { number } [uid]
        
        @property { string } [city]
        
        @property { LatLong } [latLong]
        
        @property { string } [storeEmail]
        
         
    */

/**
        @typedef StoreListingResponse
        
        
        @property { Page } page
        
        @property { Array<Store1> } items
        
         
    */

/**
        @typedef PromiseTimestamp
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */

/**
        @typedef PromiseFormatted
        
        
        @property { string } [max]
        
        @property { string } [min]
        
         
    */

/**
        @typedef ShipmentPromise
        
        
        @property { PromiseTimestamp } [timestamp]
        
        @property { PromiseFormatted } [formatted]
        
         
    */

/**
        @typedef CartCurrency
        
        
        @property { string } [code]
        
        @property { string } [symbol]
        
         
    */

/**
        @typedef CartProductIdentifer
        
        
        @property { string } [identifier]
        
         
    */

/**
        @typedef CategoryInfo
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef BaseInfo
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Image
        
        
        @property { string } [aspectRatio]
        
        @property { string } [url]
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef ActionQuery
        
        
        @property { Array<string> } [productSlug]
        
         
    */

/**
        @typedef ProductAction
        
        
        @property { ActionQuery } [query]
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Product
        
        
        @property { string } [slug]
        
        @property { Array<CategoryInfo> } [categories]
        
        @property { number } [uid]
        
        @property { BaseInfo } [brand]
        
        @property { Array<Image> } [images]
        
        @property { string } [type]
        
        @property { ProductAction } [action]
        
        @property { string } [name]
        
         
    */

/**
        @typedef BasePrice
        
        
        @property { number } [marked]
        
        @property { string } [currencySymbol]
        
        @property { string } [currencyCode]
        
        @property { number } [effective]
        
         
    */

/**
        @typedef ArticlePriceInfo
        
        
        @property { BasePrice } [base]
        
        @property { BasePrice } [converted]
        
         
    */

/**
        @typedef ProductArticle
        
        
        @property { number } [quantity]
        
        @property { BaseInfo } [store]
        
        @property { string } [uid]
        
        @property { BaseInfo } [seller]
        
        @property { string } [size]
        
        @property { string } [type]
        
        @property { ArticlePriceInfo } [price]
        
         
    */

/**
        @typedef ProductAvailability
        
        
        @property { boolean } [deliverable]
        
        @property { boolean } [isValid]
        
        @property { number } [otherStoreQuantity]
        
        @property { boolean } [outOfStock]
        
        @property { Array<string> } [sizes]
        
         
    */

/**
        @typedef ProductPrice
        
        
        @property { number } [addOn]
        
        @property { string } [currencySymbol]
        
        @property { number } [effective]
        
        @property { number } [selling]
        
        @property { number } [marked]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef ProductPriceInfo
        
        
        @property { ProductPrice } [base]
        
        @property { ProductPrice } [converted]
        
         
    */

/**
        @typedef CartProductInfo
        
        
        @property { string } [discount]
        
        @property { number } [quantity]
        
        @property { Object } [bulkOffer]
        
        @property { CartProductIdentifer } identifiers
        
        @property { Product } [product]
        
        @property { string } [message]
        
        @property { boolean } [isSet]
        
        @property { ProductArticle } [article]
        
        @property { ProductAvailability } [availability]
        
        @property { string } [couponMessage]
        
        @property { ProductPriceInfo } [price]
        
        @property { string } [key]
        
         
    */

/**
        @typedef CouponBreakup
        
        
        @property { boolean } [isApplied]
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { number } [uid]
        
        @property { string } [type]
        
        @property { number } [value]
        
         
    */

/**
        @typedef LoyaltyPoints
        
        
        @property { number } [total]
        
        @property { number } [applicable]
        
        @property { boolean } [isApplied]
        
        @property { string } [description]
        
         
    */

/**
        @typedef DisplayBreakup
        
        
        @property { string } [currencySymbol]
        
        @property { Array<string> } [message]
        
        @property { string } [display]
        
        @property { string } [currencyCode]
        
        @property { number } [value]
        
        @property { string } [key]
        
         
    */

/**
        @typedef RawBreakup
        
        
        @property { number } [total]
        
        @property { number } [subtotal]
        
        @property { number } [codCharge]
        
        @property { number } [fyndCash]
        
        @property { number } [deliveryCharge]
        
        @property { number } [coupon]
        
        @property { number } [youSaved]
        
         
    */

/**
        @typedef CartBreakup
        
        
        @property { CouponBreakup } [coupon]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { Array<DisplayBreakup> } [display]
        
        @property { RawBreakup } [raw]
        
         
    */

/**
        @typedef CartResponse
        
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { string } [checkoutMode]
        
        @property { boolean } [restrictCheckout]
        
        @property { CartCurrency } [currency]
        
        @property { string } [comment]
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [couponText]
        
        @property { string } [message]
        
        @property { CartBreakup } [breakupValues]
        
        @property { string } [gstin]
        
        @property { string } [uid]
        
        @property { boolean } [isValid]
        
        @property { number } [cartId]
        
        @property { string } [lastModified]
        
        @property { string } [deliveryChargeInfo]
        
         
    */

/**
        @typedef AddProductCart
        
        
        @property { Object } [articleAssignment]
        
        @property { string } [itemSize]
        
        @property { number } [quantity]
        
        @property { string } [articleId]
        
        @property { number } [storeId]
        
        @property { string } [display]
        
        @property { boolean } [pos]
        
        @property { number } [sellerId]
        
        @property { number } [itemId]
        
         
    */

/**
        @typedef AddCartRequest
        
        
        @property { Array<AddProductCart> } [items]
        
         
    */

/**
        @typedef AddCartResponse
        
        
        @property { boolean } [partial]
        
        @property { CartResponse } [cart]
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef UpdateProductCart
        
        
        @property { string } [itemSize]
        
        @property { number } [quantity]
        
        @property { number } [itemIndex]
        
        @property { CartProductIdentifer } identifiers
        
        @property { string } [articleId]
        
        @property { number } [itemId]
        
         
    */

/**
        @typedef UpdateCartRequest
        
        
        @property { string } operation
        
        @property { Array<UpdateProductCart> } [items]
        
         
    */

/**
        @typedef UpdateCartResponse
        
        
        @property { CartResponse } [cart]
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef CartItemCountResponse
        
        
        @property { number } [userCartItemsCount]
        
         
    */

/**
        @typedef Coupon
        
        
        @property { boolean } [isApplied]
        
        @property { string } [couponCode]
        
        @property { string } [subTitle]
        
        @property { string } [message]
        
        @property { string } [expiresOn]
        
        @property { string } [title]
        
        @property { boolean } [isApplicable]
        
        @property { number } [maxDiscountValue]
        
        @property { number } [minimumCartValue]
        
        @property { number } [couponValue]
        
         
    */

/**
        @typedef PageCoupon
        
        
        @property { number } [total]
        
        @property { number } [totalItemCount]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
         
    */

/**
        @typedef GetCouponResponse
        
        
        @property { Array<Coupon> } [availableCouponList]
        
        @property { PageCoupon } [page]
        
         
    */

/**
        @typedef ApplyCouponRequest
        
        
        @property { string } couponCode
        
         
    */

/**
        @typedef OfferPrice
        
        
        @property { string } [currencySymbol]
        
        @property { number } [effective]
        
        @property { number } [marked]
        
        @property { string } [currencyCode]
        
        @property { number } [bulkEffective]
        
         
    */

/**
        @typedef OfferItem
        
        
        @property { number } [total]
        
        @property { number } [quantity]
        
        @property { number } [margin]
        
        @property { boolean } [autoApplied]
        
        @property { boolean } [best]
        
        @property { string } [type]
        
        @property { OfferPrice } [price]
        
         
    */

/**
        @typedef OfferSeller
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef BulkPriceOffer
        
        
        @property { Array<OfferItem> } [offers]
        
        @property { OfferSeller } [seller]
        
         
    */

/**
        @typedef BulkPriceResponse
        
        
        @property { Array<BulkPriceOffer> } [data]
        
         
    */

/**
        @typedef GeoLocation
        
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
         
    */

/**
        @typedef Address
        
        
        @property { boolean } [isDefaultAddress]
        
        @property { number } [uid]
        
        @property { string } [countryCode]
        
        @property { string } [areaCodeSlug]
        
        @property { string } [email]
        
        @property { string } [checkoutMode]
        
        @property { string } [address]
        
        @property { string } [addressType]
        
        @property { string } [landmark]
        
        @property { string } [areaCode]
        
        @property { string } [name]
        
        @property { string } [userId]
        
        @property { string } [area]
        
        @property { number } [addressId]
        
        @property { string } [state]
        
        @property { GeoLocation } [geoLocation]
        
        @property { string } [phone]
        
        @property { string } [city]
        
        @property { Array<Object> } [tags]
        
        @property { Object } [meta]
        
        @property { string } [country]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef GetAddressesResponse
        
        
        @property { Array<Address> } [address]
        
         
    */

/**
        @typedef SaveAddressResponse
        
        
        @property { boolean } [isDefaultAddress]
        
        @property { number } [addressId]
        
        @property { string } [success]
        
         
    */

/**
        @typedef UpdateAddressResponse
        
        
        @property { boolean } [isUpdated]
        
        @property { number } [addressId]
        
        @property { boolean } [success]
        
        @property { boolean } [isDefaultAddress]
        
         
    */

/**
        @typedef DeleteAddressResponse
        
        
        @property { boolean } [isDeleted]
        
        @property { number } [addressId]
        
         
    */

/**
        @typedef SelectCartAddressRequest
        
        
        @property { string } [uid]
        
        @property { string } [addressId]
        
        @property { number } [billingAddressId]
        
         
    */

/**
        @typedef UpdateCartPaymentRequest
        
        
        @property { string } [paymentIdentifier]
        
        @property { string } [paymentMode]
        
        @property { number } [addressId]
        
        @property { number } [uid]
        
        @property { string } [merchantCode]
        
        @property { string } [aggregatorName]
        
         
    */

/**
        @typedef CouponValidity
        
        
        @property { string } [code]
        
        @property { boolean } [valid]
        
        @property { number } [discount]
        
        @property { string } [displayMessageEn]
        
         
    */

/**
        @typedef PaymentUpdate
        
        
        @property { CouponValidity } [couponValidity]
        
        @property { string } [message]
        
        @property { boolean } success
        
         
    */

/**
        @typedef ShipmentResponse
        
        
        @property { number } [fulfillmentId]
        
        @property { Array<CartProductInfo> } [items]
        
        @property { number } [dpId]
        
        @property { string } [fulfillmentType]
        
        @property { Object } [dpOptions]
        
        @property { number } [shipments]
        
        @property { string } [shipmentType]
        
        @property { ShipmentPromise } [promise]
        
        @property { string } [orderType]
        
        @property { string } [boxType]
        
         
    */

/**
        @typedef CartShipmentsResponse
        
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { string } [checkoutMode]
        
        @property { boolean } [restrictCheckout]
        
        @property { CartCurrency } [currency]
        
        @property { string } [comment]
        
        @property { string } [couponText]
        
        @property { string } [message]
        
        @property { CartBreakup } [breakupValues]
        
        @property { string } [gstin]
        
        @property { string } [uid]
        
        @property { boolean } [isValid]
        
        @property { number } [cartId]
        
        @property { string } [lastModified]
        
        @property { Array<ShipmentResponse> } [shipments]
        
        @property { string } [deliveryChargeInfo]
        
         
    */

/**
        @typedef CartCheckoutRequest
        
        
        @property { string } [paymentIdentifier]
        
        @property { string } paymentMode
        
        @property { Object } [billingAddress]
        
        @property { number } [billingAddressId]
        
        @property { Object } [meta]
        
        @property { number } [addressId]
        
        @property { string } [callbackUrl]
        
        @property { string } [fyndstoreEmpId]
        
        @property { boolean } [paymentAutoConfirm]
        
        @property { Object } [paymentParams]
        
        @property { Object } [deliveryAddress]
        
        @property { string } [merchantCode]
        
        @property { Object } [extraMeta]
        
        @property { Object } [staff]
        
        @property { string } [aggregator]
        
        @property { number } [orderingStore]
        
         
    */

/**
        @typedef CheckCart
        
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { CartCurrency } [currency]
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [couponText]
        
        @property { string } [gstin]
        
        @property { boolean } [success]
        
        @property { string } [uid]
        
        @property { boolean } [codAvailable]
        
        @property { number } [codCharges]
        
        @property { string } [checkoutMode]
        
        @property { boolean } [restrictCheckout]
        
        @property { string } [storeCode]
        
        @property { string } [errorMessage]
        
        @property { string } [deliveryChargeInfo]
        
        @property { string } [orderId]
        
        @property { string } [userType]
        
        @property { string } [comment]
        
        @property { string } [message]
        
        @property { CartBreakup } [breakupValues]
        
        @property { number } [cartId]
        
        @property { string } [lastModified]
        
        @property { number } [deliveryChargeOrderValue]
        
        @property { number } [deliveryCharges]
        
        @property { Array<Object> } [storeEmps]
        
        @property { boolean } [isValid]
        
        @property { string } [codMessage]
        
         
    */

/**
        @typedef CartCheckoutResponse
        
        
        @property { Object } [data]
        
        @property { string } [orderId]
        
        @property { string } [callbackUrl]
        
        @property { boolean } [success]
        
        @property { string } [message]
        
        @property { string } [appInterceptUrl]
        
        @property { CheckCart } [cart]
        
         
    */

/**
        @typedef CartMetaRequest
        
        
        @property { Object } [pickUpCustomerDetails]
        
        @property { string } [gstin]
        
        @property { string } [checkoutMode]
        
        @property { string } [comment]
        
         
    */

/**
        @typedef CartMetaResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef CartMetaMissingResponse
        
        
        @property { Array<string> } [errors]
        
         
    */

/**
        @typedef GetShareCartLinkRequest
        
        
        @property { number } uid
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef GetShareCartLinkResponse
        
        
        @property { string } [shareUrl]
        
        @property { string } [token]
        
         
    */

/**
        @typedef SharedCartDetails
        
        
        @property { Object } [source]
        
        @property { Object } [meta]
        
        @property { Object } [user]
        
        @property { string } [token]
        
        @property { string } [createdOn]
        
         
    */

/**
        @typedef SharedCart
        
        
        @property { ShipmentPromise } [deliveryPromise]
        
        @property { string } [checkoutMode]
        
        @property { boolean } [restrictCheckout]
        
        @property { CartCurrency } [currency]
        
        @property { string } [comment]
        
        @property { Array<CartProductInfo> } [items]
        
        @property { string } [couponText]
        
        @property { string } [message]
        
        @property { CartBreakup } [breakupValues]
        
        @property { string } [gstin]
        
        @property { string } [uid]
        
        @property { boolean } [isValid]
        
        @property { number } [cartId]
        
        @property { string } [lastModified]
        
        @property { string } [deliveryChargeInfo]
        
        @property { SharedCartDetails } [sharedCartDetails]
        
         
    */

/**
        @typedef SharedCartResponse
        
        
        @property { string } [error]
        
        @property { SharedCart } [cart]
        
         
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
        @typedef OrderById
        
        
        @property { OrderSchema } order
        
         
    */

/**
        @typedef OrderList
        
        
        @property { Array<OrderSchema> } orders
        
        @property { Page } page
        
         
    */

/**
        @typedef ShipmentById
        
        
        @property { Shipments } shipment
        
         
    */

/**
        @typedef ShipmentReasons
        
        
        @property { Array<Reasons> } reasons
        
         
    */

/**
        @typedef ShipmentStatusUpdateBody
        
        
        @property { Shipments } shipments
        
        @property { boolean } forceTransition
        
        @property { boolean } task
        
         
    */

/**
        @typedef Shipments
        
        
        @property { string } [shipmentId]
        
        @property { string } [orderId]
        
        @property { Array<BreakupValues> } [breakupValues]
        
        @property { boolean } [enableCanReturn]
        
        @property { string } [paymentModeSource]
        
        @property { Array<string> } [shipmentImages]
        
        @property { string } [trackUrl]
        
        @property { string } [trakingNo]
        
        @property { Array<TrackingDetails> } [trackingDetails]
        
        @property { boolean } [beneficiaryDetails]
        
        @property { boolean } [canReturn]
        
        @property { boolean } [enableTracking]
        
        @property { Prices } [prices]
        
        @property { string } [needHelpUrl]
        
        @property { number } [totalBags]
        
        @property { Array<ProductItems> } [items]
        
        @property { DeliveryAddress } [deliveryAddress]
        
        @property { string } [paymentStatus]
        
        @property { Invoice } [invoice]
        
        @property { string } [comment]
        
        @property { string } [orderType]
        
        @property { Promise } [promise]
        
        @property { FulfillingStore } [fulfillingStore]
        
        @property { number } [totalItems]
        
        @property { Array<Bags> } [bags]
        
        @property { boolean } [canCancel]
        
        @property { string } [paymentLogo]
        
        @property { string } [shipmentCreatedAt]
        
        @property { ShipmentStatus } [shipmentStatus]
        
        @property { ShipmentUserInfo } [userInfo]
        
        @property { ShipmentMeta } [meta]
        
         
    */

/**
        @typedef ShipmentId
        
        
        @property { StatusUpdate } [statusUpdate]
        
        @property { Array<any> } [message]
        
        @property { string } [error]
        
        @property { boolean } [status]
        
         
    */

/**
        @typedef StatusUpdate
        
        
        @property { string } [status]
        
         
    */

/**
        @typedef ShipmentStatusUpdate
        
        
        @property { Shipments } shipments
        
         
    */

/**
        @typedef ShipmentTrack
        
        
        @property { Array<Track> } results
        
         
    */

/**
        @typedef OrderSchema
        
        
        @property { string } [orderId]
        
        @property { Array<BreakupValues> } [breakupValues]
        
        @property { string } [orderCreatedTime]
        
        @property { Array<Shipments> } [shipments]
        
        @property { number } [totalShipmentsInOrder]
        
        @property { UserInfo } [userInfo]
        
         
    */

/**
        @typedef PosOrderById
        
        
        @property { OrderSchema } order
        
         
    */

/**
        @typedef Bags
        
        
        @property { Item } [item]
        
        @property { Prices } [prices]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { CurrentStatus } [currentStatus]
        
        @property { BagStatus } [bagStatus]
        
        @property { Dates } [dates]
        
        @property { number } [id]
        
        @property { Status } [status]
        
        @property { string } [type]
        
        @property { FinancialBreakup } [financialBreakup]
        
        @property { Reasons } [reasons]
        
        @property { Article } [article]
        
        @property { string } [journeyType]
        
        @property { CurrentOperationalStatus } [currentOperationalStatus]
        
        @property { string } [displayName]
        
        @property { string } [entityType]
        
        @property { Brand } [brand]
        
        @property { AffiliateBagDetails } [affiliateBagDetails]
        
        @property { GstDetails } [gstDetails]
        
        @property { number } [bagId]
        
        @property { number } [bagUpdateTime]
        
         
    */

/**
        @typedef Item
        
        
        @property { number } [brandId]
        
        @property { boolean } [canCancel]
        
        @property { string } [brand]
        
        @property { Array<any> } [l1Category]
        
        @property { string } [name]
        
        @property { Array<any> } [l2Category]
        
        @property { string } [size]
        
        @property { boolean } [canReturn]
        
        @property { number } [l3Category]
        
        @property { string } [lastUpdatedAt]
        
        @property { string } [slugKey]
        
        @property { Attributes } [attributes]
        
        @property { number } [id]
        
        @property { string } [code]
        
        @property { string } [l3CategoryName]
        
        @property { Array<any> } [image]
        
         
    */

/**
        @typedef Attributes
        
        
        @property { string } [itemCode]
        
        @property { string } [brandName]
        
        @property { string } [countryOfOrigin]
        
         
    */

/**
        @typedef Prices
        
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [fyndCredits]
        
        @property { number } [codCharges]
        
        @property { number } [cashback]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [priceMarked]
        
        @property { number } [transferPrice]
        
        @property { number } [couponValue]
        
        @property { number } [priceEffective]
        
        @property { number } [refundCredit]
        
        @property { number } [amountPaid]
        
        @property { number } [refundAmount]
        
        @property { number } [cashbackApplied]
        
        @property { number } [gstTaxPercentage]
        
        @property { number } [valueOfGood]
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { number } [discount]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [deliveryCharge]
        
         
    */

/**
        @typedef CurrentStatus
        
        
        @property { number } [storeId]
        
        @property { number } [bagId]
        
        @property { string } [createdAt]
        
        @property { string } [stateType]
        
        @property { number } [id]
        
        @property { number } [stateId]
        
        @property { string } [updatedAt]
        
        @property { boolean } [kafkaSync]
        
        @property { string } [status]
        
        @property { BagStateMapper } [bagStateMapper]
        
         
    */

/**
        @typedef BagStateMapper
        
        
        @property { string } [name]
        
        @property { string } [appStateName]
        
        @property { string } [displayName]
        
        @property { string } [appDisplayName]
        
        @property { boolean } [isActive]
        
        @property { boolean } [appFacing]
        
        @property { boolean } [notifyCustomer]
        
        @property { string } [journeyType]
        
        @property { number } [id]
        
        @property { string } [stateType]
        
         
    */

/**
        @typedef BagStatus
        
        
        @property { number } [bagId]
        
        @property { boolean } [kafkaSync]
        
        @property { string } [status]
        
        @property { number } [storeId]
        
        @property { string } [stateType]
        
        @property { number } [id]
        
        @property { string } [updatedAt]
        
        @property { BagStatusBagStateMapper } [bagStateMapper]
        
        @property { number } [stateId]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef BagStatusBagStateMapper
        
        
        @property { string } [appStateName]
        
        @property { boolean } [isActive]
        
        @property { number } [id]
        
        @property { string } [appDisplayName]
        
        @property { boolean } [appFacing]
        
        @property { boolean } [notifyCustomer]
        
        @property { string } [stateType]
        
        @property { string } [journeyType]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
         
    */

/**
        @typedef Dates
        
        
        @property { string } [orderCreated]
        
         
    */

/**
        @typedef Status
        
        
        @property { boolean } [isReturnable]
        
        @property { boolean } [canBeCancelled]
        
        @property { boolean } [enableTracking]
        
        @property { boolean } [isCustomerReturnAllowed]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef FinancialBreakup
        
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [couponValue]
        
        @property { number } [amountPaidRoundoff]
        
        @property { string } [gstFee]
        
        @property { number } [refundCredit]
        
        @property { number } [cashback]
        
        @property { number } [refundAmount]
        
        @property { number } [valueOfGood]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { string } [size]
        
        @property { number } [totalUnits]
        
        @property { number } [discount]
        
        @property { number } [amountPaid]
        
        @property { number } [fyndCredits]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [deliveryCharge]
        
        @property { string } [hsnCode]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [transferPrice]
        
        @property { Identifiers } [identifiers]
        
        @property { string } [gstTag]
        
        @property { number } [priceMarked]
        
        @property { number } [priceEffective]
        
        @property { number } [codCharges]
        
        @property { string } [itemName]
        
        @property { number } [cashbackApplied]
        
        @property { number } [gstTaxPercentage]
        
         
    */

/**
        @typedef Identifiers
        
        
        @property { string } [ean]
        
        @property { string } [skuCode]
        
         
    */

/**
        @typedef Reasons
        
        
        @property { number } [id]
        
        @property { string } [state]
        
        @property { number } [bagId]
        
        @property { string } [slug]
        
        @property { string } [displayName]
        
        @property { string } [reasonText]
        
        @property { boolean } [showTextArea]
        
        @property { string } [feedbackType]
        
        @property { string } [flow]
        
        @property { number } [reasonId]
        
        @property { number } [priority]
        
         
    */

/**
        @typedef Article
        
        
        @property { boolean } [espModified]
        
        @property { string } [size]
        
        @property { string } [id]
        
        @property { ArticleIdentifiers } [identifiers]
        
        @property { boolean } [isSet]
        
        @property { string } [sellerIdentifier]
        
        @property { ReturnConfig } [returnConfig]
        
        @property { string } [uid]
        
        @property { string } [code]
        
         
    */

/**
        @typedef ArticleIdentifiers
        
        
        @property { string } [ean]
        
        @property { string } [skuCode]
        
         
    */

/**
        @typedef ReturnConfig
        
        
        @property { number } [time]
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
         
    */

/**
        @typedef CurrentOperationalStatus
        
        
        @property { number } [id]
        
        @property { number } [stateId]
        
        @property { boolean } [kafkaSync]
        
        @property { CurrentOperationalStatusReasons } [reasons]
        
        @property { number } [storeId]
        
        @property { string } [stateType]
        
        @property { string } [updatedAt]
        
        @property { number } [bagId]
        
        @property { string } [status]
        
        @property { string } [createdAt]
        
        @property { CurrentOperationalStatusBagStateMapper } [bagStateMapper]
        
         
    */

/**
        @typedef CurrentOperationalStatusReasons
        
        
        @property { number } [id]
        
        @property { string } [state]
        
        @property { string } [slug]
        
        @property { string } [displayName]
        
         
    */

/**
        @typedef CurrentOperationalStatusBagStateMapper
        
        
        @property { string } [stateType]
        
        @property { string } [appStateName]
        
        @property { string } [displayName]
        
        @property { number } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [journeyType]
        
        @property { string } [name]
        
        @property { string } [appDisplayName]
        
        @property { boolean } [appFacing]
        
        @property { boolean } [notifyCustomer]
        
         
    */

/**
        @typedef Brand
        
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [brandName]
        
        @property { boolean } [isVirtualInvoice]
        
        @property { number } [id]
        
        @property { boolean } [creditNoteAllowed]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef AffiliateBagDetails
        
        
        @property { string } [affiliateBagId]
        
        @property { string } [affiliateOrderId]
        
        @property { AffiliateMeta } [affiliateMeta]
        
        @property { number } [loyaltyDiscount]
        
        @property { number } [employeeDiscount]
        
         
    */

/**
        @typedef AffiliateMeta
        
        
        @property { number } [sizeLevelTotalQty]
        
        @property { Fynd } [fynd]
        
        @property { boolean } [isPriority]
        
        @property { number } [employeeDiscount]
        
        @property { number } [loyaltyDiscount]
        
         
    */

/**
        @typedef Fynd
        
        
        @property { string } [fulfilmentIdentifier]
        
         
    */

/**
        @typedef GstDetails
        
        
        @property { number } [valueOfGood]
        
        @property { number } [gstTaxPercentage]
        
        @property { boolean } [isDefaultHsnCode]
        
        @property { number } [brandCalculatedAmount]
        
        @property { string } [gstFee]
        
        @property { string } [gstTag]
        
        @property { string } [hsnCode]
        
         
    */

/**
        @typedef BreakupValues
        
        
        @property { string } [display]
        
        @property { number } [value]
        
        @property { string } [name]
        
         
    */

/**
        @typedef DeliveryAddress
        
        
        @property { string } [pincode]
        
        @property { string } [landmark]
        
        @property { string } [contactPerson]
        
        @property { string } [phone]
        
        @property { string } [state]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { string } [createdAt]
        
        @property { string } [addressType]
        
        @property { string } [addressCategory]
        
        @property { string } [area]
        
        @property { string } [city]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [country]
        
        @property { string } [address2]
        
        @property { string } [updatedAt]
        
        @property { string } [name]
        
        @property { string } [address]
        
         
    */

/**
        @typedef FulfillingStore
        
        
        @property { string } [address1]
        
        @property { string } [storeEmail]
        
        @property { string } [code]
        
        @property { StoreAddressJson } [storeAddressJson]
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { string } [pincode]
        
        @property { string } [contactPerson]
        
        @property { Array<any> } [brandStoreTags]
        
        @property { string } [locationType]
        
        @property { string } [address2]
        
        @property { boolean } [isArchived]
        
        @property { number } [id]
        
        @property { string } [createdAt]
        
        @property { boolean } [isEnabledForRecon]
        
        @property { string } [city]
        
        @property { Meta } [meta]
        
        @property { string } [fulfillmentChannel]
        
        @property { boolean } [isActive]
        
        @property { string } [updatedAt]
        
        @property { string } [loginUsername]
        
        @property { string } [phone]
        
        @property { number } [packagingMaterialCount]
        
        @property { string } [name]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef StoreAddressJson
        
        
        @property { string } [area]
        
        @property { string } [city]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [address2]
        
        @property { string } [landmark]
        
        @property { number } [latitude]
        
        @property { string } [addressType]
        
        @property { string } [addressCategory]
        
        @property { string } [state]
        
        @property { string } [pincode]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { string } [updatedAt]
        
        @property { string } [country]
        
        @property { string } [createdAt]
        
        @property { string } [contactPerson]
        
         
    */

/**
        @typedef Meta
        
        
        @property { AdditionalContactDetails } [additionalContactDetails]
        
        @property { Timing } [timing]
        
        @property { Documents } [documents]
        
        @property { string } [displayName]
        
        @property { string } [stage]
        
        @property { string } [gstNumber]
        
        @property { boolean } [allowDpAssignmentFromFynd]
        
         
    */

/**
        @typedef AdditionalContactDetails
        
        
        @property { Array<any> } [number]
        
         
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
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */

/**
        @typedef Closing
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */

/**
        @typedef Documents
        
        
        @property { Gst } [gst]
        
         
    */

/**
        @typedef Gst
        
        
        @property { string } [value]
        
        @property { boolean } [verified]
        
        @property { string } [legalName]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Invoice
        
        
        @property { string } [updatedDate]
        
        @property { string } [invoiceUrl]
        
        @property { string } [labelUrl]
        
         
    */

/**
        @typedef ProductItems
        
        
        @property { string } [code]
        
        @property { string } [lastUpdatedAt]
        
        @property { string } [brand]
        
        @property { Array<any> } [image]
        
        @property { number } [l3Category]
        
        @property { number } [brandId]
        
        @property { string } [name]
        
        @property { boolean } [canCancel]
        
        @property { string } [size]
        
        @property { string } [slugKey]
        
        @property { string } [l3CategoryName]
        
        @property { Array<any> } [l2Category]
        
        @property { number } [id]
        
        @property { boolean } [canReturn]
        
        @property { Array<any> } [l1Category]
        
        @property { Attributes } [attributes]
        
         
    */

/**
        @typedef ShipmentMeta
        
        
        @property { Timestamp } [timestamp]
        
        @property { BagWeight } [bagWeight]
        
        @property { DpOptions } [dpOptions]
        
        @property { string } [orderType]
        
        @property { boolean } [sameStoreAvailable]
        
        @property { boolean } [assignDpFromSb]
        
        @property { string } [dpId]
        
        @property { number } [weight]
        
        @property { Formatted } [formatted]
        
        @property { DebugInfo } [debugInfo]
        
        @property { string } [dpSortKey]
        
        @property { string } [packagingName]
        
         
    */

/**
        @typedef Timestamp
        
        
        @property { string } [max]
        
        @property { string } [min]
        
         
    */

/**
        @typedef BagWeight
         
    */

/**
        @typedef DpOptions
        
        
        @property { DpOptionId } [dpOptionId]
        
         
    */

/**
        @typedef DpOptionId
        
        
        @property { number } [fPriority]
        
        @property { string } [operations]
        
        @property { number } [rPriority]
        
        @property { string } [paymentMode]
        
        @property { number } [fmPriority]
        
        @property { number } [lmPriority]
        
        @property { number } [rvpPriority]
        
        @property { boolean } [assignDpFromSb]
        
         
    */

/**
        @typedef Formatted
        
        
        @property { string } [max]
        
        @property { string } [min]
        
         
    */

/**
        @typedef DebugInfo
        
        
        @property { string } [stormbreakerUuid]
        
         
    */

/**
        @typedef Promise
        
        
        @property { Timestamp } [timestamp]
        
         
    */

/**
        @typedef ShipmentStatus
        
        
        @property { string } [title]
        
        @property { number } [hexCode]
        
         
    */

/**
        @typedef ShipmentUserInfo
        
        
        @property { string } [gender]
        
        @property { string } [mobile]
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
         
    */

/**
        @typedef Track
        
        
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
        @typedef TrackingDetails
        
        
        @property { boolean } [isCurrent]
        
        @property { string } [status]
        
        @property { string } [time]
        
        @property { string } [isPassed]
        
         
    */

/**
        @typedef UserInfo
        
        
        @property { string } [gender]
        
        @property { string } [mobile]
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */

/**
        @typedef ApefaceApiError
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef Access
        
        
        @property { boolean } [answer]
        
        @property { boolean } [askQuestion]
        
        @property { boolean } [comment]
        
        @property { boolean } [rnr]
        
         
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
        @typedef Attribute
        
        
        @property { string } [createdOn]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
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
        @typedef CheckEligibilityResponse
        
        
        @property { Access } [access]
        
        @property { MediaCloud } [mediaCloud]
        
         
    */

/**
        @typedef Cloud
        
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [provider]
        
         
    */

/**
        @typedef CommentRequest
        
        
        @property { Array<string> } comment
        
        @property { string } entityId
        
        @property { string } entityType
        
         
    */

/**
        @typedef CreateQNARequest
        
        
        @property { Array<string> } [choices]
        
        @property { string } entityId
        
        @property { string } entityType
        
        @property { number } [maxLen]
        
        @property { number } [sortPriority]
        
        @property { Array<string> } [tags]
        
        @property { string } text
        
        @property { string } [type]
        
         
    */

/**
        @typedef DeviceMeta
        
        
        @property { string } [appVersion]
        
        @property { string } [platform]
        
         
    */

/**
        @typedef MediaCloud
        
        
        @property { string } [key]
        
        @property { string } [name]
        
        @property { string } [namespace]
        
        @property { string } [path]
        
        @property { string } [provider]
        
        @property { string } [secret]
        
         
    */

/**
        @typedef MediaMeta
        
        
        @property { Cloud } [cloud]
        
        @property { Array<string> } [comment]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [type]
        
        @property { Url } [url]
        
         
    */

/**
        @typedef PageCursor
        
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { string } [type]
        
         
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
        @typedef ReportAbuseRequest
        
        
        @property { string } [description]
        
        @property { string } entityId
        
        @property { string } entityType
        
         
    */

/**
        @typedef SaveAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } slug
        
         
    */

/**
        @typedef TagMeta
        
        
        @property { Array<MediaMeta> } [media]
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */

/**
        @typedef UpdateAbuseStatusRequest
        
        
        @property { boolean } [abusive]
        
        @property { boolean } [active]
        
        @property { boolean } [approve]
        
        @property { string } [description]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { string } [id]
        
         
    */

/**
        @typedef UpdateAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
         
    */

/**
        @typedef UpdateCommentRequest
        
        
        @property { boolean } [active]
        
        @property { boolean } [approve]
        
        @property { Array<string> } comment
        
        @property { string } id
        
         
    */

/**
        @typedef UpdateMediaListRequest
        
        
        @property { boolean } [approve]
        
        @property { boolean } [archive]
        
        @property { string } [entityType]
        
        @property { Array<string> } [ids]
        
         
    */

/**
        @typedef UpdateQNARequest
        
        
        @property { boolean } [active]
        
        @property { boolean } [approve]
        
        @property { Array<string> } [choices]
        
        @property { string } [id]
        
        @property { Array<string> } [tags]
        
         
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
        @typedef UpdateVoteRequest
        
        
        @property { string } [action]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
         
    */

/**
        @typedef Url
        
        
        @property { string } [main]
        
        @property { string } [thumbnail]
        
         
    */

/**
        @typedef VoteRequest
        
        
        @property { string } [action]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
         
    */

/**
        @typedef XCursorGetResponse
        
        
        @property { Object } [items]
        
        @property { PageCursor } [page]
        
         
    */

/**
        @typedef XInsertResponse
        
        
        @property { string } [ids]
        
         
    */

/**
        @typedef XNumberGetResponse
        
        
        @property { Object } [items]
        
        @property { PageNumber } [page]
        
         
    */

/**
        @typedef XUpdateResponse
        
        
        @property { string } [id]
        
         
    */

/**
        @typedef UpdateCartShipmentItem
        
        
        @property { string } articleUid
        
        @property { string } shipmentType
        
        @property { number } [quantity]
        
         
    */

/**
        @typedef UpdateCartShipmentRequest
        
        
        @property { Array<UpdateCartShipmentItem> } shipments
        
         
    */

/**
        @typedef Files
        
        
        @property { string } key
        
        @property { Array<string> } values
        
         
    */

/**
        @typedef CartPosCheckoutRequest
        
        
        @property { Object } [meta]
        
        @property { Object } [deliveryAddress]
        
        @property { Object } [billingAddress]
        
        @property { string } [aggregator]
        
        @property { string } [merchantCode]
        
        @property { number } [addressId]
        
        @property { string } [fyndstoreEmpId]
        
        @property { boolean } [pos]
        
        @property { number } [pickAtStoreUid]
        
        @property { Files } [files]
        
        @property { Object } [staff]
        
        @property { string } paymentMode
        
        @property { Object } [extraMeta]
        
        @property { Object } [paymentParams]
        
        @property { number } [billingAddressId]
        
        @property { string } [callbackUrl]
        
        @property { boolean } [paymentAutoConfirm]
        
        @property { string } orderType
        
        @property { number } [orderingStore]
        
        @property { string } [paymentIdentifier]
        
         
    */

/**
        @typedef CartDeliveryModesResponse
        
        
        @property { Array<number> } [pickupStores]
        
        @property { Array<string> } [availableModes]
        
         
    */

/**
        @typedef PickupStoreDetail
        
        
        @property { string } [storeCode]
        
        @property { string } [city]
        
        @property { string } [areaCode]
        
        @property { string } [addressType]
        
        @property { string } [country]
        
        @property { string } [phone]
        
        @property { number } [pincode]
        
        @property { string } [email]
        
        @property { string } [areaCodeSlug]
        
        @property { string } [address]
        
        @property { string } [landmark]
        
        @property { string } [state]
        
        @property { string } [name]
        
        @property { string } [area]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef StoreDetailsResponse
        
        
        @property { Array<PickupStoreDetail> } [items]
        
         
    */

/**
        @typedef GetPincodeCityResponse
        
        
        @property { string } requestUuid
        
        @property { string } stormbreakerUuid
        
        @property { boolean } success
        
        @property { Data } data
        
         
    */

/**
        @typedef Data
        
        
        @property { Meta } [meta]
        
        @property { Parents } [parents]
        
        @property { string } [subType]
        
        @property { string } [name]
        
        @property { Error } [error]
        
        @property { string } [uid]
        
        @property { string } [displayName]
        
         
    */

/**
        @typedef Parents
        
        
        @property { string } [subType]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [uid]
        
         
    */

/**
        @typedef Error
        
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { string } [message]
        
         
    */

/**
        @typedef GetTatProductReqBody
        
        
        @property { LocationDetails } locationDetails
        
        @property { string } source
        
        @property { string } toPincode
        
        @property { string } action
        
        @property { string } identifier
        
        @property { string } journey
        
         
    */

/**
        @typedef LocationDetails
        
        
        @property { string } [fromPincode]
        
        @property { Articles } [articles]
        
        @property { number } [fulfillmentId]
        
         
    */

/**
        @typedef Articles
        
        
        @property { Error } [error]
        
        @property { Category } [category]
        
        @property { Promise } [promise]
        
         
    */

/**
        @typedef Category
        
        
        @property { number } [id]
        
        @property { string } [level]
        
         
    */

/**
        @typedef GetTatProductResponse
        
        
        @property { LocationDetails } locationDetails
        
        @property { string } requestUuid
        
        @property { Error } error
        
        @property { string } toCity
        
        @property { string } source
        
        @property { string } toPincode
        
        @property { string } action
        
        @property { string } stormbreakerUuid
        
        @property { boolean } success
        
        @property { string } identifier
        
        @property { string } journey
        
         
    */

class Catalog {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get a product
    * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    
    **/
  getProductDetailBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the sizes of a product
    * @description: A product can exist in multiple sizes. Use this API to fetch all the available sizes of a product. If successful, returns a ProductSize object in the response body as specified in `ProductSizes`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param {string} [arg.storeId] - The store id of the product whose sizes need to be retrieved
    
    **/
  getProductSizesBySlug({ slug, storeId } = {}) {
    const query = {};
    query["store_id"] = storeId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get price a product size
    * @description: Any available product can exist in multiple sizes. Sometimes prices may vary among different sizes of the same product. Use this API to retrieve the price of the product of a particular size with the location details it is available in.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param {string} arg.size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0/products/{slug}/sizes/**
    * @param {string} arg.pincode - The pincode of the product for which the price needs to be retrieved.
    * @param {string} [arg.storeId] - The store of the product whose size level price need to be retrieved
    
    **/
  getProductPriceBySlug({ slug, size, pincode, storeId } = {}) {
    const query = {};
    query["store_id"] = storeId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/${size}/pincode/${pincode}/price/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List sellers of a product
    * @description: A product of a particular size can be sold by multiple sellers. Use this API to fetch the sellers who are selling this product and have the stock of a particular size
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param {string} arg.size - The size of the product for which the price needs to be retrieved. You can get the available sizes of a product from **v1.0.0/products/sizes**
    * @param {string} arg.pincode - The pincode of the product for which the price needs to be retrieved.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getProductSellersBySlug({ slug, size, pincode, pageNo, pageSize } = {}) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/sizes/${size}/pincode/${pincode}/sellers/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Compare products
    * @description: Compare between the features of the given set of products Use this API to compare how one product ranks against other products. Note that at least one slug is mandatory in request query.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier `slug` of a products. You can retrieve this from the APIs that list products like **v1.0/products/**
    
    **/
  getProductComparisonBySlugs({ slug } = {}) {
    const query = {};
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/compare/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get comparison between similar products
    * @description: Compare between the features of the given set of products Use this API to compare how one product ranks against other products
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
    
    **/
  getSimilarComparisonProductBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/compare/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get comparison between frequently compared products with the given product
    * @description: Compare between the features of the give product with frequently compared products Use this API to compare how one product ranks against other products
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier `slug` of a product. You can retrieve this from the APIs that list products like **v1.0/products/**
    
    **/
  getComparedFrequentlyProductBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/compared-frequently/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get similar products
    * @description: Get products similar to the one specified by the `identifier`. If successful, it returns a group of similar products based on type as described in `SimilarProductByTypeResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    * @param {string} arg.similarType - The tag_identifier is used to fetch the particular type of similar product such as basic, visual, price, seller, category and spec.
    
    **/
  getProductSimilarByIdentifier({ slug, similarType } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/similar/${similarType}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get variant of a particular product
    * @description: A product can have a different type of variants varies from color to shade etc. Use this API to fetch all the available variants of a product. If successful, returns a Products for different variants type in the response body as specified in `ProductVariantResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    
    **/
  getProductVariantsBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/${slug}/variants/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the stock of a product
    * @description: Retrieve the available stock of the products. You can use this API to retrieve stock of multiple products at a time. Only 50 product IDs can be given in a single API request
    * @param {Object} arg - arg object.
    * @param {string} [arg.itemId] - Product id to get product stock (Max. 50 allowed)
    * @param {string} [arg.alu] - Product identifier alu to get product stock (Max. 50 allowed)
    * @param {string} [arg.skuCode] - Product identifier sku_code to get product stock (Max. 50 allowed)
    * @param {string} [arg.ean] - Product identifier ean to get product stock (Max. 50 allowed)
    * @param {string} [arg.upc] - Product identifier upc to get product stock (Max. 50 allowed)
    
    **/
  getProductStockByIds({ itemId, alu, skuCode, ean, upc } = {}) {
    const query = {};
    query["item_id"] = itemId;
    query["alu"] = alu;
    query["sku_code"] = skuCode;
    query["ean"] = ean;
    query["upc"] = upc;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/stock-status/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the stock of a product
    * @description: Retrieve the available stock of the products. You can use this api to get stock status of products whose inventory is updated in given time
    * @param {Object} arg - arg object.
    * @param {string} arg.timestamp - timestamp in UTC format (2020-07-23T10:27:50Z)
    * @param {number} [arg.pageSize] - Limit of number of items for stock status default 12
    * @param {string} [arg.pageId] - will give next page results
    
    **/
  getProductStockForTimeByIds({ timestamp, pageSize, pageId } = {}) {
    const query = {};
    query["timestamp"] = timestamp;
    query["page_size"] = pageSize;
    query["page_id"] = pageId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/stock-status/poll/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
    * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
    * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
    * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    * @param {number} [arg.pageNo] - If page_type is number then pass it to fetch page items. Default is 1.
    * @param {string} [arg.pageType] - For pagination type should be cursor or number. Default is cursor.
    
    **/
  getProducts({
    q,
    f,
    filters,
    sortOn,
    pageId,
    pageSize,
    pageNo,
    pageType,
  } = {}) {
    const query = {};
    query["q"] = q;
    query["f"] = f;
    query["filters"] = filters;
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;
    query["page_no"] = pageNo;
    query["page_type"] = pageType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/products/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ProductListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
    * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
    * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getProductsPaginator({ q, f, filters, sortOn, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getProducts({
        q: q,
        f: f,
        filters: filters,
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
        pageNo: pageNo,
        pageType: pageType,
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
    * @summary: List all the brands
    * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getBrands({ department, pageNo, pageSize } = {}) {
    const query = {};
    query["department"] = department;
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/brands/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get metadata of a brand
    * @description: Fetch metadata of a brand. If successful, returns a metadata object specified in `BrandDetailResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a brand. i.e; `slug` of a brand. You can retrieve these from the APIs that list brands like **v1.0/brands/**
    
    **/
  getBrandDetailBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/brands/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List all the categories
    * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
    
    **/
  getCategories({ department } = {}) {
    const query = {};
    query["department"] = department;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/categories/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get metadata of a category
    * @description: Fetch metadata of a category. If successful, returns a metadata object specified in `CategoryMetaResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a category. i.e; `slug` of a category. You can retrieve these from the APIs that list categories like **v1.0/categories/**
    
    **/
  getCategoryDetailBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/categories/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a random order. If successful, returns a paginated list of products specified in `HomeListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.sortOn] - Each response will contain **sort_on** param, which should be sent back to make pagination work.
    * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getHomeProducts({ sortOn, pageId, pageSize } = {}) {
    const query = {};
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/home/listing/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List all the departments
    * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
    * @param {Object} arg - arg object.
    
    **/
  getDepartments({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/departments/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get relevant suggestions for a search query
    * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of what is given in query. This is particularly useful to enhance the user experience in search. The given search query can be a partial name of any product, brand and category. For example, if the given search query `q` is _ski_ the relevant search suggestions returned might be a list containing _skirt_, _ski shoes_, __skin cream_ etc.
    * @param {Object} arg - arg object.
    * @param {string} arg.q - The search query. This can be a partial or complete name of a either a product, brand or category
    
    **/
  getSearchResults({ q } = {}) {
    const query = {};
    query["q"] = q;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/auto-complete/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List all the collections
    * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections`
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getCollections({ pageNo, pageSize } = {}) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the items in a collection
    * @description: Get items in a collection specified by its `slug`.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection for which you want to fetch the items
    * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::l3_categories:t-shirts||shirts**
    * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
    * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
    * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getCollectionItemsBySlug({
    slug,
    f,
    filters,
    sortOn,
    pageId,
    pageSize,
  } = {}) {
    const query = {};
    query["f"] = f;
    query["filters"] = filters;
    query["sort_on"] = sortOn;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/${slug}/items/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a particular collection
    * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
    
    **/
  getCollectionDetailBySlug({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/collections/${slug}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a list of followed Products, Brands, Collections
    * @description: A User can follow a Product they like. This API retrieves the products the user have followed. If successful, returns a Followed resource in the response body specified in `GetFollowResponseSchema`
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
    
    **/
  getFollowedListing({ collectionType } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/${collectionType}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: UnFollow a Product
    * @description: You can undo a followed Product or Brand by its id, we refer this action as _unfollow_. Pass the uid of the product in request URL
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
    * @param {number} arg.collectionId - the `id` of the collection type you want to unfollow
    
    **/
  unfollowById({ collectionType, collectionId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Follow a particular Product
    * @description: Follow a particular Product specified by its uid. Pass the uid of the product in request URL
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed. i. e. products, brands, collections
    * @param {number} arg.collectionId - the `id` of the collection type you want to follow
    
    **/
  followById({ collectionType, collectionId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Follow Count
    * @description: Get count of followers for given collection type and collection id.
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - the `type` of the collection products/brands/collections.
    * @param {string} arg.collectionId - the `id` of the product/brand/collection.
    
    **/
  getFollowerCountById({ collectionType, collectionId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/${collectionType}/${collectionId}/count/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the Ids of followed product, brand and collection.
    * @description: You can get the ids of all the followed Product, Brand and Collections. Pass collection_type as query parameter to fetch specific Ids
    * @param {Object} arg - arg object.
    * @param {string} [arg.collectionType] - Type of collection followed. i. e. products, brands, collections
    
    **/
  getFollowIds({ collectionType } = {}) {
    const query = {};
    query["collection_type"] = collectionType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/follow/ids/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: List store meta information.
    * @description: Use this API to get list of stores for specific application. If successful, returns list of stores specified in `StoreListingResponse`
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    * @param {string} [arg.q] - This can be used to search a particulr store by its name or store_code.
    * @param {number} [arg.range] - This can be used to retrieve store within a particular range. For eg range=10000 (in meters)
    * @param {number} [arg.latitude] - This should be the latitude of the location from which one needs to retreive the nearest stores.
    * @param {number} [arg.longitude] - This should be the longitude of the location from which one needs to retreive the nearest stores.
    
    **/
  getStores({ pageNo, pageSize, q, range, latitude, longitude } = {}) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["q"] = q;
    query["range"] = range;
    query["latitude"] = latitude;
    query["longitude"] = longitude;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/catalog/v1.0/locations/`,
      query,
      undefined
    );
  }
}

class Cart {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Fetch all Items Added to  Cart
    * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {number} [arg.assignCardId] - 
    
    **/
  getCart({ uid, i, b, assignCardId } = {}) {
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;
    query["assign_card_id"] = assignCardId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Last-Modified timestamp
    * @description: Fetch Last-Modified timestamp in header metadata
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCartLastModified({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "head",
      `/service/application/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Items to Cart
   * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {AddCartRequest} arg.body
   **/
  addItems({ body, i, b } = {}) {
    const query = {};
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Items already added to Cart
   * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {UpdateCartRequest} arg.body
   **/
  updateCart({ body, uid, i, b } = {}) {
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Cart item count
    * @description: Get total count of item present in cart
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  getItemCount({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/basic`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Coupon
    * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCoupons({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Apply Coupon
    * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {boolean} [arg.p] - 
    * @param {number} [arg.uid] - 
    * @param {ApplyCouponRequest} arg.body
    **/
  applyCoupon({ body, i, b, p, uid } = {}) {
    const query = {};
    query["i"] = i;
    query["b"] = b;
    query["p"] = p;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/coupon`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Coupon Applied
    * @description: Remove Coupon applied on the cart by passing uid in request body.
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  removeCoupon({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get discount offers based on quantity
    * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
    * @param {Object} arg - arg object.
    * @param {number} [arg.itemId] - Item id
    * @param {string} [arg.articleId] - Article mongo id
    * @param {number} [arg.uid] - Item id
    * @param {string} [arg.slug] - Item unique url from product page
    
    **/
  getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const query = {};
    query["item_id"] = itemId;
    query["article_id"] = articleId;
    query["uid"] = uid;
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/bulk-price`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Address
    * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {number} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/address`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Address to the account
   * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
   * @param {Object} arg - arg object.
   * @param {Address} arg.body
   **/
  addAddress({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/address`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Fetch Single Address
    * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} arg.id - 
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {number} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update Address alreay added to account
   * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} arg.id - Address id
   * @param {Address} arg.body
   **/
  updateAddress({ id, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Address Associated to the account
    * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
    * @param {Object} arg - arg object.
    * @param {number} arg.id - Address id
    
    **/
  removeAddress({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Select Address from All Addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   **/
  selectAddress({ body, uid, i, b } = {}) {
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/select-address`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Payment
   * @description: Update Cart Payment for Your Account
   * @param {Object} arg - arg object.
   * @param {string} [arg.uid] -
   * @param {UpdateCartPaymentRequest} arg.body
   **/
  selectPaymentMode({ body, uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/payment`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get Cart Payment for valid coupon
    * @description: Validate coupon for selected payment mode
    * @param {Object} arg - arg object.
    * @param {string} [arg.uid] - 
    * @param {string} [arg.addressId] - 
    * @param {string} [arg.paymentMode] - 
    * @param {string} [arg.paymentIdentifier] - 
    * @param {string} [arg.aggregatorName] - 
    * @param {string} [arg.merchantCode] - 
    
    **/
  validateCouponForPayment({
    uid,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const query = {};
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["payment_mode"] = paymentMode;
    query["payment_identifier"] = paymentIdentifier;
    query["aggregator_name"] = aggregatorName;
    query["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/payment/validate/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get delivery date and options before checkout
    * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.p] - Get payment options or not
    * @param {number} [arg.uid] - Cart id
    * @param {number} [arg.addressId] - Address id
    * @param {string} [arg.areaCode] - Destination pincode.
    
    **/
  getShipments({ p, uid, addressId, areaCode } = {}) {
    const query = {};
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["area_code"] = areaCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/shipment`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Checkout Cart
   * @description: Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway
   * @param {Object} arg - arg object.
   * @param {CartCheckoutRequest} arg.body
   **/
  checkoutCart({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/checkout`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Meta
   * @description: Update cart meta like checkout_mode, gstin.
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] - Cart id received in get cart.
   * @param {CartMetaRequest} arg.body
   **/
  updateCartMeta({ body, uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/cart/v1.0/meta`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Generate Cart sharing link token
   * @description: Generates shared cart snapshot and returns shortlink token
   * @param {Object} arg - arg object.
   * @param {GetShareCartLinkRequest} arg.body
   **/
  getCartShareLink({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/share-cart`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get shared cart snapshot and cart response
    * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    
    **/
  getCartSharedItems({ token } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/cart/v1.0/share-cart/${token}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Merge or Replace existing cart
    * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    * @param {string} arg.action - Operation to perform on existing cart, whether to merge or replace.
    
    **/
  updateCartWithSharedItems({ token, action } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/cart/v1.0/share-cart/${token}/${action}`,
      query,
      undefined
    );
  }
}

class FileStorage {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
    * @description: Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `/v1.0/uploads/{namespace}/start`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `/v1.0/uploads/{namespace}/start` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `/v1.0/uploads/{namespace}/complete` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartRequest} arg.body
    **/
  startUpload({ namespace, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/assets/v1.0/namespaces/${namespace}/upload/start/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
    * @description: Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `/v1.0/uploads/{namespace}/start`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `/v1.0/uploads/{namespace}/start` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `/v1.0/uploads/{namespace}/complete` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartResponse} arg.body
    **/
  completeUpload({ namespace, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/assets/v1.0/namespaces/${namespace}/upload/complete/`,
      query,
      body
    );
  }
}

class Order {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Get Orders for application based on application Id
    * @description: Get Orders
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageNo] - Current page number
    * @param {string} [arg.pageSize] - Page limit
    * @param {string} [arg.fromDate] - From Date
    * @param {string} [arg.toDate] - To Date
    
    **/
  getOrders({ pageNo, pageSize, fromDate, toDate } = {}) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;
    query["from_date"] = fromDate;
    query["to_date"] = toDate;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Order by order id for application based on application Id
    * @description: Get Order By Fynd Order Id
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - Order Id
    
    **/
  getOrderById({ orderId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/${orderId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Shipment by shipment id and order id for application based on application Id
    * @description: Get Shipment
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - Shipment Id
    
    **/
  getShipmentById({ shipmentId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get Shipment reasons by shipment id and order id for application based on application Id
    * @description: Get Shipment Reasons
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - Shipment Id
    
    **/
  getShipmentReasons({ shipmentId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}/reasons`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update Shipment status by shipment id and order id for application based on application Id
   * @description: Update Shipment Status
   * @param {Object} arg - arg object.
   * @param {string} arg.shipmentId - Shipment Id
   * @param {ShipmentStatusUpdateBody} arg.body
   **/
  updateShipmentStatus({ shipmentId, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}/status`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Track Shipment by shipment id and order id for application based on application Id
    * @description: Shipment Track
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - Shipment Id
    
    **/
  trackShipment({ shipmentId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/orders/shipments/${shipmentId}/track`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get POS Order by order id for application based on application Id
    * @description: Get Order By Fynd Order Id
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - Order Id
    
    **/
  getPosOrderById({ orderId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/order/v1.0/pos-order/${orderId}`,
      query,
      undefined
    );
  }
}

class Feedback {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   *
   * @summary: post a new abuse request
   * @description: Report a new abuse for specific entity with description text.
   * @param {Object} arg - arg object.
   * @param {ReportAbuseRequest} arg.body
   **/
  createAbuseReport({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/abuse`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update abuse details
   * @description: Update the abuse details like status and description text.
   * @param {Object} arg - arg object.
   * @param {UpdateAbuseStatusRequest} arg.body
   **/
  updateAbuseReport({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/abuse`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get list of abuse data
    * @description: Get the list of abuse data from entity type and entity ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityId - entity id
    * @param {string} arg.entityType - entity type
    * @param {string} [arg.id] - abuse id
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getAbuseReports({ entityId, entityType, id, pageId, pageSize } = {}) {
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/abuse/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of attribute data
    * @description: Provides a list of all attribute data.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - pagination page number
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getAttributes({ pageNo, pageSize } = {}) {
    const query = {};
    query["page_no"] = pageNo;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/attributes`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add a new attribute request
   * @description: Add a new attribute with its name, slug and description.
   * @param {Object} arg - arg object.
   * @param {SaveAttributeRequest} arg.body
   **/
  createAttribute({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/attributes`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get single attribute data
    * @description: Get a single attribute data from a given slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug of attribute
    
    **/
  getAttribute({ slug } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/attributes/${slug}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update attribute details
   * @description: Update the attribute's name and description.
   * @param {Object} arg - arg object.
   * @param {string} arg.slug - Slug of attribute
   * @param {UpdateAttributeRequest} arg.body
   **/
  updateAttribute({ slug, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/attributes/${slug}`,
      query,
      body
    );
  }

  /**
   *
   * @summary: post a new comment
   * @description: This is used to add a new comment for specific entity.
   * @param {Object} arg - arg object.
   * @param {CommentRequest} arg.body
   **/
  createComment({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/comment`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update comment status
   * @description: Update the comment status (active/approve) or text.
   * @param {Object} arg - arg object.
   * @param {UpdateCommentRequest} arg.body
   **/
  updateComment({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/comment`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get list of comments
    * @description: Get the list of comments from specific entity type.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - entity type
    * @param {string} [arg.id] - comment id
    * @param {string} [arg.entityId] - entity id
    * @param {string} [arg.userId] - user id - flag/filter to get comments for user
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getComments({ entityType, id, entityId, userId, pageId, pageSize } = {}) {
    const query = {};
    query["id"] = id;
    query["entity_id"] = entityId;
    query["user_id"] = userId;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/comment/entity/${entityType}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Checks eligibility and cloud media config
    * @description: Checks eligibility to rate and review and cloud media configuration
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - entity type
    * @param {string} arg.entityId - entity id
    
    **/
  checkEligibility({ entityType, entityId } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/config/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Delete Media
    * @description: Delete Media for the given entity IDs.
    * @param {Object} arg - arg object.
    
    **/
  deleteMedia({} = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/feedback/v1.0/media/`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Media
   * @description: Add Media list for specific entity.
   * @param {Object} arg - arg object.
   * @param {AddMediaListRequest} arg.body
   **/
  createMedia({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/media/`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Media
   * @description: Update Media (archive/approve) for the given entity.
   * @param {Object} arg - arg object.
   * @param {UpdateMediaListRequest} arg.body
   **/
  updateMedia({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/media/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get Media
    * @description: Get Media from the given entity type and entity ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - entity type
    * @param {string} arg.entityId - entity id
    * @param {string} [arg.id] - vote id
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getMedias({ entityType, entityId, id, pageId, pageSize } = {}) {
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/media/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get a review summary
    * @description: Review summary gives ratings and attribute metrics of a review per entity
It gives following response data: review count, rating average. review metrics / attribute rating metrics which contains name, type, average and count.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - entity type
    * @param {string} arg.entityId - entity id
    * @param {string} [arg.id] - review summary identifier
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getReviewSummaries({ entityType, entityId, id, pageId, pageSize } = {}) {
    const query = {};
    query["id"] = id;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/rating/summary/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Add customer reviews
    * @description: Add customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.
    * @param {Object} arg - arg object.
    * @param {UpdateReviewRequest} arg.body
    **/
  createReview({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/review/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Update customer reviews
    * @description: Update customer reviews for specific entity with following data:
attributes rating, entity rating, title, description, media resources and template id.
    * @param {Object} arg - arg object.
    * @param {UpdateReviewRequest} arg.body
    **/
  updateReview({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/review/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get list of customer reviews
    * @description: This is used to get the list of customer reviews based on entity and provided filters.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - entity type
    * @param {string} arg.entityId - entity id
    * @param {string} [arg.id] - review id
    * @param {string} [arg.userId] - user id
    * @param {string} [arg.media] - media type e.g. image | video | video_file | video_link
    * @param {Array<number>} [arg.rating] - rating filter, 1-5
    * @param {Array<string>} [arg.attributeRating] - attribute rating filter
    * @param {boolean} [arg.facets] - facets (true|false)
    * @param {string} [arg.sort] - sort by : default | top | recent
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getReviews({
    entityType,
    entityId,
    id,
    userId,
    media,
    rating,
    attributeRating,
    facets,
    sort,
    pageId,
    pageSize,
  } = {}) {
    const query = {};
    query["id"] = id;
    query["user_id"] = userId;
    query["media"] = media;
    query["rating"] = rating;
    query["attribute_rating"] = attributeRating;
    query["facets"] = facets;
    query["sort"] = sort;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/review/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get the templates for product or l3 type
    * @description: This is used to get the templates details.
    * @param {Object} arg - arg object.
    * @param {string} [arg.templateId] - template id
    * @param {string} [arg.entityId] - entity id
    * @param {string} [arg.entityType] - entity type e.g. product | l3
    
    **/
  getTemplates({ templateId, entityId, entityType } = {}) {
    const query = {};
    query["template_id"] = templateId;
    query["entity_id"] = entityId;
    query["entity_type"] = entityType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/template/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Create a new question
    * @description: This is used to create a new question with following data:
tags, text, type, choices for MCQ type questions, maximum length of answer.
    * @param {Object} arg - arg object.
    * @param {CreateQNARequest} arg.body
    **/
  createQuestion({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/template/qna/`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update question
   * @description: This is used to update question's status, tags and choices.
   * @param {Object} arg - arg object.
   * @param {UpdateQNARequest} arg.body
   **/
  updateQuestion({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/template/qna/`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get a list of QnA
    * @description: This is used to get a list of questions and its answers.
    * @param {Object} arg - arg object.
    * @param {string} arg.entityType - entity type
    * @param {string} arg.entityId - entity id
    * @param {string} [arg.id] - qna id
    * @param {boolean} [arg.showAnswer] - show answer flag
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getQuestionAndAnswers({
    entityType,
    entityId,
    id,
    showAnswer,
    pageId,
    pageSize,
  } = {}) {
    const query = {};
    query["id"] = id;
    query["show_answer"] = showAnswer;
    query["page_id"] = pageId;
    query["page_size"] = pageSize;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/template/qna/entity/${entityType}/entity-id/${entityId}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of votes
    * @description: This is used to get the list of votes of a current logged in user. Votes can be filtered using `ref_type` i.e. review | comment.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - vote id
    * @param {string} [arg.refType] - entity type e.g. review | comment
    
    **/
  getVotes({ id, refType } = {}) {
    const query = {};
    query["id"] = id;
    query["ref_type"] = refType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/feedback/v1.0/vote/`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Create a new vote
   * @description: This is used to create a new vote and the actions can be upvote or downvote.
   * @param {Object} arg - arg object.
   * @param {VoteRequest} arg.body
   **/
  createVote({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/feedback/v1.0/vote/`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update vote
   * @description: This is used to update the vote and the actions can be upvote or downvote.
   * @param {Object} arg - arg object.
   * @param {UpdateVoteRequest} arg.body
   **/
  updateVote({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/feedback/v1.0/vote/`,
      query,
      body
    );
  }
}

class PosCart {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
    *
    * @summary: Fetch all Items Added to  Cart
    * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {number} [arg.assignCardId] - 
    
    **/
  getCart({ uid, i, b, assignCardId } = {}) {
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;
    query["assign_card_id"] = assignCardId;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Last-Modified timestamp
    * @description: Fetch Last-Modified timestamp in header metadata
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCartLastModified({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "head",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Items to Cart
   * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {AddCartRequest} arg.body
   **/
  addItems({ body, i, b } = {}) {
    const query = {};
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Items already added to Cart
   * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {UpdateCartRequest} arg.body
   **/
  updateCart({ body, uid, i, b } = {}) {
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/detail`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Cart item count
    * @description: Get total count of item present in cart
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  getItemCount({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/basic`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Coupon
    * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    
    **/
  getCoupons({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Apply Coupon
    * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
</ul>
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {boolean} [arg.p] - 
    * @param {number} [arg.uid] - 
    * @param {ApplyCouponRequest} arg.body
    **/
  applyCoupon({ body, i, b, p, uid } = {}) {
    const query = {};
    query["i"] = i;
    query["b"] = b;
    query["p"] = p;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Coupon Applied
    * @description: Remove Coupon applied on the cart by passing uid in request body.
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - Cart id
    
    **/
  removeCoupon({ uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/pos/cart/v1.0/coupon`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get discount offers based on quantity
    * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
    * @param {Object} arg - arg object.
    * @param {number} [arg.itemId] - Item id
    * @param {string} [arg.articleId] - Article mongo id
    * @param {number} [arg.uid] - Item id
    * @param {string} [arg.slug] - Item unique url from product page
    
    **/
  getBulkDiscountOffers({ itemId, articleId, uid, slug } = {}) {
    const query = {};
    query["item_id"] = itemId;
    query["article_id"] = articleId;
    query["uid"] = uid;
    query["slug"] = slug;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/bulk-price`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Fetch Address
    * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {number} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/address`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Add Address to the account
   * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
   * @param {Object} arg - arg object.
   * @param {Address} arg.body
   **/
  addAddress({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/address`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Fetch Single Address
    * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {number} arg.id - 
    * @param {number} [arg.uid] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {number} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    **/
  getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault } = {}) {
    const query = {};
    query["uid"] = uid;
    query["mobile_no"] = mobileNo;
    query["checkout_mode"] = checkoutMode;
    query["tags"] = tags;
    query["is_default"] = isDefault;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update Address alreay added to account
   * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} arg.id - Address id
   * @param {Address} arg.body
   **/
  updateAddress({ id, body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Remove Address Associated to the account
    * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
    * @param {Object} arg - arg object.
    * @param {number} arg.id - Address id
    
    **/
  removeAddress({ id } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "delete",
      `/service/application/pos/cart/v1.0/address/${id}`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Select Address from All Addresses
   * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {boolean} [arg.i] -
   * @param {boolean} [arg.b] -
   * @param {SelectCartAddressRequest} arg.body
   **/
  selectAddress({ body, uid, i, b } = {}) {
    const query = {};
    query["uid"] = uid;
    query["i"] = i;
    query["b"] = b;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/select-address`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Payment
   * @description: Update Cart Payment for Your Account
   * @param {Object} arg - arg object.
   * @param {string} [arg.uid] -
   * @param {UpdateCartPaymentRequest} arg.body
   **/
  selectPaymentMode({ body, uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/payment`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get Cart Payment for valid coupon
    * @description: Validate coupon for selected payment mode
    * @param {Object} arg - arg object.
    * @param {string} [arg.uid] - 
    * @param {string} [arg.addressId] - 
    * @param {string} [arg.paymentMode] - 
    * @param {string} [arg.paymentIdentifier] - 
    * @param {string} [arg.aggregatorName] - 
    * @param {string} [arg.merchantCode] - 
    
    **/
  validateCouponForPayment({
    uid,
    addressId,
    paymentMode,
    paymentIdentifier,
    aggregatorName,
    merchantCode,
  } = {}) {
    const query = {};
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["payment_mode"] = paymentMode;
    query["payment_identifier"] = paymentIdentifier;
    query["aggregator_name"] = aggregatorName;
    query["merchant_code"] = merchantCode;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/payment/validate/`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get delivery date and options before checkout
    * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pickAtStoreUid] - 
    * @param {number} [arg.orderingStoreId] - 
    * @param {boolean} [arg.p] - Get payment options or not
    * @param {number} [arg.uid] - Cart id
    * @param {number} [arg.addressId] - Address id
    * @param {string} [arg.areaCode] - Destination pincode.
    * @param {string} [arg.orderType] - Order type of shipment
    
    **/
  getShipments({
    pickAtStoreUid,
    orderingStoreId,
    p,
    uid,
    addressId,
    areaCode,
    orderType,
  } = {}) {
    const query = {};
    query["pick_at_store_uid"] = pickAtStoreUid;
    query["ordering_store_id"] = orderingStoreId;
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["area_code"] = areaCode;
    query["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/shipment`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Update shipment delivery type and quantity before checkout
   * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created. Update the shipment                      type and quantity as per customer preference for store pick up or home delivery
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.i] - Get items or not
   * @param {boolean} [arg.p] - Get payment options or not
   * @param {number} [arg.uid] - Cart id
   * @param {number} [arg.addressId] - Address id
   * @param {string} [arg.orderType] - Order is hand over or home delivery
   * @param {UpdateCartShipmentRequest} arg.body
   **/
  updateShipments({ body, i, p, uid, addressId, orderType } = {}) {
    const query = {};
    query["i"] = i;
    query["p"] = p;
    query["uid"] = uid;
    query["address_id"] = addressId;
    query["order_type"] = orderType;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/shipment`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Checkout Cart
   * @description: Checkout all items in cart to payment and order generation.                        For COD only order will be generated while for other checkout mode                        user will be redirected to payment gateway
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] -
   * @param {CartPosCheckoutRequest} arg.body
   **/
  checkoutCart({ body, uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/checkout`,
      query,
      body
    );
  }

  /**
   *
   * @summary: Update Cart Meta
   * @description: Update cart meta like checkout_mode, gstin.
   * @param {Object} arg - arg object.
   * @param {number} [arg.uid] - Cart id received in get cart.
   * @param {CartMetaRequest} arg.body
   **/
  updateCartMeta({ body, uid } = {}) {
    const query = {};
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "put",
      `/service/application/pos/cart/v1.0/meta`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get available delivery modes for cart
    * @description: Get available delivery modes for cart and pick up store uid list. From given pick stores list user can pick up delivery. Use this uid to show store address
    * @param {Object} arg - arg object.
    * @param {string} arg.areaCode - 
    * @param {number} [arg.uid] - 
    
    **/
  getAvailableDeliveryModes({ areaCode, uid } = {}) {
    const query = {};
    query["area_code"] = areaCode;
    query["uid"] = uid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/available-delivery-mode`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of stores for give uids
    * @description: Get list of stores by providing pick up available store uids.
    * @param {Object} arg - arg object.
    * @param {number} arg.storeUid - 
    
    **/
  getStoreAddressByUid({ storeUid } = {}) {
    const query = {};
    query["store_uid"] = storeUid;

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/store-address`,
      query,
      undefined
    );
  }

  /**
   *
   * @summary: Generate Cart sharing link token
   * @description: Generates shared cart snapshot and returns shortlink token
   * @param {Object} arg - arg object.
   * @param {GetShareCartLinkRequest} arg.body
   **/
  getCartShareLink({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/share-cart`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get shared cart snapshot and cart response
    * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    
    **/
  getCartSharedItems({ token } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/pos/cart/v1.0/share-cart/${token}`,
      query,
      undefined
    );
  }

  /**
    *
    * @summary: Merge or Replace existing cart
    * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Shared short link token.
    * @param {string} arg.action - Operation to perform on existing cart, whether to merge or replace.
    
    **/
  updateCartWithSharedItems({ token, action } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/pos/cart/v1.0/share-cart/${token}/${action}`,
      query,
      undefined
    );
  }
}

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
  }

  /**
   *
   * @summary: Get Tat Product
   * @description: Get Tat Product
   * @param {Object} arg - arg object.
   * @param {GetTatProductReqBody} arg.body
   **/
  getTatProduct({ body } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "post",
      `/service/application/logistics/v1.0`,
      query,
      body
    );
  }

  /**
    *
    * @summary: Get City from Pincode
    * @description: Get City from Pincode
    * @param {Object} arg - arg object.
    * @param {string} arg.pincode - Pincode
    
    **/
  getPincodeCity({ pincode } = {}) {
    const query = {};

    return APIClient.execute(
      this._conf,
      "get",
      `/service/application/logistics/v1.0/pincode/${pincode}`,
      query,
      undefined
    );
  }
}

module.exports = {
  Catalog,
  Cart,
  FileStorage,
  Order,
  Feedback,
  PosCart,
  Logistic,
};
