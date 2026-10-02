AOS.init({duration:1200});

emailjs.init("YOUR_PUBLIC_KEY");  // 👈 yaha apna public key daalo

document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();

const btn = document.getElementById("submitBtn");
const loader = btn.querySelector(".loader");
const btnText = btn.querySelector(".btn-text");

loader.style.display="block";
btnText.textContent=" Sending...";
btn.disabled=true;

emailjs.send("service_5padp3b","template_fpy120a",{
from_name:document.getElementById("name").value,
from_email:document.getElementById("email").value,
message:document.getElementById("message").value
}).then(function(){

loader.style.display="none";
btnText.textContent=" Sent ✓";
btn.disabled=false;

document.getElementById("contactForm").reset();

});
});