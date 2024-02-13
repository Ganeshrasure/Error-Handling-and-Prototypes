class Product{
    // name;
    // price;
    // rating;

    constructor(m,n,p){
        console.log("Calling The Constructor");
        this.name=m;
        this.price=n;
        this.rating=p;
    }
    // behaviors
    display(){
        console.log("This refers to",this);
        console.log("Displaying The Current Product",this.name, this.price,this.rating);
    }
}
let p = new Product("Iphone",1000000,4);
console.log(p);
p.display();

class Product{
    constructor(N,p,r){
        this.name = "Iphone"
    }
}