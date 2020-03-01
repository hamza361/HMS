const loginbutton = document.querySelector("#loginbutton");
var cnic_fetch="123123";
var cnic_list = [];
var password_list = [];


function renderdata(doc){


	const cnic = doc.data().cnic;  
	const password = doc.data().password;
	cnic_list.push(cnic);
	password_list.push(password);

	loginbutton.addEventListener("click",function(){

		const cnic_fetch = document.querySelector("#cnic").value;
		  if (typeof(Storage) !== "undefined") {
		  // Code for localStorage/sessionStorage.
		  localStorage.setItem('admincnic',cnic_fetch);
		} else {
		  // Sorry! No Web Storage support..
		}	
		const password_fetch = document.querySelector("#password");
		const index_of_cnic=cnic_list.indexOf(cnic_fetch);
		const index_of_password=password_list.indexOf(password_fetch.value);
		if(index_of_cnic===-1 && index_of_password===-1){
			alert("Please Sign up or Enter Correct information!!");
		}
		else if(index_of_cnic===-1 && index_of_password!=-1){
			alert("Enter Correct CNIC!!");
		}
		else if(index_of_cnic!=-1 && index_of_password===-1){
			alert("Enter Correct password!!");
		}
		else{
			loginbutton.setAttribute("href","admin.html")
		}








   })




}



db.collection("Users").doc("Admin").collection("Administrator").get().then((snapshot)=> {

	snapshot.docs.forEach(doc => {
		renderdata(doc);
	})
})






	