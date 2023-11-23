const mensagensDivertidas = 
[
    "-O que o pagodeiro foi fazer na igreja ?-Foi cantar Pá God",

     "As pessoas com trissomia 21 preferem System of a Down ou Megadeth?",

     "Porque o monitor estava louco? -Porque era um monitor lsd",

     "Você sabia que a cenoura pode te deixar cego? Basta que alguém enfie ela no teu olho.",

     "Porque a galinha foi presa? Porque ela estava vendendo pó pó pó pó",
]

let botaoDivertido = document.getElementById("botaoDivertido");
let mensagemDivertida = document.getElementById("mensagemDivertida");

botaoDivertido.addEventListener('click', function(){
    const mensagemAleatoria = mensagensDivertidas[Math.floor(Math.random() * mensagensDivertidas.lenght)]

    mensagemDivertida.textContent = mensagemAleatoria;
})