document.addEventListener('DOMContentLoaded', () => {
    const productModalElement = document.getElementById('productModal');
    const productTitleElement = document.getElementById('productTitle');
    const productPriceElement = document.getElementById('productPrice');
    const productDescriptionElement = document.getElementById('productDescription');
    const productImageElement = document.getElementById('productImage');
    const productMaterialTypeElement = document.getElementById('productMaterialType');
    const productLengthElement = document.getElementById('productLength');
    const productOccasionTypeElement = document.getElementById('productOccasionType');
    const productSleeveTypeElement = document.getElementById('productSleeveType');
    const productPatternElement = document.getElementById('productPattern');
    const productStyleElement = document.getElementById('productStyle');
    const productCountryOfOriginElement = document.getElementById('productCountryOfOrigin');
    const viewDetailsButton = document.querySelectorAll('.view-details-btn');  
    const productModal = new bootstrap.Modal(productModalElement);

    function updateProductModal(title, price, description, image, materialType, length, occasionType, sleeveType, pattern, style, countryOfOrigin) {
        productTitleElement.textContent = title;
        productPriceElement.textContent = price;
        productDescriptionElement.textContent = description;
        productImageElement.src = image;
        productMaterialTypeElement.textContent = materialType;
        productLengthElement.textContent = length;
        productOccasionTypeElement.textContent = occasionType;
        productSleeveTypeElement.textContent = sleeveType;
        productPatternElement.textContent = pattern;
        productStyleElement.textContent = style;
        productCountryOfOriginElement.textContent = countryOfOrigin;
    }

    function handleButtonClick(event) {
        const button = event.currentTarget;
        const card = button.closest('.card.card-custom');
        const title = card.getAttribute('data-title');
        const price = card.getAttribute('data-price');
        const description = card.getAttribute('data-description');
        const image = card.getAttribute('data-image');
        const materialType = card.getAttribute('data-material-type');
        const length = card.getAttribute('data-length');
        const occasionType = card.getAttribute('data-occasion-type');
        const sleeveType = card.getAttribute('data-sleeve-type');
        const pattern = card.getAttribute('data-pattern');
        const style = card.getAttribute('data-style');
        const countryOfOrigin = card.getAttribute('data-country-of-origin');

        updateProductModal(title, price, description, image, materialType, length, occasionType, sleeveType, pattern, style, countryOfOrigin);
        productModal.show();
    }

    viewDetailsButton.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});
