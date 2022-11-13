var fields={};
document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.content = document.getElementById('content');
   })
   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }
   if(isEmail(fields.email)==true)
   {
    return true;
   }
   else{
    alert("Invalid Email");
   }