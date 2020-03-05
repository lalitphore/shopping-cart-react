const envirnoment = 'GIT'
let Apis = {};
if(envirnoment === 'GIT')
{
    Apis.banners = 'https://raw.githubusercontent.com/lalitphore/shopping-cart-react/master/api/temp_api/get_home_slider.json';
    Apis.productCategories = 'https://raw.githubusercontent.com/lalitphore/shopping-cart-react/master/api/temp_api/product_categories.json';
    Apis.products = 'https://raw.githubusercontent.com/lalitphore/shopping-cart-react/master/api/temp_api/products.json';
}
else
{
    Apis.banners = 'http://localhost/shopping-cart/get_home_slider.php';
    Apis.productCategories = 'https://raw.githubusercontent.com/lalitphore/shopping-cart-react/master/api/temp_api/product_categories.json';
    Apis.products = 'https://raw.githubusercontent.com/lalitphore/shopping-cart-react/master/api/temp_api/products.json';    
}

export default Apis