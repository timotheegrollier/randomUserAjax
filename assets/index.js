$(document).ready(function () {
  $("#appel").submit((e) => {
    $("#res").empty();
    e.preventDefault();
    let number = $("#number").val();
    console.log(number);
    let gender = $("#gender").val();
    console.log(gender);
    $.ajax({
      url: "https://randomuser.me/api?results=" + number + "&gender=" + gender,
      type: "GET",
      dataType: "JSON",

      success: (resp) => {
        console.log(resp);
        for (i = 0; i < resp.results.length; i++) {
          $(
            "<div class='card'><h1>" +
              resp.results[i].name.first +
              " </h1><h4>" +
              resp.results[i].name.last +
              "</h4><p>" +
              resp.results[i].gender +
              "</p><img src=" +
              resp.results[i].picture.medium +
              "></div>"
          ).appendTo("#res");
        }
      },
      error: (resp) => {
        $("<div class='error'><h3>ERREUR</h3></div>");
      },
    });
  });
});
