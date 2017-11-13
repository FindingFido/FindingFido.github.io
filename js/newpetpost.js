

function submitFunction() {
	
	document.getElementById("success-page").style.display = "block";
	document.getElementById("form-fillout").style.display = "none";


	var form = document.forms[0];
	console.log(form.elements);
	var isLostPet = form.elements[0].checked;
	var isFoundPet = form.elements[1].checked;
	var petName = form.elements[2].value;
	var gender = form.elements[3].value;
	var breed = form.elements[4].value;
	var color = form.elements[5].value;
	var isSmallPet = form.elements[6].checked;
	var isMediumPet = form.elements[7].checked;
	var isLargePet = form.elements[8].checked;
	var isXLargePet = form.elements[9].checked;
	var dateTimeLastSeen = form.elements[10].value;
	console.log(dateTimeLastSeen)
	var locationLastSeen = form.elements[11].value;
	var city = form.elements[12].value;
	var state = form.elements[13].value;
	var zipcode = form.elements[14].value;
	var description = form.elements[15].value;
	var photo = form.elements[16]
	var contactPhone = form.elements[17].value;
	var contactEmail = form.elements[18].value;

	// Change header of new pet profile
	if (isLostPet == true) {
		document.getElementById("newpost-header").innerHTML = "Lost Pet";
	}
	else {
		document.getElementById("newpost-header").innerHTML = "Found Pet";
	}

	// Set Name
	document.getElementById("pet-name").innerHTML = "<b>Name: </b>" + petName;

	// Set Gender
	document.getElementById("pet-gender").innerHTML = "<b>Gender: </b>" + gender;

	// Set Breed
	document.getElementById("pet-breed").innerHTML = "<b>Breed: </b>" + breed;

	// Set Color
	document.getElementById("pet-color").innerHTML = "<b>Color: </b>" + color;

	// Set Size
	if (isSmallPet == true) {
		document.getElementById("pet-size").innerHTML = "<b>Size: </b>Small";
	}
	else if (isMediumPet == true) {
		document.getElementById("pet-size").innerHTML = "<b>Size: </b>Medium";
	}
	else if (isLargePet == true) {
		document.getElementById("pet-size").innerHTML = "<b>Size: </b>Large";
	}
	else {
		document.getElementById("pet-size").innerHTML = "<b>Size: </b>Extra Large";
	}

	// Set Last Seen
	document.getElementById("pet-lastseen").innerHTML = "<b>Last Seen: </b>" + dateTimeLastSeen + " " + locationLastSeen + " " + city + " " + state + " " + city + ", " + zipcode;

	// Set Phone Number
	document.getElementById("contact-phone").innerHTML = "<b>Phone Number: </b>" + contactPhone;

	// Set Email
	document.getElementById("contact-email").innerHTML = "<b>Email: </b>" + contactEmail;

	// Set Description
	document.getElementById("pet-description").innerHTML = "<b>Description: </b>" + description;








	return false
}
