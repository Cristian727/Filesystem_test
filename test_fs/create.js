const fs = require("fs")

//fs.writeFileSync("./test.txt", "hola mundo")

//fs.writeFile("./test.txt", "hola mundo")
const coche = {
    "ruedas": 4,
    "puertas": 5,
    "tipo_motor": "electrico",
    "marca": "ford",
    "modelo": "fiesta"
}
// fs.writeFile("./test.txt", "hola mundo", (error) => {
//     if (error) {
//       console.log(error)
//       return
//     }
//     console.log("Archivo creado")
//   })
const coche_json = JSON.stringify(coche, null, 2)

fs.writeFile("./coche.json", coche_json, (error) => {
    if (error) {
      console.log(error)
      return
    }
    console.log("Archivo creado")
  })