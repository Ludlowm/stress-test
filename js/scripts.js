$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();

    $("#myoutput").show();

    var warningBoxes = 0;
    var healthBoxes = 0;
    var stressBoxes = 0;

    $("input:checkbox[name=warning]:checked").each(function(){
      var warningOutput = $(this).val();
      $('#warning').append(warningOutput + "<br>");
      warningBoxes += 1;
    });


    $("input:checkbox[name=stress]:checked").each(function(){
      var healthOutput = $(this).val();
      $('#symptoms').append(healthOutput + "<br>");
      healthBoxes += 1;
    });

    $("input:checkbox[name=management]:checked").each(function(){
      var stressOutput = $(this).val();
      $('#stress_management').append(stressOutput + "<br>");
      stressBoxes += 1;
    });

    $('#warning').append(warningBoxes);
    $('#symptoms').append(healthBoxes);
    $('#stress_management').append(stressBoxes);

  });
});
