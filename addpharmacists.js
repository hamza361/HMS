


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


   


 
 
  db.collection("Users").doc("Pharmacist").collection("Pharmacists").doc(form.cnic.value).set({
   
    firstname:form.firstname.value,//
    lastname:form.lastname.value,//
   
    cnic:form.cnic.value,//
   

 
    
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


