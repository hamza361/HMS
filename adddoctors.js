
var selectspeciality =  document.querySelector("#speciality");

var gender = document.querySelector("#gender");







const form = document.querySelector("#form");

form.addEventListener("submit",(e)=>{
  
  e.preventDefault();
  var special ="";
  var first = "";
  var last ="";

  if(form.gender.value=="Choose..."){
    alert("Choose Gender!!!");
  }


  else{


  if(form.speciality.value=="cardiology"){
    special = form.speciality.value;
    first = form.firstname.value;
    last = form.lastname.value;
    localStorage.setItem('first',first);
    localStorage.setItem('last',last);
    localStorage.setItem('special',special);
  }
  else if(form.speciality.value=="allergyandimmunology"){
    special = form.speciality.value;
    first = form.firstname.value;
    last = form.lastname.value;
    localStorage.setItem('first',first);
    localStorage.setItem('last',last);
    localStorage.setItem('special',special);
  }
   else if(form.speciality.value=="dermatology"){
    // alert(form.speciality.value);
    special = form.speciality.value;
    first = form.firstname.value;
    last = form.lastname.value;
    localStorage.setItem('first',first);
    localStorage.setItem('last',last);
    localStorage.setItem('special',special);
  }
  else if(form.speciality.value=="infectiousdisease"){
    // alert(form.speciality.value);
    special = form.speciality.value;
    first = form.firstname.value;
    last = form.lastname.value;
    localStorage.setItem('first',first);
    localStorage.setItem('last',last);
    localStorage.setItem('special',special);
  }


 
  db.collection("Users").doc("Doctor").collection("Doctors").doc(form.cnic.value).set({
   
    firstname:form.firstname.value,//
    lastname:form.lastname.value,//
   
    cnic:form.cnic.value,//
   
    speciality:form.speciality.value,
 
    
    contact:form.contact.value,//
    dob:form.dob.value,
   
    gender:form.gender.value,//
    password:form.password.value,//   
    address:form.address.value


  })
  .then(function() {
    alert("Document successfully store in cloud!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
})

 
  

 }





})


