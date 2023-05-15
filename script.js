$('#first').on('click', () => {
    console.log('Yeah, you clicked me');
});

$('#second').on('click', () => {
    return $('#first').text('Changed text here');
});

$('#third').on('click', () => {
    return $('.button').css('background-color', 'lime');
});