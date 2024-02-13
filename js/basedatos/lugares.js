//------------------- OBJETOS -----------------
const haciendaSanFernando = {
  nombre: "Hacienda San Fernando",
  precio: "220",
  capacidad: "1 - 400",
  ubicacion: "Tlalpan, Ciudad de México",
};
const salonMoezllonz = {
  nombre: "Moezllonz Jardín",
  precio: "790",
  capacidad: "100-1000",
  ubicacion: "Xochimilco, Ciudad de México",
};

const salonLienzo = {
  nombre: "Lienzo Charro del Pedregal",
  precio: "1050",
  capacidad: "80 - 700",
  ubicacion: "Tlalpan, Ciudad de México",
};

const centroVeracruzanoCoyoacan = {
  nombre: "Centro Veracruzano Coyoacán",
  precio: "740",
  capacidad: "100 - 800",
  ubicacion: "Coyoacán, Ciudad de México",
};

const salonAquiahuac = {
  nombre: "Salón Aquiahuac",
  precio: "600",
  capacidad: "150 - 200",
  ubicacion: "Xinacatla, Puebla",
};

const terrazaDante = {
  nombre: "Terraza Dante",
  precio: "12500 - 32500",
  capacidad: "80",
  ubicacion: "Miguel Hidalgo, Ciudad de México",
}; //pendiente

const terrazaMedellin = {
  nombre: "Terraza Medellin",
  precio: "19500 - 22500",
  capacidad: "50",
  ubicacion: "Cuauhtemoc, Ciudad de México",
}; //pendiente

const salonLuzcina = {
  nombre: "Salón Luzcina",
  precio: "900",
  capacidad: "100 - 500",
  ubicacion: "Xinacatla, Puebla",
};

const salonXelhua = {
  nombre: "Salón Xelhua",
  precio: "750",
  capacidad: "200- 250",
  ubicacion: "Cholula, Puebla",
};

const cabañaEncandada = {
  nombre: "Cabaña Encantada",
  precio: "275",
  capacidad: "100 - 300",
  ubicacion: "Tlalpan, Ciudad de México",
};

const terrazaNapoles = {
  nombre: "Terraza Nápoles",
  precio: "27500 - 53000",
  capaciodad: "200",
  ubicacion: "Benito Juarez, Ciudad de México",
}; //pendiente

const jardinEspejo = {
  nombre: "Espejo de Agua",
  precio: "30000 - 100000",
  capacidad: "10-400",
  ubicacion: "Álvaro Obregón, Ciudad de México ",
};

const jardinLicastro = {
  nombre: "Jardín Licastro",
  precio: "42000 - 85000",
  capacidad: "10 - 300",
  ubicación: "Álvaro Obregón, ciudad de México",
}; //pendiente

const terraza1080 = {
  nombre: "Terraza 1080",
  precio: "22000 - 42000",
  capaciodad: "100",
  ubicacion: "Miguel Hidalgo, Ciudad de México",
}; //pendiente
const casaConstituyentes = {
  nombre: "Casa Constituyentes",
  precio: "80000-95000",
  capacidad: "300",
  ubicacion: "Miguel Hidalgo,Ciudad de México",
}; //pendiente

const jardinPoliforum = {
  nombre: "Jardín Poliforum",
  precio: "60000 -72000",
  capacidad: "10 - 350",
  ubicacion: "Nápoles, Ciudad de México",
}; //pendiente

const terrazaPalmas1080 = {
  nombre: "Terraza Palmas",
  precio: "22200 - 71000",
  capaciodad: "170",
  ubicacion: "Miguel Hidalgo, Ciudad de México",
}; //pendiente

const terrazaVolcan1080 = {
  nombre: "Terraza Volcan 1080",
  precio: "15500 - 62000",
  capaciodad: "170",
  ubicacion: "Miguel Hidalgo, Ciudad de México",
}; //pendiente

const jardinCoyoacan = {
  nombre: "Jardín Coyoacán",
  precio: "30000",
  capacidad: "10 - 150",
  ubicacion: "Del Valle, Ciudad de méxico",
}; //pendiente

const jardinMaja = {
  nombre: "Jardín Maja",
  precio: "32000 - 36000",
  capacidad: "200",
  ubicacion: "Fresnotitla, Tepelpan",
}; //pendiente
const terrazaPolanquito = {
  nombre: "Terraza Polanquito",
  precio: "22000 - 42000",
  capacidad: "80",
  ubicacion: "Miguel Hidalgo, Ciudad de México",
}; //pendiente
const casaLucerna32 = {
  nombre: "Casa Lucerna 32",
  precio: "65000",
  capacidad: "300",
  ubicacion: "Cuauhtémoc, Ciudad de México",
}; //pendiente
const terrazaPolanco = {
  nombre: "Terraza Polanco",
  precio: "120000 - 140000",
  capacidad: "200",
  ubicacion: "Miguel Hidalgo",
}; //pendiente


export default Salones = [
  salonLuzcina,
  salonXelhua,
  haciendaSanFernando,
  salonMoezllonz,
  salonAquiahuac,
  salonLienzo,
  terrazaDante,
  terraza1080,
  terrazaMedellin,
  terrazaNapoles,
  terrazaPalmas1080,
  terrazaPolanco,
  terrazaPolanquito,
  terrazaVolcan1080,
  cabañaEncandada,
  casaConstituyentes,
  casaLucerna32,
  centroVeracruzanoCoyoacan,
];
// console.log(listaDeSalones.sort);

//---------- CICLO FOR-OF -----------------
//Se itera cada objeto del array 'Salones' mediante la variable 'salon' para para mostrarlos en forma de tabla

for (const salon of Salones) {
  console.table(salon);
}
