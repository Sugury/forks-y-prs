import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {

    this.products.push(newProduct);
  }
 // ...newProduct:Product[] = es un parametro rest, permite a addProducts aceptar un numero ilimitado de argumentos guardandolos en un array(en este caso de tipo Product)
 //> Se evita usar un array [ ] en la llamada a la funcion para ingresarle varios parametros a la funcion
  addProducts(...newProduct:Product[]) {
    // esto no funciona:
    this.products.push(...newProduct);
    // pista: push no suma muchos items (agrega de a uno)
  }
  
}

export { User, Product };
/*
function main () {
  const nuevoUsuario = new User ("Pedro");
  const celular = new Product("Nokia 1100",2000);
  const notebook = new Product ("Notebook ASUS",700000);
  const osoPeluche = new Product ("Oso peluche blanco",8000);
 // nuevoUsuario.addProduct(nuevoProducto);
 // nuevoUsuario.addProducts(celular,notebook,osoPeluche);

  //console.log(nuevoUsuario);
}
main();
*/
