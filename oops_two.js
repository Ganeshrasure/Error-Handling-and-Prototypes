function Product(m,n,p){
    this.name=m;
    this.salary=n;
    this.year=p;
}
let p = new Product("Ganesh", 200000,22)
console.log(p);

let x = {
    p:Product
}
x.p ("Yogesh",150000,20)
console.log(x);






// let obj = {
//     x:10,
//     fun(){
//         console.log(this.x);
//     }
// }
// obj.fun();




let abc = {
    x:10,
    fun(){
        y={
            gan:()=>{
                console.log(this.x);
            }
        }
    }
}
abc.fun();
console.log(abc);