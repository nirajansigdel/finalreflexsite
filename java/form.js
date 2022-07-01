   function validation(){
    var user=document.getElementById('user').value;
   var address=document.getElementById('address').value;
     var contact=document.getElementById('contact').value;
    var email=document.getElementById('email').value;

      if(user==""){
       document.getElementById('username').innerHTML="**please enter your name";
      return false;
    }

    if((user.length<=2) || (user.length>40)){
        document.getElementById('username').innerHTML="**Name should be between 2-40 charcter";
        return false;
    }
    if(!isNaN(user))
    {
        document.getElementById('username').innerHTML="**Name should be character";
        return false;  
    }
    if(address==""){
        document.getElementById('addressspan').innerHTML="**please enter your address";
         return false;
     }
   
     if(contact==""){
        document.getElementById('contactspan').innerHTML="**please enter your contact number";
     return false;
     }
     if(isNaN(contact)){
      document.getElementById('contactspan').innerHTML="**number should be  on digit only";
   return false;
   }
   if(contact.length<=7){
    document.getElementById('contactspan').innerHTML="**number must be greater than 7digit";
     return false;
 }
     if(email==""){
        document.getElementById('emailspan').innerHTML="**please entr your email address";
     return false;
     }
     if(email.indexof('@')<=0){
      document.getElementById('emailspan').innerHTML="@should be after character";
   return false;
   }
}
