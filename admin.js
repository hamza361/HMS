
var doctorsbutton=document.querySelector("#doctorsbutton");
var patientsbutton=document.querySelector("#patientsbutton");
var adddoctorsbutton = document.querySelector("#adddoctors");
var pharmacistbutton = document.querySelector("#pharmacistbutton");
var addpharmacistbutton = document.querySelector("#addpharmacist");

doctorsbutton.addEventListener("click",function(){
  doctorsbutton.setAttribute("href","doctors.html");

})

patientsbutton.addEventListener("click",function(){
	 patientsbutton.setAttribute("href","patients.html");

});

adddoctorsbutton.addEventListener("click",function(){
	adddoctorsbutton.setAttribute("href","adddoctors.html");


});


pharmacistbutton.addEventListener("click",function(){
	pharmacistbutton.setAttribute("href","pharmacist.html");


});

addpharmacistbutton.addEventListener("click",function(){
	addpharmacistbutton.setAttribute("href","addpharmacists.html");


});















