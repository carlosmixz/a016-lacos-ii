let Num = Number(prompt("Digite um número: "));

while(isNaN(Num)) {
    Num = Number(prompt("Digite um NÚMERO: "));
}

for(let index = 1; index <= 10; index++) {
    console.log(index*Num);
}