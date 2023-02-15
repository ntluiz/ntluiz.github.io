$(document).ready(function () {
  $('#signup').submit(function (e) {
    e.preventDefault();
    let form = $(this);
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'https://api.sheety.co/3f2b4c50b08e3901f43d14db1494fa21/mangas/manga',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        manga: {
          title: $('#title').val(),
          last: $('#last').val()
        }
      }),
      success: function () {
        $('#signup-success').show();
        $('#signup').hide();
      },
      error: function (xhr, res, text) {
        alert('There was a problem registering.');
      }
    });
  });
});