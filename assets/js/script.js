$(function() {
  $(window).scroll(function() {
      $('.waiting').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeIn");
          }
      });
  });
  $(window).scroll(function() {
      $('.content').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeIn");
          }
      });
  });
})

var btn = document.getElementById("btn")

btn.onclick = function(e)
{
  e.preventDefault();
  if (document.getElementById("input-name").value == "" 
    || document.getElementById("input-email").value == "" 
    || document.getElementById("input-tel").value == "" 
    || document.getElementById("input-text").value == "")
  {
    alert("Не заполнено одно из полей в форме");
  }
  else 
  {
    alert("Имя: " + document.getElementById("input-name").value + 
      "\nПочта: " + document.getElementById("input-email").value +
      "\nТелефон: " + document.getElementById("input-tel").value +
      "\nКуда полетим? " + document.getElementById("input-text").value);
  }
}