
/*function maskEmail(email){
    if(email.includes("@")){
        //break email
        const [user, domain] = email.split("@")
        //mask user
        const userMask = user[0] + "*".repeat(user.length - 1)
        //sum mask user + domain
        return userMask + "@" + domain
    }else{
        console.log('Invalid email')
    }

}
console.log(maskEmail("apple.pie@example.com"))*/
function maskEmail(email) {
  // Encontrar a posição do @
  const atIndex = email.indexOf("@");

  // Separar o nome do usuário e o domínio
  const user = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  // Criar a máscara com primeira e última letra visíveis
  if (user.length <= 2) {
    // Para nomes curtos (ex: "ab"), só mostra o primeiro
    return user[0] + "*".repeat(user.length - 1) + domain;
  }

  const maskedUser = user[0] + "*".repeat(user.length - 2) + user[user.length - 1];

  // Retorna o e-mail mascarado
  return maskedUser + domain;
}

// Declarar a variável com o e-mail
const email = "apple.pie@example.com";

// Chamar a função e mostrar o resultado
console.log(maskEmail(email)); // a*******e@example.com

// Teste extra
console.log(maskEmail("freecodecamp@example.com")); // f**********p@example.com

