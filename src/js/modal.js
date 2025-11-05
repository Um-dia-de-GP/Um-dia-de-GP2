// Função chamada quando o usuário clica em "Login"
async function abrirLogin() {
  const { value } = await Swal.fire({
    title: "Entrar",
    html:
      '<input id="swal-email" class="swal2-input" placeholder="Digite seu e-mail" type="email">' +
      '<input id="swal-pass" class="swal2-input" placeholder="Digite sua senha" type="password" maxlength="30">',
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: "Entrar",
    cancelButtonText: "Cancelar",
    preConfirm: () => {
      const email = document.getElementById("swal-email").value.trim();
      const password = document.getElementById("swal-pass").value;

      // Verifica se o e-mail e a senha estão corretos
      if (email !== "Cidadeadm@email.com" || password !== "cidadeadm") {
        Swal.showValidationMessage("E-mail ou senha incorretos!");
        return false;
      }

      // Retorna os dados se estiver tudo certo
      return { email, password };
    }
  });

  // Se o login estiver correto, mostra mensagem de sucesso
  if (value) {
    Swal.fire({
      icon: "success",
      title: "Login realizado com sucesso!",
      html: `Bem-vindo, <strong>${value.email}</strong>`,
      timer: 2500,
      showConfirmButton: false
    }); 

    // Exemplo opcional: redirecionar após login
     setTimeout(() => {
       window.location.href = "src/pages/Tarefas.html";
     }, 2500);
  }
}

