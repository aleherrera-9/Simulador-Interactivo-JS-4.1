const priceHoddie = 1500;
const priceTshirt = 800;
const priceCap = 600;
let hoddieQty = 0;
let tshirtQty = 0;
let capQty = 0;
let prod1 = [];
let prod2 = [];
let prod3 = [];
let price1 = 0;
let price2 = 0;
let price3 = 0;
let price = (a, b, c) => { return (a + b + c) };
class Product {
    constructor(type, price, quantity) {
        this.nombre = type;
        this.precio = parseInt(price);
        this.qty = quantity;
    }
    updateQty() {
        let newQty = parseInt(prompt("Ingresa la nueva cantidad"));
        this.qty = newQty;
    }
}

function options() {
    let menu = prompt("Bieveni@ a IBASHO, ingresa una opcion del menu:"
        + "\n 1-Comprar productos"
        + "\n 2-Ver productos agregados"
    );
    switch (menu) {
        case '1':
            addProducts();
            break;
        case '2':
            all();
            break;
        default:
            alert("la opcion ingresada no es la correcta");
    }
}
//agrega la cantidad deseada y con un for el color de los items
function add() {
    qty = parseInt(prompt("Ingrese la cantidad deseada del producto"));
    return qty;
}
//actualiza la cantidad
function newUpdate() {
    let menu = (prompt("Ingrese la opcion de producto a actualizar"
        + "\n 1-Buzos"
        + "\n 2-Remeras"
        + "\n 3-Gorras"
    ));

    switch (menu) {
        case '1':
            validate(prod1);
            if (prod1.qty > 0) {
                price1 = prod3.qty * priceHoddie;
            }
            break;
        case '2':
            validate(prod2);
            if (prod2.qty > 0) {
                price2 = prod2.qty * priceTshirt;
            }
            break;
        case '3':
            validate(prod3);
            if (prod3.qty > 0) {
                price3 = prod3.qty * priceCap;
            }
            break;
        default:
            alert('la opcion no es correcta');
            ;
    }

}
function validate(id) {
    if (id.qty > 0) {
        id.updateQty();
        all();
    }else{
        alert('este producto no tiene unidades agregadas')
    }
}
//selecciona el producto y llama a add para agregar la cantidad
function addProducts() {
    do {
        let option = prompt("Ingresa una item a agregar:"
            + "\n 1-Buzo"
            + "\n 2-Remera"
            + "\n 3-Gorra"
        );
        switch (option) {
            case '1':
                hoddieQty += add();
                prod1 = new Product("Buzo", priceHoddie, hoddieQty);
                break;
            case '2':
                tshirtQty += add();
                prod2 = new Product("Remera", priceTshirt, tshirtQty);
                break;
            case '3':
                capQty += add();
                prod3 = new Product("Gorra", priceCap, capQty);
                break;
            default:
                flag = prompt("Ingrese una opcion correcta: "
                    + "\n 1-Si"
                    + "\n 2-No"
                    + "\n 3-Actualizar la candidad"
                );
        }
        flag = prompt("desea agregar mas productos? si/no o actualizar la cantidad de productos?"
            + "\n 1-Si"
            + "\n 2-No"
            + "\n 3-Actualizar la candidad"
        );
        if (flag == 2) {
            options();
        }
        if (flag == 3) {
            all();
            newUpdate();
            
        }
    } while (flag == 1)
}
//muestra los precios disponibles
function all() {
    if (prod1.qty > 0) {
        console.log("Producto : " + prod1.nombre + "\nCantidad: " + prod1.qty);
        price1 = prod1.qty * priceHoddie;
    } else {
        price1 = 0;
    }
    if (prod2.qty > 0) {
        console.log("Producto : " + prod2.nombre + "\nCantidad: " + prod2.qty);
        price2 = prod2.qty * priceTshirt;
    } else {
        price2 = 0;
    }
    if (prod3.qty > 0) {
        console.log("Producto : " + prod3.nombre + "\nCantidad: " + prod3.qty);
        price3 = prod3.qty * priceCap;
    } else {
        price3 = 0;
    }
    let finalPrice = price(price1, price2, price3);
    if (finalPrice > 0) {
        console.log("el precio final es: " + finalPrice)
    }
}
options();





