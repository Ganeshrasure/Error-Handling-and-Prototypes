class product{
    #rating;

    constructor(m,n,p){
        this.item=m;
        this.prize=n;
        this.#rating=p;
    }
    static custom(){
        console.log("This is a Static");
    }
    display(){
        console.log("This is Our Display",this.item , this.prize , this.#rating);
    }

}
let p = new product("Iphone",150000,5)
console.log(p);
p.display();


// This is static method calling 
product.custom()

p.rating =4;
console.log(p.rating);