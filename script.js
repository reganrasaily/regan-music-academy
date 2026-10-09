const toggle=document.querySelector(".menu-toggle");const nav=document.querySelector("nav");
toggle?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const enquiryForm = document.getElementById("enquiry-form");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("student-name").value.trim();
    const studentAge = document.getElementById("student-age").value;
    const parentName = document.getElementById("parent-name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const instrument = document.getElementById("instrument").value;
    const timing = document.getElementById("timing").value.trim();

    const message =
      "STUDENT ENQUIRY - REGAN MUSIC ACADEMY\n\n" +
      "Student Name: " + studentName + "\n" +
      "Student Age: " + studentAge + "\n" +
      "Parent Name: " + parentName + "\n" +
      "Contact Number: " + phone + "\n" +
      "Instrument: " + instrument + "\n" +
      "Preferred Timing: " + timing;

    const whatsappURL =
      "https://wa.me/919564234578?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  });
}
