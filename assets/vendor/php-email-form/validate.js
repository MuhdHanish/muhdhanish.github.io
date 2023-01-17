function validateform(){
  var name = document.form.name.value;
  var email = document.form.email.value;
  var subject =document.form.subject.value;
  var number=document.form.number.value;
  var text = document.form.message.value;
  var regex = /^[a-zA-Z]\w+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/gm;
  var err=document.getElementById("error-display");

  if(name==""){
    err.innerHTML="Name is empty !";
    return false;
  }
    if(name.length<5){
    err.innerHTML="Enter full name (should contain 5 letters) !";
    return false;
  }
  if(email==""){
    err.innerHTML="Email is empty !";
    return false;
  }
  if(regex.test(email)==false){
    err.innerHTML="Not valid !";
    return false;
  }
    if(subject==""){
    err.innerHTML="Subject is empty !";
    return false;
  }
    if(subject.length<5){
    err.innerHTML="should contain  at least 5 letters !";
    return false;
  }
    if(text==""){
    err.innerHTML="Message is empty !";
    return false;
  }
    if(text.length<10){
    err.innerHTML="should contain  at least 10 letters !";
    return false;
  }
  if(number==""){
    err.innerHTML="number is empty !";
    return false;
  }
    if(number<11){
    err.innerHTML="Enter your valid phone number";
    return false;
  }
  err.innerHTML="Email response reported!";
  return true;
}