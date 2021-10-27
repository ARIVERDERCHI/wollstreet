var individualQuotes = [];
var imageArray = new Array(20)
var lastIndex = 0;

for (let i = 0; i < imageArray.length; i++) {
  imageArray[i] = i + ".jpg";
}

document.getElementById('myimage').src = randomImage();

$.ajax({
  type: 'GET',
  url: 'https://raw.githubusercontent.com/BetweenBeltSizes/BRUCEQUOTES/master/the_quotes/myfile.txt',
  async: false
}).done(function(data) {
  individualQuotes = data.split('\n');
});

getNewQuote();

function getNewQuote() {
  var random = Math.floor(Math.random() * individualQuotes.length);
  $('#quote').text(individualQuotes[random]);
}

function randomImage() {
  var imgDir = 'bruce_pics/';

  var imgIndex = lastIndex;

  do {
    imgIndex = Math.floor(Math.random() * imageArray.length);
  } while (imgIndex === lastIndex);

  lastIndex = imgIndex;

  return imgDir + imageArray[imgIndex];
}

function Image(path) {
  var x = document.createElement("img");
  x.setAttribute("id", "test")
  x.setAttribute("src", path);
  var randomTop = Math.floor(Math.random() * 500);
  var randomLeft = Math.floor(Math.random() * 500);

  $("#test").css({position: 'absolute', top: randomTop, left: randomLeft});
  document.getElementById("background").appendChild(x);
}

$('.get-quote-btn').on('click', function() {
  event.preventDefault();
  getNewQuote();

  var newImage = randomImage();

  document.getElementById('myimage').src = newImage;
  Image(newImage);
})
