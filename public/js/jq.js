function listenToClick() {
    console.log('click function');
}
$(() => {
    $('.units').on({
        'click': () => {
            $('p').fadeIn(1000, function() {
                $(this).addClass('fade')
            });
        },
        'mouseover': () => console.log('move mouse')
    });
    $('p').on('click', listenToClick);
    
    $('p').one('click', () => {
        alert('hello click one time!');
        $('p').off('click', listenToClick);
    });
});