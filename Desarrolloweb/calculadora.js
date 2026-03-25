$(document).ready(function () {

    $("#suma").click(function () {
        console.log("suma")
        let first = 0;
        let second = 0;
        first = $("#fnumber").val();
        second = $("#snumber").val();
        $("result").html(first+second);
    });

    $("#resta").click(function () {
        console.log("resta")
        let first = 0;
        let second = 0;
        first = $("#fnumber").val();
        second = $("#snumber").val();
        valores = { "primero": first, "segundo": second };
        $.post("https://josekun13.pythonanywhere.com/resta", valores, function (data, status) {
            console.log(status)
            $("#result").text(data);

        });
    });

    $("#multiplicacion").click(function () {
        console.log("multiplicacion")
        let first = 0;
        let second = 0;
        first = $("#fnumber").val();
        second = $("#snumber").val();
        valores = { "primero": first, "segundo": second };
        $.post("https://josekun13.pythonanywhere.com/multiplicacion", valores, function (data, status) {
            console.log(status)
            $("#result").text(data);

        });
    });

    $("#division").click(function () {
        console.log("division")
        let first = 0;
        let second = 0;
        first = $("#fnumber").val();
        second = $("#snumber").val();
        valores = { "primero": first, "segundo": second };
        $.post("https://josekun13.pythonanywhere.com/division", valores, function (data, status) {
            console.log(status)
            $("#result").text(data);

        });

    });


});