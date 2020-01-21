var currentDate = new Date();
var month = currentDate.getMonth();
var adultYear = currentDate.getFullYear() - 18;
var adultCutoffDate = new Date(adultYear, month, currentDate.getDate());

var dateArray = $('[id*="2347"] .textbox').val().split("-").map( Number );
var birthday = new Date(dateArray[0], dateArray[1], dateArray[2]);

if(dateArray > adultCutoffDate) {
  alert('You are under 18 years old')
}


Is the radio button checked?
$('[id*="2428_1"]').prop("checked") == true;

Force selection of radio button
$('[id*="2428_0"]').prop("checked", "true");

get datepicker value 
$('[id*="2347"] .textbox').val();




$('[id*="2347"] .textbox').change(function() {
  var currentDate = new Date();
    var month = currentDate.getMonth();
    var adultYear = currentDate.getFullYear() - 18;
    var adultCutoffDate = new Date(adultYear, month, currentDate.getDate());

    var dateArray = $('[id*="2347"] .textbox').val().split("-").map( Number );
    var birthday = [];
    birthday.push(dateArray[0], dateArray[1], dateArray[2]);
    console.log(birthday);
    console.log(adultCutoffDate);
    var dob = new Date(dateArray[0], dateArray[1], dateArray[2]);
    console.log(dob);
    if (dob > adultCutoffDate) {
        $('[id*="2428_1"]').prop("checked", "true");
    }
    else {
        $('[id*="2428_0"]').prop("checked", "true");
    }
});