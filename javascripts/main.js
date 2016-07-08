$(document).ready(
    function () {
        $(".earth").hover(
            function () {
                $(this).css("box-shadow", "0px 0px 100px blue");
            },
            function () {
                $(this).css("box-shadow", "0px 0px 10px yellow");
            }
        );
        $(".satellite").hover(
            function () {
                $(this).css("box-shadow", "0px 0px 25px red");
            },
            function () {
                $(this).css("box-shadow", "0px 0px 1px white");
            }
        );
    }
);
