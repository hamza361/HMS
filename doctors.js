
var Form = document.querySelector("#form");
function renderdata(doc){

	 let form = document.createElement("FORM");
	

	let gap1 = document.createElement("div"); // after lastname
	let gap2 = document.createElement("div"); // after age
	let gap3 = document.createElement("div"); //after gender
	let gap4 = document.createElement("div");  // after appointment type
     let gap5 = document.createElement("div");  
     let gap6 = document.createElement("div"); 
    let space1 = document.createElement("span");
    let space2 = document.createElement("span");
	let name = document.createElement("span");
	let first_name = document.createElement("span");
	let last_name = document.createElement("span");
	let dob1 = document.createElement("span");
	let dob2 = document.createElement("span");
    let gender1 = document.createElement("span");
    let gender2 = document.createElement("span");
	let cnic1 = document.createElement("span");
	let cnic2 =  document.createElement("span");	
	let contact1 = document.createElement("span");
	let contact2 =  document.createElement("span");	
	let speciality1 = document.createElement("span");
	let speciality2 = document.createElement("span");
	
	space1.textContent=" ";
	space2.textContent=" ";
	name.textContent="Name: ";
	dob1.textContent="Date of Birth: ";
	gender1.textContent="Gender: ";
	cnic1.textContent="CNIC: ";
	contact1.textContent="Mobile No: "
	speciality1.textContent="Speciality: "
	gap6.textContent=".........................................................................................................";





	
	
    form.setAttribute("data-id",doc.id);
	// form.setAttribute("id",i);
	
	first_name.textContent=doc.data().firstname;
	last_name.textContent=doc.data().lastname;
	
	dob2.textContent=doc.data().dob;
	
	gender2.textContent=doc.data().gender;

	cnic2.textContent=doc.data().cnic;

	contact2.textContent=doc.data().contact;

	speciality2.textContent=doc.data().speciality;


	form.appendChild(name);
	form.appendChild(first_name);
	form.appendChild(space1);
	form.appendChild(last_name);
	form.appendChild(gap1);
	form.appendChild(dob1);
	form.appendChild(dob2);
	form.appendChild(gap2);
    form.appendChild(gender1);
    form.appendChild(gender2);
    form.appendChild(gap3);
	form.appendChild(cnic1);
	form.appendChild(cnic2);
	form.appendChild(gap4)
	form.appendChild(contact1);
	form.appendChild(contact2);
	form.appendChild(gap5)
	form.appendChild(speciality1);
	form.appendChild(speciality2);

	

	document.getElementsByTagName('body')[0].appendChild(form);
	form.appendChild(gap6);
	Form.appendChild(form);

} //renderfunction ends















db.collection("Users").doc("Doctor").collection("Doctors").get().then((snapshot)=> {

	snapshot.docs.forEach(doc => {
		renderdata(doc);
	})





});
