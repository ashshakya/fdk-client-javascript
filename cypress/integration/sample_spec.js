describe('My First Test', () => {

    it('Should add script tag', () => {
        cy.get("html").then(() => {

            const fdkSciptFilePath = '../../build/fdk-client-javascript.js';
            const scriptElement = document.createElement('script');
            scriptElement.setAttribute('src', fdkSciptFilePath);

            document.querySelector("head").appendChild(scriptElement);
        });
    });

    it('should make an API call', async () => {

        setTimeout( async ()=> {
            const { ApplicationConfig, ApplicationClient } = window;
            console.log('Application client', ApplicationClient);

            const config = new ApplicationConfig({
                domain: "https://api.fyndx0.de",
                applicationID: "000000000000000000000001",
                applicationToken: "ZRoeLTbj8",
                });

            let applicationClient = new ApplicationClient(config);
            
            const slugName = "bike-parts";
            let productDetail = await applicationClient.catalog.getProductDetailBySlug({ slug: slugName });
            cy.expect(productDetail.slug).to.eq(slugName);

        }, 1000);
    });
});
