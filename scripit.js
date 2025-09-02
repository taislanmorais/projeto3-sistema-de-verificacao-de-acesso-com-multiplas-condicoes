// seu nome e idade
let nome =  prompt("digite o seu nome").toLowerCase()
let idade = parseInt(prompt("digite o sua idade")) 
//verificação de usuário
if (idade >18) {
    alert (`Olá, ${nome}! Você tem acesso completo. Boas-vindas à plataforma!.`)
}else if (nome === "admin"){
    alert (`Bem-vindo, ${admin}! Acesso total liberado`)
}else if (nome=== "moderador") {
    alert (`Olá, ${moderador} ! Acesso liberado para a área de moderação.`)
}else if (idade <17) {
    alert ("Acesso negado. Você pode participar do nosso programa Jovem Aprendiz")
}else if (idade <13) {
    alert("Acesso negado. O conteúdo é exclusivo para maiores de 18 anos.")
}
