// $('#first').on('click', () => {
//     console.log('Yeah, you clicked me');
// });

document.getElementById("first").addEventListener("click", function () {
    console.log('Yeah, you clicked me');
});

// $('#second').on('click', () => {
//     return $('#first').text('Changed text here');
// });

document.getElementById("second").addEventListener("click", function () {
    return $('#first').text('Changed text here');
});

// $('#third').on('click', () => {
//     return $('.button').css('background-color', 'lime');
// });

document.getElementById("third").addEventListener("click", function () {
    return $('.button').css('background-color', 'lime');
});

// $('#fourth').one('click', () => {
//     return $('.button').css('background-color', document.querySelector('input').value);
// });

document.getElementById("fourth").addEventListener("click", function () {
    return $('.button').css('background-color', document.querySelector('input').value)
}, { once: true });
