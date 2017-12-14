function checkPal(str){
 let pal; //declare a local variable pal
 let strLength = Math.floor(str.length / 2);
 for(var i = 0;i<strLength;i++){
   if(str.charAt(i)==str.charAt(str.length - i - 1)){// if the first letter of the string is the same as the last letter of the string
     pal = true;
   }else{
     pal = false;
   }
 }
 console.log(pal)
}

checkPal("radar")


function checkPal2(str) {
   console.log( str == str.split('').reverse().join('') );
}

checkPal2("leonnoel")
