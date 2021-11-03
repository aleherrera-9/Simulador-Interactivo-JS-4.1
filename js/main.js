const priceHoddie = 1500;
const priceTshirt = 800;
const priceCap = 600;
let hoddieQty = 0;
let tshirtQty = 0;
let capQty = 0;
function options() {
    let menu = prompt("Bieveni@ a IBASHO, ingresa una opcion del menu:"
        + "\n 1-Comprar productos"
        + "\n 2-Ver precios"
        + "\n 3-Calcular el envio"
    );
    switch (menu) {
        case '1':
            addProducts();
            break;
        case '2':
            all();
            break;
        case '3':
            shipment();
            break;
        default:
            alert("la opcion ingresada no es la correcta");
    }
}
//agrega la cantidad deseada
function add() {
    qty = parseInt(prompt("Ingrese la cantidad deseada del producto"));
    return qty;
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
                break;
            case '2':
                tshirtQty += add();
                break;
            case '3':
                capQty += add();
                break;
            default:
                alert("la opcion ingresada no es la correcta");
        }
        flag = prompt("desea agregar mas productos?"
            + "\n 1-Si"
            + "\n 2-No"
        );
        if (flag == 2) {
            let price = hoddieQty * priceHoddie + tshirtQty * priceTshirt + capQty * priceCap;
            if(price>0){alert("el precio final es: " + price)}
            let localFlag = prompt("Haga click en una opcion"
                + "\n 1-Volver al menu"
                + "\n 2-Salir"
            );
            if (localFlag == 1) {
                options();
            }
        }

    } while (flag == 1)
}
//muestra los precios disponibles
function all() {
    alert("Precios actualizados:"
        + "\n Buzo: " + priceHoddie
        + "\n Remera: " + priceTshirt
        + "\n Gorra: " + priceCap
    );
    let flag = prompt("Haga click en una opcion"
        + "\n 1-Volver al menu"
        + "\n 2-Salir"
    );
    if (flag == 1) {
        options();
    }
}
// funcion que calcula el envio segun la zona seleccionada
function shipment() {
    let location = prompt("Ingresa el punto de envio"
        + "\n 1-CABA "
        + "\n 2-Zona Oeste"
        + "\n 3-Zona Norte"
        + "\n 4-Zona Sur"
    );
    switch (location) {
        case '1':
            alert('Costo de envio : $300');
            break;
        case '2':
            alert('Costo de envio : $550');
            break;
        case '3':
            alert('Costo de envio : $600');
            break;
        case '4':
            alert('Costo de envio : $550');
            break;
        default:
            alert("la opcion ingresada no es valida");
    }
    let flag = prompt("Haga click en una opcion"
        + "\n 1-Volver al menu"
        + "\n 2-Salir"
    );
    if (flag == 1) {
        options();
    }
}

options();

