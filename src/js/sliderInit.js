export default function () {
    $(document).ready(function(){
        $('.product-photos-slider').slick(
            {
                infinite: true,
                dots: true
            }
        );
    });
}