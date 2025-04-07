function showBtn() {
    if(window.scrollY < 46 || window.scrollY === 0) {
        document.querySelector('.arrow-top').style.display = 'none';
    } else {
        document.querySelector('.arrow-top').style.display = 'block';
    }
}

window.addEventListener('scroll', showBtn);


// Mobile menu
// .menu-mobile:hover .bar:nth-child(1) {
//     transform: rotate(45deg) translate(5px, 5px);
// }
// .menu-mobile:hover .bar:nth-child(2) {
//     opacity: 0;
// }
// .menu-mobile:hover .bar:nth-child(3) {
//     transform: rotate(-45deg) translate(5px, -5px);
// }



// ENVIO DO FORMULÁRIO PARA O DISCORD
const webhookURL = "https://discord.com/api/webhooks/1358885784295313659/MyEXZHy7eRpSYI7XPrOxSX7QMo9eBEB2R3XKq4UgTJudil5B_R-qry-_dyh09Okzf1Gn";

    document.getElementById('discordForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;

       // Monta a mensagem a ser enviada ao Discord
       const conteudo = `📩 **Novo Contato Recebido:**\n\n**Nome:** ${name}\n**Email:** ${email}\n**Mensagem:**\n${mensagem}`;

      //  function showToast(message, type = 'success') {
      //   const toast = document.getElementById('toast');
      //   toast.textContent = message;
      //   toast.className = `show ${type}`;
        
      //   setTimeout(() => {
      //     toast.className = toast.className.replace("show", "");
      //   }, 3000); // dura 3 segundos
      // }

      fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: conteudo
        })
      }).then(res => {
        if (res.ok) {
          alert("Mensagem enviada com sucesso!");
          // showToast("Mensagem enviada com sucesso!", "success");
          document.getElementById('discordForm').reset();
        } else {
          alert("Erro ao enviar mensagem.");
          // showToast("Erro ao enviar mensagem.", "error");
        }
      }).catch(err => {
        console.error(err);
        alert("Erro na requisição.");
        // showToast("Erro na requisição.", "error");
      });
    });