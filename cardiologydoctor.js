
var Form = document.querySelector("#form");
// var accepted = "Accepted";

//Getting data from fire store and displaying it on page.
function renderdata(doc){
	 var docname=localStorage.getItem('DocCNIC');	
	 let form = document.createElement("FORM");
	 let mob1 = document.createElement("span");
	 let mob2 = document.createElement("span");
	 let space10=document.createElement("span"); 
	 let accept = document.createElement("span");
	 let status1 = document.createElement("span");
	 let status2 = document.createElement("span");
	 let dec = document.createElement("span");
	let del = document.createElement("span");
	let gap1 = document.createElement("div"); // after lastname
	let gap2 = document.createElement("div"); // after age
	let gap3 = document.createElement("div"); //after gender
	let gap4 = document.createElement("div");  // after appointment type
	let gap5 = document.createElement("div");
	let gap21 = document.createElement("div");
 
	let gap6 = document.createElement("div"); //after appointment time
	let gap7 = document.createElement("div"); // after delete
    let space1 = document.createElement("span");
    let space2 = document.createElement("div"); // space 10 is gap(div) not a space
	let name = document.createElement("span");
	let first_name = document.createElement("span");
	let last_name = document.createElement("span");

	let appointment_time1 = document.createElement("span");
    let appointment_time2 = document.createElement("span");
    let space11 =document.createElement("span");
    mob1.textContent="Mobile No: ";
	del.textContent="Delete";
	accept.textContent="Accept";
	dec.textContent="Decline";
	space1.textContent=" ";
	space2.textContent=" ";
	space10.textContent=" ";
	space11.textContent=" ";
	name.textContent="Name: ";
	
	appointment_time1.textContent="Appointment time: ";
	status1.textContent="Status: ";
	gap7.textContent=".........................................................................................................";

   
    $(space10).css("word-spacing","10px");
    $(gap21).css("margin-top","10px");
    $(space11).css("word-spacing","10px")
    
    // alert(doc.data().doctorname);
    
	if(doc.data().speciality=="cardiology" && docname===doc.data().doctorname ){

   
	// let div = document.createElement("div");

	
    form.setAttribute("data-id",doc.id);
	// form.setAttribute("id",i);
	
	first_name.textContent=doc.data().patientname;
	
	

	


	status2.textContent=doc.data().status;

	appointment_time2.textContent=doc.data().time;
	mob2.textContent=doc.data().patientcontact;

	form.appendChild(name);
	form.appendChild(first_name);
	form.appendChild(space1);


	
    
	form.appendChild(gap5);
	form.appendChild(appointment_time1);
	form.appendChild(appointment_time2);

 
	form.appendChild(gap6);
	form.appendChild(mob1);
	form.appendChild(mob2);
	form.appendChild(space2);
	form.appendChild(status1);
	form.appendChild(status2);
	form.appendChild(gap21);
	form.appendChild(accept);
	form.appendChild(space10);
	form.appendChild(del);
	form.appendChild(space11);
	form.appendChild(dec);
	


	// form.appendChild(div);

	document.getElementsByTagName('body')[0].appendChild(form);
	form.appendChild(gap7);
	Form.appendChild(form);


}

// else if(doc.data().speciality==="cardiology" && docname==doc.data().doctorname){
// 		// let div = document.createElement("div");

	
//     form.setAttribute("data-id",doc.id);
// 	// form.setAttribute("id",i);
	
// 	first_name.textContent=doc.data().patientname;
	
	

	




// 	appointment_time2.textContent=doc.data().time;
// 	mob2.textContent=doc.data().patientcontact;

// 	form.appendChild(name);
// 	form.appendChild(first_name);



	
    
// 	form.appendChild(gap5);
// 	form.appendChild(appointment_time1);
// 	form.appendChild(appointment_time2);

 
// 	form.appendChild(gap6);
// 	form.appendChild(mob1);
// 	form.appendChild(mob2);
// 	form.appendChild(space2);
// 	form.appendChild(accept);
// 	form.appendChild(space10);
// 	form.appendChild(del);
	


// 	// form.appendChild(div);

// 	document.getElementsByTagName('body')[0].appendChild(form);
// 	form.appendChild(gap7);
// 	Form.appendChild(form);

// }

else if(doc.data().speciality==="allergyandimmunology" && docname===doc.data().doctorname){
		// let div = document.createElement("div");

    form.setAttribute("data-id",doc.id);
	// form.setAttribute("id",i);
	
	first_name.textContent=doc.data().patientname;
		

	
	status2.textContent=doc.data().status;



	appointment_time2.textContent=doc.data().time;
	mob2.textContent=doc.data().patientcontact;

	form.appendChild(name);
	form.appendChild(first_name);

	form.appendChild(gap1);

	
    
	form.appendChild(gap5);
	form.appendChild(appointment_time1);
	form.appendChild(appointment_time2);

 
	form.appendChild(gap6);
	form.appendChild(mob1);
	form.appendChild(mob2);
	form.appendChild(space2);
	form.appendChild(status1);
	form.appendChild(status2);
	form.appendChild(gap21);
	form.appendChild(accept);
	form.appendChild(space10);
	form.appendChild(del);
	form.appendChild(space11);
	form.appendChild(dec);
	


	// form.appendChild(div);

	document.getElementsByTagName('body')[0].appendChild(form);
	form.appendChild(gap7);
	
	Form.appendChild(form);

}

// else if(doc.data().speciality==="allergyandimmunology" && docname==doc.data().doctorname ){
// 		// let div = document.createElement("div");


//     form.setAttribute("data-id",doc.id);
// 	// form.setAttribute("id",i);
	
// 	first_name.textContent=doc.data().patientname;
	
	

	




// 	appointment_time2.textContent=doc.data().time;
// 	mob2.textContent=doc.data().patientcontact;

// 	form.appendChild(name);
// 	form.appendChild(first_name);
	
// 	form.appendChild(gap1);

	
    
// 	form.appendChild(gap5);
// 	form.appendChild(appointment_time1);
// 	form.appendChild(appointment_time2);

 
// 	form.appendChild(gap6);
// 	form.appendChild(mob1);
// 	form.appendChild(mob2);
// 	form.appendChild(space2);
// 	form.appendChild(accept);
// 	form.appendChild(space10);
// 	form.appendChild(del);
	


// 	// form.appendChild(div);

// 	document.getElementsByTagName('body')[0].appendChild(form);
// 	form.appendChild(gap7);
// 	Form.appendChild(form);

// }


else if(doc.data().speciality==="dermatology" && docname===doc.data().doctorname){
		// let div = document.createElement("div");

	

    form.setAttribute("data-id",doc.id);
	// form.setAttribute("id",i);
	
	first_name.textContent=doc.data().patientname;
	
	

	status2.textContent=doc.data().status;




	appointment_time2.textContent=doc.data().time;
	mob2.textContent=doc.data().patientcontact;

	form.appendChild(name);
	form.appendChild(first_name);
	
	form.appendChild(gap1);

	
    
	form.appendChild(gap5);
	form.appendChild(appointment_time1);
	form.appendChild(appointment_time2);

 
	form.appendChild(gap6);
	form.appendChild(mob1);
	form.appendChild(mob2);
	form.appendChild(space2);
	form.appendChild(status1);
	form.appendChild(status2);
	form.appendChild(gap21);
	form.appendChild(accept);
	form.appendChild(space10);
	form.appendChild(del);
	form.appendChild(space11);
	form.appendChild(dec);
	


	// form.appendChild(div);

	document.getElementsByTagName('body')[0].appendChild(form);
	form.appendChild(gap7);
	Form.appendChild(form);
  

}

// else if(doc.data().speciality==="dermatology" && docname==doc.data().doctorname){
// 		// let div = document.createElement("div");


//     form.setAttribute("data-id",doc.id);
// 	// form.setAttribute("id",i);
	
// 	first_name.textContent=doc.data().patientname;

	

	




// 	appointment_time2.textContent=doc.data().time;
// 	mob2.textContent=doc.data().patientcontact;

// 	form.appendChild(name);
// 	form.appendChild(first_name);
// 	form.appendChild(gap1);

	
    
// 	form.appendChild(gap5);
// 	form.appendChild(appointment_time1);
// 	form.appendChild(appointment_time2);

 
// 	form.appendChild(gap6);
// 	form.appendChild(mob1);
// 	form.appendChild(mob2);
// 	form.appendChild(space2);
// 	form.appendChild(accept);
// 	form.appendChild(space10);
// 	form.appendChild(del);
	


// 	// form.appendChild(div);

// 	document.getElementsByTagName('body')[0].appendChild(form);
// 	form.appendChild(gap7);
// 	Form.appendChild(form);

// }


else if(doc.data().speciality==="infectiousdisease" && docname===doc.data().doctorname){
		// let div = document.createElement("div");


    form.setAttribute("data-id",doc.id);
	// form.setAttribute("id",i);
	
	first_name.textContent=doc.data().patientname;
	
	
	status2.textContent=doc.data().status;
	




	appointment_time2.textContent=doc.data().time;
	mob2.textContent=doc.data().patientcontact;

	form.appendChild(name);
	form.appendChild(first_name);

	form.appendChild(gap1);

	
    
	form.appendChild(gap5);
	form.appendChild(appointment_time1);
	form.appendChild(appointment_time2);

 
	form.appendChild(gap6);
	form.appendChild(mob1);
	form.appendChild(mob2);
	form.appendChild(space2);
	form.appendChild(status1);
	form.appendChild(status2);
	form.appendChild(gap21);
	form.appendChild(accept);
	form.appendChild(space10);
	form.appendChild(del);
	form.appendChild(space11);
	form.appendChild(dec);
	


	// form.appendChild(div);

	document.getElementsByTagName('body')[0].appendChild(form);
	form.appendChild(gap7);
	Form.appendChild(form);

}



// else if(doc.data().speciality==="infectiousdisease" && doc.data().doctorname==="Muhammad Haris"){

//     form.setAttribute("data-id",doc.id);
// 	// form.setAttribute("id",i);
	
// 	first_name.textContent=doc.data().patientfirstname;
// 	last_name.textContent=doc.data().patientlastname;
	

	




// 	appointment_time2.textContent=doc.data().time;
// 	mob2.textContent=doc.data().patientcontact;

// 	form.appendChild(name);
// 	form.appendChild(first_name);
// 	form.appendChild(space1);
// 	form.appendChild(last_name);
// 	form.appendChild(gap1);

	
    
// 	form.appendChild(gap5);
// 	form.appendChild(appointment_time1);
// 	form.appendChild(appointment_time2);

 
// 	form.appendChild(gap6);
// 	form.appendChild(mob1);
// 	form.appendChild(mob2);
// 	form.appendChild(space2);
// 	form.appendChild(accept);
// 	form.appendChild(space10);
// 	form.appendChild(del);
	


// 	// form.appendChild(div);

// 	document.getElementsByTagName('body')[0].appendChild(form);
// 	form.appendChild(gap7);
// 	Form.appendChild(form);
// }




// else if(doc.data().speciality==="infectiousdisease" && doc.data().doctorname==="Zaryab Akram"){

//     form.setAttribute("data-id",doc.id);
// 	// form.setAttribute("id",i);
	
// 	first_name.textContent=doc.data().patientfirstname;
// 	last_name.textContent=doc.data().patientlastname;
	

	




// 	appointment_time2.textContent=doc.data().time;
// 	mob2.textContent=doc.data().patientcontact;

// 	form.appendChild(name);
// 	form.appendChild(first_name);
// 	form.appendChild(space1);
// 	form.appendChild(last_name);
// 	form.appendChild(gap1);

	
    
// 	form.appendChild(gap5);
// 	form.appendChild(appointment_time1);
// 	form.appendChild(appointment_time2);

 
// 	form.appendChild(gap6);
// 	form.appendChild(mob1);
// 	form.appendChild(mob2);
// 	form.appendChild(space2);
// 	form.appendChild(accept);
// 	form.appendChild(space10);
// 	form.appendChild(del);
	


// 	// form.appendChild(div);

// 	document.getElementsByTagName('body')[0].appendChild(form);
// 	form.appendChild(gap7);
// 	Form.appendChild(form);
// }	


// else if(doc.data().speciality==="cardiology" && doc.data().doctorname==="M Hamza Zahid"){

//     form.setAttribute("data-id",doc.id);
// 	// form.setAttribute("id",i);
	
// 	first_name.textContent=doc.data().patientfirstname;
// 	last_name.textContent=doc.data().patientlastname;
	

	




// 	appointment_time2.textContent=doc.data().time;
// 	mob2.textContent=doc.data().patientcontact;

// 	form.appendChild(name);
// 	form.appendChild(first_name);
// 	form.appendChild(space1);
// 	form.appendChild(last_name);
// 	form.appendChild(gap1);

	
    
// 	form.appendChild(gap5);
// 	form.appendChild(appointment_time1);
// 	form.appendChild(appointment_time2);

 
// 	form.appendChild(gap6);
// 	form.appendChild(mob1);
// 	form.appendChild(mob2);
// 	form.appendChild(space2);
// 	form.appendChild(accept);
// 	form.appendChild(space10);
// 	form.appendChild(del);
	


// 	// form.appendChild(div);

// 	document.getElementsByTagName('body')[0].appendChild(form);
// 	form.appendChild(gap7);
// 	Form.appendChild(form);
// }	




// else if(doc.data().speciality==="allergyandimmunology" && doc.data().doctorname==="Usman Khawar"){

//     form.setAttribute("data-id",doc.id);
// 	// form.setAttribute("id",i);
	
// 	first_name.textContent=doc.data().patientfirstname;
// 	last_name.textContent=doc.data().patientlastname;
	

	




// 	appointment_time2.textContent=doc.data().time;
// 	mob2.textContent=doc.data().patientcontact;

// 	form.appendChild(name);
// 	form.appendChild(first_name);
// 	form.appendChild(space1);
// 	form.appendChild(last_name);
// 	form.appendChild(gap1);

	
    
// 	form.appendChild(gap5);
// 	form.appendChild(appointment_time1);
// 	form.appendChild(appointment_time2);

 
// 	form.appendChild(gap6);
// 	form.appendChild(mob1);
// 	form.appendChild(mob2);
// 	form.appendChild(space2);
// 	form.appendChild(accept);
// 	form.appendChild(space10);
// 	form.appendChild(del);
	


// 	// form.appendChild(div);

// 	document.getElementsByTagName('body')[0].appendChild(form);
// 	form.appendChild(gap7);
// 	Form.appendChild(form);
// }	



// else if(doc.data().speciality==="dermatology" && doc.data().doctorname==="Zain Javed"){

//     form.setAttribute("data-id",doc.id);
// 	// form.setAttribute("id",i);
	
// 	first_name.textContent=doc.data().patientfirstname;
// 	last_name.textContent=doc.data().patientlastname;
	

	




// 	appointment_time2.textContent=doc.data().time;
// 	mob2.textContent=doc.data().patientcontact;

// 	form.appendChild(name);
// 	form.appendChild(first_name);
// 	form.appendChild(space1);
// 	form.appendChild(last_name);
// 	form.appendChild(gap1);

	
    
// 	form.appendChild(gap5);
// 	form.appendChild(appointment_time1);
// 	form.appendChild(appointment_time2);

 
// 	form.appendChild(gap6);
// 	form.appendChild(mob1);
// 	form.appendChild(mob2);
// 	form.appendChild(space2);
// 	form.appendChild(accept);
// 	form.appendChild(space10);
// 	form.appendChild(del);
	


// 	// form.appendChild(div);

// 	document.getElementsByTagName('body')[0].appendChild(form);
// 	form.appendChild(gap7);
// 	Form.appendChild(form);
// }	



$(del).css("color","black");
$(del).css("background","linear-gradient(to right, #EB3349,#F45C43)");
$(del).css("border","2px solid black");
$(del).css("margin","10px auto");
$(del).css("border-radius","15px");
$(del).css("font-family","'Dancing Script', cursive");
$(del).css("font-size","25px");
$(del).hover(function(){
 	$(this).css("background", "floralwhite");
  }, function(){
  $(this).css("background", "linear-gradient(to right, #EB3349,#F45C43)");
});

$(accept).css("color","black");
$(accept).css("background","linear-gradient(to right, #EB3349,#F45C43)");
$(accept).css("border","2px solid black");
$(accept).css("margin","10px auto");
$(accept).css("border-radius","15px");
$(accept).css("font-family","'Dancing Script', cursive");
$(accept).css("font-size","25px");
$(accept).hover(function(){
 	$(this).css("background", "floralwhite");
  }, function(){
  $(this).css("background", "linear-gradient(to right, #EB3349,#F45C43)");
});

$(dec).css("color","black");
$(dec).css("background","linear-gradient(to right, #EB3349,#F45C43)");
$(dec).css("border","2px solid black");
$(dec).css("margin","10px auto");
$(dec).css("border-radius","15px");
$(dec).css("font-family","'Dancing Script', cursive");
$(dec).css("font-size","25px");
$(dec).hover(function(){
 	$(this).css("background", "floralwhite");
  }, function(){
  $(this).css("background", "linear-gradient(to right, #EB3349,#F45C43)");
});
// 
// $(Form).css("padding-left","40px");

//Delete function:
$(del).click(function(event){
	event.stopPropagation();
	let id = event.target.parentElement.getAttribute("data-id")
	$(this).parent().remove();
	
	     
     // $(form).css("background","linear-gradient(to right, #FDFC47,#24FE41)")

	var washingtonRef = db.collection("Appointments").doc("Patient").collection("Patients").doc(id);

// Set the "capital" field of the city 'DC'
	return washingtonRef.update({
    status:"Deleted"
	})
	.then(function() {
    	alert("Document successfully updated!");
	})
	.catch(function(error) {
    // The document probably doesn't exist.
    	alert("Error updating document: ", error);
});
    

	

});

$(accept).click(function(){
     
     event.stopPropagation();
	let id = event.target.parentElement.getAttribute("data-id")
     // $(form).css("background","linear-gradient(to right, #FDFC47,#24FE41)")

var washingtonRef = db.collection("Appointments").doc("Patient").collection("Patients").doc(id);

// Set the "capital" field of the city 'DC'
return washingtonRef.update({
    status:"Accepted"
})
.then(function() {
    alert("Document successfully updated Kindly Refresh the page!!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    alert("Error updating document: ", error);
});
    


});


$(dec).click(function(){
     
     event.stopPropagation();
	let id = event.target.parentElement.getAttribute("data-id")
     // $(form).css("background","linear-gradient(to right, #EB3349,#F45C43)")

var washingtonRef = db.collection("Appointments").doc("Patient").collection("Patients").doc(id);

// Set the "capital" field of the city 'DC'
return washingtonRef.update({
    status:"Declined"
})
.then(function() {
    alert("Document successfully updated Kindky Refresh the page!!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    alert("Error updating document: ", error);
});
    


});
 


} //renderfunction ends

















db.collection("Appointments").doc("Patient").collection("Patients").get().then((snapshot)=> {

	snapshot.docs.forEach(doc => {
		renderdata(doc);
	})
})



