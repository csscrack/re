
$('body').css('background','yellow')
$('h1').click(function(){
  alert('h1 tag just clicked...!')
  $('h1').css('text-align','center')
  $(this).css('color','violet')
  $(this).css('background','lightgray')
})
$('button:first').click(function(){
  alert('Clicked method...')
  $(this).css('color','red')
  $(this).css('background','orange')
})
$('button:nth-of-type(2)').click(function(){
  alert('keypress method...')
  $(this).css('color','green')
  $(this).css('background','orange')
})
$('button:last').click(function(){
  alert('on method...')
  $(this).css('color','blue')
  $(this).css('background','orange')
})
