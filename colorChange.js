var color_choose = $('.color-choose');
console.log(color_choose)
color_choose.each(function(index, element) {
  console.log( index + ": " + $(element).css);
  if ($( this ).is( "#1" )) {
    $( element ).css( "backgroundColor", "#FFFF1A" );
  } else {
    $( element ).css( "backgroundColor", "#AD0406" );
  }
});
