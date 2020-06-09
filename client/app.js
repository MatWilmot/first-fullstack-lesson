$(document).ready(function () {
  $("#click").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api",
    }).then((res) => {
      console.log(res);
    });
  });

  $("#click2").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api2",
    }).then((res) => {
      data = JSON.stringify(res.mes);
      $("#content").html(`<h1>Response: ${data} </h1>`);
    });
  });
});
