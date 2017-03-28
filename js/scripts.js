$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();

    $("#myoutput").show();

    var warningBoxes = 0;
    var healthBoxes = 0;
    var manageBoxes = 0;

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
      $('#stress_management').append(manageBoxes + "<br>");
      manageBoxes += 1;
    });


    var suggestion = "starting...";

    if ((warningBoxes >= 4) && (healthBoxes >= 6)) {
      suggestion = "You gotta water your plants. Nobody can water them for you.";
    }

    if ((warningBoxes >= 4) && ( manageBoxes >= 5)) {
      suggestion = "I’m gonna go hard no matter what because I gotta feed my family and I gotta feed myself.";
    }

    if  ((warningBoxes <= 2) && ( healthBoxes <= 2) && ( manageBoxes >= 3)) {
      suggestion = "We gonna win more. We gonna live more. We the best.";
    }

    // console.log(suggestion);
    // Then, based on user answers, provide some guidance: For instance, if a user reports 4 stress-related symptoms, and 6 warning signs apply to them, suggest some resources to help them out.
    // Or, if a user says 4 warning signs of high stress apply to them, but they also report using 5 of the recommended ways to manage stress, tell them they're doing a pretty good job.
    // Include at least 3 possible results.

    $('#warning').append(warningBoxes);
    $('#symptoms').append(healthBoxes);
    $('#stress_management').append(manageBoxes);
    $('#suggestion').append(suggestion);

  });
});
