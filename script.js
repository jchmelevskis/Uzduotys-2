// ANTRA UŽDUOTIS
// Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

// Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

// Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

// Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

// Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
// Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

// Papildomai
// Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo.

var salis = [
    {salis: "Lietuva", gyvSkaicius: 2832718, plotas: 65300},
    {salis: "Vokietija", gyvSkaicius: 83240000, plotas: 357588},
    {salis: "Prancūzija", gyvSkaicius: 67390000, plotas: 543940},
    {salis: "Latvija", gyvSkaicius: 1893000, plotas: 64589},
    {salis: "Estija", gyvSkaicius: 1331796, plotas: 45228}

];

for(var x of salis){
    var salis = x.salis
    var gyvSkaicius = x.gyvSkaicius
    var plotas = x.plotas
   

    var plotasVienamGyv = plotas / gyvSkaicius * 1000000
   

    console.log("Šalis " + x.salis + " joje gyvena " + x.gyvSkaicius + " mln. gyventojų" )
    console.log("Valstybės plotas:" + x.plotas, "plotas tenkantis vienam gyventojui:" + plotasVienamGyv.toFixed(2) + " m2")
    console.log ("==============================================================================")
    
}






