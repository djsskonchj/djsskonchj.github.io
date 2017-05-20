$(document).ready(function () {
    $('.active1').click(function () {        
        $('#content_block1').css({
            "display" : 'block'
        });
        $('#content_block2').css({
            "display" : 'none'
        });
    });
    $('.active2').click(function () { 
        $('#content_block1').css({
            "display" : 'none'
        });
        $('#content_block2').css({
            "display" : 'block'
        });
    });
});
