//your JS code here. If required.process.stdout.write("Your message here");

function show() {
let fname=document.getElementById("name").value;
let lname=document.getElementById("lname").value;
let phno=document.getElementById("phno").value;
let email=document.getElementById("email").value;
alert(`First Name: ${fname} Last Name: ${lname} Phone Number: ${phno} Email ID: ${email}`);
document.getElementById("form").reset();
}
