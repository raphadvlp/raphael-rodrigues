function showBtn() {
    if(window.scrollY < 46 || window.scrollY === 0) {
        document.querySelector('.arrow-top').style.display = 'none';
    } else {
        document.querySelector('.arrow-top').style.display = 'block';
    }
}

window.addEventListener('scroll', showBtn);


// Mobile menu
const menuMobile = document.querySelector('.menu-mobile');
const navbar = document.querySelector('.navbar');
const bars = document.querySelectorAll('.menu-mobile .bar');
const body = document.body;
const textAnimation = document.querySelector('.txt-animado');

menuMobile.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuMobile.classList.toggle('active');

    // Trava/destrava o scroll
    body.classList.toggle('no-scroll');

    // Alterna a visibilidade do textAnimation
    if(textAnimation) {
      textAnimation.style.display = menuMobile.classList.contains('active') ? 'none' : 'flex';
  }
    
    // // Animação dos bars (transforma em X)
    // if(menuMobile.classList.contains('active')) {
    //     bars[0].style.transform = 'translateY(8px) rotate(45deg)';
    //     bars[1].style.opacity = '0';
    //     bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    // } else {
    //     bars[0].style.transform = 'none';
    //     bars[1].style.opacity = '1';
    //     bars[2].style.transform = 'none';
    // }
});

// Fechar o menu ao clicar em um link
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuMobile.classList.remove('active');
        body.classList.remove('no-scroll');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});



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