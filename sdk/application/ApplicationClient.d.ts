export = ApplicationClient;
declare class ApplicationClient {
    constructor(config: any);
    catalog: Catalog;
    cart: Cart;
    lead: Lead;
    theme: Theme;
    user: User;
    content: Content;
    communication: Communication;
    share: Share;
    fileStorage: FileStorage;
    configuration: Configuration;
    payment: Payment;
    order: Order;
    rewards: Rewards;
    feedback: Feedback;
    posCart: PosCart;
    logistic: Logistic;
}
declare class Catalog {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/
     * @returns {Promise<ProductDetail>} - Success response
     * @summary: Get a product
     * @description: Use this API to retrieve a product by its slug value.
     */
    getProductDetailBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/* @param {number}
     *   [arg.storeId] - The ID of the store that is selling the product, e.g. 1,2,3.
     * @returns {Promise<ProductSizes>} - Success response
     * @summary: Get the sizes of a product
     * @description: A product can have multiple sizes. Use this API to fetch all the available sizes of a product.
     */
    getProductSizesBySlug({ slug, storeId }?: {
        slug: string;
        storeId?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/* @param {string} arg.size -
     *   A string indicating the size of the product, e.g. S, M, XL. You can get
     *   slug value from the endpoint
     *   /service/application/catalog/v1.0/products/sizes* @param {string}
     *   arg.pincode - The PIN Code of the area near which the selling locations
     *   should be searched, e.g. 400059* @param {string} [arg.storeId] - The ID
     *   of the store that is selling the product, e.g. 1,2,3.
     * @returns {Promise<ProductSizePriceResponse>} - Success response
     * @summary: Get the price of a product size at a PIN Code
     * @description: Prices may vary for different sizes of a product. Use this API to retrieve the price of a product size at all the selling locations near to a PIN Code.
     */
    getProductPriceBySlug({ slug, size, pincode, storeId }?: {
        slug: string;
        size: string;
        pincode: string;
        storeId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/* @param {string} arg.size -
     *   A string indicating the size of the product, e.g. S, M, XL. You can get
     *   slug value from the endpoint
     *   /service/application/catalog/v1.0/products/sizes* @param {string}
     *   arg.pincode - The 6-digit PIN Code of the area near which the selling
     *   locations should be searched, e.g. 400059* @param {number} [arg.pageNo]
     *   - The page number to navigate through the given set of results.* @param
     *   {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<ProductSizeSellersResponse>} - Success response
     * @summary: Get the sellers of a product size at a PIN Code
     * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
     */
    getProductSellersBySlug({ slug, size, pincode, pageNo, pageSize }?: {
        slug: string;
        size: string;
        pincode: string;
        pageNo?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/
     * @param {string} arg.size - A string indicating the size of the product,
     *   e.g. S, M, XL. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/sizes
     * @param {string} arg.pincode - The 6-digit PIN Code of the area near which
     *   the selling locations should be searched, e.g. 400059
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get the sellers of a product size at a PIN Code
     * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
     */
    getProductSellersBySlugPaginator({ slug, size, pincode, pageSize }?: {
        slug: string;
        size: string;
        pincode: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string[]} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/.
     * @returns {Promise<ProductsComparisonResponse>} - Success response
     * @summary: Compare products
     * @description: Use this API to compare the features of products belonging to the same category. Note that at least one slug is mandatory in the request query.
     */
    getProductComparisonBySlugs({ slug }?: {
        slug: string[];
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/
     * @returns {Promise<ProductCompareResponse>} - Success response
     * @summary: Get comparison between similar products
     * @description: Use this API to compare a given product automatically with similar products. Only one slug is needed.
     */
    getSimilarComparisonProductBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/
     * @returns {Promise<ProductFrequentlyComparedSimilarResponse>} - Success response
     * @summary: Get comparison between frequently compared products with the given product
     * @description: Use this API to compare a given product automatically with products that are frequently compared with it. Only one slug is needed.
     */
    getComparedFrequentlyProductBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/* @param {string}
     *   arg.similarType - Similarity criteria such as basic, visual, price,
     *   seller, category and spec. Visual - Products having similar patterns,
     *   Price - Products in similar price range, Seller - Products sold by the
     *   same seller, Category - Products belonging to the same category, e.g.
     *   sports shoes, Spec - Products having similar specifications, e.g.
     *   phones with same memory.
     * @returns {Promise<SimilarProductByTypeResponse>} - Success response
     * @summary: Get similar products
     * @description: Use this API to retrieve products similar to the one specified by its slug. You can search not only similar looking products, but also those that are sold by same seller, or those that belong to the same category, price, specifications, etc.
     */
    getProductSimilarByIdentifier({ slug, similarType }?: {
        slug: string;
        similarType: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/products/
     * @returns {Promise<ProductVariantsResponse>} - Success response
     * @summary: Get variant of a particular product
     * @description: A product can have a different type of variants such as colour, shade, memory. Use this API to fetch all the available variants of a product using its slug.
     */
    getProductVariantsBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.itemId] - The Item ID of the product (Max. 50
     *   allowed)* @param {string} [arg.alu] - ALU of the product (limited upto
     *   50 ALU identifier in a single request)* @param {string} [arg.skuCode] -
     *   Stock-keeping Unit of the product (limited upto 50 SKU Code in a single
     *   request)* @param {string} [arg.ean] - European Article Number of the
     *   product (limited upto 50 EAN identifier in a single request)* @param
     *   {string} [arg.upc] - Universal Product Code of the product (limited
     *   upto 50 UPC identifier in a single request)
     * @returns {Promise<ProductStockStatusResponse>} - Success response
     * @summary: Get the stock of a product
     * @description: Retrieve the available stock of the products. Use this API to retrieve stock of multiple products (up to 50) at a time.
     */
    getProductStockByIds({ itemId, alu, skuCode, ean, upc }?: {
        itemId?: string;
        alu?: string;
        skuCode?: string;
        ean?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.timestamp - Timestamp in UTC format
     *   (2020-07-23T10:27:50Z)* @param {number} [arg.pageSize] - The number of
     *   items to retrieve in each page.* @param {string} [arg.pageId] - Page ID
     *   to retrieve next set of results.
     * @returns {Promise<ProductStockPolling>} - Success response
     * @summary: Get the stock of a product
     * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
     */
    getProductStockForTimeByIds({ timestamp, pageSize, pageId }?: {
        timestamp: string;
        pageSize?: number;
        pageId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get the stock of a product
     * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
     */
    getProductStockForTimeByIdsPaginator({ timestamp, pageSize }?: {
        timestamp: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search query for entering partial or full
     *   name of product, brand, category, or collection.* @param {string}
     *   [arg.f] - The search filter parameters. Filter parameters will be
     *   passed in f parameter as shown in the example below. Double Pipe (||)
     *   denotes the OR condition, whereas Triple-colon (:::) indicates a new
     *   filter paramater applied as an AND condition.* @param {boolean}
     *   [arg.filters] - This is a boolean value, True for fetching all filter
     *   parameters and False for disabling the filter parameters.* @param
     *   {string} [arg.sortOn] - The order in which the list of products should
     *   be sorted, e.g. popularity, price, latest and discount, in either
     *   ascending or descending order. See the supported values below.* @param
     *   {string} [arg.pageId] - Page ID to retrieve next set of results.*
     *   @param {number} [arg.pageSize] - The number of items to retrieve in
     *   each page.* @param {number} [arg.pageNo] - The page number to navigate
     *   through the given set of results.* @param {string} [arg.pageType] -
     *   Available pagination types are cursor or number.
     * @returns {Promise<ProductListingResponse>} - Success response
     * @summary: Get all the products
     * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
     */
    getProducts({ q, f, filters, sortOn, pageId, pageSize, pageNo, pageType, }?: {
        q?: string;
        f?: string;
        filters?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - The search query for entering partial or full
     *   name of product, brand, category, or collection.
     * @param {string} [arg.f] - The search filter parameters. Filter parameters
     *   will be passed in f parameter as shown in the example below. Double
     *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
     *   indicates a new filter paramater applied as an AND condition.
     * @param {boolean} [arg.filters] - This is a boolean value, True for
     *   fetching all filter parameters and False for disabling the filter parameters.
     * @param {string} [arg.sortOn] - The order in which the list of products
     *   should be sorted, e.g. popularity, price, latest and discount, in
     *   either ascending or descending order. See the supported values below.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get all the products
     * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
     */
    getProductsPaginator({ q, f, filters, sortOn, pageSize }?: {
        q?: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See the list
     *   of available departments below. Also, you can get available departments
     *   from the endpoint /service/application/catalog/v1.0/departments/*
     *   @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.* @param {number} [arg.pageSize] - The number of
     *   items to retrieve in each page.
     * @returns {Promise<BrandListingResponse>} - Success response
     * @summary: Get all the brands
     * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
     */
    getBrands({ department, pageNo, pageSize }?: {
        department?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See the list
     *   of available departments below. Also, you can get available departments
     *   from the endpoint /service/application/catalog/v1.0/departments/
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get all the brands
     * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
     */
    getBrandsPaginator({ department, pageSize }?: {
        department?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a brand. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/brands/.
     * @returns {Promise<BrandDetailResponse>} - Success response
     * @summary: Get metadata of a brand
     * @description: Fetch metadata of a brand such as name, information, logo, banner, etc.
     */
    getBrandDetailBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See the list
     *   of available departments below. Also, you can get available departments
     *   from the endpoint /service/application/catalog/v1.0/departments/
     * @returns {Promise<CategoryListingResponse>} - Success response
     * @summary: List all the categories
     * @description: Use this API to list all the categories. You can also filter the categories by department.
     */
    getCategories({ department }?: {
        department?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a brand. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/brands/.
     * @returns {Promise<CategoryMetaResponse>} - Success response
     * @summary: Get metadata of a category
     * @description: Fetch metadata of a category such as name, information, logo, banner, etc.
     */
    getCategoryDetailBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.sortOn] - The order in which the list of products
     *   should be sorted, e.g. popularity, price, latest and discount, in
     *   either ascending or descending order.* @param {string} [arg.pageId] -
     *   Page ID to retrieve next set of results.* @param {number}
     *   [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<HomeListingResponse>} - Success response
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a random order.
     */
    getHomeProducts({ sortOn, pageId, pageSize }?: {
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.sortOn] - The order in which the list of products
     *   should be sorted, e.g. popularity, price, latest and discount, in
     *   either ascending or descending order.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: List the products
     * @description: List all the products associated with a brand, collection or category in a random order.
     */
    getHomeProductsPaginator({ sortOn, pageSize }?: {
        sortOn?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<DepartmentResponse>} - Success response
     * @summary: List all the departments
     * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
     */
    getDepartments({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.q - The search query for entering partial or full
     *   name of a product, brand or category. For example, if the given search
     *   query `q` is *ski*, the relevant search suggestions could be *skirt*,
     *   *ski shoes*, _*skin cream* etc.
     * @returns {Promise<AutoCompleteResponse>} - Success response
     * @summary: Get relevant suggestions for a search query
     * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of query. This is particularly useful to enhance the user experience while using the search tool.
     */
    getSearchResults({ q }?: {
        q: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.* @param {number} [arg.pageSize] - The number of
     *   items to retrieve in each page.
     * @returns {Promise<GetCollectionListingResponse>} - Success response
     * @summary: List all the collections
     * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
     */
    getCollections({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: List all the collections
     * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
     */
    getCollectionsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a collection. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/collections/.* @param {string}
     *   [arg.f] - The search filter parameters. Filter parameters will be
     *   passed in f parameter as shown in the example below. Double Pipe (||)
     *   denotes the OR condition, whereas Triple-colon (:::) indicates a new
     *   filter paramater applied as an AND condition.* @param {boolean}
     *   [arg.filters] - This is a boolean value, True for fetching all filter
     *   parameters and False for disabling the filter parameters.* @param
     *   {string} [arg.sortOn] - The order in which the list of products should
     *   be sorted, e.g. popularity, price, latest and discount, in either
     *   ascending or descending order. See the supported values below.* @param
     *   {string} [arg.pageId] - Page ID to retrieve next set of results.*
     *   @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<ProductListingResponse>} - Success response
     * @summary: Get the items in a collection
     * @description: Get items in a collection specified by its `slug`.
     */
    getCollectionItemsBySlug({ slug, f, filters, sortOn, pageId, pageSize, }?: {
        slug: string;
        f?: string;
        filters?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a collection. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/collections/.
     * @param {string} [arg.f] - The search filter parameters. Filter parameters
     *   will be passed in f parameter as shown in the example below. Double
     *   Pipe (||) denotes the OR condition, whereas Triple-colon (:::)
     *   indicates a new filter paramater applied as an AND condition.
     * @param {boolean} [arg.filters] - This is a boolean value, True for
     *   fetching all filter parameters and False for disabling the filter parameters.
     * @param {string} [arg.sortOn] - The order in which the list of products
     *   should be sorted, e.g. popularity, price, latest and discount, in
     *   either ascending or descending order. See the supported values below.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get the items in a collection
     * @description: Get items in a collection specified by its `slug`.
     */
    getCollectionItemsBySlugPaginator({ slug, f, filters, sortOn, pageSize, }?: {
        slug: string;
        f?: string;
        filters?: boolean;
        sortOn?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a collection. You can get slug value from the endpoint
     *   /service/application/catalog/v1.0/collections/.
     * @returns {Promise<CollectionDetailResponse>} - Success response
     * @summary: Get a particular collection
     * @description: Get the details of a collection by its `slug`.
     */
    getCollectionDetailBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection followed, i.e.
     *   products, brands, or collections.* @param {string} [arg.pageId] - Page
     *   ID to retrieve next set of results.* @param {number} [arg.pageSize] -
     *   Page ID to retrieve next set of results.
     * @returns {Promise<GetFollowListingResponse>} - Success response
     * @summary: Get a list of followed Products, Brands, Collections
     * @description: Users can follow a product they like. This API retrieves the products the user have followed.
     */
    getFollowedListing({ collectionType, pageId, pageSize }?: {
        collectionType: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection followed, i.e.
     *   products, brands, or collections.
     * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
     * @summary: Get a list of followed Products, Brands, Collections
     * @description: Users can follow a product they like. This API retrieves the products the user have followed.
     */
    getFollowedListingPaginator({ collectionType, pageSize }?: {
        collectionType: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection followed, i.e.
     *   products, brands, or collections.* @param {string} arg.collectionId -
     *   The ID of the collection type.
     * @returns {Promise<FollowPostResponse>} - Success response
     * @summary: Unfollow an entity (product/brand/collection)
     * @description: You can undo a followed product, brand or collection by its ID. This action is referred as _unfollow_.
     */
    unfollowById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection followed, i.e.
     *   products, brands, or collections.* @param {string} arg.collectionId -
     *   The ID of the collection type.
     * @returns {Promise<FollowPostResponse>} - Success response
     * @summary: Follow an entity (product/brand/collection)
     * @description: Follow a particular entity such as product, brand, collection specified by its ID.
     */
    followById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.collectionType - Type of collection, i.e. products,
     *   brands, or collections.* @param {string} arg.collectionId - The ID of
     *   the collection type.
     * @returns {Promise<FollowerCountResponse>} - Success response
     * @summary: Get Follow Count
     * @description: Get the total count of followers for a given collection type and collection ID.
     */
    getFollowerCountById({ collectionType, collectionId }?: {
        collectionType: string;
        collectionId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.collectionType] - Type of collection, i.e. products,
     *   brands, collections.
     * @returns {Promise<FollowIdsResponse>} - Success response
     * @summary: Get the IDs of followed products, brands and collections.
     * @description: You can get the IDs of all the followed Products, Brands and Collections. Pass collection_type as query parameter to fetch specific Ids
     */
    getFollowIds({ collectionType }?: {
        collectionType?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results.* @param {number} [arg.pageSize] - Number of items
     *   to retrieve in each page.* @param {string} [arg.q] - Search a store by
     *   its name or store_code.* @param {number} [arg.range] - Use this to
     *   retrieve stores within a particular range in meters, e.g. 10000, to
     *   indicate a 10km range* @param {number} [arg.latitude] - Latitude of the
     *   location from where one wants to retreive the nearest stores, e.g.
     *   72.8691788* @param {number} [arg.longitude] - Longitude of the location
     *   from where one wants to retreive the nearest stores, e.g. 19.1174114
     * @returns {Promise<StoreListingResponse>} - Success response
     * @summary: Get store meta information.
     * @description: Use this API to get a list of stores in a specific application.
     */
    getStores({ pageNo, pageSize, q, range, latitude, longitude }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
        range?: number;
        latitude?: number;
        longitude?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
     * @param {string} [arg.q] - Search a store by its name or store_code.
     * @param {number} [arg.range] - Use this to retrieve stores within a
     *   particular range in meters, e.g. 10000, to indicate a 10km range
     * @param {number} [arg.latitude] - Latitude of the location from where one
     *   wants to retreive the nearest stores, e.g. 72.8691788
     * @param {number} [arg.longitude] - Longitude of the location from where
     *   one wants to retreive the nearest stores, e.g. 19.1174114
     * @summary: Get store meta information.
     * @description: Use this API to get a list of stores in a specific application.
     */
    getStoresPaginator({ pageSize, q, range, latitude, longitude }?: {
        pageSize?: number;
        q?: string;
        range?: number;
        latitude?: number;
        longitude?: number;
    }): Paginator;
}
declare class Cart {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - * @param {boolean} [arg.i] - * @param
     *   {boolean} [arg.b] - * @param {number} [arg.assignCardId] -
     * @returns {Promise<CartResponse>} - Success response
     * @summary: Fetch all Items Added to  Cart
     * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
     */
    getCart({ uid, i, b, assignCardId }?: {
        uid?: number;
        i?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] -
     * @returns {Promise<any>} - Success response
     * @summary: Fetch Last-Modified timestamp
     * @description: Fetch Last-Modified timestamp in header metadata
     */
    getCartLastModified({ uid }?: {
        uid?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.i] - * @param {boolean} [arg.b] -
     * @param {AddCartRequest} arg.body
     * @returns {Promise<AddCartResponse>} - Success response
     * @summary: Add Items to Cart
     * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
     */
    addItems({ body, i, b }?: {
        i?: boolean;
        b?: boolean;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - * @param {boolean} [arg.i] - * @param
     *   {boolean} [arg.b] -
     * @param {UpdateCartRequest} arg.body
     * @returns {Promise<UpdateCartResponse>} - Success response
     * @summary: Update Items already added to Cart
     * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     */
    updateCart({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - Cart id
     * @returns {Promise<CartItemCountResponse>} - Success response
     * @summary: Cart item count
     * @description: Get total count of item present in cart
     */
    getItemCount({ uid }?: {
        uid?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] -
     * @returns {Promise<GetCouponResponse>} - Success response
     * @summary: Fetch Coupon
     * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
     */
    getCoupons({ uid }?: {
        uid?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.i] - * @param {boolean} [arg.b] - * @param
     *   {boolean} [arg.p] - * @param {number} [arg.uid] -
     * @param {ApplyCouponRequest} arg.body
     * @returns {Promise<CartResponse>} - Success response
     * @summary: Apply Coupon
     * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
     * </ul>
     */
    applyCoupon({ body, i, b, p, uid }?: {
        i?: boolean;
        b?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - Cart id
     * @returns {Promise<CartResponse>} - Success response
     * @summary: Remove Coupon Applied
     * @description: Remove Coupon applied on the cart by passing uid in request body.
     */
    removeCoupon({ uid }?: {
        uid?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.itemId] - Item id* @param {string} [arg.articleId] -
     *   Article mongo id* @param {number} [arg.uid] - Item id* @param {string}
     *   [arg.slug] - Item unique url from product page
     * @returns {Promise<BulkPriceResponse>} - Success response
     * @summary: Get discount offers based on quantity
     * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
     */
    getBulkDiscountOffers({ itemId, articleId, uid, slug }?: {
        itemId?: number;
        articleId?: string;
        uid?: number;
        slug?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - * @param {string} [arg.mobileNo] - * @param
     *   {string} [arg.checkoutMode] - * @param {string} [arg.tags] - * @param
     *   {boolean} [arg.isDefault] -
     * @returns {Promise<GetAddressesResponse>} - Success response
     * @summary: Fetch Address
     * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault }?: {
        uid?: number;
        mobileNo?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {Address} arg.body
     * @returns {Promise<SaveAddressResponse>} - Success response
     * @summary: Add Address to the account
     * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
     */
    addAddress({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.id - * @param {number} [arg.uid] - * @param {string}
     *   [arg.mobileNo] - * @param {string} [arg.checkoutMode] - * @param
     *   {string} [arg.tags] - * @param {boolean} [arg.isDefault] -
     * @returns {Promise<Address>} - Success response
     * @summary: Fetch Single Address
     * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault }?: {
        id: number;
        uid?: number;
        mobileNo?: string;
        checkoutMode?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.id - Address id
     * @param {Address} arg.body
     * @returns {Promise<UpdateAddressResponse>} - Success response
     * @summary: Update Address alreay added to account
     * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     */
    updateAddress({ id, body }?: {
        id: number;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.id - Address id
     * @returns {Promise<DeleteAddressResponse>} - Success response
     * @summary: Remove Address Associated to the account
     * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
     */
    removeAddress({ id }?: {
        id: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - * @param {boolean} [arg.i] - * @param
     *   {boolean} [arg.b] -
     * @param {SelectCartAddressRequest} arg.body
     * @returns {Promise<CartResponse>} - Success response
     * @summary: Select Address from All Addresses
     * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
     */
    selectAddress({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.uid] -
     * @param {UpdateCartPaymentRequest} arg.body
     * @returns {Promise<CartResponse>} - Success response
     * @summary: Update Cart Payment
     * @description: Update Cart Payment for Your Account
     */
    selectPaymentMode({ body, uid }?: {
        uid?: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.uid] - * @param {string} [arg.addressId] - * @param
     *   {string} [arg.paymentMode] - * @param {string} [arg.paymentIdentifier]
     *   - * @param {string} [arg.aggregatorName] - * @param {string}
     *   [arg.merchantCode] -
     * @returns {Promise<PaymentCouponValidate>} - Success response
     * @summary: Get Cart Payment for valid coupon
     * @description: Validate coupon for selected payment mode
     */
    validateCouponForPayment({ uid, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, }?: {
        uid?: string;
        addressId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.p] - Get payment options or not* @param {number}
     *   [arg.uid] - Cart id* @param {number} [arg.addressId] - Address id*
     *   @param {string} [arg.areaCode] - Destination pincode.
     * @returns {Promise<CartShipmentsResponse>} - Success response
     * @summary: Get delivery date and options before checkout
     * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
     */
    getShipments({ p, uid, addressId, areaCode }?: {
        p?: boolean;
        uid?: number;
        addressId?: number;
        areaCode?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CartCheckoutRequest} arg.body
     * @returns {Promise<CartCheckoutResponse>} - Success response
     * @summary: Checkout Cart
     * @description: Checkout all items in cart to payment and order generation.                         For COD only order will be generated while for other checkout mode                         user will be redirected to payment gateway
     */
    checkoutCart({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - Cart id received in get cart.
     * @param {CartMetaRequest} arg.body
     * @returns {Promise<CartMetaResponse>} - Success response
     * @summary: Update Cart Meta
     * @description: Update cart meta like checkout_mode, gstin.
     */
    updateCartMeta({ body, uid }?: {
        uid?: number;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetShareCartLinkRequest} arg.body
     * @returns {Promise<GetShareCartLinkResponse>} - Success response
     * @summary: Generate Cart sharing link token
     * @description: Generates shared cart snapshot and returns shortlink token
     */
    getCartShareLink({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.token - Shared short link token.
     * @returns {Promise<SharedCartResponse>} - Success response
     * @summary: Get shared cart snapshot and cart response
     * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
     */
    getCartSharedItems({ token }?: {
        token: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.token - Shared short link token.* @param {string}
     *   arg.action - Operation to perform on existing cart, whether to merge or replace.
     * @returns {Promise<SharedCartResponse>} - Success response
     * @summary: Merge or Replace existing cart
     * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
     */
    updateCartWithSharedItems({ token, action }?: {
        token: string;
        action: string;
    }): Promise<any>;
}
declare class Lead {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - ID of ticket to be retrieved
     * @returns {Promise<Ticket>} - Success response
     * @summary: Get Ticket with the specific id
     * @description: Get Ticket with the specific id, this is used to view the ticket details
     */
    getTicket({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     * @returns {Promise<TicketHistory>} - Success response
     * @summary: Create history for specific Ticket
     * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     */
    createHistory({ id, body }?: {
        id: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddTicketPayload} arg.body
     * @returns {Promise<Ticket>} - Success response
     * @summary: Create Ticket
     * @description: This is used to Create Ticket.
     */
    createTicket({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @returns {Promise<CustomForm>} - Success response
     * @summary: Get specific Custom Form using it's slug
     * @description: Get specific Custom Form using it's slug, this is used to view the form.
     */
    getCustomForm({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {CustomFormSubmissionPayload} arg.body
     * @returns {Promise<SubmitCustomFormResponse>} - Success response
     * @summary: Submit Response for a specific Custom Form using it's slug
     * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
     */
    submitCustomForm({ slug, body }?: {
        slug: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @returns {Promise<GetParticipantsInsideVideoRoomResponse>} - Success response
     * @summary: Get participants of a specific Video Room using it's unique name
     * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
     */
    getParticipantsInsideVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.uniqueName - Unique name of Video Room
     * @returns {Promise<GetTokenForVideoRoomResponse>} - Success response
     * @summary: Get Token to join a specific Video Room using it's unqiue name
     * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
     */
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): Promise<any>;
}
declare class Theme {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Get the theme currently applied to an application
     * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.
     */
    getAppliedTheme({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.themeId - ID of the theme to be retrieved
     * @returns {Promise<ThemesSchema>} - Success response
     * @summary: Get a theme for a preview
     * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.
     */
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }): Promise<any>;
}
declare class User {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {OAuthRequestSchema} arg.body
     * @returns {Promise<AuthSuccess>} - Success response
     * @summary: Login or Register using Facebook
     * @description: Use this API to login or register using Facebook credentials.
     */
    loginWithFacebook({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OAuthRequestSchema} arg.body
     * @returns {Promise<AuthSuccess>} - Success response
     * @summary: Login or Register using Google
     * @description: Use this API to login or register using Google Account credentials.
     */
    loginWithGoogle({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OAuthRequestSchema} arg.body
     * @returns {Promise<AuthSuccess>} - Success response
     * @summary: Login or Register using Google on Android
     * @description: Use this API to login or register in Android app using Google Account credentials.
     */
    loginWithGoogleAndroid({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OAuthRequestSchema} arg.body
     * @returns {Promise<AuthSuccess>} - Success response
     * @summary: Login or Register using Google on iOS
     * @description: Use this API to login or register in iOS app using Google Account credentials.
     */
    loginWithGoogleIOS({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendOtpRequestSchema} arg.body
     * @returns {Promise<SendOtpResponse>} - Success response
     * @summary: Login or Register with OTP
     * @description: Use this API to login or register with a One-time Password (OTP) sent via Email or SMS.
     */
    loginWithOTP({ body, platform }?: {
        platform?: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PasswordLoginRequestSchema} arg.body
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Login or Register with password
     * @description: Use this API to login or register using an email address and password.
     */
    loginWithEmailAndPassword({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendResetPasswordEmailRequestSchema} arg.body
     * @returns {Promise<ResetPasswordSuccess>} - Success response
     * @summary: Reset Password
     * @description: Use this API to reset a password using the link sent on email.
     */
    sendResetPasswordEmail({ body, platform }?: {
        platform?: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ForgotPasswordRequestSchema} arg.body
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Forgot Password
     * @description: Use this API to reset a password using the code sent on email or SMS.
     */
    forgotPassword({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CodeRequestBodySchema} arg.body
     * @returns {Promise<ResetPasswordSuccess>} - Success response
     * @summary: Reset Password using token
     * @description: Use this API to send code to reset password.
     */
    sendResetToken({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {TokenRequestBodySchema} arg.body
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Login or Register with token
     * @description: Use this API to login or register using a token for authentication.
     */
    loginWithToken({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {FormRegisterRequestSchema} arg.body
     * @returns {Promise<RegisterFormSuccess>} - Success response
     * @summary: Registration using a form
     * @description: Use this API to perform user registration by sending form data in the request body.
     */
    registerWithForm({ body, platform }?: {
        platform?: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CodeRequestBodySchema} arg.body
     * @returns {Promise<VerifyEmailSuccess>} - Success response
     * @summary: Verify email
     * @description: Use this API to send a verification code to verify an email.
     */
    verifyEmail({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CodeRequestBodySchema} arg.body
     * @returns {Promise<VerifyEmailSuccess>} - Success response
     * @summary: Verify mobile
     * @description: Use this API to send a verification code to verify a mobile number.
     */
    verifyMobile({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<HasPasswordSuccess>} - Success response
     * @summary: Check password
     * @description: Use this API to check if user has created a password for login.
     */
    hasPassword({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdatePasswordRequestSchema} arg.body
     * @returns {Promise<VerifyEmailSuccess>} - Success response
     * @summary: Update user password
     * @description: Use this API to update the password.
     */
    updatePassword({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<LogoutSuccess>} - Success response
     * @summary: Logs out currently logged in user
     * @description: Use this API to check to logout a user from the app.
     */
    logout({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendMobileOtpRequestSchema} arg.body
     * @returns {Promise<OtpSuccess>} - Success response
     * @summary: Send OTP on mobile
     * @description: Use this API to send an OTP to a mobile number.
     */
    sendOTPOnMobile({ body, platform }?: {
        platform?: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {VerifyOtpRequestSchema} arg.body
     * @returns {Promise<VerifyOtpSuccess>} - Success response
     * @summary: Verify OTP on mobile
     * @description: Use this API to verify the OTP received on a mobile number.
     */
    verifyMobileOTP({ body, platform }?: {
        platform?: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendEmailOtpRequestSchema} arg.body
     * @returns {Promise<EmailOtpSuccess>} - Success response
     * @summary: Send OTP on email
     * @description: Use this API to send an OTP to an email ID.
     */
    sendOTPOnEmail({ body, platform }?: {
        platform?: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {VerifyEmailOtpRequestSchema} arg.body
     * @returns {Promise<VerifyOtpSuccess>} - Success response
     * @summary: Verify OTP on email
     * @description: Use this API to verify the OTP received on an email ID.
     */
    verifyEmailOTP({ body, platform }?: {
        platform?: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<UserObjectSchema>} - Success response
     * @summary: Get logged in user
     * @description: Use this API  to get the details of a logged in user.
     */
    getLoggedInUser({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<SessionListSuccess>} - Success response
     * @summary: Get list of sessions
     * @description: Use this API to retrieve all active sessions of a user.
     */
    getListOfActiveSessions({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.name] - Name of the application, e.g. Fynd
     * @returns {Promise<PlatformSchema>} - Success response
     * @summary: Get platform configurations
     * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
     */
    getPlatformConfig({ name }?: {
        name?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {EditProfileRequestSchema} arg.body
     * @returns {Promise<ProfileEditSuccess>} - Success response
     * @summary: Edit Profile Details
     * @description: Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture.
     */
    updateProfile({ body, platform }?: {
        platform?: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {EditMobileRequestSchema} arg.body
     * @returns {Promise<VerifyMobileOTPSuccess>} - Success response
     * @summary: Add mobile number to profile
     * @description: Use this API to add a new mobile number to a profile.
     */
    addMobileNumber({ body, platform }?: {
        platform?: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application* @param {boolean}
     *   arg.active - This is a boolean value to check if mobile number is
     *   active 1.True - Number is active 2. False - Number is inactive* @param
     *   {boolean} arg.primary - This is a boolean value to check if mobile
     *   number is primary number (main number) 1. True - Number is primary 2.
     *   False - Number is not primary* @param {boolean} arg.verified - This is
     *   a boolean value to check if mobile number is verified 1. True - Number
     *   is verified 2.False - Number is not verified yet* @param {string}
     *   arg.countryCode - Country code of the phone number, e.g. 91* @param
     *   {string} arg.phone - Phone number
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Delete mobile number from profile
     * @description: Use this API to delete a mobile number from a profile.
     */
    deleteMobileNumber({ active, primary, verified, countryCode, phone, platform, }?: {
        platform?: string;
        active: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SendVerificationLinkMobileRequestSchema} arg.body
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Set mobile as primary
     * @description: Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications.
     */
    setMobileNumberAsPrimary({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {SendVerificationLinkMobileRequestSchema} arg.body
     * @returns {Promise<SendMobileVerifyLinkSuccess>} - Success response
     * @summary: Send verification link to mobile
     * @description: Use this API to send a verification link to a mobile number
     */
    sendVerificationLinkToMobile({ body, platform }?: {
        platform?: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {EditEmailRequestSchema} arg.body
     * @returns {Promise<VerifyEmailOTPSuccess>} - Success response
     * @summary: Add email to profile
     * @description: Use this API to add a new email address to a profile
     */
    addEmail({ body, platform }?: {
        platform?: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application* @param {boolean}
     *   arg.active - This is a boolean value to check if email ID is active 1.
     *   True - Email ID is active 2.False - Email ID is inactive* @param
     *   {boolean} arg.primary - This is a boolean value to check if email ID is
     *   primary (main email ID) 1. True - Email ID is primary 2.False - Email
     *   ID is not primary* @param {boolean} arg.verified - This is a boolean
     *   value to check if email ID is verified 1. True - Email ID is verified
     *   2.False - Email ID is not verified yet* @param {string} arg.email - The
     *   email ID to delete
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Delete email from profile
     * @description: Use this API to delete an email address from a profile
     */
    deleteEmail({ active, primary, verified, email, platform }?: {
        platform?: string;
        active: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {EditEmailRequestSchema} arg.body
     * @returns {Promise<LoginSuccess>} - Success response
     * @summary: Set email as primary
     * @description: Use this API to set an email address as primary. Primary email ID is a email address used for all future communications.
     */
    setEmailAsPrimary({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.platform] - ID of the application
     * @param {EditEmailRequestSchema} arg.body
     * @returns {Promise<SendEmailVerifyLinkSuccess>} - Success response
     * @summary: Send verification link to email
     * @description: Use this API to send verification link to an email address.
     */
    sendVerificationLinkToEmail({ body, platform }?: {
        platform?: string;
        body: any;
    }): Promise<any>;
}
declare class Content {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<AnnouncementsResponseSchema>} - Success response
     * @summary: Get live announcements
     * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve live announcements. Get announcements on individual pages or for all pages.
     */
    getAnnouncements({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a blog. You can get slug value from the endpoint
     *   /service/application/content/v1.0/blogs/.* @param {string} [arg.rootId]
     *   - ID given to the HTML element
     * @returns {Promise<CustomBlogSchema>} - Success response
     * @summary: Get a blog
     * @description: Use this API to get the details of a blog using its slug. Details include the title, reading time, publish status, feature image, tags, author, etc.
     */
    getBlog({ slug, rootId }?: {
        slug: string;
        rootId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1. * @param {number}
     *   [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<BlogGetResponse>} - Success response
     * @summary: Get a list of blogs
     * @description: Use this API to get all the blogs.
     */
    getBlogs({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get a list of blogs
     * @description: Use this API to get all the blogs.
     */
    getBlogsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<FaqResponseSchema>} - Success response
     * @summary: Get a list of FAQs
     * @description: Use this API to get a list of frequently asked questions. Users will benefit from it when facing any issue with the website.
     */
    getFaqs({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<GetFaqCategoriesSchema>} - Success response
     * @summary: Get a list of FAQ categories
     * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
     */
    getFaqCategories({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of an FAQ. You can get slug value from the endpoint
     *   /service/application/content/v1.0/faq.
     * @returns {Promise<FaqSchema>} - Success response
     * @summary: Get an FAQ
     * @description: Use this API to get a particular FAQ by its slug.
     */
    getFaqBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of an FAQ category. You can get slug value from the endpoint
     *   /service/application/content/v1.0/faq/categories.
     * @returns {Promise<GetFaqCategoryBySlugSchema>} - Success response
     * @summary: Get the FAQ category
     * @description: FAQs can be divided into categories. Use this API to get the category to which an FAQ belongs.
     */
    getFaqCategoryBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of an FAQ category. You can get slug value from the endpoint
     *   /service/application/content/v1.0/faq/categories.
     * @returns {Promise<GetFaqSchema>} - Success response
     * @summary: Get FAQs using the slug of FAQ category
     * @description: FAQs can be divided into categories. Use this API to get all the FAQs belonging to a category by using the category slug.
     */
    getFaqsByCategorySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<LandingPageSchema>} - Success response
     * @summary: Get the landing page
     * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch the details of a landing page.
     */
    getLandingPage({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ApplicationLegal>} - Success response
     * @summary: Get legal information
     * @description: Use this API to get the legal information of an application, which includes Privacy Policy, Terms and Conditions, Shipping Policy and FAQs regarding the usage of the application.
     */
    getLegalInformation({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1. * @param {number}
     *   [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<NavigationGetResponse>} - Success response
     * @summary: Get the navigation
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
     */
    getNavigations({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get the navigation
     * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
     */
    getNavigationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a page. You can get slug value from the endpoint
     *   /service/application/content/v1.0/pages/.* @param {string} [arg.rootId]
     *   - ID given to the HTML element
     * @returns {Promise<CustomPageSchema>} - Success response
     * @summary: Get a page
     * @description: Use this API to get the details of a page using its slug. Details include the title, seo, publish status, feature image, tags, meta, etc.
     */
    getPage({ slug, rootId }?: {
        slug: string;
        rootId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1. * @param {number}
     *   [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<PageGetResponse>} - Success response
     * @summary: Get all pages
     * @description: Use this API to get a list of pages.
     */
    getPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get all pages
     * @description: Use this API to get a list of pages.
     */
    getPagesPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<SeoComponent>} - Success response
     * @summary: Get the SEO of an application
     * @description: Use this API to get the SEO details of an application, which includes a robot.txt, meta-tags and sitemap.
     */
    getSEOConfiguration({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1. * @param {number}
     *   [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<SlideshowGetResponse>} - Success response
     * @summary: Get the slideshows
     * @description: Use this API to get a list of slideshows along with their details.
     */
    getSlideshows({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get the slideshows
     * @description: Use this API to get a list of slideshows along with their details.
     */
    getSlideshowsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a slideshow. You can get slug value from the endpoint
     *   /service/application/content/v1.0/slideshow/.
     * @returns {Promise<SlideshowSchema>} - Success response
     * @summary: Get a slideshow
     * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a slideshow using its `slug`.
     */
    getSlideshow({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<Support>} - Success response
     * @summary: Get the support information
     * @description: Use this API to get contact details for customer support including emails and phone numbers.
     */
    getSupportInformation({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<TagsSchema>} - Success response
     * @summary: Get the tags associated with an application
     * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
     */
    getTags({}?: any): Promise<any>;
}
declare class Communication {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<CommunicationConsent>} - Success response
     * @summary: Get communication consent
     * @description: Get communication consent
     */
    getCommunicationConsent({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CommunicationConsentReq} arg.body
     * @returns {Promise<CommunicationConsentRes>} - Success response
     * @summary: Upsert communication consent
     * @description: Upsert communication consent
     */
    upsertCommunicationConsent({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PushtokenReq} arg.body
     * @returns {Promise<PushtokenRes>} - Success response
     * @summary: Upsert push token of a user
     * @description: Upsert push token of a user
     */
    upsertAppPushtoken({ body }?: {
        body: any;
    }): Promise<any>;
}
declare class Share {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<QRCodeResp>} - Success response
     * @summary: Create QR Code of an app
     * @description: Use this API to create a QR code of an app for sharing it with users who want to use the app.
     */
    getApplicationQRCode({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a product. You can get slug value from the endpoint.
     * @returns {Promise<QRCodeResp>} - Success response
     * @summary: Create QR Code of a product
     * @description: Use this API to create a QR code of a product for sharing it with users who want to view/purchase the product.
     */
    getProductQRCodeBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of a collection. You can get slug value from the endpoint.
     * @returns {Promise<QRCodeResp>} - Success response
     * @summary: Create QR Code of a collection
     * @description: Use this API to create a QR code of a collection of products for sharing it with users who want to view/purchase the collection.
     */
    getCollectionQRCodeBySlug({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.url - A link or a web address
     * @returns {Promise<QRCodeResp>} - Success response
     * @summary: Create QR Code of a URL
     * @description: Use this API to create a QR code of a URL for sharing it with users who want to visit the link.
     */
    getUrlQRCode({ url }?: {
        url: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ShortLinkReq} arg.body
     * @returns {Promise<ShortLinkRes>} - Success response
     * @summary: Create a short link
     * @description: Use this API to create a short link that is easy to write/share/read as compared to long URLs.
     */
    createShortLink({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.hash - A string value used for converting long URL to
     *   short URL and vice-versa.
     * @returns {Promise<ShortLinkRes>} - Success response
     * @summary: Get short link by hash
     * @description: Use this API to get a short link by using a hash value.
     */
    getShortLinkByHash({ hash }?: {
        hash: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.hash - A string value used for converting long URL to
     *   short URL and vice-versa.
     * @returns {Promise<ShortLinkRes>} - Success response
     * @summary: Get original link by hash
     * @description: Use this API to retrieve the original link from a short-link by using a hash value.
     */
    getOriginalShortLinkByHash({ hash }?: {
        hash: string;
    }): Promise<any>;
}
declare class FileStorage {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Name of the bucket created for storing objects.
     * @param {StartRequest} arg.body
     * @returns {Promise<StartResponse>} - Success response
     * @summary: Initiates an upload and returns a storage link that is valid for 30 minutes. You can use the storage link to make subsequent upload request with file buffer or blob.
     * @description: Use this API to perform the first step of uploading (i.e. **Start**) an arbitrarily sized buffer or blob.
     *
     * The three major steps are:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `startUpload`.
     * It returns a storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.
     *
     * ### Complete
     * After successfully upload, call the `completeUpload` API to finish the upload process.
     * This operation will return the URL of the uploaded file.
     */
    startUpload({ namespace, body }?: {
        namespace: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Name of the bucket created for storing objects.
     * @param {StartResponse} arg.body
     * @returns {Promise<CompleteResponse>} - Success response
     * @summary: Completes the upload process. After successfully uploading a file, call this API to finish the upload process.
     * @description: Use this API to perform the third step of uploading (i.e. **Complete**) an arbitrarily sized buffer or blob.
     *
     * The three major steps are:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `startUpload`.
     * It returns a storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.
     *
     * ### Complete
     * After successfully upload, call the `completeUpload` API to finish the upload process.
     * This operation will return the URL of the uploaded file.
     */
    completeUpload({ namespace, body }?: {
        namespace: string;
        body: any;
    }): Promise<any>;
    upload({ data, file_name, content_type, namespace, size, tags, }?: {
        data: any;
        file_name: any;
        content_type: any;
        namespace: any;
        size: any;
        tags: any;
    }): Promise<any>;
}
declare class Configuration {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<Application>} - Success response
     * @summary: Get current application details
     * @description: Get current application details.
     */
    getApplication({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ApplicationAboutResponse>} - Success response
     * @summary: Get application, owner and seller information
     * @description: Get application information with owner and seller basic details
     */
    getOwnerInfo({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ApplicationDetail>} - Success response
     * @summary: Get basic application details
     * @description: Get basic application details like name
     */
    getBasicDetails({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<TokenResponse>} - Success response
     * @summary: Get integration tokens
     * @description: Get tokens for multiple integrations like Facebook, Googlemaps, Segment, Firebase, etc. Note: token values are encrypted with AES encryption using secret key. Kindly reach to developers for secret key.
     */
    getIntegrationTokens({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page no* @param {number}
     *   [arg.pageSize] - Current request items count* @param {string} [arg.q] -
     *   Search ordering store by name or store code
     * @returns {Promise<OrderingStores>} - Success response
     * @summary: Get deployment meta stores
     * @description: Get deployment meta stores.
     */
    getOrderingStores({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - Current request items count
     * @param {string} [arg.q] - Search ordering store by name or store code
     * @summary: Get deployment meta stores
     * @description: Get deployment meta stores.
     */
    getOrderingStoresPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<AppFeatureResponse>} - Success response
     * @summary: Get features of application
     * @description: Get features of application
     */
    getFeatures({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ApplicationInformation>} - Success response
     * @summary: Get application information
     * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
     */
    getContactInfo({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<CurrenciesResponse>} - Success response
     * @summary: Get application enabled currencies
     * @description: Get currency list for allowed currencies under current application
     */
    getCurrencies({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Currency object id
     * @returns {Promise<Currency>} - Success response
     * @summary: Get currency by id
     * @description: Get currency object with symbol and name information by id.
     */
    getCurrencyById({ id }?: {
        id: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<LanguageResponse>} - Success response
     * @summary: Get list of languages
     * @description: Get list of supported languages under application.
     */
    getLanguages({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OrderingStoreSelectRequest} arg.body
     * @returns {Promise<SuccessMessageResponse>} - Success response
     * @summary: Get ordering store signed cookie on selection of ordering store. This will be used by cart service to verify coupon against selected ordering store in cart.
     * @description: Get ordering store signed cookie on selection of ordering store.
     */
    getOrderingStoreCookie({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<SuccessMessageResponse>} - Success response
     * @summary: Unset ordering store signed cookie on change of sales channel selection via domain in universal fynd store app.
     * @description: Unset ordering store cookie.
     */
    removeOrderingStoreCookie({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.orderIncent] - This is to check which staff members
     *   are applicable for order incentives.* @param {number}
     *   [arg.orderingStore] - This is to filter staff members from only
     *   selected ordering store.* @param {string} [arg.user] - Get single staff
     *   member details using staff user mongo id
     * @returns {Promise<AppStaffResponse>} - Success response
     * @summary: Get Staff List.
     * @description: Get a staff list based on the user's session token passed in the header.
     */
    getAppStaffs({ orderIncent, orderingStore, user }?: {
        orderIncent?: boolean;
        orderingStore?: number;
        user?: string;
    }): Promise<any>;
}
declare class Payment {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.xApiToken - Api token* @param {boolean} [arg.refresh]
     *   - refresh cache
     * @returns {Promise<AggregatorsConfigDetailResponse>} - Success response
     * @summary: Get payment gateway keys
     * @description: Get payment gateway (key, secrets, merchant, sdk/api detail) to complete payment at front-end.
     */
    getAggregatorsConfig({ xApiToken, refresh }?: {
        xApiToken: string;
        refresh?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AttachCardRequest} arg.body
     * @returns {Promise<AttachCardsResponse>} - Success response
     * @summary: Attach a saved card to customer.
     * @description: Attach a saved card to customer at payment gateway i.e stripe and refresh card cache.
     */
    attachCardToCustomer({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.refresh] -
     * @returns {Promise<ActiveCardPaymentGatewayResponse>} - Success response
     * @summary: Fetch active payment gateway for card
     * @description: Fetch active payment gateway along with customer id for cards payments.
     */
    getActiveCardAggregator({ refresh }?: {
        refresh?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.forceRefresh] -
     * @returns {Promise<ListCardsResponse>} - Success response
     * @summary: Fetch the list of saved cards of user.
     * @description: Fetch the list of saved cards of user from active payment gateway.
     */
    getActiveUserCards({ forceRefresh }?: {
        forceRefresh?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DeletehCardRequest} arg.body
     * @returns {Promise<DeleteCardsResponse>} - Success response
     * @summary: Delete an user card.
     * @description: Delete an added user card on payment gateway and remove from cache.
     */
    deleteUserCard({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ValidateCustomerRequest} arg.body
     * @returns {Promise<ValidateCustomerResponse>} - Success response
     * @summary: Validate customer for payment.
     * @description: Validate customer for payment i.e Simpl paylater, Rupifi loan.
     */
    verifyCustomerForPayment({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ChargeCustomerRequest} arg.body
     * @returns {Promise<ChargeCustomerResponse>} - Success response
     * @summary: Verify and charge payment
     * @description: Verify and charge payment server to server for Simpl & Mswipe.
     */
    verifyAndChargePayment({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentInitializationRequest} arg.body
     * @returns {Promise<PaymentInitializationResponse>} - Success response
     * @summary: Payment Initialisation server to server for UPI and BharatQR.
     * @description: Payment Initialisation for UPI & BharatQR code, UPI requests to app and QR code to be displayed on screen.
     */
    initialisePayment({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {PaymentStatusUpdateRequest} arg.body
     * @returns {Promise<PaymentStatusUpdateResponse>} - Success response
     * @summary: Continous polling to check status of payment on server.
     * @description: Continous polling on interval to check status of payment untill timeout.
     */
    checkAndUpdatePaymentStatus({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.amount - Payment amount* @param {string} arg.cartId -
     *   Cart id* @param {string} arg.pincode - Pincode* @param {string}
     *   arg.checkoutMode - Checkout mode* @param {boolean} [arg.refresh] - *
     *   @param {string} [arg.assignCardId] - selected card id* @param {string}
     *   [arg.userDetails] - URIencoded json annonymous user
     * @returns {Promise<PaymentModeRouteResponse>} - Success response
     * @summary: Get All Valid Payment Options
     * @description: Use this API to get Get All Valid Payment Options for making payment
     */
    getPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, refresh, assignCardId, userDetails, }?: {
        amount: number;
        cartId: string;
        pincode: string;
        checkoutMode: string;
        refresh?: boolean;
        assignCardId?: string;
        userDetails?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.amount - Payment amount* @param {string} arg.cartId -
     *   Cart id* @param {string} arg.pincode - Pincode* @param {string}
     *   arg.checkoutMode - Checkout mode* @param {boolean} [arg.refresh] - *
     *   @param {string} [arg.assignCardId] - selected card id* @param {string}
     *   arg.orderType - Order type* @param {string} [arg.userDetails] -
     *   URIencoded json annonymous user
     * @returns {Promise<PaymentModeRouteResponse>} - Success response
     * @summary: Get All Valid Payment Options for POS
     * @description: Use this API to get Get All Valid Payment Options for making payment
     */
    getPosPaymentModeRoutes({ amount, cartId, pincode, checkoutMode, orderType, refresh, assignCardId, userDetails, }?: {
        amount: number;
        cartId: string;
        pincode: string;
        checkoutMode: string;
        refresh?: boolean;
        assignCardId?: string;
        orderType: string;
        userDetails?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<TransferModeResponse>} - Success response
     * @summary: List Refund Transfer Mode
     * @description: Get all active transfer mode for adding beneficiary details
     */
    getActiveRefundTransferModes({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateRefundTransferModeRequest} arg.body
     * @returns {Promise<UpdateRefundTransferModeResponse>} - Success response
     * @summary: Enable/Disable Refund Transfer Mode
     * @description: Activate or Deactivate Transfer Mode to collect Beneficiary Details for Refund
     */
    enableOrDisableRefundTransferMode({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @returns {Promise<OrderBeneficiaryResponse>} - Success response
     * @summary: List User Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getUserBeneficiariesDetail({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.ifscCode] -
     * @returns {Promise<IfscCodeResponse>} - Success response
     * @summary: Ifsc Code Verification
     * @description: Get True/False for correct IFSC Code for adding bank details for refund
     */
    verifyIfscCode({ ifscCode }?: {
        ifscCode?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId -
     * @returns {Promise<OrderBeneficiaryResponse>} - Success response
     * @summary: List Order Beneficiary
     * @description: Get all active  beneficiary details added by the user for refund
     */
    getOrderBeneficiariesDetail({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddBeneficiaryViaOtpVerificationRequest} arg.body
     * @returns {Promise<AddBeneficiaryViaOtpVerificationResponse>} - Success response
     * @summary: Save Beneficiary details on otp validation.
     * @description: Save Beneficiary details on otp validation.
     */
    verifyOtpAndAddBeneficiaryForBank({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddBeneficiaryDetailsRequest} arg.body
     * @returns {Promise<RefundAccountResponse>} - Success response
     * @summary: Save bank details for cancelled/returned order
     * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
     */
    addBeneficiaryDetails({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {WalletOtpRequest} arg.body
     * @returns {Promise<WalletOtpResponse>} - Success response
     * @summary: Send Otp on Adding wallet beneficiary
     * @description: Send Otp on Adding wallet beneficiary for user mobile verification
     */
    verifyOtpAndAddBeneficiaryForWallet({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SetDefaultBeneficiaryRequest} arg.body
     * @returns {Promise<SetDefaultBeneficiaryResponse>} - Success response
     * @summary: Mark Default Beneficiary For Refund
     * @description: Mark Default Beneficiary ot of all Beneficiary Details for Refund
     */
    updateDefaultBeneficiary({ body }?: {
        body: any;
    }): Promise<any>;
}
declare class Order {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - Current page number* @param {number}
     *   [arg.pageSize] - Page limit* @param {string} [arg.fromDate] - From
     *   Date* @param {string} [arg.toDate] - To Date* @param {number}
     *   [arg.orderStatus] - Order Status
     * @returns {Promise<OrderList>} - Success response
     * @summary: Get Orders for application based on application Id
     * @description: Get Orders
     */
    getOrders({ pageNo, pageSize, fromDate, toDate, orderStatus }?: {
        pageNo?: number;
        pageSize?: number;
        fromDate?: string;
        toDate?: string;
        orderStatus?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - Order Id
     * @returns {Promise<OrderById>} - Success response
     * @summary: Get Order by order id for application based on application Id
     * @description: Get Order By Fynd Order Id
     */
    getOrderById({ orderId }?: {
        orderId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - Shipment Id
     * @returns {Promise<ShipmentById>} - Success response
     * @summary: Get Shipment by shipment id and order id for application based on application Id
     * @description: Get Shipment
     */
    getShipmentById({ shipmentId }?: {
        shipmentId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - Shipment Id
     * @returns {Promise<ShipmentReasons>} - Success response
     * @summary: Get Shipment reasons by shipment id and order id for application based on application Id
     * @description: Get Shipment Reasons
     */
    getShipmentReasons({ shipmentId }?: {
        shipmentId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - Shipment Id
     * @param {ShipmentStatusUpdateBody} arg.body
     * @returns {Promise<ShipmentStatusUpdate>} - Success response
     * @summary: Update Shipment status by shipment id and order id for application based on application Id
     * @description: Update Shipment Status
     */
    updateShipmentStatus({ shipmentId, body }?: {
        shipmentId: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.shipmentId - Shipment Id
     * @returns {Promise<ShipmentTrack>} - Success response
     * @summary: Track Shipment by shipment id and order id for application based on application Id
     * @description: Shipment Track
     */
    trackShipment({ shipmentId }?: {
        shipmentId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.orderId - Order Id
     * @returns {Promise<PosOrderById>} - Success response
     * @summary: Get POS Order by order id for application based on application Id
     * @description: Get Order By Fynd Order Id
     */
    getPosOrderById({ orderId }?: {
        orderId: string;
    }): Promise<any>;
}
declare class Rewards {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {CatalogueOrderRequest} arg.body
     * @returns {Promise<CatalogueOrderResponse>} - Success response
     * @summary: Get the eligibility of reward points on a product
     * @description: Use this API to evaluate the amount of reward points that could be earned on any catalogue product.
     */
    getPointsOnProduct({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.name - The name given to the offer.
     * @returns {Promise<Offer>} - Success response
     * @summary: Get offer by name
     * @description: Use this API to get the offer details and configuration by entering the name of the offer.
     */
    getOfferByName({ name }?: {
        name: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OrderDiscountRequest} arg.body
     * @returns {Promise<OrderDiscountResponse>} - Success response
     * @summary: Calculates the discount on order-amount
     * @description: Use this API to calculate the discount on order-amount based on all the amount range configured in order_discount.
     */
    getOrderDiscount({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<PointsResponse>} - Success response
     * @summary: Get reward points available with a user
     * @description: Use this API to retrieve total available points of a user for current application
     */
    getUserPoints({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.pageId] - PageID is the ID of the requested page.
     *   For first request it should be kept empty.* @param {number}
     *   [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<PointsHistoryResponse>} - Success response
     * @summary: Get all transactions of reward points
     * @description: Use this API to get a list of points transactions. The list of points history is paginated.
     */
    getUserPointsHistory({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get all transactions of reward points
     * @description: Use this API to get a list of points transactions. The list of points history is paginated.
     */
    getUserPointsHistoryPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<ReferralDetailsResponse>} - Success response
     * @summary: Get referral details of a user
     * @description: Use this API to retrieve the referral details a user has configured in the application.
     */
    getUserReferralDetails({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {RedeemReferralCodeRequest} arg.body
     * @returns {Promise<RedeemReferralCodeResponse>} - Success response
     * @summary: Redeems a referral code and credits reward points to users
     * @description: Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account.
     */
    redeemReferralCode({ body }?: {
        body: any;
    }): Promise<any>;
}
declare class Feedback {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {ReportAbuseRequest} arg.body
     * @returns {Promise<InsertResponse>} - Success response
     * @summary: Post a new abuse request
     * @description: Use this API to report a specific entity (question/review/comment) for abuse.
     */
    createAbuseReport({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateAbuseStatusRequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Update abuse details
     * @description: Use this API to update the abuse details, i.e. status and description.
     */
    updateAbuseReport({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entityId - ID of the eligible entity as specified in
     *   the entity type (question ID/review ID/comment ID).* @param {string}
     *   arg.entityType - Type of entity, e.g. question, review or comment.*
     *   @param {string} [arg.id] - abuse id* @param {string} [arg.pageId] -
     *   Pagination page ID to retrieve next set of results.* @param {number}
     *   [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<ReportAbuseGetResponse>} - Success response
     * @summary: Get a list of abuse data
     * @description: Use this API to retrieve a list of abuse data from entity type and entity ID.
     */
    getAbuseReports({ entityId, entityType, id, pageId, pageSize }?: {
        entityId: string;
        entityType: string;
        id?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entityId - ID of the eligible entity as specified in
     *   the entity type (question ID/review ID/comment ID).
     * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
     * @param {string} [arg.id] - Abuse id
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get a list of abuse data
     * @description: Use this API to retrieve a list of abuse data from entity type and entity ID.
     */
    getAbuseReportsPaginator({ entityId, entityType, id, pageSize }?: {
        entityId: string;
        entityType: string;
        id?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1. * @param {number}
     *   [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<AttributeResponse>} - Success response
     * @summary: Get a list of attribute data
     * @description: Use this API to retrieve a list of all attribute data, e.g. quality, material, product fitting, packaging, etc.
     */
    getAttributes({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get a list of attribute data
     * @description: Use this API to retrieve a list of all attribute data, e.g. quality, material, product fitting, packaging, etc.
     */
    getAttributesPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SaveAttributeRequest} arg.body
     * @returns {Promise<InsertResponse>} - Success response
     * @summary: Add a new attribute request
     * @description: Use this API to add a new attribute (e.g. product quality/material/value for money) with its name, slug and description.
     */
    createAttribute({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of an attribute. You can get slug value from the endpoint
     *   'service/application/feedback/v1.0/attributes'.
     * @returns {Promise<Attribute>} - Success response
     * @summary: Get data of a single attribute
     * @description: Use this API to retrieve a single attribute data from a given slug.
     */
    getAttribute({ slug }?: {
        slug: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of an attribute. You can get slug value from the endpoint
     *   'service/application/feedback/v1.0/attributes'.
     * @param {UpdateAttributeRequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Update details of an attribute
     * @description: Use this API update the attribute's name and description.
     */
    updateAttribute({ slug, body }?: {
        slug: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CommentRequest} arg.body
     * @returns {Promise<InsertResponse>} - Success response
     * @summary: Post a new comment
     * @description: Use this API to add a new comment for a specific entity.
     */
    createComment({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateCommentRequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Update the status of a comment
     * @description: Use this API to update the comment status (active or approve) along with new comment if any.
     */
    updateComment({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entityType - Type of entity, e.g. question, review or
     *   comment.* @param {string} [arg.id] - Comment ID* @param {string}
     *   [arg.entityId] - ID of the eligible entity as specified in the entity
     *   type (question ID/review ID/comment ID).* @param {string} [arg.userId]
     *   - User ID - a flag/filter to get comments for a user.* @param {string}
     *   [arg.pageId] - Pagination page ID to retrieve next set of results.*
     *   @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<CommentGetResponse>} - Success response
     * @summary: Get a list of comments
     * @description: Use this API to retrieve a list of comments for a specific entity type, e.g. products.
     */
    getComments({ entityType, id, entityId, userId, pageId, pageSize }?: {
        entityType: string;
        id?: string;
        entityId?: string;
        userId?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
     * @param {string} [arg.id] - Comment ID
     * @param {string} [arg.entityId] - ID of the eligible entity as specified
     *   in the entity type (question ID/review ID/comment ID).
     * @param {string} [arg.userId] - User ID - a flag/filter to get comments for a user.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get a list of comments
     * @description: Use this API to retrieve a list of comments for a specific entity type, e.g. products.
     */
    getCommentsPaginator({ entityType, id, entityId, userId, pageSize }?: {
        entityType: string;
        id?: string;
        entityId?: string;
        userId?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entityType - Type of entity, e.g. question, rate,
     *   review, answer, or comment.* @param {string} arg.entityId - ID of the
     *   eligible entity as specified in the entity type.
     * @returns {Promise<CheckEligibilityResponse>} - Success response
     * @summary: Checks eligibility to rate and review, and shows the cloud media configuration
     * @description: Use this API to check whether an entity is eligible to be rated and reviewed. Moreover, it shows the cloud media configuration too.
     */
    checkEligibility({ entityType, entityId }?: {
        entityType: string;
        entityId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Delete Media
     * @description: Use this API to delete media for an entity ID.
     */
    deleteMedia({}?: any): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddMediaListRequest} arg.body
     * @returns {Promise<InsertResponse>} - Success response
     * @summary: Add Media
     * @description: Use this API to add media to an entity, e.g. review.
     */
    createMedia({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateMediaListRequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Update Media
     * @description: Use this API to update media (archive/approve) for an entity.
     */
    updateMedia({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entityType - Type of entity, e.g. question or
     *   product.* @param {string} arg.entityId - ID of the eligible entity as
     *   specified in the entity type(question ID/product ID).* @param {string}
     *   [arg.id] - ID of the media.* @param {string} [arg.pageId] - Pagination
     *   page ID to retrieve next set of results.* @param {number}
     *   [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<MediaGetResponse>} - Success response
     * @summary: Get Media
     * @description: Use this API to retrieve all media from an entity.
     */
    getMedias({ entityType, entityId, id, pageId, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entityType - Type of entity, e.g. question or product.
     * @param {string} arg.entityId - ID of the eligible entity as specified in
     *   the entity type(question ID/product ID).
     * @param {string} [arg.id] - ID of the media.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get Media
     * @description: Use this API to retrieve all media from an entity.
     */
    getMediasPaginator({ entityType, entityId, id, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entityType - Type of entity, e.g. product, delivery,
     *   seller, order placed, order delivered, application, or template.*
     *   @param {string} arg.entityId - ID of the eligible entity as specified
     *   in the entity type.* @param {string} [arg.id] - Review summary
     *   identifier.* @param {string} [arg.pageId] - Pagination page ID to
     *   retrieve next set of results.* @param {number} [arg.pageSize] - The
     *   number of items to retrieve in each page.
     * @returns {Promise<ReviewMetricGetResponse>} - Success response
     * @summary: Get a review summary
     * @description: Review summary gives ratings and attribute metrics of a review per entity. Use this API to retrieve the following response data: review count, rating average. 'review metrics'/'attribute rating metrics' which contains name, type, average and count.
     */
    getReviewSummaries({ entityType, entityId, id, pageId, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entityType - Type of entity, e.g. product, delivery,
     *   seller, order placed, order delivered, application, or template.
     * @param {string} arg.entityId - ID of the eligible entity as specified in
     *   the entity type.
     * @param {string} [arg.id] - Review summary identifier.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get a review summary
     * @description: Review summary gives ratings and attribute metrics of a review per entity. Use this API to retrieve the following response data: review count, rating average. 'review metrics'/'attribute rating metrics' which contains name, type, average and count.
     */
    getReviewSummariesPaginator({ entityType, entityId, id, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateReviewRequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Add customer reviews
     * @description: Use this API to add customer reviews for a specific entity along with the following data: attributes rating, entity rating, title, description, media resources and template ID.
     */
    createReview({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateReviewRequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Update customer reviews
     * @description: Use this API to update customer reviews for a specific entity along with following data: attributes rating, entity rating, title, description, media resources and template ID.
     */
    updateReview({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entityType - Type of entity, e.g. product, delivery,
     *   seller, l3, order placed, order delivered, application, or template.*
     *   @param {string} arg.entityId - ID of the eligible entity as specified
     *   in the entity type.* @param {string} [arg.id] - ID of the review.*
     *   @param {string} [arg.userId] - ID of the user.* @param {string}
     *   [arg.media] - media type, e.g. image | video | video_file | video_link*
     *   @param {Array<number>} [arg.rating] - rating filter, e.g. 1-5* @param
     *   {Array<string>} [arg.attributeRating] - Filter for attribute rating.*
     *   @param {boolean} [arg.facets] - This is a boolean value for enabling
     *   metadata (facets). Selecting *true* will enable facets.* @param
     *   {string} [arg.sort] - Sort by: default | top | recent* @param {boolean}
     *   [arg.active] - Get the active reviews.* @param {boolean} [arg.approve]
     *   - Get the approved reviews.* @param {string} [arg.pageId] - Pagination
     *   page ID to retrieve next set of results.* @param {number}
     *   [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<ReviewGetResponse>} - Success response
     * @summary: Get list of customer reviews
     * @description: Use this API to retrieve a list of customer reviews based on entity and filters provided.
     */
    getReviews({ entityType, entityId, id, userId, media, rating, attributeRating, facets, sort, active, approve, pageId, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        media?: string;
        rating?: Array<number>;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entityType - Type of entity, e.g. product, delivery,
     *   seller, l3, order placed, order delivered, application, or template.
     * @param {string} arg.entityId - ID of the eligible entity as specified in
     *   the entity type.
     * @param {string} [arg.id] - ID of the review.
     * @param {string} [arg.userId] - ID of the user.
     * @param {string} [arg.media] - Media type, e.g. image | video | video_file
     *   | video_link
     * @param {number[]} [arg.rating] - Rating filter, e.g. 1-5
     * @param {string[]} [arg.attributeRating] - Filter for attribute rating.
     * @param {boolean} [arg.facets] - This is a boolean value for enabling
     *   metadata (facets). Selecting *true* will enable facets.
     * @param {string} [arg.sort] - Sort by: default | top | recent
     * @param {boolean} [arg.active] - Get the active reviews.
     * @param {boolean} [arg.approve] - Get the approved reviews.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get list of customer reviews
     * @description: Use this API to retrieve a list of customer reviews based on entity and filters provided.
     */
    getReviewsPaginator({ entityType, entityId, id, userId, media, rating, attributeRating, facets, sort, active, approve, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        media?: string;
        rating?: number[];
        attributeRating?: string[];
        facets?: boolean;
        sort?: string;
        active?: boolean;
        approve?: boolean;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.templateId] - ID of the feedback template.* @param
     *   {string} [arg.entityId] - ID of the eligible entity as specified in the
     *   entity type.* @param {string} [arg.entityType] - Type of entity, e.g.
     *   product, delivery, seller, l3, order placed, order delivered, or application.
     * @returns {Promise<TemplateGetResponse>} - Success response
     * @summary: Get the feedback templates for a product or l3
     * @description: Use this API to retrieve the details of the following feedback template. order, delivered, application, seller, order, placed, product
     */
    getTemplates({ templateId, entityId, entityType }?: {
        templateId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateQNARequest} arg.body
     * @returns {Promise<InsertResponse>} - Success response
     * @summary: Create a new question
     * @description: Use this API to create a new question with following data- tags, text, type, choices for MCQ type questions, maximum length of answer.
     */
    createQuestion({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateQNARequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Update a question
     * @description: Use this API to update the status of a question, its tags and its choices.
     */
    updateQuestion({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entityType - Type of entity, e.g. product, l3, etc.*
     *   @param {string} arg.entityId - ID of the eligible entity as specified
     *   in the entity type.* @param {string} [arg.id] - QNA ID* @param {string}
     *   [arg.userId] - User ID* @param {boolean} [arg.showAnswer] - This is a
     *   boolean value. Select *true* to display answers given.* @param {string}
     *   [arg.pageId] - Pagination page ID to retrieve next set of results.*
     *   @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<QNAGetResponse>} - Success response
     * @summary: Get a list of QnA
     * @description: Use this API to retrieve a list of questions and answers for a given entity.
     */
    getQuestionAndAnswers({ entityType, entityId, id, userId, showAnswer, pageId, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        showAnswer?: boolean;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.entityType - Type of entity, e.g. product, l3, etc.
     * @param {string} arg.entityId - ID of the eligible entity as specified in
     *   the entity type.
     * @param {string} [arg.id] - QNA ID
     * @param {string} [arg.userId] - User ID
     * @param {boolean} [arg.showAnswer] - This is a boolean value. Select
     *   *true* to display answers given.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get a list of QnA
     * @description: Use this API to retrieve a list of questions and answers for a given entity.
     */
    getQuestionAndAnswersPaginator({ entityType, entityId, id, userId, showAnswer, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        showAnswer?: boolean;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] - Vote ID* @param {string} [arg.refType] -
     *   Entity type, e.g. review | comment.* @param {number} [arg.pageNo] - The
     *   page number to navigate through the given set of results. Default value
     *   is 1.* @param {number} [arg.pageSize] - The number of items to retrieve
     *   in each page.
     * @returns {Promise<VoteResponse>} - Success response
     * @summary: Get a list of votes
     * @description: Use this API to retrieve a list of votes of a current logged in user. Votes can be filtered using `ref_type`, i.e. review | comment.
     */
    getVotes({ id, refType, pageNo, pageSize }?: {
        id?: string;
        refType?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] - Vote ID
     * @param {string} [arg.refType] - Entity type, e.g. review | comment.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get a list of votes
     * @description: Use this API to retrieve a list of votes of a current logged in user. Votes can be filtered using `ref_type`, i.e. review | comment.
     */
    getVotesPaginator({ id, refType, pageSize }?: {
        id?: string;
        refType?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {VoteRequest} arg.body
     * @returns {Promise<InsertResponse>} - Success response
     * @summary: Create a new vote
     * @description: Use this API to create a new vote, where the action could be an upvote or a downvote. This is useful when you want to give a vote (say upvote) to a review (ref_type) of a product (entity_type).
     */
    createVote({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateVoteRequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Update a vote
     * @description: Use this API to update a vote with a new action, i.e. either an upvote or a downvote.
     */
    updateVote({ body }?: {
        body: any;
    }): Promise<any>;
}
declare class PosCart {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - * @param {boolean} [arg.i] - * @param
     *   {boolean} [arg.b] - * @param {number} [arg.assignCardId] -
     * @returns {Promise<CartResponse>} - Success response
     * @summary: Fetch all Items Added to  Cart
     * @description: Get all the details of a items added to cart  by uid. If successful, returns a Cart resource in the response body specified in CartResponse
     */
    getCart({ uid, i, b, assignCardId }?: {
        uid?: number;
        i?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] -
     * @returns {Promise<any>} - Success response
     * @summary: Fetch Last-Modified timestamp
     * @description: Fetch Last-Modified timestamp in header metadata
     */
    getCartLastModified({ uid }?: {
        uid?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.i] - * @param {boolean} [arg.b] -
     * @param {AddCartRequest} arg.body
     * @returns {Promise<AddCartResponse>} - Success response
     * @summary: Add Items to Cart
     * @description: <p>Add Items to cart. See `AddCartRequest` in schema of request body for the list of attributes needed to add items to a cart. On successful request, returns cart response containing details of items, coupons available etc.these attributes will be fetched from the folowing api's</p>
     */
    addItems({ body, i, b }?: {
        i?: boolean;
        b?: boolean;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - * @param {boolean} [arg.i] - * @param
     *   {boolean} [arg.b] -
     * @param {UpdateCartRequest} arg.body
     * @returns {Promise<UpdateCartResponse>} - Success response
     * @summary: Update Items already added to Cart
     * @description: Request object containing attributes like item_quantity and item_size which can be updated .these attributes will be fetched from the folowing api's</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/{slug}/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/{identifier}​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
     */
    updateCart({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - Cart id
     * @returns {Promise<CartItemCountResponse>} - Success response
     * @summary: Cart item count
     * @description: Get total count of item present in cart
     */
    getItemCount({ uid }?: {
        uid?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] -
     * @returns {Promise<GetCouponResponse>} - Success response
     * @summary: Fetch Coupon
     * @description: Get all the details of a coupons applicable to cart  by uid. If successful, returns a Coupon resource in the response body specified in GetCouponResponse
     */
    getCoupons({ uid }?: {
        uid?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.i] - * @param {boolean} [arg.b] - * @param
     *   {boolean} [arg.p] - * @param {number} [arg.uid] -
     * @param {ApplyCouponRequest} arg.body
     * @returns {Promise<CartResponse>} - Success response
     * @summary: Apply Coupon
     * @description: <p>Apply Coupons on Items added to cart. On successful request, returns cart response containing details of items ,coupons applied etc.these attributes will be consumed by  api</p> <ul> <li> <font color="monochrome">coupon_code</font></li>
     * </ul>
     */
    applyCoupon({ body, i, b, p, uid }?: {
        i?: boolean;
        b?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - Cart id
     * @returns {Promise<CartResponse>} - Success response
     * @summary: Remove Coupon Applied
     * @description: Remove Coupon applied on the cart by passing uid in request body.
     */
    removeCoupon({ uid }?: {
        uid?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.itemId] - Item id* @param {string} [arg.articleId] -
     *   Article mongo id* @param {number} [arg.uid] - Item id* @param {string}
     *   [arg.slug] - Item unique url from product page
     * @returns {Promise<BulkPriceResponse>} - Success response
     * @summary: Get discount offers based on quantity
     * @description: List applicable offers along with current, next and best offer for given product. Either one of **uid**, **item_id**, **slug** should be present*
     */
    getBulkDiscountOffers({ itemId, articleId, uid, slug }?: {
        itemId?: number;
        articleId?: string;
        uid?: number;
        slug?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - * @param {string} [arg.mobileNo] - * @param
     *   {string} [arg.checkoutMode] - * @param {string} [arg.tags] - * @param
     *   {boolean} [arg.isDefault] -
     * @returns {Promise<GetAddressesResponse>} - Success response
     * @summary: Fetch Address
     * @description: Get all the addresses associated with the account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddresses({ uid, mobileNo, checkoutMode, tags, isDefault }?: {
        uid?: number;
        mobileNo?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {Address} arg.body
     * @returns {Promise<SaveAddressResponse>} - Success response
     * @summary: Add Address to the account
     * @description: <p>Add Address to account. See `Address` in schema of request body for the list of attributes needed to add Address to account. On successful request, returns response containing address_id ,is_default_address and success message.
     */
    addAddress({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.id - * @param {number} [arg.uid] - * @param {string}
     *   [arg.mobileNo] - * @param {string} [arg.checkoutMode] - * @param
     *   {string} [arg.tags] - * @param {boolean} [arg.isDefault] -
     * @returns {Promise<Address>} - Success response
     * @summary: Fetch Single Address
     * @description: Get a addresses with the given id. If successful, returns a Address resource in the response body specified in `Address`.attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
     */
    getAddressById({ id, uid, mobileNo, checkoutMode, tags, isDefault }?: {
        id: number;
        uid?: number;
        mobileNo?: string;
        checkoutMode?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.id - Address id
     * @param {Address} arg.body
     * @returns {Promise<UpdateAddressResponse>} - Success response
     * @summary: Update Address alreay added to account
     * @description: Request object containing attributes mentioned in  <font color="blue">Address </font> can be updated .these attributes are :</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
     */
    updateAddress({ id, body }?: {
        id: number;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.id - Address id
     * @returns {Promise<DeleteAddressResponse>} - Success response
     * @summary: Remove Address Associated to the account
     * @description: Delete a Address by it's address_id. Returns an object that tells whether the address was deleted successfully
     */
    removeAddress({ id }?: {
        id: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - * @param {boolean} [arg.i] - * @param
     *   {boolean} [arg.b] -
     * @param {SelectCartAddressRequest} arg.body
     * @returns {Promise<CartResponse>} - Success response
     * @summary: Select Address from All Addresses
     * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to .that address,otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, returns Cart object response.below are the address attributes which needs to be sent. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul>
     */
    selectAddress({ body, uid, i, b }?: {
        uid?: number;
        i?: boolean;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.uid] -
     * @param {UpdateCartPaymentRequest} arg.body
     * @returns {Promise<CartResponse>} - Success response
     * @summary: Update Cart Payment
     * @description: Update Cart Payment for Your Account
     */
    selectPaymentMode({ body, uid }?: {
        uid?: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.uid] - * @param {string} [arg.addressId] - * @param
     *   {string} [arg.paymentMode] - * @param {string} [arg.paymentIdentifier]
     *   - * @param {string} [arg.aggregatorName] - * @param {string}
     *   [arg.merchantCode] -
     * @returns {Promise<PaymentCouponValidate>} - Success response
     * @summary: Get Cart Payment for valid coupon
     * @description: Validate coupon for selected payment mode
     */
    validateCouponForPayment({ uid, addressId, paymentMode, paymentIdentifier, aggregatorName, merchantCode, }?: {
        uid?: string;
        addressId?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pickAtStoreUid] - * @param {number}
     *   [arg.orderingStoreId] - * @param {boolean} [arg.p] - Get payment
     *   options or not* @param {number} [arg.uid] - Cart id* @param {number}
     *   [arg.addressId] - Address id* @param {string} [arg.areaCode] -
     *   Destination pincode.* @param {string} [arg.orderType] - Order type of shipment
     * @returns {Promise<CartShipmentsResponse>} - Success response
     * @summary: Get delivery date and options before checkout
     * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created.
     */
    getShipments({ pickAtStoreUid, orderingStoreId, p, uid, addressId, areaCode, orderType, }?: {
        pickAtStoreUid?: number;
        orderingStoreId?: number;
        p?: boolean;
        uid?: number;
        addressId?: number;
        areaCode?: string;
        orderType?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.i] - Get items or not* @param {boolean} [arg.p] -
     *   Get payment options or not* @param {number} [arg.uid] - Cart id* @param
     *   {number} [arg.addressId] - Address id* @param {string} [arg.orderType]
     *   - Order is hand over or home delivery
     * @param {UpdateCartShipmentRequest} arg.body
     * @returns {Promise<CartShipmentsResponse>} - Success response
     * @summary: Update shipment delivery type and quantity before checkout
     * @description: Shipment break up item wise with delivery date. Actual                      delivery will be during given dates only. Items will be                      delivered in group of shipments created. Update the shipment                      type and quantity as per customer preference for store pick up or home delivery
     */
    updateShipments({ body, i, p, uid, addressId, orderType }?: {
        i?: boolean;
        p?: boolean;
        uid?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] -
     * @param {CartPosCheckoutRequest} arg.body
     * @returns {Promise<CartCheckoutResponse>} - Success response
     * @summary: Checkout Cart
     * @description: Checkout all items in cart to payment and order generation.                        For COD only order will be generated while for other checkout mode                        user will be redirected to payment gateway
     */
    checkoutCart({ body, uid }?: {
        uid?: number;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - Cart id received in get cart.
     * @param {CartMetaRequest} arg.body
     * @returns {Promise<CartMetaResponse>} - Success response
     * @summary: Update Cart Meta
     * @description: Update cart meta like checkout_mode, gstin.
     */
    updateCartMeta({ body, uid }?: {
        uid?: number;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.areaCode - * @param {number} [arg.uid] -
     * @returns {Promise<CartDeliveryModesResponse>} - Success response
     * @summary: Get available delivery modes for cart
     * @description: Get available delivery modes for cart and pick up store uid list. From given pick stores list user can pick up delivery. Use this uid to show store address
     */
    getAvailableDeliveryModes({ areaCode, uid }?: {
        areaCode: string;
        uid?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.storeUid -
     * @returns {Promise<StoreDetailsResponse>} - Success response
     * @summary: Get list of stores for give uids
     * @description: Get list of stores by providing pick up available store uids.
     */
    getStoreAddressByUid({ storeUid }?: {
        storeUid: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetShareCartLinkRequest} arg.body
     * @returns {Promise<GetShareCartLinkResponse>} - Success response
     * @summary: Generate Cart sharing link token
     * @description: Generates shared cart snapshot and returns shortlink token
     */
    getCartShareLink({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.token - Shared short link token.
     * @returns {Promise<SharedCartResponse>} - Success response
     * @summary: Get shared cart snapshot and cart response
     * @description: Returns shared cart response for sent token with `shared_cart_details`                    containing shared cart details in response.
     */
    getCartSharedItems({ token }?: {
        token: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.token - Shared short link token.* @param {string}
     *   arg.action - Operation to perform on existing cart, whether to merge or replace.
     * @returns {Promise<SharedCartResponse>} - Success response
     * @summary: Merge or Replace existing cart
     * @description: Merge or Replace cart based on `action` parameter with shared cart of `token`
     */
    updateCartWithSharedItems({ token, action }?: {
        token: string;
        action: string;
    }): Promise<any>;
}
declare class Logistic {
    constructor(_conf: any);
    _conf: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {GetTatProductReqBody} arg.body
     * @returns {Promise<GetTatProductResponse>} - Success response
     * @summary: Get Tat Product
     * @description: Get Tat Product
     */
    getTatProduct({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.pincode - Pincode
     * @returns {Promise<GetPincodeCityResponse>} - Success response
     * @summary: Get City from Pincode
     * @description: Get City from Pincode
     */
    getPincodeCity({ pincode }?: {
        pincode: string;
    }): Promise<any>;
}
import Paginator = require("../common/Paginator");
