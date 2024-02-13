let myheros = ["ShreeRam","Hanumanjii", "Laxmanji"];
let yourheros = ["Shivaji Maharaj","Sambhaji Maharaj","Tanaji Malusare"]

let allheros = {
   ShreeRam: "Sita",
   Laxmanji:"Bharat",

   getShreeRam: function(){
   console.log('Shreeram Power in ${this.name}',this.Shreeram);
   }
}

Object.prototype.vinu=function(){
   console.log("Vinu is present in all object");
}

console.log(myheros.vinu());
console.log(allheros.vinu());



// const user = {
// name: "Ganesh",
// email:"ganeshrasure27@gmail.com"
// }

// const teacher = {
// makevideos:true
// }

// const teachingSupport = {
// teaching: false
// }

// const Assistant={
// makeAssignent:"Full Time",
// fullTyme: true,
// // __proto__:teachingSupport
// }
// // teacher.__proto__=user
// Object.setPrototypeOf(Assistant,teachingSupport)



String.prototype.uslength=function(){
console.log("The length is",this.trim().length);
}
"Ganesh"     .uslength();
"Yogesh   ".uslength();









// Revision prototypes 

