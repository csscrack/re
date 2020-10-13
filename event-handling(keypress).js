$('input').keypress(function(event){
  if(event.which==13){
    alert('Hello just you pressed enter button and your typed content:'+$(this).val())
  }
})
