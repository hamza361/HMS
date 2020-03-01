const loginbutton = document.querySelector("#loginbutton");
var cnic_fetch="123123";
var name_fetch = " ";
var cnic_list = [];
var password_list = [];
var speciality_list = [];
var name_list =[];


function renderdata(doc){


	//Masla............................................
	const cnic = doc.data().cnic;  
	const password = doc.data().password;
	const speciality = doc.data().speciality;
	const name = doc.data().firstname+" "+doc.data().lastname;

	cnic_list.push(cnic);
	password_list.push(password);
	speciality_list.push(speciality);
	name_list.push(name);


	loginbutton.addEventListener("click",function(){

		
		 cnic_fetch = document.querySelector("#cnic").value;
		 name_fetch = document.querySelector("#name").value;

		  if (typeof(Storage) !== "undefined") {
		  // Code for localStorage/sessionStorage.
		  localStorage.setItem('DocCNIC',name_fetch);
		} else {
		  // Sorry! No Web Storage support..
		}	
		const password_fetch = document.querySelector("#password");
		const speciality_fetch = document.querySelector("#speciality");
		const index_of_cnic=cnic_list.indexOf(cnic_fetch);
		const index_of_password=password_list.indexOf(password_fetch.value);
		const index_of_speciality=speciality_list.indexOf(speciality_fetch.value);
		const index_of_name = name_list.indexOf(name_fetch);

		// Wrong:
		if(index_of_cnic===-1 && index_of_password===-1 && index_of_speciality===-1 && index_of_name===-1){
			alert("Please Sign up or Enter Correct information!!");
		}
		//CNIC

		else if(index_of_cnic===-1 && index_of_password!=-1 && index_of_speciality!=-1 && index_of_name!=-1){
			alert("Enter Correct CNIC!!");
		}
		else if(index_of_cnic!=-1 && index_of_password===-1 && index_of_speciality!=-1 && index_of_name!=-1){
			alert("Enter Correct password!!");
		}
		else if(index_of_cnic!=-1 && index_of_password!=-1 && index_of_speciality===-1 && index_of_name!=-1){
			alert("Choose speciality!!");
		}
		else if(index_of_cnic!=-1 && index_of_password!=-1 && index_of_speciality!=-1 && index_of_name===-1){
			alert("Enter Correct Name!!");
		}
		else if(index_of_cnic!=-1 && index_of_password!=-1 && index_of_speciality===-1 && index_of_name===-1){
			alert("Enter Correct Name and choose speciality!!");
		}
		else if(index_of_cnic===-1 && index_of_password===-1 && index_of_speciality!=-1 && index_of_name!=-1){
			alert("Enter Correct CNIC and password!!");
		}
		else if(index_of_cnic===-1 && index_of_password!=-1 && index_of_speciality!=-1 && index_of_name===-1){
			alert("Enter Correct CNIC and Name!!");
		}
		else if(index_of_cnic===-1 && index_of_password!=-1 && index_of_speciality===-1 && index_of_name!=-1){
			alert("Enter Correct CNIC and speciality!!");
		}
		else if(index_of_cnic!=-1 && index_of_password===-1 && index_of_speciality!=-1 && index_of_name===-1){
			alert("Enter Correct Name and password!!");
		}
		else if(index_of_cnic===-1 && index_of_password===-1 && index_of_speciality===-1 && index_of_name!=-1){
			alert("Enter Correct CNIC, password and speciality!!");
		}
		else if(index_of_cnic===-1 && index_of_password===-1 && index_of_speciality!=-1 && index_of_name===-1){
			alert("Enter Correct Name,password and CNIC!!");
		}
		else if(index_of_cnic!=-1 && index_of_password===-1 && index_of_speciality===-1 && index_of_name===-1){
			alert("Enter Correct Name,password and speciality!!");
		}
		else if(index_of_cnic!=-1 && index_of_password===-1 && index_of_speciality===-1 && index_of_name!=-1){
			alert("Enter Correct password and speciality!!");
		}





		// True:
				
		else if(index_of_cnic!=-1 && index_of_password!=-1 && speciality_fetch.value ==="cardiology" && index_of_name!=-1){

			loginbutton.setAttribute("href","cardiologydoctor.html");
		



		
		}
		else if(index_of_cnic!=-1 && index_of_password!=-1 && speciality_fetch.value ==="dermatology" && index_of_name!=-1){

			loginbutton.setAttribute("href","cardiologydoctor.html");
		



		
		}
		else if(index_of_cnic!=-1 && index_of_password!=-1 && speciality_fetch.value ==="infectiousdisease" && index_of_name!=-1){

			loginbutton.setAttribute("href","cardiologydoctor.html");
		



		
		}
		else if(index_of_cnic!=-1 && index_of_password!=-1 && speciality_fetch.value ==="allergyandimmunology" && index_of_name!=-1){

			loginbutton.setAttribute("href","cardiologydoctor.html");
		



		
		}












   })




}



db.collection("Users").doc("Doctor").collection("Doctors").get().then((snapshot)=> {

	snapshot.docs.forEach(doc => {
		renderdata(doc);
	})
})






	



	


