// const save = document.getElementById("save");
// save.addEventListener ("click",()=> {
//      console.log("Hello ");
//      window.confirm("double click");
// });
//      save.addEventListener ("dblclick",()=> {
//           console.log("Hello ");
//          window.confirm("double click");
// });

const form = document.getElementById("form");
form.addEventListener("submit", (event)=>{
     event.preventDefault();
     // console.log("Hello ");
     // window.confirm("form submited");
     // let text = form.uname.value;
     // alert(text);
     // let password = form.pwd.value;
     // alert(password);
     // form.reset(); 
     let text = form.uname.value;
     let password = form.pwd.value; 
     if (text == "")  {
          
        alert("please fill the form")  ;
     }
     if (password == "")  {
          
          alert("please fill the password")  ;
       }

});



