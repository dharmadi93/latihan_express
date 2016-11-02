$(document).ready(function () {
    // $('#test').html("tulisan di ganti")

    var $test = $('#test')

    // $.ajax({
    //     url: `http://localhost:3000/books`
    // }).done(function (data) {
    //     console.log(data)
    // })

    $.getJSON(`http://localhost:3000/api/books`, function (data) {
        console.log(data)
        $test.html(`${data[0].id}: ${data[0].name}: ${data[0].price}`)
    })
})