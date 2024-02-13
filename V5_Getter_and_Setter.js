// class product{
//     #rating;

//     constructor(m,n,p){
//         this.item=m;
//         this.prize=n;
//         this.#rating=p;
//     }
//     static custom(){
//         console.log("This is a Static");
//     }


//     get getRating(){
//         console.log(this.#rating);
//     }
//     set setRating(r){
//         if(r<0) return;
//         this.#rating = r;
//     }
//     display(){
//         console.log("This is Our Display",this.item , this.prize , this.#rating);
//     }

// }
// let p = new product("Iphone",150000,5)
// p.getRating = 10;
// p.setRating =10;
// console.log(p);
// p.display();





class complexNumber {
    #real;
    #imaginary;
    constructor(r,i){
        this.#real= r;
        this.#imaginary = i;
    }
    display(){
        console.log(this.#real ," + i", this.#imaginary);
    }

    get real(){
        return this.#real;
    }

    get imaginary(){
        return this.#imaginary;
    }
    addComplexNumber(c){
        this.#real += c.real;
        this.#imaginary += c.imaginary;
    }
}

let itsme= new complexNumber (2,3);
itsme.display();
const itsme2 = new complexNumber(4,5);
itsme.addComplexNumber(itsme2);
itsme.display()




let ganesh = ["Ganesh","Amol","Yogesh"]
let result = ganesh.filter(el => el.length < 5)
console.log(result);