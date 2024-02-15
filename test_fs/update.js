const fs = require("fs")

const miobjeto_json = fs.readFileSync("./coche.json", "utf-8")
const miobjeto = JSON.parse(miobjeto_json)

miobjeto.ruedas = 10

fs.writeFileSync("./coche.json", JSON.stringify(miobjeto, null, 2))
//fs.appendFileSync("./coche.json", JSON.stringify(miobjeto, "utf-8"))