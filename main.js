//Declaré las variables necesarias para que mi programa funcione
let saldo = 0;
let continua = true;
let opcion;
let ingreso;
let retiro;
let servicios;
let pagos;
let confirmacion;
//Pido al usuario sus datos para guardarlos en el objeto usuario1
let nombre;
do {
    nombre = prompt("Ingresá tu nombre");
} while (!isNaN(nombre) || nombre == " ");
let apellido;
do {
    apellido = prompt("Ingresá tu apellido");
} while (!isNaN(apellido || apellido == " "));
let mail;
do {
    mail = prompt("Ingresá tu E-mail");
} while (!isNaN(mail || mail == " "));
let dni;
do {
    dni = prompt("Ingresá tu DNI");
} while (isNaN(dni || dni == ""));
let ciudad;
do {
    ciudad = prompt("Ingresá tu ciudad");
} while (!isNaN(ciudad || ciudad == " "));
let provincia;
do {
    provincia = prompt("Ingresá tu provincia");
} while (!isNaN(provincia || provincia == " "));

//Creo un array vacío para luego llenarlo con los usuarios creados
let contacto = [];

//Declaré la calse Usuario, para luego crear objetos "usuario"
class Usuario {
    constructor(nombre, apellido, email, dni, ciudad, provincia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.dni = dni;
        this.ciudad = ciudad;
        this.provincia = provincia;
    }
}
//Creé el objeto usuario1 con los datos pedidos al usuario del programa
const usuario1 = new Usuario(nombre, apellido, mail, dni, ciudad, provincia);

//Con el método push agregue al usuario1 al array contacto
contacto.push(usuario1);

//Creé la función "pago" para reutilizar su estructura cada vez que el usuario quiera pagar un servicio
const pago = () => {
    pagos = parseInt(prompt("Ingresá el monto a pagar"));
    if (isNaN(pagos)) {
        alert("Ingresá una opción válida");
    } else if (pagos > saldo) {
        alert("No cuenta con ese dinero en la cuenta");
        alert(`Su saldo es de: ${saldo}`);
    } else {
        saldo -= pagos;
        alert(
            `Pago realizado correctamente. \n Comprobante n° 1001 \n Su saldo es de ` +
            saldo
        );
    }
};

//Inicio el bucle de mi programa
while (continua) {
    opcion = parseInt(
        prompt(
            "INGRESE UNA OPCIÓN VÁLIDA\n 1) Ingresar dinero en la cuenta \n 2) Retirar dinero de la cuenta \n 3) Mostrar dinero en la cuenta \n 4) Pagar servicios \n 5) Contacto 6) Salir"
        )
    );
    if (opcion === 1) {
        ingreso = parseInt(prompt("Ingrese el dinero"));
        if (isNaN(ingreso)) {
            alert("Ingresá un monto válido");
        } else {
            saldo += ingreso;
            alert(`Su saldo es de ${saldo}`);
        }
    } else if (opcion === 2) {
        retiro = parseInt(prompt("¿Cuánto desea retirar?"));
        if (isNaN(retiro)) {
            alert("Ingreá un monton válido");
        } else if (retiro > saldo) {
            alert("No tenes ese dinero");
        } else {
            saldo -= retiro;
            alert(`Su saldo es de ${saldo}`);
        }
    } else if (opcion === 3) {
        alert(`Su saldo es de $ ${saldo}`);
    } else if (opcion === 4) {
        servicios = parseInt(
            prompt(
                "¿Qué servicio quieres pagar? \n 1. Agua \n 2. Luz \n 3. Gas \n 4. Internet \n 5. ABL"
            )
        );
        if (isNaN(servicios) || servicios > 5 || servicios < 1) {
            alert("Ingrese un número válido");
        } else if (servicios === 1) {
            pago();
        } else if (opcion === 2) {
            pago();
        } else if (opcion === 3) {
            pago();
        } else if (opcion === 4) {
            pago();
        } else if (opcion === 5) {
            pago();
        }
    } else if (opcion === 5) {
        alert("Confirme su información de contacto para comunicarnos con usted");

        alert(confirmacion);
    } else if (opcion === 6) {
        alert(`Gracias ${usuario1.nombre} por usar su billetera virtual`);
        continua = false;
    } else {
        alert("Opción inválida");
    }
}