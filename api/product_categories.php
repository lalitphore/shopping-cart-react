<?php
 header("Access-Control-Allow-Origin: *");

$productCategories = array(
            array('image'=>'/category/baby.png','id'=>'1','title'=>'Baby Care','description'=>'Shop online for Baby Products, Diapers, Skin Care Products,etc. ','urlTitle'=>'baby-care'),
            array('image'=>'/category/bakery.png','id'=>'2','title'=>'Bakery Cakes and Dairy','description'=>'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.','urlTitle'=>'bakery-cakes-and-dairy'),
            array('image'=>'/category/beauty.png','id'=>'3','title'=>'Beauty and Hygiene','description'=>'Buy beauty and personal care products online in India at best prices. ','urlTitle'=>'beauty-and-hygiene'),
            array('image'=>'/category/beverages.png','id'=>'4','title'=>'Beverages','description'=>'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ','urlTitle'=>'beverages'),
            array('image'=>'/category/fruits.png','id'=>'5','title'=>'Fruits & Vegetables','description'=>'A variety of fresh fruits and vegetables. ','urlTitle'=>'fruits-and-vegetables')
        );

echo json_encode($productCategories,JSON_PRETTY_PRINT);

?>