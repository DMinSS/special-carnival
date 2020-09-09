function listenToClick() {
    console.log('click function');
}
$(function() {
    $('.units').on({
        'click': function() {
            $('p').fadeIn(1000, function() {
                $(this).addClass('fade')
            });
        },
        'mouseover': function() {
            console.log('move mouse');
        }
    });
    $('p').on('click', listenToClick);
    
    $('p').one('click', function() {
        alert('hello click one time!');
        $('p').off('click', listenToClick);
    });
});