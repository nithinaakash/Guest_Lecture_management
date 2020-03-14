function validate()
{ 
   if( document.StudentRegistration.textnames.value == "" )
   {
     alert( "Please provide your Name!" );
     document.StudentRegistration.textnames.focus() ;
     return false;
   }
 
  if ( ( StudentRegistration.sex[0].checked == false ) && ( StudentRegistration.sex[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   }   
  {if( StudentRegistration.City.value == "-1" )
   {alert( "Please provide your Department!" );
     document.StudentRegistration.City.focus() ;
     return false;
   }}
   if( document.StudentRegistration.Course.value == "-1" )
   {
     alert( "Please provide your Section!" );
    
     return false;
   }  
   if( document.StudentRegistration.Lecture.value == "-1" )
   {
     alert( "Please provide your Lecture!" );
    
     return false;
   }  
   

  
   var email = document.StudentRegistration.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.StudentRegistration.emailid.focus() ;
     return false;
 }
 
  if( document.StudentRegistration.mobileno.value == "" ||
           isNaN( document.StudentRegistration.mobileno.value) ||
           document.StudentRegistration.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.StudentRegistration.mobileno.focus() ;
     return false;
   }
   return( true );
}