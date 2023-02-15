
let url = 'https://api.sheety.co/3f2b4c50b08e3901f43d14db1494fa21/manga/manga';
let body = {
  manga: {
    title: $('#title').val(),
    last: $('#last').val()
  }
};
fetch(url, {
  method: 'POST',
  body: JSON.stringify(body)
})
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json.manga);
  });
