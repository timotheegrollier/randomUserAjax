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
          // REPARER L'AGE
          let age = 18 + Math.floor(Math.random() * 20);
          if (resp.results[i].dob.age >= 40) {
            resp.results[i].dob.age = age;
          }
          // insertion de nos données récup
          $(
            "<div class='card'><p>" +
              resp.results[i].email +
              "</p>" +
              "<p>" +
              resp.results[i].gender +
              "</p><p>Age:" +
              resp.results[i].dob.age +
              "</p><img src=" +
              resp.results[i].picture.large +
              "><h4>" +
              resp.results[i].name.last +
              "</h4><h2>" +
              resp.results[i].name.first +
              "</h2></div>"
          ).appendTo("#res");
        }
      },
      error: (resp) => {
        $("<div class='error'><h3>ERREUR</h3></div>");
      },
    });
  });
});
