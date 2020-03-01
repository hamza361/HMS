
  function isInputNumber(evt){
  var ch = String.fromCharCode(evt.which);
  if(!(/[0-9]/.test(ch))){
    evt.preventDefault();
  }
}




 var addfirstcard127 = [];
 var addlastcard127 =[];
 var specialcard127=[];

 var addfirstaller127=[];
 var addlastaller127=[]; 
 var specialaller127=[];

var addfirstder128=[];
var addlastder128=[]; 
var specialder128=[];

var addfirstinfer128=[];
var addlastinfer128=[]; 
var specialinfer128=[];

var select = document.querySelector("#doctor")
var selectspeciality =  document.querySelector("#speciality");
var selectdoctor = document.querySelector("#doctor");
var special=localStorage.getItem('special');
var first=localStorage.getItem('first');
var last=localStorage.getItem('last');
var time = document.querySelector("#time");


//CARDIOLOGY STARTS:

if(localStorage.getItem('cardiofirst127') == null){
    var addfirstcard127 =[];
}else{
    addfirstcard127 =  JSON.parse(localStorage.getItem('cardiofirst127'));
   //-----------^parse the item by getting---^--stored item
}

function addfirstcardio(){
    var index_of_first1 = addfirstcard127.indexOf(first);
    if(index_of_first1===-1){

         addfirstcard127.push(first);
    }
   
    localStorage.setItem('cardiofirst127', JSON.stringify(addfirstcard127));
    //------------^store the item by stringify--^

}

if(localStorage.getItem('cardiolast127') == null){
    var addlastcard127 =[];
}else{
    addlastcard127 =  JSON.parse(localStorage.getItem('cardiolast127'));
   //-----------^parse the item by getting---^--stored item
}

function addlastcardio(){
    var index_of_last1 = addlastcard127.indexOf(last);
    if(index_of_last1===-1){

         addlastcard127.push(last);
    }
   
    localStorage.setItem('cardiolast127', JSON.stringify(addlastcard127));
    //------------^store the item by stringify--^    
}
if(localStorage.getItem('cardiospecial127') == null){
    var specialcard127 =[];
}else{
    specialcard127=  JSON.parse(localStorage.getItem('cardiospecial127'));
   //-----------^parse the item by getting---^--stored item
}

function specialcardio(){
    specialcard127.push(special);
    localStorage.setItem('cardiospecial127', JSON.stringify(specialcard127));
 }    

//CARDIOLOGY ENDS

//Aller STARTS:

if(localStorage.getItem('allerfirst127') == null){
    var addfirstaller127 =[];
}else{
    addfirstaller127 =  JSON.parse(localStorage.getItem('allerfirst127'));
   //-----------^parse the item by getting---^--stored item
}

function addfirstallerio(){
  
    var index_of_first2 = addfirstaller127.indexOf(first);
    if(index_of_first2===-1){

          addfirstaller127.push(first);
    }
  
    localStorage.setItem('allerfirst127', JSON.stringify(addfirstaller127));
    //------------^store the item by stringify--^

}

if(localStorage.getItem('allerlast127') == null){
    var addlastaller127 =[];
}else{
    addlastaller127 =  JSON.parse(localStorage.getItem('allerlast127'));
   //-----------^parse the item by getting---^--stored item
}

function addlastallerio(){

    var index_of_last2 = addlastaller127.indexOf(last);
    if(index_of_last2===-1){

           addlastaller127.push(last);
    }
  
  
    localStorage.setItem('allerlast127', JSON.stringify(addlastaller127));
  }
    //------------^store the item by stringify--^    
if(localStorage.getItem('allerspecial127') == null){
    var specialaller127 =[];
}else{
      specialaller127 =  JSON.parse(localStorage.getItem('allerspecial127'));
   //-----------^parse the item by getting---^--stored item
}

function specialallerio(){
    specialaller127.push(special);
    localStorage.setItem('allerspecial127', JSON.stringify(specialaller127));    
}
//Aller ENDS


//Der STARTS:

if(localStorage.getItem('derfirst128') == null){
    var addfirstder128 =[];
}else{
    addfirstder128 =  JSON.parse(localStorage.getItem('derfirst128'));
   //-----------^parse the item by getting---^--stored item
}

function addfirstderio(){
   
    var index_of_first3 = addfirstder128.indexOf(first);
    if(index_of_first3===-1){

       addfirstder128.push(first);
          
    }
  
   
    localStorage.setItem('derfirst128', JSON.stringify(addfirstder128));
}    //------------^store the item by stringify--^



if(localStorage.getItem('derlast128') == null){
    var addlastder128 =[];
}else{
    addlastder128 =  JSON.parse(localStorage.getItem('derlast128'));
   //-----------^parse the item by getting---^--stored item
}

function addlastderio(){
   
    var index_of_last3 = addlastder128.indexOf(last);
    if(index_of_last3===-1){

      addlastder128.push(last);
          
    }
   
    localStorage.setItem('derlast128', JSON.stringify(addlastder128));
  }  //------------^store the item by stringify--^    
if(localStorage.getItem('derspecial128') == null){
    var specialder128 =[];
}else{
      specialder128 =  JSON.parse(localStorage.getItem('derspecial128'));
   //-----------^parse the item by getting---^--stored item
}

function specialderio(){
    specialder128.push(special);
    localStorage.setItem('derspecial128', JSON.stringify(specialder128));    
}
//Der ENDS

//infer STARTS:

if(localStorage.getItem('inferfirst128') == null){
    var addfirstinfer128 =[];
}else{
    addfirstinfer128 =  JSON.parse(localStorage.getItem('inferfirst128'));
   //-----------^parse the item by getting---^--stored item
}

function addfirstinferio(){
    
    var index_of_first4 = addfirstinfer128.indexOf(first);
    if(index_of_first4===-1){

             
        addfirstinfer128.push(first);
          
    }

    localStorage.setItem('inferfirst128', JSON.stringify(addfirstinfer128));
    //------------^store the item by stringify--^
}

if(localStorage.getItem('inferlast128') == null){
    var addlastinfer128 =[];
}else{
    addlastinfer128 =  JSON.parse(localStorage.getItem('inferlast128'));
   //-----------^parse the item by getting---^--stored item
}

function addlastinferio(){
 
    var index_of_last4 = addlastinfer128.indexOf(last);
    if(index_of_last4===-1){

             
      addlastinfer128.push(last);
          
    }
   
    localStorage.setItem('inferlast128', JSON.stringify(addlastinfer128));
  }
    //------------^store the item by stringify--^    
if(localStorage.getItem('inferspecial128') == null){
    var specialinfer128 =[];
}else{
      specialinfer128 =  JSON.parse(localStorage.getItem('inferspecial128'));
   //-----------^parse the item by getting---^--stored item
}

function specialinferio(){
    specialinfer128.push(special);
    localStorage.setItem('inferspecial128', JSON.stringify(specialinfer128));    
}
//infer ENDS




if(special=="cardiology"){
  addfirstcardio();
  addlastcardio();
  specialcardio();
}
else if(special=="allergyandimmunology"){
  addfirstallerio();
  addlastallerio();
  specialallerio();

}

else if(special=="dermatology"){
  addfirstderio();
  addlastderio();
  specialderio();

}
else if(special=="infectiousdisease"){
  addfirstinferio();
  addlastinferio();
  specialinferio();

}










  








selectspeciality.addEventListener("click",function(){
   $("#doctor").empty()

  if(selectspeciality.value==="allergyandimmunology"){

    if(specialaller127[0]=="allergyandimmunology"){
      
      
         for(var i =0; i<addfirstaller127.length;i++){
          var value = addfirstaller127[i]+" "+addlastaller127[i];
          $('#doctor').append("<option value='"+ value + "'>" + value + "</option>");
        }




    }

      
  }

  else if(selectspeciality.value==="cardiology"){
  	 $("#doctor").empty()
    if(specialcard127[0]=="cardiology"){

        
      

        for(var i =0; i<addfirstcard127.length;i++){
          var value = addfirstcard127[i]+" "+addlastcard127[i];
          $('#doctor')
          .append("<option value='"+ value + "'>" + value + "</option>");
        }

      }
         



    


  
    

  }
  else if(selectspeciality.value==="dermatology"){

  	 $("#doctor").empty()
    if(specialder128[0]=="dermatology"){
 
        
       

        for(var i =0; i<addfirstder128.length;i++){
          var value = addfirstder128[i]+" "+addlastder128[i];
          $('#doctor')
          .append("<option value='"+ value + "'>" + value + "</option>");
        }

      }
         


   
      

  } 
  else if(selectspeciality.value==="infectiousdisease"){

       $("#doctor").empty()
    if(specialinfer128[0]=="infectiousdisease"){
         
    
        


        for(var i =0; i<addfirstinfer128.length;i++){
          var value = addfirstinfer128[i]+" "+addlastinfer128[i];
          $('#doctor').append("<option value='"+ value + "'>" + value + "</option>");
         
        }

      }
         


  

  } 



});

const form = document.querySelector("#form");

form.addEventListener("submit",(e)=>{





  e.preventDefault();

  

    if(selectspeciality.value=="Choose..."){
      alert("Select speciality!!!");
    }
    else if(time.value=="Choose..."){
      alert("Select Time");
    }

    else{


   
  


  db.collection("Appointments").doc("Patient").collection("Patients").doc().set({

    patientname:form.firstname.value+" "+form.lastname.value,//


  
    patientcnic:form.cnic.value,// Patient cnic
  
    speciality:form.speciality.value,

    doctorname:form.doctor.value,
    patientcontact:form.contact.value,//
 
    time:form.appointmentdate.value+" "+form.time.value,
    status:" "
  //
   



  })
  .then(function() {
    alert("Document successfully store in cloud!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
})





}


})






