// let score= 4;
// function one(){
//     let score=0
//     console.log(score);
// }

// function two(){
//     let score=2
//         console.log(score);
    
// }

// function three(){
//     console.log(score);
// }
// one();

// two();

// three();
// console.log(score);




// function Outerfunction(){
//     let outerwa = "I am scope  level of 1"
//     function innerfunction(){
//         let innerwal="I am at scope 2"
//         console.log(outerwa);
      
//     }
//     console.log(innerwal);
//     innerfunction()
// }

// Outerfunction();


// let myGlobalValue = 0
// function func(){
//     const val1 = 1
//     console.log(myGlobalValue);


//         function outerfunction(){
//             const val2 = 2
//             console.log(val1,val2, myGlobalValue);
        
//                 function innerfunction(){
//                 const val3 = 3;
//                  console.log(val1 , val2, val3, myGlobalValue);
//                          function innerofinnerfunction(){
//                             const val4=4
//                                 console.log(val1, val2, val3,val4, myGlobalValue);
//                                          }
//                                          innerofinnerfunction()
//                                     }
//                                     innerfunction() 
//                              }
//                              outerfunction()
//                 }

//     func();



// closer 

function superFunction(){
        let outervalu = "I am Outer"
        function minerfunction(){
            console.log(outervalu);
        }
        minerfunction();
}
superFunction();