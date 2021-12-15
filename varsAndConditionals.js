/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let johnSnowHealth = 100;
let johnSnowDefense = 25;

let jamieLannisterAttack = 35;



if (jonSnowAttack > jamieLannisterAttack) {
    console.log('john has a better attack than jamie')
} else if (jonSnowAttack < jamieLannisterAttack){
    console.log ('jamie has a better attack than john')
} else if (jonSnowAttack === jamieLannisterAttack){
    console.log('jamie and john have the same attack')
}

if(johnSnowHealth <= jamieLannisterAttack){
    console.log('john snow has been killed')
} else {
    johnSnowHealth -= jamieLannisterAttack - johnSnowDefense
    console.log(` John Snow Health: ${johnSnowHealth}`)
}


if ((johnSnowHealth + 50) > 100){
    johnSnowHealth = 100;
} else {
    johnSnowHealth += 50;
}

while (johnSnowHealth > 0){
    johnSnowHealth -= jamieLannisterAttack - johnSnowDefense
    console.log(`Johns Health is ${johnSnowHealth}`)

    if (johnSnowHealth <= 0){
        console.log('john has been slain')
    }

}


for(let i = 0; i < 5;i++){
   if (johnSnowHealth <= 0){
       console.log('john was slain')
   } else {
       johnSnowHealth -= jamieLannisterAttack - johnSnowDefense
       console.log(`john snow's health is: ${johnSnowHealth}`)
   }
}