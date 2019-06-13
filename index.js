// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
document.getElementById("navbar").addEventListener('click', function (e) {
	if(e.target.className == 'myBtn') {
		modal.style.display = "block";
	if(e.target.dataset.id == "med") {
		document.getElementById('modalText').innerHTML = "Healthcare is one of the applications where VR could have the most significant impact. Healthcare professionals can now use virtual models to prepare them for working on a real body and VR has even been used as pain relief for burns patients. VR can also be used as a treatment for mental health issues, with Virtual Reality Exposure Therapy thought to be particularly effective in the treatment of PTSD and anxiety. The virtual reality technology is used to assist medical students to learn and acquire work experience faster. With this use of virtual reality in education, medical students can learn how to conduct delicate surgical procedures."
	} else if(e.target.dataset.id == "proDes") {
		document.getElementById('modalText').innerHTML = "VR allows engineers and designers to experiment easily with the look and build of a vehicle before commissioning expensive prototypes. Brands such as BMW and Jaguar Land Rover already use VR to hold early design and engineering reviews to check the visual design and object obscuration of the vehicle - all before any money has been spent on physically manufacturing the parts. VR is saving the automotive industry millions by reducing the number of prototypes built per vehicle line."
	} else if(e.target.dataset.id == "arch") {
		document.getElementById('modalText').innerHTML = "VR is gradually changing the way that architects design and experiment with their work. VR makes it possible to see not just what a building or space will look like but how it will feel. For home-owners, they can experience the space before it is physically built and make real-time changes, which saves the customer and the architect time and money (as well as increasing satisfaction on completion of the project). Architects have been using 3D models for years but using immersive tools such as Revit Live allows them to understand and explore the space at the deepest level possible."
	} else if(e.target.dataset.id == "education") {
		document.getElementById('modalText').innerHTML = "VR could revolutionise education by enabling students to learn in an immersive, experiential way. Unimersiv have apps that allow users to take a tour of Ancient Rome, explore the human brain, and board the Titanic. Immersive VR Education are building a VR classroom / meeting room space with their Engage product, where people can learn from lecturers around the world. Companies such as VirtualSpeech provide VR training for soft skills."
	} else if(e.target.dataset.id == "wellBeing") {
		document.getElementById('modalText').innerHTML = "With the rise in popularity for wellness and meditation, it is not surprising that there are VR applications that enable users to immerse themselves in a meditative space. Guided Meditation VR is one of the most popular and surrounds the user with beautiful 360 images while they listen to soothing music and a guided meditation."
	} else if(e.target.dataset.id == "history") {
		document.getElementById('modalText').innerHTML = "An early predecessor to VR were the panoramic paintings which were first created in the 1800s, placing the viewer in a room with a 360 degree, immersive view of a different landscape. Another early analogue of VR were the View-Master stereoscopic photographs, first used in the early 20th century; these were similar to the current Google Cardboard headsets. In the 1950s, a cinematographer named Moron Hellig developed a product called the Sensorama, an arcade cabinet with stereo speakers, 3D display, a vibrating seat, fans, and even smell generators. In the 1980s, the term Virtual Reality was first coined by Jaron Lanier, a pioneer in the field. His company, VPL, developed VR gear, including the Dataglove and the Eyephone(pictured on this blog)."
	} 


	}
  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
 		}
	}})