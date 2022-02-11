const {
  ApplicationConfig,
  ApplicationClient,
} = require("../../index.js");
require('dotenv').config();
let applicationClient;

beforeAll(() => {
  const config = new ApplicationConfig({
    domain: "https://api.fynd.com",
    applicationID: "000000000000000000000001",
    applicationToken: "9502d710-5a22-11e9-a001-57d85417c280",
  });
  // config.setCookie("f.session=s%3ASaZUS_XNErWBBPxyy6nf-2goIR0N6GBQ.k%2BnKVZYew2yacekSLuCojx15ngnkAIUr8XZBW6FAtS;")
  applicationClient = new ApplicationClient(config);
  applicationClient.setCookie("f.session=s%3ASaZUS_XNErWBBPxnf-2goIR0N6GBQ.k%2BnKVZYew2yacekSLuCojx15ngnkAIUr8XZBW6FAtSc;")
})

afterAll(() => {
  applicationClient = null;
})

describe("Application Catalog Test Cases", () => {
  it("getProductDetailBySlug testing", async () => {
    let productDetail = await applicationClient.catalog.getProductDetailBySlug({ slug: "walrus-black-wallet-436997-db85b6" });
    expect(productDetail.slug).toBe("walrus-black-wallet-436997-db85b6");
  })
})

describe("get orders", () => {
  it("get orders of user", async () => {
    let orders = await applicationClient.order.getOrders();
    console.log(orders.items.length);
    expect(orders.items.length).toBe("number");
  })
})
