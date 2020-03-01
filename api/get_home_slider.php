<?php
 header("Access-Control-Allow-Origin: *");

$sliderArray = array(
            array('bannerImageUrl'=>'/offers/offer1.jpg','id'=>'1'),
            array('bannerImageUrl'=>'/offers/offer2.jpg','id'=>'2'),
            array('bannerImageUrl'=>'/offers/offer3.jpg','id'=>'3'),
            array('bannerImageUrl'=>'/offers/offer4.jpg','id'=>'4')
        );

echo json_encode($sliderArray,JSON_PRETTY_PRINT);

?>