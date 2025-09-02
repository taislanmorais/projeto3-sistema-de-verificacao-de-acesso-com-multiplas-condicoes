// seu nome e idade
let nome =  prompt("digite o seu nome").toLowerCase()
let idade = parseInt(prompt("digite o sua idade")) 

if (idade >18) {
    alert (`Olá, ${nome}! Você tem acesso completo. Boas-vindas à plataforma!.`)
}else if (nome === "admin"){
    alert (`Bem-vindo, ${admin}! Acesso total liberado`)
}else if (nome=== "moderador")
    alert (`Olá, ${moderador} ! Acesso liberado para a área de moderação.`)
    else if (nome===jovemAprendiz) 
