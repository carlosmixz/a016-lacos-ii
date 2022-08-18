const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for(let pais in maioresPaises) {
    console.log(`${Number(pais) + 1} - ${maioresPaises[pais]}`);
}