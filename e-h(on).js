$('h1').on('mouseover',function() {
  $(this).text('Captain : Rohit Sharma')
  $(this).css({color:'green',background:'orange'})

})

$('h1').on('mouseout',function(){
  $(this).text('Vice-Captain : Kiran Pollard')
  $(this).css({color:'cyan',background:'gray'})
  $('body').css('background','pink')
})
