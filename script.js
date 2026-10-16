
const botaoSurpresa = document.getElementById("botaoSurpresa");
const botaoVoltar = document.getElementById("botaoVoltar");

const inicio = document.getElementById("inicio");
const surpresa = document.getElementById("surpresa");

const foto = document.getElementById("foto");
const erroFoto = document.getElementById("erroFoto");
const efeitos = document.getElementById("efeitos");

function verificarFoto() {
    erroFoto.hidden = foto.naturalWidth > 0;
}

foto.addEventListener("error", verificarFoto);

botaoSurpresa.addEventListener("click", function () {
    inicio.hidden = true;
    surpresa.hidden = false;

    verificarFoto();
    criarEfeitos();
});

botaoVoltar.addEventListener("click", function () {
    surpresa.hidden = true;
    inicio.hidden = false;
    efeitos.replaceChildren();
});

function criarEfeitos() {
    efeitos.replaceChildren();

    const simbolos = ["🎃", "🦇", "✦", "🕸️", "🧡"];

    for (let i = 0; i < 20; i++) {
        const particula = document.createElement("span");

        particula.className = "particula";
        particula.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        particula.style.left = Math.random() * 95 + "%";
        particula.style.animationDelay = Math.random() * 2 + "s";
        particula.style.fontSize = 14 + Math.random() * 14 + "px";

        efeitos.appendChild(particula);
    }
}

