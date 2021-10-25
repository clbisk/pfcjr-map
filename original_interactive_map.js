$("path, circle").hover(function(e) {
    $('#info-box').css('display','block');
    $('#info-box').html($(this).data('info'));
  });
  
  $("path, circle").mouseleave(function(e) {
    $('#info-box').css('display','none');
  });
  
  $(document).mousemove(function(e) {
    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
  }).mouseover();
  
  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(ios) {
    $('a').on('click touchend', function() {
      var link = $(this).attr('href');
      window.open(link,'_blank');
      return false;
    });
  }
  
  //Southern states
  $("#TX").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#AL").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#AR").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#DE").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#FL").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#GA").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#KY").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#LA").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#MD").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#MS").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#OK").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#NC").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#SC").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#TN").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#WV").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  $("#VA").click(function(){window.open("https://pfcjreform.org/southern-states/","_blank");});
  
  //Western states
  
  $("#AK").click(function(){window.open("https://pfcjreform.org/western-states/","_blank");});
  
  $("#AZ").click(function(){window.open("https://pfcjreform.org/western-states/","_blank");});
  
  $("#CA").click(function(){window.open("https://pfcjreform.org/western-states/","_blank");});
  
  $("#CO").click(function(){window.open("https://pfcjreform.org/western-states/","_blank");});
  
  $("#HI").click(function(){window.open("https://pfcjreform.org/western-states/","_blank");});
  
  $("#ID").click(function(){window.open("https://pfcjreform.org/western-states/","_blank");});
  
  $("#MT").click(function(){window.open("https://pfcjreform.org/western-states/","_blank");});
  
  $("#NV").click(function(){window.open("https://pfcjreform.org/western-states/","_blank");});
  
  $("#NM").click(function(){window.open("https://pfcjreform.org/western-states/","_blank");});
  
  $("#OR").click(function(){window.open("https://pfcjreform.org/western-states/","_blank");});
  
  $("#UT").click(function(){window.open("https://pfcjreform.org/western-states/","_blank");});
  
  $("#WA").click(function(){window.open("https://pfcjreform.org/western-states/","_blank");});
  
  $("#WY").click(function(){window.open("https://pfcjreform.org/western-states/","_blank");});
  
  //MidWestern States
  
  $("#IL").click(function(){window.open("https://pfcjreform.org/midwestern-states/","_blank");});
  
  $("#IN").click(function(){window.open("https://pfcjreform.org/midwestern-states/","_blank");});
  
  $("#KS").click(function(){window.open("https://pfcjreform.org/midwestern-states/","_blank");});
  
  $("#IA").click(function(){window.open("https://pfcjreform.org/midwestern-states/","_blank");});
  
  $("#MI").click(function(){window.open("https://pfcjreform.org/midwestern-states/","_blank");});
  
  $("#MO").click(function(){window.open("https://pfcjreform.org/midwestern-states/","_blank");});
  
  $("#MN").click(function(){window.open("https://pfcjreform.org/midwestern-states/","_blank");});
  
  $("#NE").click(function(){window.open("https://pfcjreform.org/midwestern-states/","_blank");});
  
  $("#ND").click(function(){window.open("https://pfcjreform.org/midwestern-states/","_blank");});
  
  $("#OH").click(function(){window.open("https://pfcjreform.org/midwestern-states/","_blank");});
  
  $("#SD").click(function(){window.open("https://pfcjreform.org/midwestern-states/","_blank");});
  
  $("#WI").click(function(){window.open("https://pfcjreform.org/midwestern-states/","_blank");});
  
  //Northeastern states
  
  $("#CT").click(function(){window.open("https://pfcjreform.org/northeastern-states/","_blank");});
  
  $("#ME").click(function(){window.open("https://pfcjreform.org/northeastern-states/","_blank");});
  
  
  $("#NH").click(function(){window.open("https://pfcjreform.org/northeastern-states/","_blank");});
  
  $("#MA").click(function(){window.open("https://pfcjreform.org/northeastern-states/","_blank");});
  
  $("#NJ").click(function(){window.open("https://pfcjreform.org/northeastern-states/","_blank");});
  
  $("#PA").click(function(){window.open("https://pfcjreform.org/northeastern-states/","_blank");});
  
  $("#RI").click(function(){window.open("https://pfcjreform.org/northeastern-states/","_blank");});
  
  $("#NY").click(function(){window.open("https://pfcjreform.org/northeastern-states/","_blank");});
  
  $("#VT").click(function(){window.open("https://pfcjreform.org/northeastern-states/","_blank");});